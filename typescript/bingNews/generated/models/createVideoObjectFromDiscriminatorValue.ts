import {deserializeIntoVideoObject} from './deserializeIntoVideoObject';
import {VideoObject} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createVideoObjectFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoVideoObject;
}
