import {createImageObjectFromDiscriminatorValue} from './createImageObjectFromDiscriminatorValue';
import {ImageObject} from './imageObject';
import {Query} from './query';
import {serializeImageObject} from './serializeImageObject';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoQuery(query: Query | undefined = {} as Query) : Record<string, (node: ParseNode) => void> {
    return {
        "displayText": n => { query.displayText = n.getStringValue(); },
        "searchLink": n => { query.searchLink = n.getStringValue(); },
        "text": n => { query.text = n.getStringValue(); },
        "thumbnail": n => { query.thumbnail = n.getObjectValue<ImageObject>(createImageObjectFromDiscriminatorValue); },
        "webSearchUrl": n => { query.webSearchUrl = n.getStringValue(); },
    }
}
