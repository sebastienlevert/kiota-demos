import {deserializeIntoCreativeWork} from './deserializeIntoCreativeWork';
import {MediaObject} from './mediaObject';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoMediaObject(mediaObject: MediaObject | undefined = {} as MediaObject) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoCreativeWork(mediaObject),
        "contentUrl": n => { mediaObject.contentUrl = n.getStringValue(); },
        "height": n => { mediaObject.height = n.getNumberValue(); },
        "width": n => { mediaObject.width = n.getNumberValue(); },
    }
}
