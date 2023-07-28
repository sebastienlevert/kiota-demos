import {Movie_multimedia_resource} from './movie_multimedia_resource';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoMovie_multimedia_resource(movie_multimedia_resource: Movie_multimedia_resource | undefined = {} as Movie_multimedia_resource) : Record<string, (node: ParseNode) => void> {
    return {
        "height": n => { movie_multimedia_resource.height = n.getNumberValue(); },
        "src": n => { movie_multimedia_resource.src = n.getStringValue(); },
        "type": n => { movie_multimedia_resource.type = n.getStringValue(); },
        "width": n => { movie_multimedia_resource.width = n.getNumberValue(); },
    }
}
