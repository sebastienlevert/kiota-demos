import {Critic} from '../../models/critic';
import {serializeCritic} from '../../models/serializeCritic';
import {ResourceTypeResponse} from './resourceTypeResponse';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeResourceTypeResponse(writer: SerializationWriter, resourceTypeResponse: ResourceTypeResponse | undefined = {} as ResourceTypeResponse) : void {
        writer.writeStringValue("copyright", resourceTypeResponse.copyright);
        writer.writeNumberValue("num_results", resourceTypeResponse.num_results);
        writer.writeCollectionOfObjectValues<Critic>("results", resourceTypeResponse.results, serializeCritic);
        writer.writeStringValue("status", resourceTypeResponse.status);
        writer.writeAdditionalData(resourceTypeResponse.additionalData);
}
