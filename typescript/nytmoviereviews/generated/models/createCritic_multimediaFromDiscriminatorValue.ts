import {deserializeIntoCritic_multimedia} from './deserializeIntoCritic_multimedia';
import {Critic_multimedia} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createCritic_multimediaFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoCritic_multimedia;
}
