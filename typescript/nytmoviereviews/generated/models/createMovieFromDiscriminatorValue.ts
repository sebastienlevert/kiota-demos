import {deserializeIntoMovie} from './deserializeIntoMovie';
import {Movie} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMovieFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoMovie;
}
