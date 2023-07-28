import {
  ApiKeyAuthenticationProvider,
  ApiKeyLocation,
} from "@microsoft/kiota-abstractions";
import { FetchRequestAdapter } from "@microsoft/kiota-http-fetchlibrary";
import { NytMovieClient } from "./generated/nytMovieClient";

require("dotenv").config();

// Create authentication provider using the API Key implementation
const authProvider = new ApiKeyAuthenticationProvider(
  process.env.API_KEY || "",
  "api-key",
  ApiKeyLocation.QueryParameter
);
// Create request adapter using the fetch-based implementation
const adapter = new FetchRequestAdapter(authProvider);
// Create the API client
const client = new NytMovieClient(adapter);

async function main(): Promise<void> {
  try {
    const results = await client.reviews.search.get({
      queryParameters: {
        query: "star wars",
      },
    });

    console.log(results);
  } catch (err) {
    console.error(err);
  }
}

main();
