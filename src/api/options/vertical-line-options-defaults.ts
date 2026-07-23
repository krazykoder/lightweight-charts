import { LineStyle } from '../../renderers/draw-line';

import { VerticalLineOptions } from '../../model/vertical-line-options';

export const verticalLineOptionsDefaults: VerticalLineOptions = {
    color: '#FF0000',
    lineWidth: 1,
    lineStyle: LineStyle.Solid,
    lineVisible: true,
    title: '',
    axisLabelVisible: true,
    labelBackgroundColor: '',
    labelTextColor: '',
    axisLabelVisibleAtEdge: false,
    time: 0 as any, // This should be provided by user
};
