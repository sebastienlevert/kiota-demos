import {ImageObject} from './imageObject';
import {Response} from './response';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface Thing extends Parsable, Response {
    /**
     * An alias for the item
     */
    alternateName?: string | undefined;
    /**
     * An ID that uniquely identifies this item.
     */
    bingId?: string | undefined;
    /**
     * A short description of the item.
     */
    description?: string | undefined;
    /**
     * Defines an image
     */
    image?: ImageObject | undefined;
    /**
     * The name of the thing represented by this object.
     */
    name?: string | undefined;
    /**
     * The URL to get more information about the thing represented by this object.
     */
    url?: string | undefined;
}
