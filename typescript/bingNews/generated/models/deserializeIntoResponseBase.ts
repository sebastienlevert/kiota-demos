import {ResponseBase} from './responseBase';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoResponseBase(responseBase: ResponseBase | undefined = {} as ResponseBase) : Record<string, (node: ParseNode) => void> {
    return {
        "_type": n => { responseBase._type = n.getStringValue(); },
    }
}
