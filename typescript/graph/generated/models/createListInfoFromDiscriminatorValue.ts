import {deserializeIntoListInfo} from './deserializeIntoListInfo';
import {ListInfo} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createListInfoFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoListInfo;
}
