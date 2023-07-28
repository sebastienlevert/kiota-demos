import {CreativeWork} from './creativeWork';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface Article extends CreativeWork, Parsable {
    /**
     * The number of words in the text of the Article.
     */
    wordCount?: number | undefined;
}
