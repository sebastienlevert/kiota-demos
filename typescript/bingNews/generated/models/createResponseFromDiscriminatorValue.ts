import {deserializeIntoAnswer} from './deserializeIntoAnswer';
import {deserializeIntoArticle} from './deserializeIntoArticle';
import {deserializeIntoCreativeWork} from './deserializeIntoCreativeWork';
import {deserializeIntoImageObject} from './deserializeIntoImageObject';
import {deserializeIntoMediaObject} from './deserializeIntoMediaObject';
import {deserializeIntoNews} from './deserializeIntoNews';
import {deserializeIntoNewsArticle} from './deserializeIntoNewsArticle';
import {deserializeIntoNewsTopic} from './deserializeIntoNewsTopic';
import {deserializeIntoOrganization} from './deserializeIntoOrganization';
import {deserializeIntoResponse} from './deserializeIntoResponse';
import {deserializeIntoSearchResultsAnswer} from './deserializeIntoSearchResultsAnswer';
import {deserializeIntoThing} from './deserializeIntoThing';
import {deserializeIntoTrendingTopics} from './deserializeIntoTrendingTopics';
import {deserializeIntoVideoObject} from './deserializeIntoVideoObject';
import {Answer, Article, CreativeWork, ImageObject, MediaObject, News, NewsArticle, NewsTopic, Organization, Response, SearchResultsAnswer, Thing, TrendingTopics, VideoObject} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    const mappingValueNode = parseNode.getChildNode("_type");
    if (mappingValueNode) {
        const mappingValue = mappingValueNode.getStringValue();
        if (mappingValue) {
            switch (mappingValue) {
                case "Answer":
                    return deserializeIntoAnswer;
                case "Article":
                    return deserializeIntoArticle;
                case "CreativeWork":
                    return deserializeIntoCreativeWork;
                case "ImageObject":
                    return deserializeIntoImageObject;
                case "MediaObject":
                    return deserializeIntoMediaObject;
                case "News":
                    return deserializeIntoNews;
                case "NewsArticle":
                    return deserializeIntoNewsArticle;
                case "NewsTopic":
                    return deserializeIntoNewsTopic;
                case "Organization":
                    return deserializeIntoOrganization;
                case "SearchResultsAnswer":
                    return deserializeIntoSearchResultsAnswer;
                case "Thing":
                    return deserializeIntoThing;
                case "TrendingTopics":
                    return deserializeIntoTrendingTopics;
                case "VideoObject":
                    return deserializeIntoVideoObject;
            }
        }
    }
    return deserializeIntoResponse;
}
