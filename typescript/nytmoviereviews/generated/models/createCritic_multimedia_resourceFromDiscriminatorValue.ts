import {deserializeIntoCritic_multimedia_resource} from './deserializeIntoCritic_multimedia_resource';
import {Critic_multimedia_resource} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createCritic_multimedia_resourceFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoCritic_multimedia_resource;
}
