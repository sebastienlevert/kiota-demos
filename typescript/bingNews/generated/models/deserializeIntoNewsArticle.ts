import {createNewsArticleFromDiscriminatorValue} from './createNewsArticleFromDiscriminatorValue';
import {deserializeIntoArticle} from './deserializeIntoArticle';
import {NewsArticle} from './newsArticle';
import {serializeNewsArticle} from './serializeNewsArticle';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoNewsArticle(newsArticle: NewsArticle | undefined = {} as NewsArticle) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoArticle(newsArticle),
        "category": n => { newsArticle.category = n.getStringValue(); },
        "clusteredArticles": n => { newsArticle.clusteredArticles = n.getCollectionOfObjectValues<NewsArticle>(createNewsArticleFromDiscriminatorValue); },
        "headline": n => { newsArticle.headline = n.getBooleanValue(); },
    }
}
