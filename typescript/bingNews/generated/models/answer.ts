import {Query} from './query';
import {Response} from './response';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface Answer extends Parsable, Response {
    /**
     * The followUpQueries property
     */
    followUpQueries?: Query[] | undefined;
}
