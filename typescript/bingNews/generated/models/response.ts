import {Identifiable} from './identifiable';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface Response extends Identifiable, Parsable {
    /**
     * The URL To Bing's search result for this item.
     */
    webSearchUrl?: string | undefined;
}
