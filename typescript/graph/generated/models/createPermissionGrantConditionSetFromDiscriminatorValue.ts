import {deserializeIntoPermissionGrantConditionSet} from './deserializeIntoPermissionGrantConditionSet';
import {PermissionGrantConditionSet} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createPermissionGrantConditionSetFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoPermissionGrantConditionSet;
}
