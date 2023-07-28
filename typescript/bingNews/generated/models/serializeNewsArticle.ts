import {NewsArticle} from './newsArticle';
import {serializeArticle} from './serializeArticle';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeNewsArticle(writer: SerializationWriter, newsArticle: NewsArticle | undefined = {} as NewsArticle) : void {
        serializeArticle(writer, newsArticle)
}
