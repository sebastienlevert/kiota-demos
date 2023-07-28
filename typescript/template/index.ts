import { AnonymousAuthenticationProvider } from "@microsoft/kiota-abstractions";
import { FetchRequestAdapter } from "@microsoft/kiota-http-fetchlibrary";

// Create authentication provider using the anonymous provider
const authProvider = new AnonymousAuthenticationProvider();
// Create request adapter using the fetch-based implementation
const adapter = new FetchRequestAdapter(authProvider);
// Create the API client
const client = new ...(adapter);

// TODO: add code here
async function main(): Promise<void> {
    try {

    } catch (err) {
      console.error(err)
    }
  }

  main();
