import {Answer} from './answer';
import {createQueryFromDiscriminatorValue} from './createQueryFromDiscriminatorValue';
import {deserializeIntoResponse} from './deserializeIntoResponse';
import {Query} from './query';
import {serializeQuery} from './serializeQuery';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoAnswer(answer: Answer | undefined = {} as Answer) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoResponse(answer),
        "followUpQueries": n => { answer.followUpQueries = n.getCollectionOfObjectValues<Query>(createQueryFromDiscriminatorValue); },
    }
}
