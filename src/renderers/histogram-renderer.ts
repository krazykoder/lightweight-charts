import { PricedValue } from '../model/price-scale';
import { HistogramStyle } from '../model/series-options';
import { SeriesItemsIndexesRange, TimedValue, TimePointIndex } from '../model/time-data';

import { IPaneRenderer } from './ipane-renderer';

const showSpacingMinimalBarWidth = 1;
const alignToMinimalWidthLimit = 4;

export interface HistogramItem extends PricedValue, TimedValue {
	color: string;
}

export interface PaneRendererHistogramData {
	items: HistogramItem[];

	barSpacing: number;
	histogramBase: number;

	visibleRange: SeriesItemsIndexesRange | null;

	histogramStyle: HistogramStyle;
}

interface PrecalculatedItemCoordinates {
	left: number;
	right: number;
	roundedCenter: number;
	center: number;
	time: TimePointIndex;
}

export class PaneRendererHistogram implements IPaneRenderer {
	private _data: PaneRendererHistogramData | null = null;
	private _precalculatedCache: PrecalculatedItemCoordinates[] = [];

	public setData(data: PaneRendererHistogramData): void {
		this._data = data;
		this._precalculatedCache = [];
	}

	public draw(ctx: CanvasRenderingContext2D, pixelRatio: number, isHovered: boolean, hitTestData?: unknown): void {
		if (this._data === null || this._data.items.length === 0 || this._data.visibleRange === null) {
			return;
		}
		if (!this._precalculatedCache.length) {
			this._fillPrecalculatedCache(pixelRatio);
		}

		if (this._data.histogramStyle === HistogramStyle.Area) {
			this._drawArea(ctx, pixelRatio);
		} else {
			this._drawColumns(ctx, pixelRatio);
		}
	}

	private _drawColumns(ctx: CanvasRenderingContext2D, pixelRatio: number): void {
		if (this._data === null || this._data.items.length === 0 || this._data.visibleRange === null) {
			return;
		}

		const tickWidth = Math.max(1, Math.floor(pixelRatio));
		const histogramBase = Math.round((this._data.histogramBase) * pixelRatio);
		const topHistogramBase = histogramBase - Math.floor(tickWidth / 2);
		const bottomHistogramBase = topHistogramBase + tickWidth;

		for (let i = this._data.visibleRange.from; i < this._data.visibleRange.to; i++) {
			const item = this._data.items[i];
			const current = this._precalculatedCache[i - this._data.visibleRange.from];
			const y = Math.round(item.y * pixelRatio);
			ctx.fillStyle = item.color;

			let top: number;
			let bottom: number;

			if (y <= topHistogramBase) {
				top = y;
				bottom = bottomHistogramBase;
			} else {
				top = topHistogramBase;
				bottom = y - Math.floor(tickWidth / 2) + tickWidth;
			}

			ctx.fillRect(current.left, top, current.right - current.left + 1, bottom - top);
		}
	}

	private _drawArea(ctx: CanvasRenderingContext2D, pixelRatio: number): void {
		if (this._data === null || this._data.items.length === 0 || this._data.visibleRange === null) {
			return;
		}

		const histogramBase = Math.round((this._data.histogramBase) * pixelRatio);

		ctx.lineJoin = 'round';

		for (let i = this._data.visibleRange.from; i < this._data.visibleRange.to; i++) {
			const item = this._data.items[i];
			const current = this._precalculatedCache[i - this._data.visibleRange.from];
			const y = Math.round(item.y * pixelRatio);

			ctx.fillStyle = item.color;
			ctx.beginPath();

			// Strategy:
			// 1. Start at (current.roundedCenter, y)
			// 2. We need the next point to form a trapezoid. 
			// Check if i+1 is within visible range.
			if (i < this._data.visibleRange.to - 1) {
				const nextCache = this._precalculatedCache[i - this._data.visibleRange.from + 1];
				const nextItem = this._data.items[i + 1];
				const nextY = Math.round(nextItem.y * pixelRatio);

				ctx.fillStyle = nextItem.color;

				ctx.moveTo(current.roundedCenter, y);
				ctx.lineTo(nextCache.roundedCenter, nextY);
				ctx.lineTo(nextCache.roundedCenter, histogramBase);
				ctx.lineTo(current.roundedCenter, histogramBase);
				ctx.closePath();
				ctx.fill();
			} else {
				// Last visible point. 
				// If we want to be consistent with Line series, we don't draw anything after the last point 
				// unless we have the next point available.
				// But usually histogram items are discrete.
				// If we treat it as "area", a single point histogram area might be invisible if not connected?
				// Or maybe it should look like a step?
				// Detailed requirement: "Histogram Area should support perpoint coloring ... shape".
				// "Area" usually implies connecting points.
				// If we look at Line/Area renderer, they walk the line.
				// But here we need per-point color. The only way to have per-point color in a continuous area
				// is to draw segments individually.

				// So for the last point, if it's the very last data point, we might stop. 
				// If it's just the edge of visibility, maybe we shouldn't draw it or we need the next one.
				// However, precalculated cache is only for visible range.
				// Let's stick to drawing segments between i and i+1 provided both are in visible range.
			}
		}
	}

