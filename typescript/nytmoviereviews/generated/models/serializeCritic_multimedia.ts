import {Critic_multimedia} from './critic_multimedia';
import {Critic_multimedia_resource} from './critic_multimedia_resource';
import {serializeCritic_multimedia_resource} from './serializeCritic_multimedia_resource';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeCritic_multimedia(writer: SerializationWriter, critic_multimedia: Critic_multimedia | undefined = {} as Critic_multimedia) : void {
        writer.writeObjectValue<Critic_multimedia_resource>("resource", critic_multimedia.resource, serializeCritic_multimedia_resource);
        writer.writeAdditionalData(critic_multimedia.additionalData);
}
