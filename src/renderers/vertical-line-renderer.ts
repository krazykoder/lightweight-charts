import { drawVerticalLine, LineStyle, LineWidth, setLineStyle } from './draw-line';
import { IPaneRenderer } from './ipane-renderer';

export interface VerticalLineRendererData {
    x: number | null;
    color: string;
    lineWidth: LineWidth;
    lineStyle: LineStyle;
    visible: boolean;
}

export class VerticalLineRenderer implements IPaneRenderer {
    private _data: VerticalLineRendererData | null = null;

    public setData(data: VerticalLineRendererData): void {
        this._data = data;
    }

    public draw(ctx: CanvasRenderingContext2D, pixelRatio: number, isHovered: boolean, hitTestData?: unknown): void {
        if (this._data === null || this._data.x === null || !this._data.visible) {
            return;
        }

        ctx.save();

        const x = Math.round(this._data.x * pixelRatio);
        const h = Math.ceil(ctx.canvas.height); // Or should I use scope height? ctx.canvas.height is safe for now

        ctx.lineCap = 'butt';
        ctx.lineWidth = Math.floor(this._data.lineWidth * pixelRatio);
        ctx.strokeStyle = this._data.color;
        setLineStyle(ctx, this._data.lineStyle);

        drawVerticalLine(ctx, x, 0, h);

        ctx.restore();
    }
}
