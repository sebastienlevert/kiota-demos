import {deserializeIntoQuery} from './deserializeIntoQuery';
import {Query} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createQueryFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoQuery;
}
