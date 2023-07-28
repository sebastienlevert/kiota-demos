import {MediaObject} from './mediaObject';
import {serializeCreativeWork} from './serializeCreativeWork';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeMediaObject(writer: SerializationWriter, mediaObject: MediaObject | undefined = {} as MediaObject) : void {
        serializeCreativeWork(writer, mediaObject)
}
