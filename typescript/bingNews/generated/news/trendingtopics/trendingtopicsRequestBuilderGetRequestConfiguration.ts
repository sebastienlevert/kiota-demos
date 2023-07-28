import {TrendingtopicsRequestBuilderGetQueryParameters} from './trendingtopicsRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface TrendingtopicsRequestBuilderGetRequestConfiguration {
    /**
     * Request headers
     */
    headers?: Record<string, string[]> | undefined;
    /**
     * Request options
     */
    options?: RequestOption[] | undefined;
    /**
     * Request query parameters
     */
    queryParameters?: TrendingtopicsRequestBuilderGetQueryParameters | undefined;
}
