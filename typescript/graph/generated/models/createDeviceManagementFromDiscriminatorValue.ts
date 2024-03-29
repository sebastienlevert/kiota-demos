import {deserializeIntoDeviceManagement} from './deserializeIntoDeviceManagement';
import {DeviceManagement} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createDeviceManagementFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoDeviceManagement;
}
