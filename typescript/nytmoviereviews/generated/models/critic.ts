import {Critic_multimedia} from './critic_multimedia';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface Critic extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * The bio property
     */
    bio?: string | undefined;
    /**
     * The display_name property
     */
    display_name?: string | undefined;
    /**
     * The multimedia property
     */
    multimedia?: Critic_multimedia | undefined;
    /**
     * The seo_name property
     */
    seo_name?: string | undefined;
    /**
     * The sort_name property
     */
    sort_name?: string | undefined;
    /**
     * The status property
     */
    status?: string | undefined;
}
