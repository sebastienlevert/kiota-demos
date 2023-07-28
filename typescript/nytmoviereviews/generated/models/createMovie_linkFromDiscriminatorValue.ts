import {deserializeIntoMovie_link} from './deserializeIntoMovie_link';
import {Movie_link} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMovie_linkFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoMovie_link;
}
