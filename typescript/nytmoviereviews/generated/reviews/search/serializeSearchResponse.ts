import {Movie} from '../../models/movie';
import {serializeMovie} from '../../models/serializeMovie';
import {SearchResponse} from './searchResponse';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeSearchResponse(writer: SerializationWriter, searchResponse: SearchResponse | undefined = {} as SearchResponse) : void {
        writer.writeStringValue("copyright", searchResponse.copyright);
        writer.writeNumberValue("num_results", searchResponse.num_results);
        writer.writeCollectionOfObjectValues<Movie>("results", searchResponse.results, serializeMovie);
        writer.writeStringValue("status", searchResponse.status);
        writer.writeAdditionalData(searchResponse.additionalData);
}
