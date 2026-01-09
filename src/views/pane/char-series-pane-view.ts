import { ChartModel } from '../../model/chart-model';
import { Coordinate } from '../../model/coordinate';
import { Series } from '../../model/series';
import { CharSeriesPlotRow } from '../../model/series-data';
import { CharSeriesOptions } from '../../model/series-options';
import { visibleTimedValues } from '../../model/time-data';
import { IPaneRenderer } from '../../renderers/ipane-renderer';
import {
    CharSeriesRenderer,
    CharSeriesRendererData,
} from '../../renderers/char-series-renderer';

import { IUpdatablePaneView, UpdateType } from './iupdatable-pane-view';

export class SeriesCharPaneView implements IUpdatablePaneView {
    private readonly _series: Series<'Char'>;
    private readonly _model: ChartModel;
    private _data: CharSeriesRendererData;

    private _invalidated: boolean = true;
    private _dataInvalidated: boolean = true;

    private _renderer: CharSeriesRenderer = new CharSeriesRenderer();

    public constructor(series: Series<'Char'>, model: ChartModel) {
        this._series = series;
        this._model = model;
        const options = series.options() as CharSeriesOptions;
        this._data = {
            items: [],
            visibleRange: null,
            options: {
                color: options.color,
                size: options.size,
                offset: options.offset,
            },
        };
    }

    public update(updateType?: UpdateType): void {
        this._invalidated = true;
        if (updateType === 'data') {
            this._dataInvalidated = true;
        }
    }

    public renderer(height: number, width: number): IPaneRenderer | null {
        if (!this._series.visible()) {
            return null;
        }

        if (this._invalidated) {
            this._makeValid();
        }

        const options = this._series.options() as CharSeriesOptions;
        this._data.options.color = options.color;
        this._data.options.size = options.size;
        this._data.options.offset = options.offset;

        this._renderer.setData(this._data);

        return this._renderer;
    }

    protected _makeValid(): void {
        const priceScale = this._series.priceScale();
        const timeScale = this._model.timeScale();
        const visibleBars = timeScale.visibleStrictRange();

        if (this._dataInvalidated) {
            this._data.items = [];
            const bars = this._series.bars();
            bars.rows().forEach((bar: CharSeriesPlotRow) => {
                const time = bar.index;
                const price = bar.value[3]; // Close price
                this._data.items.push({
                    time: time,
                    x: 0 as Coordinate,
                    y: 0 as Coordinate,
                    size: bar.size,
                    color: bar.color,
                    char: bar.char,
                    internalId: time,
                    externalId: undefined,
                    price: price,
                });
            });
            this._dataInvalidated = false;
        }

        this._data.visibleRange = null;
        if (visibleBars === null) {
            return;
        }

        if (this._data.items.length === 0) {
            return;
        }

        const firstValue = this._series.firstValue();
        if (firstValue === null) {
            return;
        }

        this._data.visibleRange = visibleTimedValues(this._data.items, visibleBars, true);

        for (let index = this._data.visibleRange.from; index < this._data.visibleRange.to; index++) {
            const item = this._data.items[index];
            item.x = timeScale.indexToCoordinate(item.time);
            item.y = priceScale.priceToCoordinate(item.price, firstValue.value);
        }

        this._invalidated = false;
    }
}
