import {createMovieFromDiscriminatorValue} from '../../models/createMovieFromDiscriminatorValue';
import {Movie} from '../../models/movie';
import {serializeMovie} from '../../models/serializeMovie';
import {ResourceTypeResponse} from './resourceTypeResponse';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoResourceTypeResponse(resourceTypeResponse: ResourceTypeResponse | undefined = {} as ResourceTypeResponse) : Record<string, (node: ParseNode) => void> {
    return {
        "copyright": n => { resourceTypeResponse.copyright = n.getStringValue(); },
        "num_results": n => { resourceTypeResponse.num_results = n.getNumberValue(); },
        "results": n => { resourceTypeResponse.results = n.getCollectionOfObjectValues<Movie>(createMovieFromDiscriminatorValue); },
        "status": n => { resourceTypeResponse.status = n.getStringValue(); },
    }
}
