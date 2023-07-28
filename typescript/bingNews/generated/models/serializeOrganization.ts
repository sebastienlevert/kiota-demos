import {ImageObject} from './imageObject';
import {Organization} from './organization';
import {serializeImageObject} from './serializeImageObject';
import {serializeThing} from './serializeThing';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeOrganization(writer: SerializationWriter, organization: Organization | undefined = {} as Organization) : void {
        serializeThing(writer, organization)
}
