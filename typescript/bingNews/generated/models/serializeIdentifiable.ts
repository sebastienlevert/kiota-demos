import {Identifiable} from './identifiable';
import {serializeResponseBase} from './serializeResponseBase';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeIdentifiable(writer: SerializationWriter, identifiable: Identifiable | undefined = {} as Identifiable) : void {
        serializeResponseBase(writer, identifiable)
}
