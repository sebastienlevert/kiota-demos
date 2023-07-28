import {CreativeWork} from './creativeWork';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface MediaObject extends CreativeWork, Parsable {
    /**
     * Original URL to retrieve the source (file) for the media object (e.g the source URL for the image).
     */
    contentUrl?: string | undefined;
    /**
     * The height of the source media object, in pixels.
     */
    height?: number | undefined;
    /**
     * The width of the source media object, in pixels.
     */
    width?: number | undefined;
}
