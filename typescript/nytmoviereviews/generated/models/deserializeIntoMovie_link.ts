import {Movie_link} from './movie_link';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoMovie_link(movie_link: Movie_link | undefined = {} as Movie_link) : Record<string, (node: ParseNode) => void> {
    return {
        "suggested_link_text": n => { movie_link.suggested_link_text = n.getStringValue(); },
        "type": n => { movie_link.type = n.getStringValue(); },
        "url": n => { movie_link.url = n.getStringValue(); },
    }
}
