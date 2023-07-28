import {NewsArticle} from './newsArticle';
import {SearchResultsAnswer} from './searchResultsAnswer';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface News extends Parsable, SearchResultsAnswer {
    /**
     * Location of local news
     */
    location?: string | undefined;
    /**
     * An array of NewsArticle objects that contain information about news articles that are relevant to the query. If there are no results to return for the request, the array is empty.
     */
    value?: NewsArticle[] | undefined;
}
