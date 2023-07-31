import {deserializeIntoMacOSMinimumOperatingSystem} from './deserializeIntoMacOSMinimumOperatingSystem';
import {MacOSMinimumOperatingSystem} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMacOSMinimumOperatingSystemFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoMacOSMinimumOperatingSystem;
}
