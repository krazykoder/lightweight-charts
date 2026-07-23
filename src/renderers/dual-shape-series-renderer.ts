import { ensureNever } from '../helpers/assertions';

import { HoveredObject } from '../model/chart-model';
import { Coordinate } from '../model/coordinate';

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
import { ShapeSeriesRendererDataItem, ShapeSeriesRendererData } from './shape-series-renderer';

export interface DualShapeSeriesRendererData extends ShapeSeriesRendererData {
    options: ShapeSeriesRendererData['options'] & {
        hollowColor: string;
        hollowShapeBorderWidth: number;
        hollowShapeSize?: number;
    };
}

export class DualShapeSeriesRenderer extends ScaledRenderer {
    private _data: DualShapeSeriesRendererData | null = null;
    private _textWidthCache: TextWidthCache = new TextWidthCache();
    private _fontSize: number = -1;
    private _fontFamily: string = '';
    private _font: string = '';

    public setData(data: DualShapeSeriesRendererData): void {
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

        // Draw Background Line
        if (this._data.options.backgroundLineVisible) {
            ctx.beginPath();
            const y = this._data.options.backgroundLineY;

            let startX = 0;
            if (this._data.visibleRange.from === 0 && this._data.items.length > 0) {
                startX = this._data.items[0].x;
            }

            let endX = this._data.width;
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

            // Draw Hollow Square Background
            this._drawHollowBackground(ctx, item);

            // Draw Main Shape
            if (item.text !== undefined) {
                item.text.width = this._textWidthCache.measureText(ctx, item.text.content);
                item.text.height = this._fontSize;

                const shapeSize = this._data.options.size; // PER-POINT SIZE IGNORED for DualShapeSeries
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

    private _drawHollowBackground(ctx: CanvasRenderingContext2D, item: ShapeSeriesRendererDataItem): void {
        if (this._data === null) { return; }

        const size = this._data.options.size; // Base size
        const hollowSize = this._data.options.hollowShapeSize ?? (size * 1.2); // Default to 1.2x (as diameter) if not set
        const color = item.hollowColor || this._data.options.hollowColor;
        const lineWidth = this._data.options.hollowShapeBorderWidth;

        ctx.lineWidth = lineWidth;
        ctx.strokeStyle = color;

        // Draw centered square
        // drawSquare draws filled square, we want hollow. 
        // We can use strokeRect.
        // The size in drawSquare is "half size" (radius-like) or full size? 
        // Checking drawSquare implementation: 
        // export function drawSquare(ctx: CanvasRenderingContext2D, centerX: number, centerY: number, size: number, color: string): void { ... ctx.rect(centerX - size, centerY - size, size * 2, size * 2); ... }
        // So 'size' passed to drawSquare is half-width (radius).

        const halfSize = hollowSize / 2;
        ctx.beginPath();
        // ctx.rect(item.x - halfSize, item.y - halfSize, halfSize * 2, halfSize * 2);
        // Better to use a dedicated drawHollowSquare if we want consistent antialiasing or logic, but direct rect is fine.
        // To avoid overlapping with the shape if it's too small, we just draw it behind.

        ctx.rect(item.x - halfSize, item.y - halfSize, halfSize * 2, halfSize * 2);
        ctx.stroke();
    }
}

function drawShape(item: ShapeSeriesRendererDataItem, options: ShapeSeriesRendererData['options'], ctx: CanvasRenderingContext2D): void {
    const color = item.color || options.color;
    // CRITICAL: IGNORE item.size for DualShapeSeries as per requirements? 
    // Plan: "the size property of data points will be totally IGNORED"
    // So we use options.size.
    const size = options.size;
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
    const size = options.size; // IGNORE item.size
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
