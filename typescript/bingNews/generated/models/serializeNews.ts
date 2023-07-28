import {News} from './news';
import {NewsArticle} from './newsArticle';
import {serializeNewsArticle} from './serializeNewsArticle';
import {serializeSearchResultsAnswer} from './serializeSearchResultsAnswer';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeNews(writer: SerializationWriter, news: News | undefined = {} as News) : void {
        serializeSearchResultsAnswer(writer, news)
        writer.writeCollectionOfObjectValues<NewsArticle>("value", news.value, serializeNewsArticle);
}
