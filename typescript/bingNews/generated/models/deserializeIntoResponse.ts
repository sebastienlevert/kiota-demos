import {deserializeIntoIdentifiable} from './deserializeIntoIdentifiable';
import {Response} from './response';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoResponse(response: Response | undefined = {} as Response) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoIdentifiable(response),
        "webSearchUrl": n => { response.webSearchUrl = n.getStringValue(); },
    }
}
