import { Coordinate } from '../model/coordinate';

import { shapeSize } from './series-markers-utils';

export function drawPlus(
    ctx: CanvasRenderingContext2D,
    centerX: Coordinate,
    centerY: Coordinate,
    size: number
): void {
    const plusSize = shapeSize('plus', size);
    const halfSize = (plusSize - 1) / 2;

    const lineWidth = Math.max(1, Math.floor(size / 4));

    ctx.strokeStyle = ctx.fillStyle;
    ctx.lineWidth = lineWidth;
    ctx.lineCap = 'butt';

    ctx.beginPath();
    ctx.moveTo(centerX - halfSize, centerY);
    ctx.lineTo(centerX + halfSize, centerY);
    ctx.moveTo(centerX, centerY - halfSize);
    ctx.lineTo(centerX, centerY + halfSize);
    ctx.stroke();
}

export function hitTestPlus(
    centerX: Coordinate,
    centerY: Coordinate,
    size: number,
    x: Coordinate,
    y: Coordinate
): boolean {
    const plusSize = shapeSize('plus', size);
    const halfSize = (plusSize - 1) / 2;
    const left = centerX - halfSize;
    const top = centerY - halfSize;

    return x >= left && x <= left + plusSize &&
        y >= top && y <= top + plusSize;
}
