import {Movie_link} from './movie_link';
import {Movie_multimedia} from './movie_multimedia';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface Movie extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * The byline property
     */
    byline?: string | undefined;
    /**
     * The critics_pick property
     */
    critics_pick?: number | undefined;
    /**
     * The date_updated property
     */
    date_updated?: string | undefined;
    /**
     * The display_title property
     */
    display_title?: string | undefined;
    /**
     * The headline property
     */
    headline?: string | undefined;
    /**
     * The link property
     */
    link?: Movie_link | undefined;
    /**
     * The mpaa_rating property
     */
    mpaa_rating?: string | undefined;
    /**
     * The multimedia property
     */
    multimedia?: Movie_multimedia | undefined;
    /**
     * The opening_date property
     */
    opening_date?: string | undefined;
    /**
     * The publication_date property
     */
    publication_date?: string | undefined;
    /**
     * The summary_short property
     */
    summary_short?: string | undefined;
}
