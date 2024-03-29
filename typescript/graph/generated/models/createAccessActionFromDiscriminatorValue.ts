import {deserializeIntoAccessAction} from './deserializeIntoAccessAction';
import {AccessAction} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAccessActionFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoAccessAction;
}
