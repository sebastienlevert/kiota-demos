import {Answer} from './answer';
import {Query} from './query';
import {serializeQuery} from './serializeQuery';
import {serializeResponse} from './serializeResponse';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAnswer(writer: SerializationWriter, answer: Answer | undefined = {} as Answer) : void {
        serializeResponse(writer, answer)
}
