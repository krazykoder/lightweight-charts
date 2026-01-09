import { HoveredObject } from '../model/chart-model';
import { Coordinate } from '../model/coordinate';
import { SeriesItemsIndexesRange, TimedValue } from '../model/time-data';

import { ScaledRenderer } from './scaled-renderer';

export interface CharSeriesRendererDataItem extends TimedValue {
    y: Coordinate;
    size?: number;
    color?: string;
    char?: string;
    internalId: number;
    externalId?: string;
    price: number;
}

export interface CharSeriesRendererData {
    items: CharSeriesRendererDataItem[];
    visibleRange: SeriesItemsIndexesRange | null;
    options: {
        color: string;
        size: number;
        offset: number;
    };
}

export class CharSeriesRenderer extends ScaledRenderer {
    private _data: CharSeriesRendererData | null = null;

    public setData(data: CharSeriesRendererData): void {
        this._data = data;
    }

    public hitTest(x: Coordinate, y: Coordinate): HoveredObject | null {
        if (this._data === null || this._data.visibleRange === null) {
            return null;
        }

        for (let i = this._data.visibleRange.from; i < this._data.visibleRange.to; i++) {
            const item = this._data.items[i];
            if (hitTestChar(item, this._data.options, x, y)) {
                return {
                    hitTestData: item.internalId,
                    externalId: item.externalId,
                };
            }
        }

        return null;
    }

    protected _drawImpl(ctx: CanvasRenderingContext2D): void {
        if (this._data === null || this._data.visibleRange === null) {
            return;
        }

        ctx.textBaseline = 'middle';
        ctx.textAlign = 'center';

        for (let i = this._data.visibleRange.from; i < this._data.visibleRange.to; i++) {
            const item = this._data.items[i];
            if (item.char) {
                drawChar(item, this._data.options, ctx);
            }
        }
    }
}

function drawChar(item: CharSeriesRendererDataItem, options: CharSeriesRendererData['options'], ctx: CanvasRenderingContext2D): void {
    const color = item.color || options.color;
    const size = item.size || options.size;
    const char = item.char;

    if (!char) {
        return;
    }

    ctx.font = `${size}px "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif`;
    ctx.fillStyle = color;
    // Only draw the first character
    const firstChar = Array.from(char)[0];
    // Apply offset: positive moves char up (smaller y), negative moves down (larger y)
    const yPosition = item.y - options.offset as Coordinate;
    ctx.fillText(firstChar, item.x, yPosition);
}

function hitTestChar(item: CharSeriesRendererDataItem, options: CharSeriesRendererData['options'], x: Coordinate, y: Coordinate): boolean {
    const size = item.size || options.size;
    if (!item.char) {
        return false;
    }

    // Apply offset to hit test area
    const yPosition = item.y - options.offset;
    const halfSize = size / 2;
    return x >= item.x - halfSize && x <= item.x + halfSize &&
        y >= yPosition - halfSize && y <= yPosition + halfSize;
}
