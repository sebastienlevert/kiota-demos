import {createMovie_multimedia_resourceFromDiscriminatorValue} from './createMovie_multimedia_resourceFromDiscriminatorValue';
import {Movie_multimedia} from './movie_multimedia';
import {Movie_multimedia_resource} from './movie_multimedia_resource';
import {serializeMovie_multimedia_resource} from './serializeMovie_multimedia_resource';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoMovie_multimedia(movie_multimedia: Movie_multimedia | undefined = {} as Movie_multimedia) : Record<string, (node: ParseNode) => void> {
    return {
        "resource": n => { movie_multimedia.resource = n.getObjectValue<Movie_multimedia_resource>(createMovie_multimedia_resourceFromDiscriminatorValue); },
    }
}
