import {Article} from './article';
import {deserializeIntoCreativeWork} from './deserializeIntoCreativeWork';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoArticle(article: Article | undefined = {} as Article) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoCreativeWork(article),
        "wordCount": n => { article.wordCount = n.getNumberValue(); },
    }
}
