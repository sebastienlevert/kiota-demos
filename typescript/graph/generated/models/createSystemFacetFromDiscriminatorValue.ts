import {deserializeIntoSystemFacet} from './deserializeIntoSystemFacet';
import {SystemFacet} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createSystemFacetFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoSystemFacet;
}
