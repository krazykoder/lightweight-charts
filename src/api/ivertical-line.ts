import { VerticalLineOptions } from '../model/vertical-line-options';

/**
 * Represents the interface for interacting with vertical lines.
 */
export interface IVerticalLine {
    /**
     * Apply options to the vertical line.
     *
     * @param options - Any subset of options.
     */
    applyOptions(options: Partial<VerticalLineOptions>): void;
    /**
     * Get the currently applied options.
     */
    options(): Readonly<VerticalLineOptions>;
}
