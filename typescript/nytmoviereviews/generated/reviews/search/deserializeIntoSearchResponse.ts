import {createMovieFromDiscriminatorValue} from '../../models/createMovieFromDiscriminatorValue';
import {Movie} from '../../models/movie';
import {serializeMovie} from '../../models/serializeMovie';
import {SearchResponse} from './searchResponse';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoSearchResponse(searchResponse: SearchResponse | undefined = {} as SearchResponse) : Record<string, (node: ParseNode) => void> {
    return {
        "copyright": n => { searchResponse.copyright = n.getStringValue(); },
        "num_results": n => { searchResponse.num_results = n.getNumberValue(); },
        "results": n => { searchResponse.results = n.getCollectionOfObjectValues<Movie>(createMovieFromDiscriminatorValue); },
        "status": n => { searchResponse.status = n.getStringValue(); },
    }
}
