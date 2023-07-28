import {deserializeIntoNews} from './deserializeIntoNews';
import {deserializeIntoSearchResultsAnswer} from './deserializeIntoSearchResultsAnswer';
import {News, SearchResultsAnswer} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createSearchResultsAnswerFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    const mappingValueNode = parseNode.getChildNode("_type");
    if (mappingValueNode) {
        const mappingValue = mappingValueNode.getStringValue();
        if (mappingValue) {
            switch (mappingValue) {
                case "News":
                    return deserializeIntoNews;
            }
        }
    }
    return deserializeIntoSearchResultsAnswer;
}
