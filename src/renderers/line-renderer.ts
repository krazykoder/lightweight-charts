import { PricedValue } from '../model/price-scale';
import { SeriesItemsIndexesRange, TimedValue } from '../model/time-data';

import { applyAlpha } from '../helpers/color';
import { LinePoint, LineStyle, LineType, LineWidth, setLineStyle } from './draw-line';
import { ScaledRenderer } from './scaled-renderer';
import { walkLine } from './walk-line';

export type LineItem = TimedValue & PricedValue & LinePoint & { color?: string };

export interface PaneRendererLineDataBase {
	lineType: LineType;

	items: LineItem[];

	barWidth: number;

	lineWidth: LineWidth;
	lineStyle: LineStyle;

	visibleRange: SeriesItemsIndexesRange | null;

	baseLevelCoordinate?: number;

	pointColorAreaAlpha?: number;
}

export abstract class PaneRendererLineBase<TData extends PaneRendererLineDataBase> extends ScaledRenderer {
	protected _data: TData | null = null;

	public setData(data: TData): void {
		this._data = data;
	}

	protected _drawImpl(ctx: CanvasRenderingContext2D): void {
		if (this._data === null || this._data.items.length === 0 || this._data.visibleRange === null) {
			return;
		}

		ctx.lineCap = 'butt';
		ctx.lineWidth = this._data.lineWidth;

		setLineStyle(ctx, this._data.lineStyle);

		ctx.strokeStyle = this._strokeStyle(ctx);
		ctx.lineJoin = 'round';

		if (this._data.items.length === 1) {
			ctx.beginPath();

			const point = this._data.items[0];
			ctx.moveTo(point.x - this._data.barWidth / 2, point.y);
			ctx.lineTo(point.x + this._data.barWidth / 2, point.y);

			if (point.color !== undefined) {
				ctx.strokeStyle = point.color;
			}

			ctx.stroke();
		} else {
			this._drawLine(ctx, this._data);
		}
	}

	protected _drawLine(ctx: CanvasRenderingContext2D, data: TData): void {
		ctx.beginPath();
		walkLine(ctx, data.items, data.lineType, data.visibleRange as SeriesItemsIndexesRange);
		ctx.stroke();
	}

	protected abstract _strokeStyle(ctx: CanvasRenderingContext2D): CanvasRenderingContext2D['strokeStyle'];
}

export interface PaneRendererLineData extends PaneRendererLineDataBase {
	lineColor: string;
}

