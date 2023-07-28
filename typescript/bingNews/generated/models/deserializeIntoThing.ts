import {createImageObjectFromDiscriminatorValue} from './createImageObjectFromDiscriminatorValue';
import {deserializeIntoResponse} from './deserializeIntoResponse';
import {ImageObject} from './imageObject';
import {serializeImageObject} from './serializeImageObject';
import {Thing} from './thing';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoThing(thing: Thing | undefined = {} as Thing) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoResponse(thing),
        "alternateName": n => { thing.alternateName = n.getStringValue(); },
        "bingId": n => { thing.bingId = n.getStringValue(); },
        "description": n => { thing.description = n.getStringValue(); },
        "image": n => { thing.image = n.getObjectValue<ImageObject>(createImageObjectFromDiscriminatorValue); },
        "name": n => { thing.name = n.getStringValue(); },
        "url": n => { thing.url = n.getStringValue(); },
    }
}
