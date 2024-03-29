import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface ResponseBase extends AdditionalDataHolder, Parsable {
    /**
     * The _type property
     */
    _type?: string | undefined;
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
}
