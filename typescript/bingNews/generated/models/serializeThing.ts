import {ImageObject} from './imageObject';
import {serializeImageObject} from './serializeImageObject';
import {serializeResponse} from './serializeResponse';
import {Thing} from './thing';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeThing(writer: SerializationWriter, thing: Thing | undefined = {} as Thing) : void {
        serializeResponse(writer, thing)
        writer.writeObjectValue<ImageObject>("image", thing.image, serializeImageObject);
}
