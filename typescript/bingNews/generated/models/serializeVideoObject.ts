import {ImageObject} from './imageObject';
import {serializeImageObject} from './serializeImageObject';
import {serializeMediaObject} from './serializeMediaObject';
import {VideoObject} from './videoObject';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeVideoObject(writer: SerializationWriter, videoObject: VideoObject | undefined = {} as VideoObject) : void {
        serializeMediaObject(writer, videoObject)
        writer.writeObjectValue<ImageObject>("thumbnail", videoObject.thumbnail, serializeImageObject);
}
