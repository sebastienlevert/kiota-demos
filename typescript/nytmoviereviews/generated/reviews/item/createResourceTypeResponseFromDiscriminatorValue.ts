import {deserializeIntoResourceTypeResponse} from './deserializeIntoResourceTypeResponse';
import {ResourceTypeResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createResourceTypeResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoResourceTypeResponse;
}
