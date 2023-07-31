import {deserializeIntoConfigurationManagerClientEnabledFeatures} from './deserializeIntoConfigurationManagerClientEnabledFeatures';
import {ConfigurationManagerClientEnabledFeatures} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createConfigurationManagerClientEnabledFeaturesFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoConfigurationManagerClientEnabledFeatures;
}
