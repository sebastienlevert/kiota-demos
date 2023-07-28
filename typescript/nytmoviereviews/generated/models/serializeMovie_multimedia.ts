import {Movie_multimedia} from './movie_multimedia';
import {Movie_multimedia_resource} from './movie_multimedia_resource';
import {serializeMovie_multimedia_resource} from './serializeMovie_multimedia_resource';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeMovie_multimedia(writer: SerializationWriter, movie_multimedia: Movie_multimedia | undefined = {} as Movie_multimedia) : void {
        writer.writeObjectValue<Movie_multimedia_resource>("resource", movie_multimedia.resource, serializeMovie_multimedia_resource);
        writer.writeAdditionalData(movie_multimedia.additionalData);
}
