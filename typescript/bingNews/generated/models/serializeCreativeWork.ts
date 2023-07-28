import {CreativeWork} from './creativeWork';
import {serializeThing} from './serializeThing';
import {serializeVideoObject} from './serializeVideoObject';
import {Thing} from './thing';
import {VideoObject} from './videoObject';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeCreativeWork(writer: SerializationWriter, creativeWork: CreativeWork | undefined = {} as CreativeWork) : void {
        serializeThing(writer, creativeWork)
        writer.writeObjectValue<VideoObject>("video", creativeWork.video, serializeVideoObject);
}
