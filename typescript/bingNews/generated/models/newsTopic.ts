import {Query} from './query';
import {Thing} from './thing';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface NewsTopic extends Parsable, Thing {
    /**
     * A Boolean value that indicates whether the topic is considered breaking news. If the topic is considered breaking news, the value is true.
     */
    isBreakingNews?: boolean | undefined;
    /**
     * The URL to the Bing News search results for the search query term
     */
    newsSearchUrl?: string | undefined;
    /**
     * Defines a search query.
     */
    query?: Query | undefined;
}
