import {ImageObject} from './imageObject';
import {Query} from './query';
import {serializeImageObject} from './serializeImageObject';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeQuery(writer: SerializationWriter, query: Query | undefined = {} as Query) : void {
        writer.writeStringValue("text", query.text);
        writer.writeObjectValue<ImageObject>("thumbnail", query.thumbnail, serializeImageObject);
        writer.writeAdditionalData(query.additionalData);
}
