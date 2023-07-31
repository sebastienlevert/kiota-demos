import {deserializeIntoWorkbookChartAxis} from './deserializeIntoWorkbookChartAxis';
import {WorkbookChartAxis} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createWorkbookChartAxisFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoWorkbookChartAxis;
}
