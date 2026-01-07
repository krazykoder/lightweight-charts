import { ensureNever } from '../../helpers/assertions';

import { ChartModel } from '../../model/chart-model';
import { Coordinate } from '../../model/coordinate';
import { PriceScale } from '../../model/price-scale';
import { Series } from '../../model/series';
import { ShapeSeriesPlotRow } from '../../model/series-data';
import { ShapeSeriesOptions } from '../../model/series-options';
import { visibleTimedValues } from '../../model/time-data';
import { IPaneRenderer } from '../../renderers/ipane-renderer';
import {
    ShapeSeriesRenderer,
    ShapeSeriesRendererData,
    ShapeSeriesRendererDataItem,
} from '../../renderers/shape-series-renderer';

import { IUpdatablePaneView, UpdateType } from './iupdatable-pane-view';

export class SeriesShapePaneView implements IUpdatablePaneView {
    private readonly _series: Series<'Shape'>;
    private readonly _model: ChartModel;
    private _data: ShapeSeriesRendererData;

    private _invalidated: boolean = true;
    private _dataInvalidated: boolean = true;
    private _paneHeight: number = 0;

    private _renderer: ShapeSeriesRenderer = new ShapeSeriesRenderer();

    public constructor(series: Series<'Shape'>, model: ChartModel) {
        this._series = series;
        this._model = model;
        const options = series.options();
        this._data = {
            items: [],
            visibleRange: null,
            options: {
                shape: options.shape,
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
        this._data.options.shape = options.shape;
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
            const dummyItem: ShapeSeriesRendererDataItem = {
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
        const options = this._series.options() as ShapeSeriesOptions;

        if (this._dataInvalidated) {
            this._data.items = [];
            const bars = this._series.bars();
            bars.rows().forEach((bar: ShapeSeriesPlotRow) => {
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
                    size: bar.size, // Use bar size if available (though type definition might need check)
                    shape: bar.shape,
                    color: bar.color,
                    internalId: time,
                    externalId: undefined,
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

    private _calculateY(item: ShapeSeriesRendererDataItem, options: ShapeSeriesOptions, priceScale: PriceScale, firstValue: number): Coordinate {
        const size = item.size || options.size;
        // Padding between levels. 
        // Use the series-level options.size for the step to ensure consistent spacing for the whole series.
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
