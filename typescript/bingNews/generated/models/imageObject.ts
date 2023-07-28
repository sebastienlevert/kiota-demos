import {MediaObject} from './mediaObject';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface ImageObject extends MediaObject, Parsable {
    /**
     * Defines an image
     */
    thumbnail?: ImageObject | undefined;
}
