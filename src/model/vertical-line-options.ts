import { LineStyle, LineWidth } from '../renderers/draw-line';
import { Time } from './time-data';

/**
 * Represents vertical line options.
 */
export interface VerticalLineOptions {
    /**
     * Vertical line's time value.
     */
    time: Time;
    /**
     * Vertical line's color.
     *
     * @defaultValue `''`
     */
    color: string;
    /**
     * Vertical line's width in pixels.
     *
     * @defaultValue `1`
     */
    lineWidth: LineWidth;
    /**
     * Vertical line's style.
     *
     * @defaultValue {@link LineStyle.Solid}
     */
    lineStyle: LineStyle;
    /**
     * Display line.
     *
     * @defaultValue `true`
     */
    lineVisible: boolean;
    /**
     * Display the current vertical line's text label on the time axis scale.
     *
     * @defaultValue `true`
     */
    axisLabelVisible: boolean;
    /**
     * Vertical line's text label.
     *
     * @defaultValue `''`
     */
    title: string;
    /**
     * Label background color.
     *
     * @defaultValue `''`
     */
    labelBackgroundColor: string;
    /**
     * Label text color.
     *
     * @defaultValue `''`
     */
    labelTextColor: string;
    /**
     * If true, the axis label will be visible even if the line is outside the viewport (sticking to the edge).
     *
     * @defaultValue `false`
     */
    axisLabelVisibleAtEdge: boolean;
}
