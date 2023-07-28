import {createImageObjectFromDiscriminatorValue} from './createImageObjectFromDiscriminatorValue';
import {deserializeIntoMediaObject} from './deserializeIntoMediaObject';
import {ImageObject} from './imageObject';
import {serializeImageObject} from './serializeImageObject';
import {VideoObject} from './videoObject';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoVideoObject(videoObject: VideoObject | undefined = {} as VideoObject) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoMediaObject(videoObject),
        "allowHttpsEmbed": n => { videoObject.allowHttpsEmbed = n.getBooleanValue(); },
        "allowMobileEmbed": n => { videoObject.allowMobileEmbed = n.getBooleanValue(); },
        "embedHtml": n => { videoObject.embedHtml = n.getStringValue(); },
        "isSuperfresh": n => { videoObject.isSuperfresh = n.getBooleanValue(); },
        "motionThumbnailId": n => { videoObject.motionThumbnailId = n.getStringValue(); },
        "motionThumbnailUrl": n => { videoObject.motionThumbnailUrl = n.getStringValue(); },
        "thumbnail": n => { videoObject.thumbnail = n.getObjectValue<ImageObject>(createImageObjectFromDiscriminatorValue); },
        "videoId": n => { videoObject.videoId = n.getStringValue(); },
        "viewCount": n => { videoObject.viewCount = n.getNumberValue(); },
    }
}
