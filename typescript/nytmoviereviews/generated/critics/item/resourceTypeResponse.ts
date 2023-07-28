import {Critic} from '../../models/critic';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface ResourceTypeResponse extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * The copyright property
     */
    copyright?: string | undefined;
    /**
     * The num_results property
     */
    num_results?: number | undefined;
    /**
     * The results property
     */
    results?: Critic[] | undefined;
    /**
     * The status property
     */
    status?: string | undefined;
}
