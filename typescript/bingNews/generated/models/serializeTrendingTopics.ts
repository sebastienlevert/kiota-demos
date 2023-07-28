import {NewsTopic} from './newsTopic';
import {serializeAnswer} from './serializeAnswer';
import {serializeNewsTopic} from './serializeNewsTopic';
import {TrendingTopics} from './trendingTopics';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeTrendingTopics(writer: SerializationWriter, trendingTopics: TrendingTopics | undefined = {} as TrendingTopics) : void {
        serializeAnswer(writer, trendingTopics)
        writer.writeCollectionOfObjectValues<NewsTopic>("value", trendingTopics.value, serializeNewsTopic);
}
