import {createNewsTopicFromDiscriminatorValue} from './createNewsTopicFromDiscriminatorValue';
import {deserializeIntoAnswer} from './deserializeIntoAnswer';
import {NewsTopic} from './newsTopic';
import {serializeNewsTopic} from './serializeNewsTopic';
import {TrendingTopics} from './trendingTopics';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoTrendingTopics(trendingTopics: TrendingTopics | undefined = {} as TrendingTopics) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoAnswer(trendingTopics),
        "value": n => { trendingTopics.value = n.getCollectionOfObjectValues<NewsTopic>(createNewsTopicFromDiscriminatorValue); },
    }
}
