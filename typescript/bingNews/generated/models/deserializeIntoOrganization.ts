import {createImageObjectFromDiscriminatorValue} from './createImageObjectFromDiscriminatorValue';
import {deserializeIntoThing} from './deserializeIntoThing';
import {ImageObject} from './imageObject';
import {Organization} from './organization';
import {serializeImageObject} from './serializeImageObject';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoOrganization(organization: Organization | undefined = {} as Organization) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoThing(organization),
    }
}
