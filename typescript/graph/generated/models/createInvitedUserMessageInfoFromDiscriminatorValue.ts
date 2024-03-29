import {deserializeIntoInvitedUserMessageInfo} from './deserializeIntoInvitedUserMessageInfo';
import {InvitedUserMessageInfo} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createInvitedUserMessageInfoFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoInvitedUserMessageInfo;
}
