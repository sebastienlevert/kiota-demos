import {createCritic_multimedia_resourceFromDiscriminatorValue} from './createCritic_multimedia_resourceFromDiscriminatorValue';
import {Critic_multimedia} from './critic_multimedia';
import {Critic_multimedia_resource} from './critic_multimedia_resource';
import {serializeCritic_multimedia_resource} from './serializeCritic_multimedia_resource';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoCritic_multimedia(critic_multimedia: Critic_multimedia | undefined = {} as Critic_multimedia) : Record<string, (node: ParseNode) => void> {
    return {
        "resource": n => { critic_multimedia.resource = n.getObjectValue<Critic_multimedia_resource>(createCritic_multimedia_resourceFromDiscriminatorValue); },
    }
}
