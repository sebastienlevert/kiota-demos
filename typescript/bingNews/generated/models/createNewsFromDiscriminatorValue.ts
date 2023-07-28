import {deserializeIntoNews} from './deserializeIntoNews';
import {News} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createNewsFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoNews;
}
