import {deserializeIntoConnectedOrganization} from './deserializeIntoConnectedOrganization';
import {ConnectedOrganization} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createConnectedOrganizationFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoConnectedOrganization;
}
