import {Critic} from './critic';
import {Critic_multimedia} from './critic_multimedia';
import {serializeCritic_multimedia} from './serializeCritic_multimedia';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeCritic(writer: SerializationWriter, critic: Critic | undefined = {} as Critic) : void {
        writer.writeStringValue("bio", critic.bio);
        writer.writeStringValue("display_name", critic.display_name);
        writer.writeObjectValue<Critic_multimedia>("multimedia", critic.multimedia, serializeCritic_multimedia);
        writer.writeStringValue("seo_name", critic.seo_name);
        writer.writeStringValue("sort_name", critic.sort_name);
        writer.writeStringValue("status", critic.status);
        writer.writeAdditionalData(critic.additionalData);
}
