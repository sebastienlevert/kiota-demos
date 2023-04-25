using System.Text.RegularExpressions;
using GitHubDemo;
using GitHubDemo.GitHub;
using Microsoft.Kiota.Abstractions;
using Microsoft.Kiota.Abstractions.Authentication;
using Microsoft.Kiota.Http.HttpClientLibrary;

internal class Program
{
    private static async Task Main(string[] args)
    {
        // Set up the client and the request adapter and injects the response inspector handler
        var authProvider = new AnonymousAuthenticationProvider();
        var handlers = KiotaClientFactory.CreateDefaultHandlers();
        handlers.Add(new ResponseInspectorHandler());

        var firstHandler = KiotaClientFactory.ChainHandlersCollectionAndGetFirstLink(KiotaClientFactory.GetDefaultHttpMessageHandler(), handlers.ToArray());

        if (firstHandler == null)
            throw new InvalidOperationException("No handlers were provided.");

        var httpClient = new HttpClient(firstHandler);
        var requestAdapter = new HttpClientRequestAdapter(authProvider, httpClient: httpClient);
        var client = new GitHubClient(requestAdapter);

        // Use the request builder pattern to get repos from the API
        var repos = await GetData(client, 1, true, new ResponseInspectorOption
        {
            HeadersToInspect = new[] { "Link" }
        });

        if (repos != null)
        {
            foreach (var repo in repos)
            {
                Console.WriteLine($"Repo {repo?.Name} is available at {repo?.HtmlUrl}");
            }
        }
        else
        {
            await Console.Error.WriteLineAsync("No repos found. Exiting.");
            return;
        }
    }

    static async Task<List<GitHubDemo.GitHub.Models.MinimalRepository>?> GetData(GitHubClient client, int page, bool allPages, ResponseInspectorOption responseInspectorOptions)
    {
        try
        {
            var repos = await client.Orgs["microsoftgraph"].Repos.GetAsync(
                request =>
                {
                    request.QueryParameters = new()
                    {
                        Page = page,
                        Per_page = 50,
                        Direction = "asc",
                        Sort = "full_name",
                    };
                    request.Options.Add(responseInspectorOptions);
                });

            if (repos != null)
            {
                if (allPages)
                {

                    var nextPage = GetNextPage(responseInspectorOptions.Headers["Link"][0]);
                    var lastPage = GetLastPage(responseInspectorOptions.Headers["Link"][0]);

                    if (nextPage < lastPage)
                    {
                        var nextPageRepos = await GetData(client, nextPage, allPages, new ResponseInspectorOption
                        {
                            HeadersToInspect = new[] { "Link" }
                        });

                        if (nextPageRepos != null)
                        {
                            repos.AddRange(nextPageRepos);
                        }
                    }
                }

                return repos;
            }
            else
            {
                return null;
            }
        }
        catch (ApiException ex)
        {
            Console.WriteLine(ex.Message);
        }

        return null;
    }

    static int GetNextPage(string link)
    {
        return GetPage(link, @"(?<=<)([\S]*)(?=>; rel=""next"")");
    }

    static int GetLastPage(string link)
    {
        return GetPage(link, @"(?<=<)([\S]*)(?=>; rel=""last"")");
    }

    static int GetPage(string link, string pattern)
    {
        var page = 0;
        if (!string.IsNullOrEmpty(link))
        {
            var match = Regex.Match(link, pattern);
            if (match.Success)
            {
                var url = match.Groups[0].Value;
                var urlParts = url.Split("?");
                var queryParams = urlParts[1].Split("&");
                var pageParam = queryParams.FirstOrDefault(p => p.StartsWith("page="));
                if (pageParam != null)
                {
                    page = int.Parse(pageParam.Split("=")[1]);
                }
            }
        }

        return page;
    }
}