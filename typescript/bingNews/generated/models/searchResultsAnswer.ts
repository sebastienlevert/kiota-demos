import {Answer} from './answer';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface SearchResultsAnswer extends Answer, Parsable {
    /**
     * The estimated number of webpages that are relevant to the query. Use this number along with the count and offset query parameters to page the results.
     */
    totalEstimatedMatches?: number | undefined;
}
