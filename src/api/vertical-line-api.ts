import { VerticalLine } from '../model/vertical-line';
import { VerticalLineOptions } from '../model/vertical-line-options';

import { IVerticalLine } from './ivertical-line';

export class VerticalLineApi implements IVerticalLine {
    private readonly _line: VerticalLine;

    public constructor(line: VerticalLine) {
        this._line = line;
    }

    public applyOptions(options: Partial<VerticalLineOptions>): void {
        this._line.applyOptions(options);
    }

    public options(): Readonly<VerticalLineOptions> {
        return this._line.options();
    }

    public line(): VerticalLine {
        return this._line;
    }
}
