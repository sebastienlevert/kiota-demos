import {deserializeIntoExternalLink} from './deserializeIntoExternalLink';
import {ExternalLink} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createExternalLinkFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoExternalLink;
}
