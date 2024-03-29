import {deserializeIntoAudio} from './deserializeIntoAudio';
import {Audio} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAudioFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoAudio;
}
