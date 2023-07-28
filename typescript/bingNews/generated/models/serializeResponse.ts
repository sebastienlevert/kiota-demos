import {Response} from './response';
import {serializeIdentifiable} from './serializeIdentifiable';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeResponse(writer: SerializationWriter, response: Response | undefined = {} as Response) : void {
        serializeIdentifiable(writer, response)
}
