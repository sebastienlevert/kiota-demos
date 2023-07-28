import {deserializeIntoNewsTopic} from './deserializeIntoNewsTopic';
import {NewsTopic} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createNewsTopicFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoNewsTopic;
}
