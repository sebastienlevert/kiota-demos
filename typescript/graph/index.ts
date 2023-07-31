import { DeviceCodeCredential } from "@azure/identity";
import { AzureIdentityAuthenticationProvider } from "@microsoft/kiota-authentication-azure";
import { FetchRequestAdapter } from "@microsoft/kiota-http-fetchlibrary";
import { MicrosoftGraphClient } from "./generated/microsoftGraphClient";

require("dotenv").config();

// Client ID of the Azure AD app registration
const clientId = process.env.CLIENT_ID || "";

// The auth provider will only authorize requests to
// the allowed hosts, in this case Microsoft Graph
const allowedHosts = new Set<string>(["graph.microsoft.com"]);
const graphScopes = ["User.Read"];

const credential = new DeviceCodeCredential({
  clientId: clientId,
  userPromptCallback: (deviceCodeInfo) => {
    console.log(deviceCodeInfo.message);
  },
});

const authProvider = new AzureIdentityAuthenticationProvider(
  credential,
  graphScopes,
  undefined,
  allowedHosts
);
const adapter = new FetchRequestAdapter(authProvider);
adapter.baseUrl = "https://graph.microsoft.com/beta";
// Create the API client
const client = new MicrosoftGraphClient(adapter);

// TODO: add code here
async function main(): Promise<void> {
  try {
    const me = await client.me.get({
      queryParameters: {
        select: ["displayName", "id"],
      },
    });

    console.log(me);
  } catch (err) {
    console.error(err);
  }
}

main();