	// eslint-disable-next-line complexity
	private _fillPrecalculatedCache(pixelRatio: number): void {
		if (this._data === null || this._data.items.length === 0 || this._data.visibleRange === null) {
			this._precalculatedCache = [];
			return;
		}
		const spacing = Math.ceil(this._data.barSpacing * pixelRatio) <= showSpacingMinimalBarWidth ? 0 : Math.max(1, Math.floor(pixelRatio));
		const columnWidth = Math.round(this._data.barSpacing * pixelRatio) - spacing;

		this._precalculatedCache = new Array(this._data.visibleRange.to - this._data.visibleRange.from);

		for (let i = this._data.visibleRange.from; i < this._data.visibleRange.to; i++) {
			const item = this._data.items[i];
			// force cast to avoid ensureDefined call
			const x = Math.round(item.x * pixelRatio);
			let left: number;
			let right: number;

			if (columnWidth % 2) {
				const halfWidth = (columnWidth - 1) / 2;
				left = x - halfWidth;
				right = x + halfWidth;
			} else {
				// shift pixel to left
				const halfWidth = columnWidth / 2;
				left = x - halfWidth;
				right = x + halfWidth - 1;
			}
			this._precalculatedCache[i - this._data.visibleRange.from] = {
				left,
				right,
				roundedCenter: x,
				center: (item.x * pixelRatio),
				time: item.time,
			};
		}

		// correct positions
		for (let i = this._data.visibleRange.from + 1; i < this._data.visibleRange.to; i++) {
			const current = this._precalculatedCache[i - this._data.visibleRange.from];
			const prev = this._precalculatedCache[i - this._data.visibleRange.from - 1];
			if (current.time !== prev.time + 1) {
				continue;
			}
			if (current.left - prev.right !== (spacing + 1)) {
				// have to align
				if (prev.roundedCenter > prev.center) {
					// prev wasshifted to left, so add pixel to right
					prev.right = current.left - spacing - 1;
				} else {
					// extend current to left
					current.left = prev.right + spacing + 1;
				}
			}
		}

		let minWidth = Math.ceil(this._data.barSpacing * pixelRatio);
		for (let i = this._data.visibleRange.from; i < this._data.visibleRange.to; i++) {
			const current = this._precalculatedCache[i - this._data.visibleRange.from];
			// this could happen if barspacing < 1
			if (current.right < current.left) {
				current.right = current.left;
			}
			const width = current.right - current.left + 1;
			minWidth = Math.min(width, minWidth);
		}

		if (spacing > 0 && minWidth < alignToMinimalWidthLimit) {
			for (let i = this._data.visibleRange.from; i < this._data.visibleRange.to; i++) {
				const current = this._precalculatedCache[i - this._data.visibleRange.from];
				const width = current.right - current.left + 1;
				if (width > minWidth) {
					if (current.roundedCenter > current.center) {
						current.right -= 1;
					} else {
						current.left += 1;
					}
				}
			}
		}
	}
}
