import {deserializeIntoNotebookLinks} from './deserializeIntoNotebookLinks';
import {NotebookLinks} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createNotebookLinksFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoNotebookLinks;
}
