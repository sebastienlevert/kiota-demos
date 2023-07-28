import {Movie_multimedia_resource} from './movie_multimedia_resource';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeMovie_multimedia_resource(writer: SerializationWriter, movie_multimedia_resource: Movie_multimedia_resource | undefined = {} as Movie_multimedia_resource) : void {
        writer.writeNumberValue("height", movie_multimedia_resource.height);
        writer.writeStringValue("src", movie_multimedia_resource.src);
        writer.writeStringValue("type", movie_multimedia_resource.type);
        writer.writeNumberValue("width", movie_multimedia_resource.width);
        writer.writeAdditionalData(movie_multimedia_resource.additionalData);
}
