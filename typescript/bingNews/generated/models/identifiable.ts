import {ResponseBase} from './responseBase';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface Identifiable extends Parsable, ResponseBase {
    /**
     * A String identifier.
     */
    id?: string | undefined;
}
