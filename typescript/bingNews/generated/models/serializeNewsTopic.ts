import {NewsTopic} from './newsTopic';
import {Query} from './query';
import {serializeQuery} from './serializeQuery';
import {serializeThing} from './serializeThing';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeNewsTopic(writer: SerializationWriter, newsTopic: NewsTopic | undefined = {} as NewsTopic) : void {
        serializeThing(writer, newsTopic)
        writer.writeObjectValue<Query>("query", newsTopic.query, serializeQuery);
}
