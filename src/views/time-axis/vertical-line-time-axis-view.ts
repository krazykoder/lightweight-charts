import { generateContrastColors } from '../../helpers/color';

import { Series } from '../../model/series';
import { VerticalLine } from '../../model/vertical-line';
import { TimeAxisViewRenderer, TimeAxisViewRendererData } from '../../renderers/time-axis-view-renderer';
import { ITimeAxisView } from './itime-axis-view';

export class VerticalLineTimeAxisView implements ITimeAxisView {
    private readonly _line: VerticalLine;
    private readonly _renderer: TimeAxisViewRenderer = new TimeAxisViewRenderer();
    private _invalidated: boolean = true;
    private readonly _rendererData: TimeAxisViewRendererData = {
        visible: false,
        background: '#4c525e',
        color: 'white',
        text: '',
        width: 0,
        coordinate: NaN,
    };

    public constructor(series: Series, line: VerticalLine) {
        this._line = line;
    }

    public update(): void {
        this._invalidated = true;
    }

    public renderer(): TimeAxisViewRenderer {
        if (this._invalidated) {
            this._updateImpl();
            this._invalidated = false;
        }

        this._renderer.setData(this._rendererData);

        return this._renderer;
    }

    private _updateImpl(): void {
        const data = this._rendererData;
        data.visible = false;

        const options = this._line.options();
        if (!options.axisLabelVisible) {
            return;
        }

        const x = this._line.xCoord();
        if (x === null) {
            return;
        }

        data.coordinate = x;
        data.text = options.title;
        data.visible = true;
        data.width = this._line.model().timeScale().width();
        data.visibleAtEdge = options.axisLabelVisibleAtEdge;

        const background = options.labelBackgroundColor !== '' ? options.labelBackgroundColor : options.color;

        data.background = background;

        if (options.labelTextColor !== '') {
            data.color = options.labelTextColor;
        } else {
            data.color = generateContrastColors(background).foreground;
        }
    }
}
