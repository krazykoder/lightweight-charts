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
import { drawText, hitTestText } from './series-markers-text';
import { makeFont } from '../helpers/make-font';
import { TextWidthCache } from '../model/text-width-cache';

export interface ShapeSeriesRendererDataItem extends TimedValue {
    y: Coordinate;
    size?: number;
    shape?: SeriesMarkerShape;
    color?: string;
    internalId: number;
    externalId?: string;
    text?: {
        content: string;
        y: Coordinate;
        width: number;
        height: number;
    };
    labelPosition?: 'above' | 'below';
}

export interface ShapeSeriesRendererData {
    items: ShapeSeriesRendererDataItem[];
    visibleRange: SeriesItemsIndexesRange | null;
    options: {
        shape?: SeriesMarkerShape;
        color: string;
        size: number;
        labelOffset: number;
        backgroundLineVisible: boolean;
        backgroundLineColor: string;
        backgroundLineWidth: number;
        backgroundLineY: Coordinate;
    };
    width: number;
}

export class ShapeSeriesRenderer extends ScaledRenderer {
    private _data: ShapeSeriesRendererData | null = null;
    private _textWidthCache: TextWidthCache = new TextWidthCache();
    private _fontSize: number = -1;
    private _fontFamily: string = '';
    private _font: string = '';

    public setData(data: ShapeSeriesRendererData): void {
        this._data = data;
    }

    public setParams(fontSize: number, fontFamily: string): void {
        if (this._fontSize !== fontSize || this._fontFamily !== fontFamily) {
            this._fontSize = fontSize;
            this._fontFamily = fontFamily;
            this._font = makeFont(fontSize, fontFamily);
            this._textWidthCache.reset();
        }
    }

    public hitTest(x: Coordinate, y: Coordinate): HoveredObject | null {
        if (this._data === null || this._data.visibleRange === null) {
            return null;
        }

        for (let i = this._data.visibleRange.from; i < this._data.visibleRange.to; i++) {
            const item = this._data.items[i];

            if (item.text !== undefined && hitTestText(item.x, item.text.y, item.text.width, item.text.height, x, y)) {
                return {
                    hitTestData: item.internalId,
                    externalId: item.externalId,
                };
            }

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

        ctx.textBaseline = 'middle';
        ctx.font = this._font;

        if (this._data.options.backgroundLineVisible) {
            ctx.beginPath();
            const y = this._data.options.backgroundLineY;

            // Determine start and end X for the line
            let startX = 0;
            // If there are no items before the visible range, start at the first visible item
            if (this._data.visibleRange.from === 0 && this._data.items.length > 0) {
                startX = this._data.items[0].x;
            }

            let endX = this._data.width;
            // If there are no items after the visible range, end at the last visible item
            if (this._data.visibleRange.to === this._data.items.length && this._data.items.length > 0) {
                endX = this._data.items[this._data.items.length - 1].x;
            }

            ctx.lineWidth = this._data.options.backgroundLineWidth;
            ctx.strokeStyle = this._data.options.backgroundLineColor;

            ctx.beginPath();
            ctx.moveTo(startX, y);
            ctx.lineTo(endX, y);
            ctx.stroke();
        }

        for (let i = this._data.visibleRange.from; i < this._data.visibleRange.to; i++) {
            const item = this._data.items[i];
            if (item.text !== undefined) {
                item.text.width = this._textWidthCache.measureText(ctx, item.text.content);
                item.text.height = this._fontSize;

                // Calculate Y position for text
                const shapeSize = item.size || this._data.options.size;
                const margin = this._data.options.labelOffset;
                if (item.labelPosition === 'above') {
                    item.text.y = item.y - shapeSize - margin - item.text.height / 2 as Coordinate;
                } else {
                    item.text.y = item.y + shapeSize + margin + item.text.height / 2 as Coordinate;
                }
            }
            drawShape(item, this._data.options, ctx);
        }
    }
}

function drawShape(item: ShapeSeriesRendererDataItem, options: ShapeSeriesRendererData['options'], ctx: CanvasRenderingContext2D): void {
    const color = item.color || options.color;
    const size = item.size || options.size;
    const shape = item.shape || options.shape;

    if (!shape || size === 0) {
        return;
    }

    ctx.fillStyle = color;

    if (item.text !== undefined) {
        drawText(ctx, item.text.content, item.x - item.text.width / 2, item.text.y);
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

    if (!shape || size === 0) {
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
