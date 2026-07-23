import { HoveredObject } from '../model/chart-model';
import { Coordinate } from '../model/coordinate';
import { SeriesItemsIndexesRange, TimedValue } from '../model/time-data';

import { ScaledRenderer } from './scaled-renderer';
import { drawText, hitTestText } from './series-markers-text';
import { makeFont } from '../helpers/make-font';
import { TextWidthCache } from '../model/text-width-cache';

export interface CharShapeSeriesRendererDataItem extends TimedValue {
    y: Coordinate;
    size?: number;
    char?: string;
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

export interface CharShapeSeriesRendererData {
    items: CharShapeSeriesRendererDataItem[];
    visibleRange: SeriesItemsIndexesRange | null;
    options: {
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

export class CharShapeSeriesRenderer extends ScaledRenderer {
    private _data: CharShapeSeriesRendererData | null = null;
    private _textWidthCache: TextWidthCache = new TextWidthCache();
    private _fontSize: number = -1;
    private _fontFamily: string = '';
    private _font: string = '';

    public setData(data: CharShapeSeriesRendererData): void {
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
        ctx.font = this._font;

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
            if (item.text !== undefined) {
                item.text.width = this._textWidthCache.measureText(ctx, item.text.content);
                item.text.height = this._fontSize;

                const shapeSize = item.size || this._data.options.size;
                const margin = this._data.options.labelOffset;
                if (item.labelPosition === 'above') {
                    item.text.y = item.y - shapeSize - margin - item.text.height / 2 as Coordinate;
                } else {
                    item.text.y = item.y + shapeSize + margin + item.text.height / 2 as Coordinate;
                }
            }
            drawCharShape(item, this._data.options, ctx);
        }
    }
}

function drawCharShape(item: CharShapeSeriesRendererDataItem, options: CharShapeSeriesRendererData['options'], ctx: CanvasRenderingContext2D): void {
    const color = item.color || options.color;
    const size = item.size || options.size;
    const char = item.char;

    // Draw label first (using shared font)
    if (item.text !== undefined) {
        ctx.fillStyle = color;
        drawText(ctx, item.text.content, item.x - item.text.width / 2, item.text.y);
    }

    if (!char || size === 0) {
        return;
    }

    ctx.save();
    ctx.font = `${size}px "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif`;
    ctx.fillStyle = color;
    ctx.textAlign = 'center';

    // Draw the first character only, similar to CharSeries
    const firstChar = Array.from(char)[0];
    ctx.fillText(firstChar, item.x, item.y);

    ctx.restore();
}

function hitTestChar(item: CharShapeSeriesRendererDataItem, options: CharShapeSeriesRendererData['options'], x: Coordinate, y: Coordinate): boolean {
    const size = item.size || options.size;
    if (!item.char || size === 0) {
        return false;
    }

    const halfSize = size / 2;
    return x >= item.x - halfSize && x <= item.x + halfSize &&
        y >= item.y - halfSize && y <= item.y + halfSize;
}
