import {createCritic_multimediaFromDiscriminatorValue} from './createCritic_multimediaFromDiscriminatorValue';
import {Critic} from './critic';
import {Critic_multimedia} from './critic_multimedia';
import {serializeCritic_multimedia} from './serializeCritic_multimedia';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoCritic(critic: Critic | undefined = {} as Critic) : Record<string, (node: ParseNode) => void> {
    return {
        "bio": n => { critic.bio = n.getStringValue(); },
        "display_name": n => { critic.display_name = n.getStringValue(); },
        "multimedia": n => { critic.multimedia = n.getObjectValue<Critic_multimedia>(createCritic_multimediaFromDiscriminatorValue); },
        "seo_name": n => { critic.seo_name = n.getStringValue(); },
        "sort_name": n => { critic.sort_name = n.getStringValue(); },
        "status": n => { critic.status = n.getStringValue(); },
    }
}
