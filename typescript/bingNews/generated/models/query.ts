import {ImageObject} from './imageObject';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface Query extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * The display version of the query term. This version of the query term may contain special characters that highlight the search term found in the query string. The string contains the highlighting characters only if the query enabled hit highlighting
     */
    displayText?: string | undefined;
    /**
     * The URL that you use to get the results of the related search. Before using the URL, you must append query parameters as appropriate and include the Ocp-Apim-Subscription-Key header. Use this URL if you're displaying the results in your own user interface. Otherwise, use the webSearchUrl URL.
     */
    searchLink?: string | undefined;
    /**
     * The query string. Use this string as the query term in a new search request.
     */
    text?: string | undefined;
    /**
     * Defines an image
     */
    thumbnail?: ImageObject | undefined;
    /**
     * The URL that takes the user to the Bing search results page for the query.Only related search results include this field.
     */
    webSearchUrl?: string | undefined;
}
