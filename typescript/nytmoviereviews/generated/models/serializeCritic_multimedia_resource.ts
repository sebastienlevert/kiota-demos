import {Critic_multimedia_resource} from './critic_multimedia_resource';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeCritic_multimedia_resource(writer: SerializationWriter, critic_multimedia_resource: Critic_multimedia_resource | undefined = {} as Critic_multimedia_resource) : void {
        writer.writeStringValue("credit", critic_multimedia_resource.credit);
        writer.writeNumberValue("height", critic_multimedia_resource.height);
        writer.writeStringValue("src", critic_multimedia_resource.src);
        writer.writeStringValue("type", critic_multimedia_resource.type);
        writer.writeNumberValue("width", critic_multimedia_resource.width);
        writer.writeAdditionalData(critic_multimedia_resource.additionalData);
}
