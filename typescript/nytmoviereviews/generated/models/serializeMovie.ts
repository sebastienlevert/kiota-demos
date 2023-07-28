import {Movie} from './movie';
import {Movie_link} from './movie_link';
import {Movie_multimedia} from './movie_multimedia';
import {serializeMovie_link} from './serializeMovie_link';
import {serializeMovie_multimedia} from './serializeMovie_multimedia';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeMovie(writer: SerializationWriter, movie: Movie | undefined = {} as Movie) : void {
        writer.writeStringValue("byline", movie.byline);
        writer.writeNumberValue("critics_pick", movie.critics_pick);
        writer.writeStringValue("date_updated", movie.date_updated);
        writer.writeStringValue("display_title", movie.display_title);
        writer.writeStringValue("headline", movie.headline);
        writer.writeObjectValue<Movie_link>("link", movie.link, serializeMovie_link);
        writer.writeStringValue("mpaa_rating", movie.mpaa_rating);
        writer.writeObjectValue<Movie_multimedia>("multimedia", movie.multimedia, serializeMovie_multimedia);
        writer.writeStringValue("opening_date", movie.opening_date);
        writer.writeStringValue("publication_date", movie.publication_date);
        writer.writeStringValue("summary_short", movie.summary_short);
        writer.writeAdditionalData(movie.additionalData);
}
