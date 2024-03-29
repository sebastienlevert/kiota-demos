import {deserializeIntoDelegatedPermissionClassification} from './deserializeIntoDelegatedPermissionClassification';
import {DelegatedPermissionClassification} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createDelegatedPermissionClassificationFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoDelegatedPermissionClassification;
}
