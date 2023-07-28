import {createCriticFromDiscriminatorValue} from '../../models/createCriticFromDiscriminatorValue';
import {Critic} from '../../models/critic';
import {serializeCritic} from '../../models/serializeCritic';
import {ResourceTypeResponse} from './resourceTypeResponse';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoResourceTypeResponse(resourceTypeResponse: ResourceTypeResponse | undefined = {} as ResourceTypeResponse) : Record<string, (node: ParseNode) => void> {
    return {
        "copyright": n => { resourceTypeResponse.copyright = n.getStringValue(); },
        "num_results": n => { resourceTypeResponse.num_results = n.getNumberValue(); },
        "results": n => { resourceTypeResponse.results = n.getCollectionOfObjectValues<Critic>(createCriticFromDiscriminatorValue); },
        "status": n => { resourceTypeResponse.status = n.getStringValue(); },
    }
}
