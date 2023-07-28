import {News} from '../models/';
import {createNewsFromDiscriminatorValue} from '../models/createNewsFromDiscriminatorValue';
import {NewsRequestBuilderGetRequestConfiguration} from './newsRequestBuilderGetRequestConfiguration';
import {SearchRequestBuilder} from './search/searchRequestBuilder';
import {TrendingtopicsRequestBuilder} from './trendingtopics/trendingtopicsRequestBuilder';
import {BaseRequestBuilder, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption} from '@microsoft/kiota-abstractions';

/**
 * Builds and executes requests for operations under /news
 */
export class NewsRequestBuilder extends BaseRequestBuilder {
    /**
     * The search property
     */
    public get search(): SearchRequestBuilder {
        return new SearchRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * The trendingtopics property
     */
    public get trendingtopics(): TrendingtopicsRequestBuilder {
        return new TrendingtopicsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Instantiates a new NewsRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/news{?cc*,category*,count*,headlineCount*,mkt*,offset*,originalImg*,safeSearch*,setLang*,textDecorations*,textFormat*}");
    };
    /**
     * The News Category API lets you search on Bing and get back a list of top news articles by category. This section provides technical details about the query parameters and headers that you use to request news and the JSON response objects that contain them.  For examples that show how to make requests, see [Searching the web for news](https://docs.microsoft.com/en-us/azure/cognitive-services/bing-news-search/search-the-web).
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of News
     */
    public get(requestConfiguration?: NewsRequestBuilderGetRequestConfiguration | undefined) : Promise<News | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        return this.requestAdapter.sendAsync<News>(requestInfo, createNewsFromDiscriminatorValue, undefined);
    };
    /**
     * The News Category API lets you search on Bing and get back a list of top news articles by category. This section provides technical details about the query parameters and headers that you use to request news and the JSON response objects that contain them.  For examples that show how to make requests, see [Searching the web for news](https://docs.microsoft.com/en-us/azure/cognitive-services/bing-news-search/search-the-web).
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: NewsRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
