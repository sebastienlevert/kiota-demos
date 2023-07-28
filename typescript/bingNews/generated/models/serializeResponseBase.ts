import {ResponseBase} from './responseBase';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeResponseBase(writer: SerializationWriter, responseBase: ResponseBase | undefined = {} as ResponseBase) : void {
        writer.writeStringValue("_type", responseBase._type);
        writer.writeAdditionalData(responseBase.additionalData);
}
