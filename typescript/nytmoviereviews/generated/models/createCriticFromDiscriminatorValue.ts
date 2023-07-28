import {deserializeIntoCritic} from './deserializeIntoCritic';
import {Critic} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createCriticFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoCritic;
}
