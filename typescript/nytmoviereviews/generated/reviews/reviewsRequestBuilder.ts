import {ResourceTypeItemRequestBuilder} from './item/resourceTypeItemRequestBuilder';
import {SearchRequestBuilder} from './search/searchRequestBuilder';
import {BaseRequestBuilder, getPathParameters, RequestAdapter} from '@microsoft/kiota-abstractions';

/**
 * Builds and executes requests for operations under /reviews
 */
export class ReviewsRequestBuilder extends BaseRequestBuilder {
    /**
     * The search property
     */
    public get search(): SearchRequestBuilder {
        return new SearchRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Gets an item from the Nyt.reviews.item collection
     * @param resourceTypeJson Unique identifier of the item
     * @returns a ResourceTypeItemRequestBuilder
     */
    public byResourceTypeJson(resourceTypeJson: string) : ResourceTypeItemRequestBuilder {
        if(!resourceTypeJson) throw new Error("resourceTypeJson cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["resource%2Dtype"] = resourceTypeJson
        return new ResourceTypeItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new ReviewsRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/reviews");
    };
}
