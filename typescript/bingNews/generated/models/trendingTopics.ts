import {Answer} from './answer';
import {NewsTopic} from './newsTopic';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface TrendingTopics extends Answer, Parsable {
    /**
     * A list of trending news topics on Bing
     */
    value?: NewsTopic[] | undefined;
}
