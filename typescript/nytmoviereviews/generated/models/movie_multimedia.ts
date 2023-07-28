import {Movie_multimedia_resource} from './movie_multimedia_resource';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface Movie_multimedia extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * The resource property
     */
    resource?: Movie_multimedia_resource | undefined;
}