export class PaneRendererLine extends PaneRendererLineBase<PaneRendererLineData> {
	/**
	 * Similar to {@link walkLine}, but supports color changes
	 */
	protected override _drawLine(ctx: CanvasRenderingContext2D, data: PaneRendererLineData): void {
		const { items, visibleRange, lineType, lineColor } = data;
		if (items.length === 0 || visibleRange === null) {
			return;
		}

		ctx.beginPath();

		let i = visibleRange.from;
		const firstItem = items[i];
		ctx.moveTo(firstItem.x, firstItem.y);

		let prevStrokeStyle = firstItem.color ?? lineColor;
		ctx.strokeStyle = prevStrokeStyle;

		const changeColor = (color: string) => {
			ctx.stroke();
			ctx.beginPath();
			ctx.strokeStyle = color;
			prevStrokeStyle = color;
		};

		i++;

		if (lineType === LineType.WithSteps) {
			for (; i < visibleRange.to; i++) {
				const currItem = items[i];
				const prevItem = items[i - 1];
				const currentStrokeStyle = currItem.color ?? lineColor;

				const midX = (prevItem.x + currItem.x) / 2;

				ctx.lineTo(midX, prevItem.y);

				if (currentStrokeStyle !== prevStrokeStyle) {
					changeColor(currentStrokeStyle);
					ctx.moveTo(midX, prevItem.y);
				}

				ctx.lineTo(midX, currItem.y);
				ctx.lineTo(currItem.x, currItem.y);
			}
		} else if (lineType === LineType.WithGaps) {
			let isGap = true;
			for (; i < visibleRange.to; i++) {
				const currItem = items[i];
				const prevItem = items[i - 1];
				const currentStrokeStyle = currItem.color ?? lineColor;
				const currPrice = currItem.price;

				if (currentStrokeStyle !== prevStrokeStyle) {
					changeColor(currentStrokeStyle);
					ctx.moveTo(currItem.x, prevItem.y);
				}

				if (currPrice === null) {
					isGap = true;
					continue;
				}

				if (isGap) {
					ctx.moveTo(currItem.x, currItem.y);
					isGap = false;
				}

				ctx.lineTo(currItem.x, currItem.y);
			}
		} else if (lineType === LineType.Circle) {
			for (; i < visibleRange.to; i++) {
				const item = items[i];
				const itemColor = item.color ?? lineColor;

				if (itemColor !== prevStrokeStyle) {
					ctx.stroke();
					ctx.beginPath();
					ctx.strokeStyle = itemColor;
					ctx.fillStyle = itemColor;
					prevStrokeStyle = itemColor;
				}

				ctx.moveTo(item.x + ctx.lineWidth / 2, item.y);
				ctx.arc(item.x, item.y, ctx.lineWidth / 2, 0, 2 * Math.PI);
			}
		} else if (lineType === LineType.Cross) {
			for (; i < visibleRange.to; i++) {
				const item = items[i];
				const itemColor = item.color ?? lineColor;

				if (itemColor !== prevStrokeStyle) {
					ctx.stroke();
					ctx.beginPath();
					ctx.strokeStyle = itemColor;
					prevStrokeStyle = itemColor;
				}

				const size = ctx.lineWidth * 2; // Making cross slightly bigger for visibility
				const halfSize = size / 2;

				ctx.moveTo(item.x - halfSize, item.y - halfSize);
				ctx.lineTo(item.x + halfSize, item.y + halfSize);
				ctx.moveTo(item.x - halfSize, item.y + halfSize);
				ctx.lineTo(item.x + halfSize, item.y - halfSize);
			}
		} else if (lineType === LineType.Area) {
			const baseLevel = data.baseLevelCoordinate ?? ctx.canvas.height;
			const alpha = data.pointColorAreaAlpha ?? 0.5;

			// Fill First
			for (; i < visibleRange.to; i++) {
				const currItem = items[i];
				const prevItem = items[i - 1];
				const currentStrokeStyle = currItem.color ?? lineColor;

				ctx.beginPath();
				ctx.fillStyle = applyAlpha(currentStrokeStyle, alpha);
				ctx.moveTo(prevItem.x, prevItem.y);
				ctx.lineTo(currItem.x, currItem.y);
				ctx.lineTo(currItem.x, baseLevel);
				ctx.lineTo(prevItem.x, baseLevel);
				ctx.closePath();
				ctx.fill();
			}

			// Stroke Second
			i = visibleRange.from + 1;
			let prevStrokeStyle = items[visibleRange.from].color ?? lineColor;
			ctx.beginPath();
			ctx.strokeStyle = prevStrokeStyle;
			ctx.moveTo(items[visibleRange.from].x, items[visibleRange.from].y);

			for (; i < visibleRange.to; i++) {
				const currItem = items[i];
				const currentStrokeStyle = currItem.color ?? lineColor;

				if (currentStrokeStyle !== prevStrokeStyle) {
					ctx.stroke();
					ctx.beginPath();
					ctx.strokeStyle = currentStrokeStyle;
					prevStrokeStyle = currentStrokeStyle;
					ctx.moveTo(items[i - 1].x, items[i - 1].y);
				}

				ctx.lineTo(currItem.x, currItem.y);
			}
			ctx.stroke();

		} else if (lineType === LineType.SteppedArea) {
			const baseLevel = data.baseLevelCoordinate ?? ctx.canvas.height;
			const alpha = data.pointColorAreaAlpha ?? 0.5;

			// Fill First
			for (; i < visibleRange.to; i++) {
				const currItem = items[i];
				const prevItem = items[i - 1];
				const prevColor = prevItem.color ?? lineColor;
				const currColor = currItem.color ?? lineColor;

				const midX = (prevItem.x + currItem.x) / 2;

				// Left half fill (prevColor)
				ctx.beginPath();
				ctx.fillStyle = applyAlpha(prevColor, alpha);
				ctx.moveTo(prevItem.x, prevItem.y);
				ctx.lineTo(midX, prevItem.y);
				ctx.lineTo(midX, baseLevel);
				ctx.lineTo(prevItem.x, baseLevel);
				ctx.closePath();
				ctx.fill();

				// Right half fill (currColor)
				ctx.beginPath();
				ctx.fillStyle = applyAlpha(currColor, alpha);
				// Standard stepped logic: vertical line at midX connects prevY to currY
				// So right half is from midX to currX at currY level
				// Wait, the vertical drop happens at midX.
				// The area under the vertical line is technically infinitesimal?
				// The polygon shape for right half:
				// Start at (midX, prevY) ? No, the line goes: (prevX, prevY) -> (midX, prevY) -> (midX, currY) -> (currX, currY)
				// So the area is the polygon enclosed by that line and the baseline.
				// Left polygon: (prevX, prevY) -> (midX, prevY) -> (midX, base) -> (prevX, base)
				// Right polygon: (midX, prevY) -> (midX, currY) -> (currX, currY) -> (currX, base) -> (midX, base)
				// Actually, (midX, prevY) is part of the "cliff".
				// The area under the vertical segment (midX, prevY) to (midX, currY) is just a line.
				// So constructing the right polygon: 
				// Top-Left: (midX, currY) ?
				// If we strictly follow the line path:
				// (midX, prevY) -> (midX, currY) -> (currX, currY)
				// If we close this to base:
				// (midX, base) -> (midX, prevY) ...

				// Let's look at the stroke logic again:
				// ctx.lineTo(midX, prevItem.y);
				// ctx.lineTo(midX, currItem.y);
				// ctx.lineTo(currItem.x, currItem.y);

				// So the right polygon should cover from midX to currX.
				// The height at midX changes from prevY to currY.
				// If we treat the color switch happening AT midX (vertical line), then:
				// Left of midX is prevColor. Right of midX is currColor.
				// The vertical line itself is at midX.
				// If we want the vertical line to be part of the right block (currColor), 
				// then the Right polygon starts at (midX, prevY).

				ctx.moveTo(midX, prevItem.y);
				ctx.lineTo(midX, currItem.y);
				ctx.lineTo(currItem.x, currItem.y);
				ctx.lineTo(currItem.x, baseLevel);
				ctx.lineTo(midX, baseLevel);
				ctx.closePath();
				ctx.fill();
			}

			// Stroke Second
			i = visibleRange.from + 1;
			let prevStrokeStyle = items[visibleRange.from].color ?? lineColor;
			ctx.beginPath();
			ctx.strokeStyle = prevStrokeStyle;
			ctx.moveTo(items[visibleRange.from].x, items[visibleRange.from].y);

			for (; i < visibleRange.to; i++) {
				const currItem = items[i];
				const prevItem = items[i - 1];
				const currentStrokeStyle = currItem.color ?? lineColor;

				const midX = (prevItem.x + currItem.x) / 2;

				if (currentStrokeStyle !== prevStrokeStyle) {
					ctx.lineTo(midX, prevItem.y);
					ctx.stroke();

					ctx.beginPath();
					ctx.strokeStyle = currentStrokeStyle;
					prevStrokeStyle = currentStrokeStyle;
					ctx.moveTo(midX, prevItem.y);
				}

				ctx.lineTo(midX, prevItem.y);
				ctx.lineTo(midX, currItem.y);
				ctx.lineTo(currItem.x, currItem.y);
			}
			ctx.stroke();
		} else if (lineType === LineType.Square) {
			ctx.fillStyle = prevStrokeStyle;
			for (; i < visibleRange.to; i++) {
				const item = items[i];
				const itemColor = item.color ?? lineColor;

				if (itemColor !== prevStrokeStyle) {
					ctx.fill();
					ctx.stroke();
					ctx.beginPath();
					ctx.strokeStyle = itemColor;
					ctx.fillStyle = itemColor;
					prevStrokeStyle = itemColor;
				}

				const size = ctx.lineWidth;
				const halfSize = size / 2;
				ctx.rect(item.x - halfSize, item.y - halfSize, size, size);
			}
			ctx.fill();
		} else if (lineType === LineType.ConnectedCircles) {
			const circleLineWidth = ctx.lineWidth;
			const halfLineWidth = Math.max(1, Math.floor(circleLineWidth / 2));

			// 1. Draw connecting lines
			ctx.beginPath();
			ctx.lineWidth = halfLineWidth;

			let iLine = visibleRange.from;
			let prevLineStrokeStyle = items[iLine].color ?? lineColor;
			ctx.strokeStyle = prevLineStrokeStyle;
			ctx.moveTo(items[iLine].x, items[iLine].y);

			for (iLine = visibleRange.from + 1; iLine < visibleRange.to; iLine++) {
				const currItem = items[iLine];
				const currentStrokeStyle = currItem.color ?? lineColor;

				ctx.lineTo(currItem.x, currItem.y);

				if (currentStrokeStyle !== prevLineStrokeStyle) {
					ctx.stroke();
					ctx.beginPath();
					ctx.strokeStyle = currentStrokeStyle;
					prevLineStrokeStyle = currentStrokeStyle;
					ctx.moveTo(items[iLine - 1].x, items[iLine - 1].y);
					ctx.lineTo(currItem.x, currItem.y);
				}
			}
			ctx.stroke();

			// 2. Draw circles
			ctx.lineWidth = circleLineWidth;

			let i = visibleRange.from;
			let prevStrokeStyle = items[i].color ?? lineColor;
			ctx.strokeStyle = prevStrokeStyle;
			ctx.fillStyle = prevStrokeStyle; // Not used for stroke, but good practice if mixed

			ctx.beginPath();
			for (; i < visibleRange.to; i++) {
				const item = items[i];
				const itemColor = item.color ?? lineColor;

				if (itemColor !== prevStrokeStyle) {
					ctx.stroke();
					ctx.beginPath();
					ctx.strokeStyle = itemColor;
					prevStrokeStyle = itemColor;
				}

				ctx.moveTo(item.x + ctx.lineWidth / 2, item.y);
				ctx.arc(item.x, item.y, ctx.lineWidth / 2, 0, 2 * Math.PI);
			}
			ctx.stroke();



		} else if (lineType === LineType.Diamond) {
			ctx.fillStyle = prevStrokeStyle;
			for (; i < visibleRange.to; i++) {
				const item = items[i];
				const itemColor = item.color ?? lineColor;

				if (itemColor !== prevStrokeStyle) {
					ctx.fill();
					ctx.stroke();
					ctx.beginPath();
					ctx.strokeStyle = itemColor;
					ctx.fillStyle = itemColor;
					prevStrokeStyle = itemColor;
				}

				const size = ctx.lineWidth * 2; // Diamond looks better slightly larger
				const halfSize = size / 2;

				ctx.moveTo(item.x, item.y - halfSize);
				ctx.lineTo(item.x + halfSize, item.y);
				ctx.lineTo(item.x, item.y + halfSize);
				ctx.lineTo(item.x - halfSize, item.y);
				ctx.closePath();
			}
			ctx.fill();
		} else {
			for (; i < visibleRange.to; i++) {
				const currItem = items[i];
				const currentStrokeStyle = currItem.color ?? lineColor;

				ctx.lineTo(currItem.x, currItem.y);

				if (currentStrokeStyle !== prevStrokeStyle) {
					changeColor(currentStrokeStyle);
					ctx.moveTo(currItem.x, currItem.y);
				}
			}
		}

		ctx.stroke();
	}

	protected override _strokeStyle(): CanvasRenderingContext2D['strokeStyle'] {
		// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
		return this._data!.lineColor;
	}
}
