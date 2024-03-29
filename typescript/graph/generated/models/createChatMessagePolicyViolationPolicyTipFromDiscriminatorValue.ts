import {deserializeIntoChatMessagePolicyViolationPolicyTip} from './deserializeIntoChatMessagePolicyViolationPolicyTip';
import {ChatMessagePolicyViolationPolicyTip} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createChatMessagePolicyViolationPolicyTipFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoChatMessagePolicyViolationPolicyTip;
}
