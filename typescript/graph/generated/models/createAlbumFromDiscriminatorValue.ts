import {deserializeIntoAlbum} from './deserializeIntoAlbum';
import {Album} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAlbumFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoAlbum;
}
