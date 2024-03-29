import {deserializeIntoColumnValidation} from './deserializeIntoColumnValidation';
import {ColumnValidation} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createColumnValidationFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoColumnValidation;
}
