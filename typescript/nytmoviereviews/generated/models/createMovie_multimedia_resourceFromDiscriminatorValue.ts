import {deserializeIntoMovie_multimedia_resource} from './deserializeIntoMovie_multimedia_resource';
import {Movie_multimedia_resource} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMovie_multimedia_resourceFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoMovie_multimedia_resource;
}
