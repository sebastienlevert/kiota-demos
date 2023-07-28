import {Thing} from './thing';
import {VideoObject} from './videoObject';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface CreativeWork extends Parsable, Thing {
    /**
     * The date on which the CreativeWork was published.
     */
    datePublished?: string | undefined;
    /**
     * The source of the creative work.
     */
    provider?: Thing[] | undefined;
    /**
     * The URL to a thumbnail of the item.
     */
    thumbnailUrl?: string | undefined;
    /**
     * Defines a video object that is relevant to the query.
     */
    video?: VideoObject | undefined;
}
