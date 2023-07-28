import {ImageObject} from './imageObject';
import {serializeMediaObject} from './serializeMediaObject';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeImageObject(writer: SerializationWriter, imageObject: ImageObject | undefined = {} as ImageObject) : void {
        serializeMediaObject(writer, imageObject)
        writer.writeObjectValue<ImageObject>("thumbnail", imageObject.thumbnail, serializeImageObject);
}
