import {createMovie_linkFromDiscriminatorValue} from './createMovie_linkFromDiscriminatorValue';
import {createMovie_multimediaFromDiscriminatorValue} from './createMovie_multimediaFromDiscriminatorValue';
import {Movie} from './movie';
import {Movie_link} from './movie_link';
import {Movie_multimedia} from './movie_multimedia';
import {serializeMovie_link} from './serializeMovie_link';
import {serializeMovie_multimedia} from './serializeMovie_multimedia';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoMovie(movie: Movie | undefined = {} as Movie) : Record<string, (node: ParseNode) => void> {
    return {
        "byline": n => { movie.byline = n.getStringValue(); },
        "critics_pick": n => { movie.critics_pick = n.getNumberValue(); },
        "date_updated": n => { movie.date_updated = n.getStringValue(); },
        "display_title": n => { movie.display_title = n.getStringValue(); },
        "headline": n => { movie.headline = n.getStringValue(); },
        "link": n => { movie.link = n.getObjectValue<Movie_link>(createMovie_linkFromDiscriminatorValue); },
        "mpaa_rating": n => { movie.mpaa_rating = n.getStringValue(); },
        "multimedia": n => { movie.multimedia = n.getObjectValue<Movie_multimedia>(createMovie_multimediaFromDiscriminatorValue); },
        "opening_date": n => { movie.opening_date = n.getStringValue(); },
        "publication_date": n => { movie.publication_date = n.getStringValue(); },
        "summary_short": n => { movie.summary_short = n.getStringValue(); },
    }
}
