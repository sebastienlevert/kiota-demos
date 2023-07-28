import {deserializeIntoImageObject} from './deserializeIntoImageObject';
import {ImageObject} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createImageObjectFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoImageObject;
}
