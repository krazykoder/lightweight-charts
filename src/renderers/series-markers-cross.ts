import { Coordinate } from '../model/coordinate';

import { shapeSize } from './series-markers-utils';

export function drawCross(
    ctx: CanvasRenderingContext2D,
    centerX: Coordinate,
    centerY: Coordinate,
    size: number
): void {
    const crossSize = shapeSize('cross', size);
    const halfSize = (crossSize - 1) / 2;

    const lineWidth = Math.max(1, Math.floor(size / 4));

    ctx.strokeStyle = ctx.fillStyle;
    ctx.lineWidth = lineWidth;
    ctx.lineCap = 'butt';

    ctx.beginPath();
    ctx.moveTo(centerX - halfSize, centerY - halfSize);
    ctx.lineTo(centerX + halfSize, centerY + halfSize);
    ctx.moveTo(centerX - halfSize, centerY + halfSize);
    ctx.lineTo(centerX + halfSize, centerY - halfSize);
    ctx.stroke();
}

export function hitTestCross(
    centerX: Coordinate,
    centerY: Coordinate,
    size: number,
    x: Coordinate,
    y: Coordinate
): boolean {
    const crossSize = shapeSize('cross', size);
    const halfSize = (crossSize - 1) / 2;
    const left = centerX - halfSize;
    const top = centerY - halfSize;

    return x >= left && x <= left + crossSize &&
        y >= top && y <= top + crossSize;
}
