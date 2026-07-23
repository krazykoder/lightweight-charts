import { merge } from '../helpers/strict-type-checks';
import { isBusinessDay, isUTCTimestamp, stringToBusinessDay, Time, TimePoint, UTCTimestamp } from './time-data';

import { IPaneView } from '../views/pane/ipane-view';
import { VerticalLinePaneView } from '../views/pane/vertical-line-pane-view';
import { ITimeAxisView } from '../views/time-axis/itime-axis-view';
import { VerticalLineTimeAxisView } from '../views/time-axis/vertical-line-time-axis-view';

import { ChartModel } from './chart-model';
import { Coordinate } from './coordinate';
import { Series } from './series';
import { VerticalLineOptions } from './vertical-line-options';

function businessDayConverter(time: Time): TimePoint {
    if (!isBusinessDay(time)) {
        throw new Error('time must be of type BusinessDay');
    }

    const date = new Date(Date.UTC(time.year, time.month - 1, time.day, 0, 0, 0, 0));

    return {
        timestamp: Math.round(date.getTime() / 1000) as UTCTimestamp,
        businessDay: time,
    };
}

function timestampConverter(time: Time): TimePoint {
    if (!isUTCTimestamp(time)) {
        throw new Error('time must be of type isUTCTimestamp');
    }
    return {
        timestamp: time,
    };
}

function convertTime(time: Time): TimePoint {
    if (isUTCTimestamp(time)) {
        return timestampConverter(time);
    }

    if (!isBusinessDay(time)) {
        return businessDayConverter(stringToBusinessDay(time));
    }

    return businessDayConverter(time);
}

export class VerticalLine {
    private readonly _series: Series;
    private readonly _lineView: VerticalLinePaneView;
    private readonly _axisView: VerticalLineTimeAxisView;
    private readonly _options: VerticalLineOptions;

    public constructor(series: Series, options: VerticalLineOptions) {
        this._series = series;
        this._options = options;
        this._lineView = new VerticalLinePaneView(series, this);
        this._axisView = new VerticalLineTimeAxisView(series, this);
    }

    public applyOptions(options: Partial<VerticalLineOptions>): void {
        merge(this._options, options);
        this.update();
        this._series.model().lightUpdate();
    }

    public options(): VerticalLineOptions {
        return this._options;
    }

    public paneViews(): readonly IPaneView[] {
        return [this._lineView];
    }

    public timeAxisView(): ITimeAxisView {
        return this._axisView;
    }

    public update(): void {
        this._lineView.update();
        this._axisView.update();
    }

    public xCoord(): Coordinate | null {
        const series = this._series;
        const timeScale = series.model().timeScale();
        const time = this._options.time;

        if (timeScale.isEmpty()) {
            return null;
        }

        const timePoint = convertTime(time);
        const index = timeScale.timeToIndex(timePoint, false);
        if (index === null) {
            return null;
        }

        return timeScale.indexToCoordinate(index);
    }

    public model(): ChartModel {
        return this._series.model();
    }
}
