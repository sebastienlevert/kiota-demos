import {deserializeIntoAnswer} from './deserializeIntoAnswer';
import {SearchResultsAnswer} from './searchResultsAnswer';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoSearchResultsAnswer(searchResultsAnswer: SearchResultsAnswer | undefined = {} as SearchResultsAnswer) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoAnswer(searchResultsAnswer),
        "totalEstimatedMatches": n => { searchResultsAnswer.totalEstimatedMatches = n.getNumberValue(); },
    }
}
