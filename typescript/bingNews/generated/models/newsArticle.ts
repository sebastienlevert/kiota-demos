import {Article} from './article';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface NewsArticle extends Article, Parsable {
    /**
     * The news category that the article belongs to. For example, Sports. If the news category cannot be determined, the article does not include this field.
     */
    category?: string | undefined;
    /**
     * A list of related news articles.
     */
    clusteredArticles?: NewsArticle[] | undefined;
    /**
     * A Boolean value that indicates whether the news article is a headline. If true, the article is a headline. The article includes this field only for news categories requests that do not specify the category query parameter.
     */
    headline?: boolean | undefined;
}
