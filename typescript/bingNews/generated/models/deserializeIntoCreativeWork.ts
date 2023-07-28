import {createThingFromDiscriminatorValue} from './createThingFromDiscriminatorValue';
import {createVideoObjectFromDiscriminatorValue} from './createVideoObjectFromDiscriminatorValue';
import {CreativeWork} from './creativeWork';
import {deserializeIntoThing} from './deserializeIntoThing';
import {serializeThing} from './serializeThing';
import {serializeVideoObject} from './serializeVideoObject';
import {Thing} from './thing';
import {VideoObject} from './videoObject';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoCreativeWork(creativeWork: CreativeWork | undefined = {} as CreativeWork) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoThing(creativeWork),
        "datePublished": n => { creativeWork.datePublished = n.getStringValue(); },
        "provider": n => { creativeWork.provider = n.getCollectionOfObjectValues<Thing>(createThingFromDiscriminatorValue); },
        "thumbnailUrl": n => { creativeWork.thumbnailUrl = n.getStringValue(); },
        "video": n => { creativeWork.video = n.getObjectValue<VideoObject>(createVideoObjectFromDiscriminatorValue); },
    }
}
