import {deserializeIntoMovie_multimedia} from './deserializeIntoMovie_multimedia';
import {Movie_multimedia} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMovie_multimediaFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoMovie_multimedia;
}
