import {deserializeIntoWorkbookChartSeries} from './deserializeIntoWorkbookChartSeries';
import {WorkbookChartSeries} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createWorkbookChartSeriesFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoWorkbookChartSeries;
}
