import {
  ApiKeyAuthenticationProvider,
  ApiKeyLocation,
  DefaultApiError,
} from "@microsoft/kiota-abstractions";
import { FetchRequestAdapter } from "@microsoft/kiota-http-fetchlibrary";
import { BingNewsClient } from "./generated/bingNewsClient";

require("dotenv").config();

// Create authentication provider using the API Key implementation
const authProvider = new ApiKeyAuthenticationProvider(
  process.env.API_KEY || "",
  "Ocp-Apim-Subscription-Key",
  ApiKeyLocation.Header
);
// Create request adapter using the fetch-based implementation
const adapter = new FetchRequestAdapter(authProvider);
// Create the API client
const client = new BingNewsClient(adapter);

adapter.baseUrl = "https://api.bing.microsoft.com/v7.0";

// TODO: add code here
async function main(): Promise<void> {
  try {
    const results = await client.news.get({
      queryParameters: {
        cc: "ca",
      },
    });
    console.log(results);
  } catch (err) {
    if (err instanceof DefaultApiError) {
      console.error(err);
    }
    console.error(err);
  }
}

main();
