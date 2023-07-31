import {Importance} from './importance';
import {MessageActionFlag} from './messageActionFlag';
import {MessageRulePredicates} from './messageRulePredicates';
import {Recipient} from './recipient';
import {Sensitivity} from './sensitivity';
import {serializeRecipient} from './serializeRecipient';
import {serializeSizeRange} from './serializeSizeRange';
import {SizeRange} from './sizeRange';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeMessageRulePredicates(writer: SerializationWriter, messageRulePredicates: MessageRulePredicates | undefined = {} as MessageRulePredicates) : void {
        writer.writeCollectionOfPrimitiveValues<string>("bodyContains", messageRulePredicates.bodyContains);
        writer.writeCollectionOfPrimitiveValues<string>("bodyOrSubjectContains", messageRulePredicates.bodyOrSubjectContains);
        writer.writeCollectionOfPrimitiveValues<string>("categories", messageRulePredicates.categories);
        writer.writeCollectionOfObjectValues<Recipient>("fromAddresses", messageRulePredicates.fromAddresses, serializeRecipient);
        writer.writeBooleanValue("hasAttachments", messageRulePredicates.hasAttachments);
        writer.writeCollectionOfPrimitiveValues<string>("headerContains", messageRulePredicates.headerContains);
        writer.writeEnumValue<Importance>("importance", messageRulePredicates.importance);
        writer.writeBooleanValue("isApprovalRequest", messageRulePredicates.isApprovalRequest);
        writer.writeBooleanValue("isAutomaticForward", messageRulePredicates.isAutomaticForward);
        writer.writeBooleanValue("isAutomaticReply", messageRulePredicates.isAutomaticReply);
        writer.writeBooleanValue("isEncrypted", messageRulePredicates.isEncrypted);
        writer.writeBooleanValue("isMeetingRequest", messageRulePredicates.isMeetingRequest);
        writer.writeBooleanValue("isMeetingResponse", messageRulePredicates.isMeetingResponse);
        writer.writeBooleanValue("isNonDeliveryReport", messageRulePredicates.isNonDeliveryReport);
        writer.writeBooleanValue("isPermissionControlled", messageRulePredicates.isPermissionControlled);
        writer.writeBooleanValue("isReadReceipt", messageRulePredicates.isReadReceipt);
        writer.writeBooleanValue("isSigned", messageRulePredicates.isSigned);
        writer.writeBooleanValue("isVoicemail", messageRulePredicates.isVoicemail);
        writer.writeEnumValue<MessageActionFlag>("messageActionFlag", messageRulePredicates.messageActionFlag);
        writer.writeBooleanValue("notSentToMe", messageRulePredicates.notSentToMe);
        writer.writeStringValue("@odata.type", messageRulePredicates.odataType);
        writer.writeCollectionOfPrimitiveValues<string>("recipientContains", messageRulePredicates.recipientContains);
        writer.writeCollectionOfPrimitiveValues<string>("senderContains", messageRulePredicates.senderContains);
        writer.writeEnumValue<Sensitivity>("sensitivity", messageRulePredicates.sensitivity);
        writer.writeBooleanValue("sentCcMe", messageRulePredicates.sentCcMe);
        writer.writeBooleanValue("sentOnlyToMe", messageRulePredicates.sentOnlyToMe);
        writer.writeCollectionOfObjectValues<Recipient>("sentToAddresses", messageRulePredicates.sentToAddresses, serializeRecipient);
        writer.writeBooleanValue("sentToMe", messageRulePredicates.sentToMe);
        writer.writeBooleanValue("sentToOrCcMe", messageRulePredicates.sentToOrCcMe);
        writer.writeCollectionOfPrimitiveValues<string>("subjectContains", messageRulePredicates.subjectContains);
        writer.writeObjectValue<SizeRange>("withinSizeRange", messageRulePredicates.withinSizeRange, serializeSizeRange);
        writer.writeAdditionalData(messageRulePredicates.additionalData);
}
