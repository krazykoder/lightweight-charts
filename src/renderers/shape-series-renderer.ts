import { ensureNever } from '../helpers/assertions';

import { HoveredObject } from '../model/chart-model';
import { Coordinate } from '../model/coordinate';
import { SeriesMarkerShape } from '../model/series-markers';
import { SeriesItemsIndexesRange, TimedValue } from '../model/time-data';

import { ScaledRenderer } from './scaled-renderer';
import { drawArrow, hitTestArrow } from './series-markers-arrow';
import { drawCircle, hitTestCircle } from './series-markers-circle';
import { drawSquare, hitTestSquare } from './series-markers-square';
import { drawTriangle, hitTestTriangle } from './series-markers-triangle';
import { drawDiamond, hitTestDiamond } from './series-markers-diamond';
import { drawCross, hitTestCross } from './series-markers-cross';
import { drawPlus, hitTestPlus } from './series-markers-plus';

export interface ShapeSeriesRendererDataItem extends TimedValue {
    y: Coordinate;
    size?: number;
    shape?: SeriesMarkerShape;
    color?: string;
    internalId: number;
    externalId?: string;
}

export interface ShapeSeriesRendererData {
    items: ShapeSeriesRendererDataItem[];
    visibleRange: SeriesItemsIndexesRange | null;
    options: {
        shape: SeriesMarkerShape;
        color: string;
        size: number;
    };
}

export class ShapeSeriesRenderer extends ScaledRenderer {
    private _data: ShapeSeriesRendererData | null = null;

    public setData(data: ShapeSeriesRendererData): void {
        this._data = data;
    }

    public hitTest(x: Coordinate, y: Coordinate): HoveredObject | null {
        if (this._data === null || this._data.visibleRange === null) {
            return null;
        }

        for (let i = this._data.visibleRange.from; i < this._data.visibleRange.to; i++) {
            const item = this._data.items[i];
            if (hitTestShape(item, this._data.options, x, y)) {
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

        for (let i = this._data.visibleRange.from; i < this._data.visibleRange.to; i++) {
            const item = this._data.items[i];
            drawShape(item, this._data.options, ctx);
        }
    }
}

function drawShape(item: ShapeSeriesRendererDataItem, options: ShapeSeriesRendererData['options'], ctx: CanvasRenderingContext2D): void {
    const color = item.color || options.color;
    const size = item.size || options.size;
    const shape = item.shape || options.shape;

    ctx.fillStyle = color;

    if (size === 0) {
        return;
    }

    switch (shape) {
        case 'arrowDown':
            drawArrow(false, ctx, item.x, item.y, size, 0, color);
            return;
        case 'arrowUp':
            drawArrow(true, ctx, item.x, item.y, size, 0, color);
            return;
        case 'triangleDown':
            drawTriangle(false, ctx, item.x, item.y, size, 0, color);
            return;
        case 'triangleUp':
            drawTriangle(true, ctx, item.x, item.y, size, 0, color);
            return;
        case 'circle':
            drawCircle(ctx, item.x, item.y, size, 0, color);
            return;
        case 'square':
            drawSquare(ctx, item.x, item.y, size, 0, color);
            return;
        case 'diamond':
            drawDiamond(ctx, item.x, item.y, size);
            return;
        case 'cross':
            drawCross(ctx, item.x, item.y, size);
            return;
        case 'plus':
            drawPlus(ctx, item.x, item.y, size);
            return;
    }

    ensureNever(shape);
}

function hitTestShape(item: ShapeSeriesRendererDataItem, options: ShapeSeriesRendererData['options'], x: Coordinate, y: Coordinate): boolean {
    const size = item.size || options.size;
    const shape = item.shape || options.shape;

    if (size === 0) {
        return false;
    }

    switch (shape) {
        case 'arrowUp':
            return hitTestArrow(true, item.x, item.y, size, x, y);
        case 'arrowDown':
            return hitTestArrow(false, item.x, item.y, size, x, y);
        case 'triangleUp':
            return hitTestTriangle(true, item.x, item.y, size, x, y);
        case 'triangleDown':
            return hitTestTriangle(false, item.x, item.y, size, x, y);
        case 'circle':
            return hitTestCircle(item.x, item.y, size, x, y);
        case 'square':
            return hitTestSquare(item.x, item.y, size, x, y);
        case 'diamond':
            return hitTestDiamond(item.x, item.y, size, x, y);
        case 'cross':
            return hitTestCross(item.x, item.y, size, x, y);
        case 'plus':
            return hitTestPlus(item.x, item.y, size, x, y);
    }

    return false;
}
