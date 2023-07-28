import {deserializeIntoAnswer} from './deserializeIntoAnswer';
import {deserializeIntoNews} from './deserializeIntoNews';
import {deserializeIntoSearchResultsAnswer} from './deserializeIntoSearchResultsAnswer';
import {deserializeIntoTrendingTopics} from './deserializeIntoTrendingTopics';
import {Answer, News, SearchResultsAnswer, TrendingTopics} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAnswerFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    const mappingValueNode = parseNode.getChildNode("_type");
    if (mappingValueNode) {
        const mappingValue = mappingValueNode.getStringValue();
        if (mappingValue) {
            switch (mappingValue) {
                case "News":
                    return deserializeIntoNews;
                case "SearchResultsAnswer":
                    return deserializeIntoSearchResultsAnswer;
                case "TrendingTopics":
                    return deserializeIntoTrendingTopics;
            }
        }
    }
    return deserializeIntoAnswer;
}
