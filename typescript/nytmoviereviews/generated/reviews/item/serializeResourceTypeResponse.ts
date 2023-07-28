import {Movie} from '../../models/movie';
import {serializeMovie} from '../../models/serializeMovie';
import {ResourceTypeResponse} from './resourceTypeResponse';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeResourceTypeResponse(writer: SerializationWriter, resourceTypeResponse: ResourceTypeResponse | undefined = {} as ResourceTypeResponse) : void {
        writer.writeStringValue("copyright", resourceTypeResponse.copyright);
        writer.writeNumberValue("num_results", resourceTypeResponse.num_results);
        writer.writeCollectionOfObjectValues<Movie>("results", resourceTypeResponse.results, serializeMovie);
        writer.writeStringValue("status", resourceTypeResponse.status);
        writer.writeAdditionalData(resourceTypeResponse.additionalData);
}
