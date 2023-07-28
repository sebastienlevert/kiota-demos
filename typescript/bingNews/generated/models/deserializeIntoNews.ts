import {createNewsArticleFromDiscriminatorValue} from './createNewsArticleFromDiscriminatorValue';
import {deserializeIntoSearchResultsAnswer} from './deserializeIntoSearchResultsAnswer';
import {News} from './news';
import {NewsArticle} from './newsArticle';
import {serializeNewsArticle} from './serializeNewsArticle';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoNews(news: News | undefined = {} as News) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoSearchResultsAnswer(news),
        "location": n => { news.location = n.getStringValue(); },
        "value": n => { news.value = n.getCollectionOfObjectValues<NewsArticle>(createNewsArticleFromDiscriminatorValue); },
    }
}
