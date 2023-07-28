import {SearchResultsAnswer} from './searchResultsAnswer';
import {serializeAnswer} from './serializeAnswer';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeSearchResultsAnswer(writer: SerializationWriter, searchResultsAnswer: SearchResultsAnswer | undefined = {} as SearchResultsAnswer) : void {
        serializeAnswer(writer, searchResultsAnswer)
}
