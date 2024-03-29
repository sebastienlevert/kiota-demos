import {deserializeIntoIosVppEBook} from './deserializeIntoIosVppEBook';
import {IosVppEBook} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createIosVppEBookFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoIosVppEBook;
}
