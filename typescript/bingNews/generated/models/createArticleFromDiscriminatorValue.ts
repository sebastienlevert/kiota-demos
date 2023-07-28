import {deserializeIntoArticle} from './deserializeIntoArticle';
import {deserializeIntoNewsArticle} from './deserializeIntoNewsArticle';
import {Article, NewsArticle} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createArticleFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    const mappingValueNode = parseNode.getChildNode("_type");
    if (mappingValueNode) {
        const mappingValue = mappingValueNode.getStringValue();
        if (mappingValue) {
            switch (mappingValue) {
                case "NewsArticle":
                    return deserializeIntoNewsArticle;
            }
        }
    }
    return deserializeIntoArticle;
}
