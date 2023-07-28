import {createQueryFromDiscriminatorValue} from './createQueryFromDiscriminatorValue';
import {deserializeIntoThing} from './deserializeIntoThing';
import {NewsTopic} from './newsTopic';
import {Query} from './query';
import {serializeQuery} from './serializeQuery';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoNewsTopic(newsTopic: NewsTopic | undefined = {} as NewsTopic) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoThing(newsTopic),
        "isBreakingNews": n => { newsTopic.isBreakingNews = n.getBooleanValue(); },
        "newsSearchUrl": n => { newsTopic.newsSearchUrl = n.getStringValue(); },
        "query": n => { newsTopic.query = n.getObjectValue<Query>(createQueryFromDiscriminatorValue); },
    }
}
