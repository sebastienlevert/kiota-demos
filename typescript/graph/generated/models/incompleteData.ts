import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface IncompleteData extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * The service does not have source data before the specified time.
     */
    missingDataBeforeDateTime?: Date | undefined;
    /**
     * The OdataType property
     */
    odataType?: string | undefined;
    /**
     * Some data was not recorded due to excessive activity.
     */
    wasThrottled?: boolean | undefined;
}
