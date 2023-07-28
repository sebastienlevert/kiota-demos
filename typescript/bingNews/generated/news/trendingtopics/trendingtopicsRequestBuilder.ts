import {TrendingTopics} from '../../models/';
import {createTrendingTopicsFromDiscriminatorValue} from '../../models/createTrendingTopicsFromDiscriminatorValue';
import {TrendingtopicsRequestBuilderGetRequestConfiguration} from './trendingtopicsRequestBuilderGetRequestConfiguration';
import {BaseRequestBuilder, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption} from '@microsoft/kiota-abstractions';

/**
 * Builds and executes requests for operations under /news/trendingtopics
 */
export class TrendingtopicsRequestBuilder extends BaseRequestBuilder {
    /**
     * Instantiates a new TrendingtopicsRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/news/trendingtopics{?cc*,count*,mkt*,offset*,safeSearch*,setLang*,since*,sortBy*,textDecorations*,textFormat*}");
    };
    /**
     * The News Trending Topics API lets you search on Bing and get back a list of trending news topics that are currently trending on Bing. This section provides technical details about the query parameters and headers that you use to request news and the JSON response objects that contain them.  For examples that show how to make requests, see [Searching the web for news](https://docs.microsoft.com/en-us/azure/cognitive-services/bing-news-search/search-the-web).
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of TrendingTopics
     */
    public get(requestConfiguration?: TrendingtopicsRequestBuilderGetRequestConfiguration | undefined) : Promise<TrendingTopics | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        return this.requestAdapter.sendAsync<TrendingTopics>(requestInfo, createTrendingTopicsFromDiscriminatorValue, undefined);
    };
    /**
     * The News Trending Topics API lets you search on Bing and get back a list of trending news topics that are currently trending on Bing. This section provides technical details about the query parameters and headers that you use to request news and the JSON response objects that contain them.  For examples that show how to make requests, see [Searching the web for news](https://docs.microsoft.com/en-us/azure/cognitive-services/bing-news-search/search-the-web).
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: TrendingtopicsRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
        const requestInfo = new RequestInformation();
        requestInfo.urlTemplate = this.urlTemplate;
        requestInfo.pathParameters = this.pathParameters;
        requestInfo.httpMethod = HttpMethod.GET;
        requestInfo.headers["Accept"] = ["application/json"];
        if (requestConfiguration) {
            requestInfo.addRequestHeaders(requestConfiguration.headers);
            requestInfo.setQueryStringParametersFromRawObject(requestConfiguration.queryParameters);
            requestInfo.addRequestOptions(requestConfiguration.options);
        }
        return requestInfo;
    };
}
