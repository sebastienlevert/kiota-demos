import {deserializeIntoArticle} from './deserializeIntoArticle';
import {deserializeIntoCreativeWork} from './deserializeIntoCreativeWork';
import {deserializeIntoImageObject} from './deserializeIntoImageObject';
import {deserializeIntoMediaObject} from './deserializeIntoMediaObject';
import {deserializeIntoNewsArticle} from './deserializeIntoNewsArticle';
import {deserializeIntoNewsTopic} from './deserializeIntoNewsTopic';
import {deserializeIntoOrganization} from './deserializeIntoOrganization';
import {deserializeIntoThing} from './deserializeIntoThing';
import {deserializeIntoVideoObject} from './deserializeIntoVideoObject';
import {Article, CreativeWork, ImageObject, MediaObject, NewsArticle, NewsTopic, Organization, Thing, VideoObject} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createThingFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    const mappingValueNode = parseNode.getChildNode("_type");
    if (mappingValueNode) {
        const mappingValue = mappingValueNode.getStringValue();
        if (mappingValue) {
            switch (mappingValue) {
                case "Article":
                    return deserializeIntoArticle;
                case "CreativeWork":
                    return deserializeIntoCreativeWork;
                case "ImageObject":
                    return deserializeIntoImageObject;
                case "MediaObject":
                    return deserializeIntoMediaObject;
                case "NewsArticle":
                    return deserializeIntoNewsArticle;
                case "NewsTopic":
                    return deserializeIntoNewsTopic;
                case "Organization":
                    return deserializeIntoOrganization;
                case "VideoObject":
                    return deserializeIntoVideoObject;
            }
        }
    }
    return deserializeIntoThing;
}
