import { Series } from '../../model/series';
import { VerticalLine } from '../../model/vertical-line';
import { IPaneRenderer } from '../../renderers/ipane-renderer';
import { VerticalLineRenderer, VerticalLineRendererData } from '../../renderers/vertical-line-renderer';
import { IPaneView } from './ipane-view';

export class VerticalLinePaneView implements IPaneView {
    private readonly _line: VerticalLine;
    private readonly _series: Series;
    private readonly _renderer: VerticalLineRenderer = new VerticalLineRenderer();
    private _invalidated: boolean = true;
    private readonly _rendererData: VerticalLineRendererData = {
        x: null,
        color: '',
        lineWidth: 1,
        lineStyle: 0,
        visible: false,
    };

    public constructor(series: Series, line: VerticalLine) {
        this._series = series;
        this._line = line;
    }

    public update(): void {
        this._invalidated = true;
    }

    public renderer(): IPaneRenderer | null {
        if (!this._series.visible()) {
            return null;
        }

        if (this._invalidated) {
            this._updateImpl();
            this._invalidated = false;
        }

        this._renderer.setData(this._rendererData);

        return this._renderer;
    }

    private _updateImpl(): void {
        const options = this._line.options();
        const data = this._rendererData;

        data.visible = false;

        if (!options.lineVisible) {
            return;
        }

        const x = this._line.xCoord();
        if (x === null) {
            return;
        }

        data.x = x;
        data.color = options.color;
        data.lineWidth = options.lineWidth;
        data.lineStyle = options.lineStyle;
        data.visible = true;
    }
}
