import {deserializeIntoTimeSlot} from './deserializeIntoTimeSlot';
import {TimeSlot} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createTimeSlotFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoTimeSlot;
}
