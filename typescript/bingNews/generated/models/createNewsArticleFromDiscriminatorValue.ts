import {deserializeIntoNewsArticle} from './deserializeIntoNewsArticle';
import {NewsArticle} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createNewsArticleFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoNewsArticle;
}
