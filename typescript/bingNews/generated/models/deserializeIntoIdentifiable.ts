import {deserializeIntoResponseBase} from './deserializeIntoResponseBase';
import {Identifiable} from './identifiable';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoIdentifiable(identifiable: Identifiable | undefined = {} as Identifiable) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoResponseBase(identifiable),
        "id": n => { identifiable.id = n.getStringValue(); },
    }
}
