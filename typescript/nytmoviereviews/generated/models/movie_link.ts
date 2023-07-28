import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface Movie_link extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * The suggested_link_text property
     */
    suggested_link_text?: string | undefined;
    /**
     * The type property
     */
    type?: string | undefined;
    /**
     * The url property
     */
    url?: string | undefined;
}
