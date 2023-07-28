import {CriticsRequestBuilder} from './critics/criticsRequestBuilder';
import {ReviewsRequestBuilder} from './reviews/reviewsRequestBuilder';
import {BaseRequestBuilder, enableBackingStoreForSerializationWriterFactory, ParseNodeFactoryRegistry, registerDefaultDeserializer, registerDefaultSerializer, RequestAdapter, SerializationWriterFactoryRegistry} from '@microsoft/kiota-abstractions';
import {FormParseNodeFactory, FormSerializationWriterFactory} from '@microsoft/kiota-serialization-form';
import {JsonParseNodeFactory, JsonSerializationWriterFactory} from '@microsoft/kiota-serialization-json';
import {TextParseNodeFactory, TextSerializationWriterFactory} from '@microsoft/kiota-serialization-text';

/**
 * The main entry point of the SDK, exposes the configuration and the fluent API.
 */
export class NytMovieClient extends BaseRequestBuilder {
    /**
     * The critics property
     */
    public get critics(): CriticsRequestBuilder {
        return new CriticsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * The reviews property
     */
    public get reviews(): ReviewsRequestBuilder {
        return new ReviewsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Instantiates a new NytMovieClient and sets the default values.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(requestAdapter: RequestAdapter) {
        super({}, requestAdapter, "{+baseurl}");
        registerDefaultSerializer(JsonSerializationWriterFactory);
        registerDefaultSerializer(TextSerializationWriterFactory);
        registerDefaultSerializer(FormSerializationWriterFactory);
        registerDefaultDeserializer(JsonParseNodeFactory);
        registerDefaultDeserializer(TextParseNodeFactory);
        registerDefaultDeserializer(FormParseNodeFactory);
        if (requestAdapter.baseUrl === undefined || requestAdapter.baseUrl === "") {
            requestAdapter.baseUrl = "https://api.nytimes.com/svc/movies/v2";
        }
        this.pathParameters["baseurl"] = requestAdapter.baseUrl;
    };
}
