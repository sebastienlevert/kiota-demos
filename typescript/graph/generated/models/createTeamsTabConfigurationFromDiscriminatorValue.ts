import {deserializeIntoTeamsTabConfiguration} from './deserializeIntoTeamsTabConfiguration';
import {TeamsTabConfiguration} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createTeamsTabConfigurationFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoTeamsTabConfiguration;
}
