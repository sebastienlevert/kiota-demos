import {Article} from './article';
import {serializeCreativeWork} from './serializeCreativeWork';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeArticle(writer: SerializationWriter, article: Article | undefined = {} as Article) : void {
        serializeCreativeWork(writer, article)
}
