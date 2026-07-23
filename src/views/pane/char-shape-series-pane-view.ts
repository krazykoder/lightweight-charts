import { ensureNever } from '../../helpers/assertions';

import { ChartModel } from '../../model/chart-model';
import { Coordinate } from '../../model/coordinate';
import { PriceScale } from '../../model/price-scale';
import { Series } from '../../model/series';
import { CharShapeSeriesPlotRow } from '../../model/series-data';
import { CharShapeSeriesStyleOptions } from '../../model/series-options';
import { visibleTimedValues } from '../../model/time-data';
import { IPaneRenderer } from '../../renderers/ipane-renderer';
import {
    CharShapeSeriesRenderer,
    CharShapeSeriesRendererData,
    CharShapeSeriesRendererDataItem,
} from '../../renderers/char-shape-series-renderer';

import { IUpdatablePaneView, UpdateType } from './iupdatable-pane-view';

export class SeriesCharShapePaneView implements IUpdatablePaneView {
    private readonly _series: Series<'CharShape'>;
    private readonly _model: ChartModel;
    private _data: CharShapeSeriesRendererData;

    private _invalidated: boolean = true;
    private _dataInvalidated: boolean = true;
    private _paneHeight: number = 0;

    private _renderer: CharShapeSeriesRenderer = new CharShapeSeriesRenderer();

    public constructor(series: Series<'CharShape'>, model: ChartModel) {
        this._series = series;
        this._model = model;
        const options = series.options();
        this._data = {
            items: [],
            visibleRange: null,
            options: {
                color: options.color,
                size: options.size,
                labelOffset: options.labelOffset,
                backgroundLineVisible: options.backgroundLineVisible,
                backgroundLineColor: options.backgroundLineColor,
                backgroundLineWidth: options.backgroundLineWidth,
                backgroundLineY: 0 as Coordinate,
            },
            width: 0,
        };
    }

    public update(updateType?: UpdateType): void {
        this._invalidated = true;
        if (updateType === 'data') {
            this._dataInvalidated = true;
        }
    }

    public renderer(height: number, width: number, addAnchors?: boolean): IPaneRenderer | null {
        if (!this._series.visible()) {
            return null;
        }

        if (height !== this._paneHeight) {
            this._paneHeight = height;
            this._invalidated = true;
        }

        if (this._invalidated) {
            this._makeValid();
        }

        const options = this._series.options();
        this._data.options.color = options.color;
        this._data.options.size = options.size;
        this._data.options.labelOffset = options.labelOffset;
        this._data.options.backgroundLineVisible = options.backgroundLineVisible;
        this._data.options.backgroundLineColor = options.backgroundLineColor;
        this._data.options.backgroundLineWidth = options.backgroundLineWidth;

        // Calculate background line Y
        const priceScale = this._series.priceScale();
        const firstValue = this._series.firstValue();
        if (firstValue !== null) {
            const dummyItem: CharShapeSeriesRendererDataItem = {
                time: 0 as unknown as any,
                x: 0 as Coordinate,
                y: 0 as Coordinate,
                internalId: 0,
            };
            this._data.options.backgroundLineY = this._calculateY(dummyItem, options, priceScale, firstValue.value);
        }

        this._data.width = width;

        this._renderer.setData(this._data);
        this._renderer.setParams(this._model.options().layout.fontSize, this._model.options().layout.fontFamily);

        return this._renderer;
    }

    protected _makeValid(): void {
        const priceScale = this._series.priceScale();
        const timeScale = this._model.timeScale();
        const visibleBars = timeScale.visibleStrictRange();
        const options = this._series.options() as CharShapeSeriesStyleOptions;

        if (this._dataInvalidated) {
            this._data.items = [];
            const bars = this._series.bars();
            bars.rows().forEach((bar: CharShapeSeriesPlotRow) => {
                const time = bar.index;

                // Truncate text to 20 chars
                let textObj = undefined;
                if (bar.text) {
                    textObj = {
                        content: bar.text.substring(0, 20),
                        y: 0 as Coordinate,
                        width: 0,
                        height: 0,
                    };
                }

                const labelPosition = options.position === 'bottom' ? 'above' : 'below';

                this._data.items.push({
                    time: time,
                    x: 0 as Coordinate,
                    y: 0 as Coordinate,
                    size: bar.size,
                    char: bar.char,
                    color: bar.color,
                    internalId: time,
                    externalId: undefined, // Series doesn't seem to persist externalId in rows in this version?
                    text: textObj,
                    labelPosition: labelPosition,
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

            // Calculate Y
            item.y = this._calculateY(item, options, priceScale, firstValue.value);
        }

        this._invalidated = false;
    }

    private _calculateY(item: CharShapeSeriesRendererDataItem, options: CharShapeSeriesStyleOptions, priceScale: PriceScale, firstValue: number): Coordinate {
        const size = item.size || options.size;
        // Padding between levels. 
        const step = options.size + options.levelSpacing;
        const levelOffset = options.level * step;

        switch (options.position) {
            case 'top':
                return options.margin + levelOffset + size / 2 as Coordinate;
            case 'bottom':
                return this._paneHeight - options.margin - levelOffset - size / 2 as Coordinate;
            case 'value':
                return priceScale.priceToCoordinate(options.fixedValue, firstValue);
        }
        ensureNever(options.position);
    }
}
