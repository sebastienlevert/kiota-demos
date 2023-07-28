import {Critic_multimedia_resource} from './critic_multimedia_resource';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoCritic_multimedia_resource(critic_multimedia_resource: Critic_multimedia_resource | undefined = {} as Critic_multimedia_resource) : Record<string, (node: ParseNode) => void> {
    return {
        "credit": n => { critic_multimedia_resource.credit = n.getStringValue(); },
        "height": n => { critic_multimedia_resource.height = n.getNumberValue(); },
        "src": n => { critic_multimedia_resource.src = n.getStringValue(); },
        "type": n => { critic_multimedia_resource.type = n.getStringValue(); },
        "width": n => { critic_multimedia_resource.width = n.getNumberValue(); },
    }
}
