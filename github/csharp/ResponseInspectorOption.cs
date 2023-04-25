using System;
using System.Net.Http;
using System.Net.Http.Headers;
using Microsoft.Kiota.Abstractions;

namespace GitHubDemo
{
    /// <summary>
    /// The Response handler option class
    /// </summary>
    public class ResponseInspectorOption : IRequestOption
    {
        // This would support also the body based on a configuration on the option
        // The Inspector would reset the Stream to 0 ensure the body is available later in the pipeline
        public Dictionary<string, string[]> Headers { get; set; } = new();
        public string[] HeadersToInspect { get; set; } = Array.Empty<string>();
        public Boolean InspectHeaders { get; set; }
        /// <summary>
        /// A delegate that's called to inspect the response.
        /// </summary>
        public void ResponseInspectorHandler(HttpResponseHeaders headers)
        {
            if (this.HeadersToInspect.Count() > 0)
            {
                foreach (var header in HeadersToInspect)
                {
                    if (headers.TryGetValues(header, out var values))
                    {
                        this.Headers.Add(header, values.ToArray());
                    }
                }
            }
        }
    }
}