import {Movie_link} from './movie_link';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeMovie_link(writer: SerializationWriter, movie_link: Movie_link | undefined = {} as Movie_link) : void {
        writer.writeStringValue("suggested_link_text", movie_link.suggested_link_text);
        writer.writeStringValue("type", movie_link.type);
        writer.writeStringValue("url", movie_link.url);
        writer.writeAdditionalData(movie_link.additionalData);
}
