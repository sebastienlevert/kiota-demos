import {deserializeIntoImageObject} from './deserializeIntoImageObject';
import {deserializeIntoMediaObject} from './deserializeIntoMediaObject';
import {deserializeIntoVideoObject} from './deserializeIntoVideoObject';
import {ImageObject, MediaObject, VideoObject} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMediaObjectFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    const mappingValueNode = parseNode.getChildNode("_type");
    if (mappingValueNode) {
        const mappingValue = mappingValueNode.getStringValue();
        if (mappingValue) {
            switch (mappingValue) {
                case "ImageObject":
                    return deserializeIntoImageObject;
                case "VideoObject":
                    return deserializeIntoVideoObject;
            }
        }
    }
    return deserializeIntoMediaObject;
}
