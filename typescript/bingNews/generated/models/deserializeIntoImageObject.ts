import {createImageObjectFromDiscriminatorValue} from './createImageObjectFromDiscriminatorValue';
import {deserializeIntoMediaObject} from './deserializeIntoMediaObject';
import {ImageObject} from './imageObject';
import {serializeImageObject} from './serializeImageObject';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoImageObject(imageObject: ImageObject | undefined = {} as ImageObject) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoMediaObject(imageObject),
        "thumbnail": n => { imageObject.thumbnail = n.getObjectValue<ImageObject>(createImageObjectFromDiscriminatorValue); },
    }
}
