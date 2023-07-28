import {Critic_multimedia_resource} from './critic_multimedia_resource';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface Critic_multimedia extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * The resource property
     */
    resource?: Critic_multimedia_resource | undefined;
}
