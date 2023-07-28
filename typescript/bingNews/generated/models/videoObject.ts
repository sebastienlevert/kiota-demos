import {ImageObject} from './imageObject';
import {MediaObject} from './mediaObject';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface VideoObject extends MediaObject, Parsable {
    /**
     * The allowHttpsEmbed property
     */
    allowHttpsEmbed?: boolean | undefined;
    /**
     * The allowMobileEmbed property
     */
    allowMobileEmbed?: boolean | undefined;
    /**
     * The embedHtml property
     */
    embedHtml?: string | undefined;
    /**
     * The isSuperfresh property
     */
    isSuperfresh?: boolean | undefined;
    /**
     * The motionThumbnailId property
     */
    motionThumbnailId?: string | undefined;
    /**
     * The motionThumbnailUrl property
     */
    motionThumbnailUrl?: string | undefined;
    /**
     * Defines an image
     */
    thumbnail?: ImageObject | undefined;
    /**
     * The videoId property
     */
    videoId?: string | undefined;
    /**
     * The viewCount property
     */
    viewCount?: number | undefined;
}
