import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface Critic_multimedia_resource extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * The credit property
     */
    credit?: string | undefined;
    /**
     * The height property
     */
    height?: number | undefined;
    /**
     * The src property
     */
    src?: string | undefined;
    /**
     * The type property
     */
    type?: string | undefined;
    /**
     * The width property
     */
    width?: number | undefined;
}
