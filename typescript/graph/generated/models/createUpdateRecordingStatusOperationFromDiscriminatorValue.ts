import {deserializeIntoUpdateRecordingStatusOperation} from './deserializeIntoUpdateRecordingStatusOperation';
import {UpdateRecordingStatusOperation} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createUpdateRecordingStatusOperationFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoUpdateRecordingStatusOperation;
}
