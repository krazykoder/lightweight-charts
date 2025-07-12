/*!
 * @license
 * TradingView Lightweight Charts v3.8.0-dev+202507121752
 * Copyright (c) 2020 TradingView, Inc.
 * Licensed under Apache License 2.0 https://www.apache.org/licenses/LICENSE-2.0
 */
import { bindToDevicePixelRatio } from 'fancy-canvas/coordinate-space';

/**
 * Represents the possible line types.
 */
var LineType;
(function (LineType) {
    /**
     * A line.
     */
    LineType[LineType["Simple"] = 0] = "Simple";
    /**
     * A stepped line.
     */
    LineType[LineType["WithSteps"] = 1] = "WithSteps";
    LineType[LineType["WithGaps"] = 2] = "WithGaps";
})(LineType || (LineType = {}));
/**
 * Represents the possible line styles.
 */
var LineStyle;
(function (LineStyle) {
    /**
     * A solid line.
     */
    LineStyle[LineStyle["Solid"] = 0] = "Solid";
    /**
     * A dotted line.
     */
    LineStyle[LineStyle["Dotted"] = 1] = "Dotted";
    /**
     * A dashed line.
     */
    LineStyle[LineStyle["Dashed"] = 2] = "Dashed";
    /**
     * A dashed line with bigger dashes.
     */
    LineStyle[LineStyle["LargeDashed"] = 3] = "LargeDashed";
    /**
     * A dottled line with more space between dots.
     */
    LineStyle[LineStyle["SparseDotted"] = 4] = "SparseDotted";
})(LineStyle || (LineStyle = {}));
function setLineStyle(ctx, style) {
    var _a;
    var dashPatterns = (_a = {},
        _a[0 /* LineStyle.Solid */] = [],
        _a[1 /* LineStyle.Dotted */] = [ctx.lineWidth, ctx.lineWidth],
        _a[2 /* LineStyle.Dashed */] = [2 * ctx.lineWidth, 2 * ctx.lineWidth],
        _a[3 /* LineStyle.LargeDashed */] = [6 * ctx.lineWidth, 6 * ctx.lineWidth],
        _a[4 /* LineStyle.SparseDotted */] = [ctx.lineWidth, 4 * ctx.lineWidth],
        _a);
    var dashPattern = dashPatterns[style];
    ctx.setLineDash(dashPattern);
}
function drawHorizontalLine(ctx, y, left, right) {
    ctx.beginPath();
    var correction = (ctx.lineWidth % 2) ? 0.5 : 0;
    ctx.moveTo(left, y + correction);
    ctx.lineTo(right, y + correction);
    ctx.stroke();
}
function drawVerticalLine(ctx, x, top, bottom) {
    ctx.beginPath();
    var correction = (ctx.lineWidth % 2) ? 0.5 : 0;
    ctx.moveTo(x + correction, top);
    ctx.lineTo(x + correction, bottom);
    ctx.stroke();
}
function strokeInPixel(ctx, drawFunction) {
    ctx.save();
    if (ctx.lineWidth % 2) {
        ctx.translate(0.5, 0.5);
    }
    drawFunction();
    ctx.restore();
}

/**
 * Checks an assertion. Throws if the assertion is failed.
 *
 * @param condition - Result of the assertion evaluation
 * @param message - Text to include in the exception message
 */
function assert(condition, message) {
    if (!condition) {
        throw new Error('Assertion failed' + (message ? ': ' + message : ''));
    }
}
function ensureDefined(value) {
    if (value === undefined) {
        throw new Error('Value is undefined');
    }
    return value;
}
function ensureNotNull(value) {
    if (value === null) {
        throw new Error('Value is null');
    }
    return value;
}
function ensure(value) {
    return ensureNotNull(ensureDefined(value));
}
/**
 * Compile time check for never
 */
function ensureNever(value) { }

/**
 * Note this object should be explicitly marked as public so that dts-bundle-generator does not mangle the property names.
 *
 * @public
 * @see https://developer.mozilla.org/en-US/docs/Web/CSS/color_value
 */
var namedColorRgbHexStrings = {
    // The order of properties in this Record is not important for the internal logic.
    // It's just GZIPped better when props follows this order.
    // Please add new colors to the end of the record.
    khaki: '#f0e68c',
    azure: '#f0ffff',
    aliceblue: '#f0f8ff',
    ghostwhite: '#f8f8ff',
    gold: '#ffd700',
    goldenrod: '#daa520',
    gainsboro: '#dcdcdc',
    gray: '#808080',
    green: '#008000',
    honeydew: '#f0fff0',
    floralwhite: '#fffaf0',
    lightblue: '#add8e6',
    lightcoral: '#f08080',
    lemonchiffon: '#fffacd',
    hotpink: '#ff69b4',
    lightyellow: '#ffffe0',
    greenyellow: '#adff2f',
    lightgoldenrodyellow: '#fafad2',
    limegreen: '#32cd32',
    linen: '#faf0e6',
    lightcyan: '#e0ffff',
    magenta: '#f0f',
    maroon: '#800000',
    olive: '#808000',
    orange: '#ffa500',
    oldlace: '#fdf5e6',
    mediumblue: '#0000cd',
    transparent: '#0000',
    lime: '#0f0',
    lightpink: '#ffb6c1',
    mistyrose: '#ffe4e1',
    moccasin: '#ffe4b5',
    midnightblue: '#191970',
    orchid: '#da70d6',
    mediumorchid: '#ba55d3',
    mediumturquoise: '#48d1cc',
    orangered: '#ff4500',
    royalblue: '#4169e1',
    powderblue: '#b0e0e6',
    red: '#f00',
    coral: '#ff7f50',
    turquoise: '#40e0d0',
    white: '#fff',
    whitesmoke: '#f5f5f5',
    wheat: '#f5deb3',
    teal: '#008080',
    steelblue: '#4682b4',
    bisque: '#ffe4c4',
    aquamarine: '#7fffd4',
    aqua: '#0ff',
    sienna: '#a0522d',
    silver: '#c0c0c0',
    springgreen: '#00ff7f',
    antiquewhite: '#faebd7',
    burlywood: '#deb887',
    brown: '#a52a2a',
    beige: '#f5f5dc',
    chocolate: '#d2691e',
    chartreuse: '#7fff00',
    cornflowerblue: '#6495ed',
    cornsilk: '#fff8dc',
    crimson: '#dc143c',
    cadetblue: '#5f9ea0',
    tomato: '#ff6347',
    fuchsia: '#f0f',
    blue: '#00f',
    salmon: '#fa8072',
    blanchedalmond: '#ffebcd',
    slateblue: '#6a5acd',
    slategray: '#708090',
    thistle: '#d8bfd8',
    tan: '#d2b48c',
    cyan: '#0ff',
    darkblue: '#00008b',
    darkcyan: '#008b8b',
    darkgoldenrod: '#b8860b',
    darkgray: '#a9a9a9',
    blueviolet: '#8a2be2',
    black: '#000',
    darkmagenta: '#8b008b',
    darkslateblue: '#483d8b',
    darkkhaki: '#bdb76b',
    darkorchid: '#9932cc',
    darkorange: '#ff8c00',
    darkgreen: '#006400',
    darkred: '#8b0000',
    dodgerblue: '#1e90ff',
    darkslategray: '#2f4f4f',
    dimgray: '#696969',
    deepskyblue: '#00bfff',
    firebrick: '#b22222',
    forestgreen: '#228b22',
    indigo: '#4b0082',
    ivory: '#fffff0',
    lavenderblush: '#fff0f5',
    feldspar: '#d19275',
    indianred: '#cd5c5c',
    lightgreen: '#90ee90',
    lightgrey: '#d3d3d3',
    lightskyblue: '#87cefa',
    lightslategray: '#789',
    lightslateblue: '#8470ff',
    snow: '#fffafa',
    lightseagreen: '#20b2aa',
    lightsalmon: '#ffa07a',
    darksalmon: '#e9967a',
    darkviolet: '#9400d3',
    mediumpurple: '#9370d8',
    mediumaquamarine: '#66cdaa',
    skyblue: '#87ceeb',
    lavender: '#e6e6fa',
    lightsteelblue: '#b0c4de',
    mediumvioletred: '#c71585',
    mintcream: '#f5fffa',
    navajowhite: '#ffdead',
    navy: '#000080',
    olivedrab: '#6b8e23',
    palevioletred: '#d87093',
    violetred: '#d02090',
    yellow: '#ff0',
    yellowgreen: '#9acd32',
    lawngreen: '#7cfc00',
    pink: '#ffc0cb',
    paleturquoise: '#afeeee',
    palegoldenrod: '#eee8aa',
    darkolivegreen: '#556b2f',
    darkseagreen: '#8fbc8f',
    darkturquoise: '#00ced1',
    peachpuff: '#ffdab9',
    deeppink: '#ff1493',
    violet: '#ee82ee',
    palegreen: '#98fb98',
    mediumseagreen: '#3cb371',
    peru: '#cd853f',
    saddlebrown: '#8b4513',
    sandybrown: '#f4a460',
    rosybrown: '#bc8f8f',
    purple: '#800080',
    seagreen: '#2e8b57',
    seashell: '#fff5ee',
    papayawhip: '#ffefd5',
    mediumslateblue: '#7b68ee',
    plum: '#dda0dd',
    mediumspringgreen: '#00fa9a',
};
function normalizeRgbComponent(component) {
    if (component < 0) {
        return 0;
    }
    if (component > 255) {
        return 255;
    }
    // NaN values are treated as 0
    return (Math.round(component) || 0);
}
function normalizeAlphaComponent(component) {
    return (!(component <= 0) && !(component > 0) ? 0 :
        component < 0 ? 0 :
            component > 1 ? 1 :
                // limit the precision of all numbers to at most 4 digits in fractional part
                Math.round(component * 10000) / 10000);
}
/**
 * @example
 * #fb0
 * @example
 * #f0f
 * @example
 * #f0fa
 */
var shortHexRe = /^#([0-9a-f])([0-9a-f])([0-9a-f])([0-9a-f])?$/i;
/**
 * @example
 * #00ff00
 * @example
 * #336699
 * @example
 * #336699FA
 */
var hexRe = /^#([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})?$/i;
/**
 * @example
 * rgb(123, 234, 45)
 * @example
 * rgb(255,234,245)
 */
var rgbRe = /^rgb\(\s*(-?\d{1,10})\s*,\s*(-?\d{1,10})\s*,\s*(-?\d{1,10})\s*\)$/;
/**
 * @example
 * rgba(123, 234, 45, 1)
 * @example
 * rgba(255,234,245,0.1)
 */
var rgbaRe = /^rgba\(\s*(-?\d{1,10})\s*,\s*(-?\d{1,10})\s*,\s*(-?\d{1,10})\s*,\s*(-?[\d]{0,10}(?:\.\d+)?)\s*\)$/;
function colorStringToRgba(colorString) {
    colorString = colorString.toLowerCase();
    // eslint-disable-next-line no-restricted-syntax
    if (colorString in namedColorRgbHexStrings) {
        colorString = namedColorRgbHexStrings[colorString];
    }
    {
        var matches = rgbaRe.exec(colorString) || rgbRe.exec(colorString);
        if (matches) {
            return [
                normalizeRgbComponent(parseInt(matches[1], 10)),
                normalizeRgbComponent(parseInt(matches[2], 10)),
                normalizeRgbComponent(parseInt(matches[3], 10)),
                normalizeAlphaComponent((matches.length < 5 ? 1 : parseFloat(matches[4]))),
            ];
        }
    }
    {
        var matches = hexRe.exec(colorString);
        if (matches) {
            return [
                normalizeRgbComponent(parseInt(matches[1], 16)),
                normalizeRgbComponent(parseInt(matches[2], 16)),
                normalizeRgbComponent(parseInt(matches[3], 16)),
                1,
            ];
        }
    }
    {
        var matches = shortHexRe.exec(colorString);
        if (matches) {
            return [
                normalizeRgbComponent(parseInt(matches[1], 16) * 0x11),
                normalizeRgbComponent(parseInt(matches[2], 16) * 0x11),
                normalizeRgbComponent(parseInt(matches[3], 16) * 0x11),
                1,
            ];
        }
    }
    throw new Error("Cannot parse color: ".concat(colorString));
}
function rgbaToGrayscale(rgbValue) {
    // Originally, the NTSC RGB to YUV formula
    // perfected by @eugene-korobko's black magic
    var redComponentGrayscaleWeight = 0.199;
    var greenComponentGrayscaleWeight = 0.687;
    var blueComponentGrayscaleWeight = 0.114;
    return (redComponentGrayscaleWeight * rgbValue[0] +
        greenComponentGrayscaleWeight * rgbValue[1] +
        blueComponentGrayscaleWeight * rgbValue[2]);
}
function applyAlpha(color, alpha) {
    // special case optimization
    if (color === 'transparent') {
        return color;
    }
    var originRgba = colorStringToRgba(color);
    var originAlpha = originRgba[3];
    return "rgba(".concat(originRgba[0], ", ").concat(originRgba[1], ", ").concat(originRgba[2], ", ").concat(alpha * originAlpha, ")");
}
function generateContrastColors(backgroundColor) {
    var rgb = colorStringToRgba(backgroundColor);
    return {
        background: "rgb(".concat(rgb[0], ", ").concat(rgb[1], ", ").concat(rgb[2], ")"),
        foreground: rgbaToGrayscale(rgb) > 160 ? 'black' : 'white',
    };
}
function gradientColorAtPercent(topColor, bottomColor, percent) {
    var _a = colorStringToRgba(topColor), topR = _a[0], topG = _a[1], topB = _a[2], topA = _a[3];
    var _b = colorStringToRgba(bottomColor), bottomR = _b[0], bottomG = _b[1], bottomB = _b[2], bottomA = _b[3];
    var resultRgba = [
        normalizeRgbComponent(topR + percent * (bottomR - topR)),
        normalizeRgbComponent(topG + percent * (bottomG - topG)),
        normalizeRgbComponent(topB + percent * (bottomB - topB)),
        normalizeAlphaComponent(topA + percent * (bottomA - topA)),
    ];
    return "rgba(".concat(resultRgba[0], ", ").concat(resultRgba[1], ", ").concat(resultRgba[2], ", ").concat(resultRgba[3], ")");
}

/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise, SuppressedError, Symbol, Iterator */

var extendStatics = function(d, b) {
  extendStatics = Object.setPrototypeOf ||
      ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
      function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
  return extendStatics(d, b);
};

function __extends(d, b) {
  if (typeof b !== "function" && b !== null)
      throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
  extendStatics(d, b);
  function __() { this.constructor = d; }
  d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
  __assign = Object.assign || function __assign(t) {
      for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
      return t;
  };
  return __assign.apply(this, arguments);
};

function __rest(s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
      t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function")
      for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
          if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
              t[p[i]] = s[p[i]];
      }
  return t;
}

function __spreadArray(to, from, pack) {
  if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
      if (ar || !(i in from)) {
          if (!ar) ar = Array.prototype.slice.call(from, 0, i);
          ar[i] = from[i];
      }
  }
  return to.concat(ar || Array.prototype.slice.call(from));
}

typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
  var e = new Error(message);
  return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};

// eslint-disable-next-line @typescript-eslint/no-invalid-void-type
var Delegate = /** @class */ (function () {
    function Delegate() {
        this._listeners = [];
    }
    Delegate.prototype.subscribe = function (callback, linkedObject, singleshot) {
        var listener = {
            callback: callback,
            linkedObject: linkedObject,
            singleshot: singleshot === true,
        };
        this._listeners.push(listener);
    };
    Delegate.prototype.unsubscribe = function (callback) {
        var index = this._listeners.findIndex(function (listener) { return callback === listener.callback; });
        if (index > -1) {
            this._listeners.splice(index, 1);
        }
    };
    Delegate.prototype.unsubscribeAll = function (linkedObject) {
        this._listeners = this._listeners.filter(function (listener) { return listener.linkedObject !== linkedObject; });
    };
    Delegate.prototype.fire = function (param1, param2) {
        var listenersSnapshot = __spreadArray([], this._listeners, true);
        this._listeners = this._listeners.filter(function (listener) { return !listener.singleshot; });
        listenersSnapshot.forEach(function (listener) { return listener.callback(param1, param2); });
    };
    Delegate.prototype.hasListeners = function () {
        return this._listeners.length > 0;
    };
    Delegate.prototype.destroy = function () {
        this._listeners = [];
    };
    return Delegate;
}());

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function merge(dst) {
    var sources = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        sources[_i - 1] = arguments[_i];
    }
    for (var _a = 0, sources_1 = sources; _a < sources_1.length; _a++) {
        var src = sources_1[_a];
        // eslint-disable-next-line no-restricted-syntax
        for (var i in src) {
            if (src[i] === undefined) {
                continue;
            }
            if ('object' !== typeof src[i] || dst[i] === undefined) {
                dst[i] = src[i];
            }
            else {
                merge(dst[i], src[i]);
            }
        }
    }
    return dst;
}
function isNumber(value) {
    return (typeof value === 'number') && (isFinite(value));
}
function isInteger(value) {
    return (typeof value === 'number') && ((value % 1) === 0);
}
function isString(value) {
    return typeof value === 'string';
}
function isBoolean(value) {
    return typeof value === 'boolean';
}
function clone(object) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    var o = object;
    if (!o || 'object' !== typeof o) {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-return
        return o;
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    var c;
    if (Array.isArray(o)) {
        c = [];
    }
    else {
        c = {};
    }
    var p;
    var v;
    // eslint-disable-next-line no-restricted-syntax
    for (p in o) {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access,@typescript-eslint/no-unsafe-call,no-prototype-builtins
        if (o.hasOwnProperty(p)) {
            // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
            v = o[p];
            if (v && 'object' === typeof v) {
                // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
                c[p] = clone(v);
            }
            else {
                // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
                c[p] = v;
            }
        }
    }
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return c;
}
function notNull(t) {
    return t !== null;
}
function undefinedIfNull(t) {
    return (t === null) ? undefined : t;
}

/**
 * Default font family.
 * Must be used to generate font string when font is not specified.
 */
var defaultFontFamily = "'Trebuchet MS', Roboto, Ubuntu, sans-serif";
/**
 * Generates a font string, which can be used to set in canvas' font property.
 * If no family provided, {@link defaultFontFamily} will be used.
 *
 * @param size - Font size in pixels.
 * @param family - Optional font family.
 * @param style - Optional font style.
 * @returns The font string.
 */
function makeFont(size, family, style) {
    if (style !== undefined) {
        style = "".concat(style, " ");
    }
    else {
        style = '';
    }
    if (family === undefined) {
        family = defaultFontFamily;
    }
    return "".concat(style).concat(size, "px ").concat(family);
}

var RendererConstants;
(function (RendererConstants) {
    RendererConstants[RendererConstants["BorderSize"] = 1] = "BorderSize";
    RendererConstants[RendererConstants["TickLength"] = 4] = "TickLength";
})(RendererConstants || (RendererConstants = {}));
var PriceAxisRendererOptionsProvider = /** @class */ (function () {
    function PriceAxisRendererOptionsProvider(chartModel) {
        this._rendererOptions = {
            borderSize: 1 /* RendererConstants.BorderSize */,
            tickLength: 4 /* RendererConstants.TickLength */,
            fontSize: NaN,
            font: '',
            fontFamily: '',
            color: '',
            paddingBottom: 0,
            paddingInner: 0,
            paddingOuter: 0,
            paddingTop: 0,
            baselineOffset: 0,
            width: 0
        };
        this._chartModel = chartModel;
    }
    PriceAxisRendererOptionsProvider.prototype.options = function () {
        var rendererOptions = this._rendererOptions;
        var currentFontSize = this._fontSize();
        var currentFontFamily = this._fontFamily();
        if (rendererOptions.fontSize !== currentFontSize || rendererOptions.fontFamily !== currentFontFamily) {
            rendererOptions.fontSize = currentFontSize;
            rendererOptions.fontFamily = currentFontFamily;
            rendererOptions.font = makeFont(currentFontSize, currentFontFamily);
            rendererOptions.paddingTop = Math.floor(currentFontSize / 3.5);
            rendererOptions.paddingBottom = rendererOptions.paddingTop;
            rendererOptions.paddingInner = Math.max(Math.ceil(currentFontSize / 2 - rendererOptions.tickLength / 2), 0);
            rendererOptions.paddingOuter = Math.ceil(currentFontSize / 2 + rendererOptions.tickLength / 2);
            rendererOptions.baselineOffset = Math.round(currentFontSize / 10);
        }
        rendererOptions.color = this._textColor();
        rendererOptions.width = this._width();
        return this._rendererOptions;
    };
    PriceAxisRendererOptionsProvider.prototype._width = function () {
        return this._chartModel.options().rightPriceScale.width;
    };
    PriceAxisRendererOptionsProvider.prototype._textColor = function () {
        return this._chartModel.options().layout.textColor;
    };
    PriceAxisRendererOptionsProvider.prototype._fontSize = function () {
        return this._chartModel.options().layout.fontSize;
    };
    PriceAxisRendererOptionsProvider.prototype._fontFamily = function () {
        return this._chartModel.options().layout.fontFamily;
    };
    return PriceAxisRendererOptionsProvider;
}());

var CompositeRenderer = /** @class */ (function () {
    function CompositeRenderer() {
        this._renderers = [];
    }
    CompositeRenderer.prototype.setRenderers = function (renderers) {
        this._renderers = renderers;
    };
    CompositeRenderer.prototype.draw = function (ctx, pixelRatio, isHovered, hitTestData) {
        this._renderers.forEach(function (r) {
            ctx.save();
            r.draw(ctx, pixelRatio, isHovered, hitTestData);
            ctx.restore();
        });
    };
    return CompositeRenderer;
}());

var ScaledRenderer = /** @class */ (function () {
    function ScaledRenderer() {
    }
    ScaledRenderer.prototype.draw = function (ctx, pixelRatio, isHovered, hitTestData) {
        ctx.save();
        // actually we must be sure that this scaling applied only once at the same time
        // currently ScaledRenderer could be only nodes renderer (not top-level renderers like CompositeRenderer or something)
        // so this "constraint" is fulfilled for now
        ctx.scale(pixelRatio, pixelRatio);
        this._drawImpl(ctx, isHovered, hitTestData);
        ctx.restore();
    };
    ScaledRenderer.prototype.drawBackground = function (ctx, pixelRatio, isHovered, hitTestData) {
        ctx.save();
        // actually we must be sure that this scaling applied only once at the same time
        // currently ScaledRenderer could be only nodes renderer (not top-level renderers like CompositeRenderer or something)
        // so this "constraint" is fulfilled for now
        ctx.scale(pixelRatio, pixelRatio);
        this._drawBackgroundImpl(ctx, isHovered, hitTestData);
        ctx.restore();
    };
    ScaledRenderer.prototype._drawBackgroundImpl = function (ctx, isHovered, hitTestData) { };
    return ScaledRenderer;
}());

var PaneRendererMarks = /** @class */ (function (_super) {
    __extends(PaneRendererMarks, _super);
    function PaneRendererMarks() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._data = null;
        return _this;
    }
    PaneRendererMarks.prototype.setData = function (data) {
        this._data = data;
    };
    PaneRendererMarks.prototype._drawImpl = function (ctx) {
        if (this._data === null || this._data.visibleRange === null) {
            return;
        }
        var visibleRange = this._data.visibleRange;
        var data = this._data;
        var draw = function (radius) {
            ctx.beginPath();
            for (var i = visibleRange.to - 1; i >= visibleRange.from; --i) {
                var point = data.items[i];
                ctx.moveTo(point.x, point.y);
                ctx.arc(point.x, point.y, radius, 0, Math.PI * 2);
            }
            ctx.fill();
        };
        ctx.fillStyle = data.backColor;
        draw(data.radius + 2);
        ctx.fillStyle = data.lineColor;
        draw(data.radius);
    };
    return PaneRendererMarks;
}(ScaledRenderer));

function createEmptyMarkerData() {
    return {
        items: [{
                x: 0,
                y: 0,
                time: 0,
                price: 0,
            }],
        lineColor: '',
        backColor: '',
        radius: 0,
        visibleRange: null,
    };
}
var rangeForSinglePoint = { from: 0, to: 1 };
var CrosshairMarksPaneView = /** @class */ (function () {
    function CrosshairMarksPaneView(chartModel, crosshair) {
        this._compositeRenderer = new CompositeRenderer();
        this._markersRenderers = [];
        this._markersData = [];
        this._invalidated = true;
        this._chartModel = chartModel;
        this._crosshair = crosshair;
        this._compositeRenderer.setRenderers(this._markersRenderers);
    }
    CrosshairMarksPaneView.prototype.update = function (updateType) {
        var serieses = this._chartModel.serieses();
        if (serieses.length !== this._markersRenderers.length) {
            this._markersData = serieses.map(createEmptyMarkerData);
            this._markersRenderers = this._markersData.map(function (data) {
                var res = new PaneRendererMarks();
                res.setData(data);
                return res;
            });
            this._compositeRenderer.setRenderers(this._markersRenderers);
        }
        this._invalidated = true;
    };
    CrosshairMarksPaneView.prototype.renderer = function (height, width, addAnchors) {
        if (this._invalidated) {
            this._updateImpl(height);
            this._invalidated = false;
        }
        return this._compositeRenderer;
    };
    CrosshairMarksPaneView.prototype._updateImpl = function (height) {
        var _this = this;
        var serieses = this._chartModel.serieses();
        var timePointIndex = this._crosshair.appliedIndex();
        var timeScale = this._chartModel.timeScale();
        serieses.forEach(function (s, index) {
            var _a;
            var data = _this._markersData[index];
            var seriesData = s.markerDataAtIndex(timePointIndex);
            if (seriesData === null || !s.visible()) {
                data.visibleRange = null;
                return;
            }
            var firstValue = ensureNotNull(s.firstValue());
            data.lineColor = seriesData.backgroundColor;
            data.radius = seriesData.radius;
            data.items[0].price = seriesData.price;
            data.items[0].y = s.priceScale().priceToCoordinate(seriesData.price, firstValue.value);
            data.backColor = (_a = seriesData.borderColor) !== null && _a !== void 0 ? _a : _this._chartModel.backgroundColorAtYPercentFromTop(data.items[0].y / height);
            data.items[0].time = timePointIndex;
            data.items[0].x = timeScale.indexToCoordinate(timePointIndex);
            data.visibleRange = rangeForSinglePoint;
        });
    };
    return CrosshairMarksPaneView;
}());

var CrosshairRenderer = /** @class */ (function () {
    function CrosshairRenderer(data) {
        this._data = data;
    }
    CrosshairRenderer.prototype.draw = function (ctx, pixelRatio, isHovered, hitTestData) {
        if (this._data === null) {
            return;
        }
        var vertLinesVisible = this._data.vertLine.visible;
        var horzLinesVisible = this._data.horzLine.visible;
        if (!vertLinesVisible && !horzLinesVisible) {
            return;
        }
        ctx.save();
        var x = Math.round(this._data.x * pixelRatio);
        var y = Math.round(this._data.y * pixelRatio);
        var w = Math.ceil(this._data.w * pixelRatio);
        var h = Math.ceil(this._data.h * pixelRatio);
        ctx.lineCap = 'butt';
        if (vertLinesVisible && x >= 0) {
            ctx.lineWidth = Math.floor(this._data.vertLine.lineWidth * pixelRatio);
            ctx.strokeStyle = this._data.vertLine.color;
            ctx.fillStyle = this._data.vertLine.color;
            setLineStyle(ctx, this._data.vertLine.lineStyle);
            drawVerticalLine(ctx, x, 0, h);
        }
        if (horzLinesVisible && y >= 0) {
            ctx.lineWidth = Math.floor(this._data.horzLine.lineWidth * pixelRatio);
            ctx.strokeStyle = this._data.horzLine.color;
            ctx.fillStyle = this._data.horzLine.color;
            setLineStyle(ctx, this._data.horzLine.lineStyle);
            drawHorizontalLine(ctx, y, 0, w);
        }
        ctx.restore();
    };
    return CrosshairRenderer;
}());

var CrosshairPaneView = /** @class */ (function () {
    function CrosshairPaneView(source) {
        this._invalidated = true;
        this._rendererData = {
            vertLine: {
                lineWidth: 1,
                lineStyle: 0,
                color: '',
                visible: false,
            },
            horzLine: {
                lineWidth: 1,
                lineStyle: 0,
                color: '',
                visible: false,
            },
            w: 0,
            h: 0,
            x: 0,
            y: 0,
        };
        this._renderer = new CrosshairRenderer(this._rendererData);
        this._source = source;
    }
    CrosshairPaneView.prototype.update = function () {
        this._invalidated = true;
    };
    CrosshairPaneView.prototype.renderer = function (height, width) {
        if (this._invalidated) {
            this._updateImpl();
            this._invalidated = false;
        }
        return this._renderer;
    };
    CrosshairPaneView.prototype._updateImpl = function () {
        var visible = this._source.visible();
        var pane = ensureNotNull(this._source.pane());
        var crosshairOptions = pane.model().options().crosshair;
        var data = this._rendererData;
        data.horzLine.visible = visible && this._source.horzLineVisible(pane);
        data.vertLine.visible = visible && this._source.vertLineVisible();
        data.horzLine.lineWidth = crosshairOptions.horzLine.width;
        data.horzLine.lineStyle = crosshairOptions.horzLine.style;
        data.horzLine.color = crosshairOptions.horzLine.color;
        data.vertLine.lineWidth = crosshairOptions.vertLine.width;
        data.vertLine.lineStyle = crosshairOptions.vertLine.style;
        data.vertLine.color = crosshairOptions.vertLine.color;
        data.w = pane.width();
        data.h = pane.height();
        data.x = this._source.appliedX();
        data.y = this._source.appliedY();
    };
    return CrosshairPaneView;
}());

/**
 * Fills rectangle's inner border (so, all the filled area is limited by the [x, x + width]*[y, y + height] region)
 * ```
 * (x, y)
 * O***********************|*****
 * |        border         |  ^
 * |   *****************   |  |
 * |   |               |   |  |
 * | b |               | b |  h
 * | o |               | o |  e
 * | r |               | r |  i
 * | d |               | d |  g
 * | e |               | e |  h
 * | r |               | r |  t
 * |   |               |   |  |
 * |   *****************   |  |
 * |        border         |  v
 * |***********************|*****
 * |                       |
 * |<------- width ------->|
 * ```
 *
 * @param ctx - Context to draw on
 * @param x - Left side of the target rectangle
 * @param y - Top side of the target rectangle
 * @param width - Width of the target rectangle
 * @param height - Height of the target rectangle
 * @param borderWidth - Width of border to fill, must be less than width and height of the target rectangle
 */
function fillRectInnerBorder(ctx, x, y, width, height, borderWidth) {
    // horizontal (top and bottom) edges
    ctx.fillRect(x + borderWidth, y, width - borderWidth * 2, borderWidth);
    ctx.fillRect(x + borderWidth, y + height - borderWidth, width - borderWidth * 2, borderWidth);
    // vertical (left and right) edges
    ctx.fillRect(x, y, borderWidth, height);
    ctx.fillRect(x + width - borderWidth, y, borderWidth, height);
}
function drawScaled(ctx, ratio, func) {
    ctx.save();
    ctx.scale(ratio, ratio);
    func();
    ctx.restore();
}
function clearRect(ctx, x, y, w, h, clearColor) {
    ctx.save();
    ctx.globalCompositeOperation = 'copy';
    ctx.fillStyle = clearColor;
    ctx.fillRect(x, y, w, h);
    ctx.restore();
}
// eslint-disable-next-line max-params
function clearRectWithGradient(ctx, x, y, w, h, topColor, bottomColor) {
    ctx.save();
    ctx.globalCompositeOperation = 'copy';
    var gradient = ctx.createLinearGradient(0, 0, 0, h);
    gradient.addColorStop(0, topColor);
    gradient.addColorStop(1, bottomColor);
    ctx.fillStyle = gradient;
    ctx.fillRect(x, y, w, h);
    ctx.restore();
}

var PriceAxisViewRenderer = /** @class */ (function () {
    function PriceAxisViewRenderer(data, commonData) {
        this.setData(data, commonData);
    }
    PriceAxisViewRenderer.prototype.setData = function (data, commonData) {
        this._data = data;
        this._commonData = commonData;
    };
    PriceAxisViewRenderer.prototype.draw = function (ctx, rendererOptions, textWidthCache, width, align, pixelRatio) {
        if (!this._data.visible) {
            return;
        }
        ctx.font = rendererOptions.font;
        var tickSize = (this._data.tickVisible || !this._data.moveTextToInvisibleTick) ? rendererOptions.tickLength : 0;
        var horzBorder = rendererOptions.borderSize;
        var paddingTop = rendererOptions.paddingTop;
        var paddingBottom = rendererOptions.paddingBottom;
        var paddingInner = rendererOptions.paddingInner;
        var paddingOuter = rendererOptions.paddingOuter;
        var text = this._data.text;
        var textWidth = Math.ceil(textWidthCache.measureText(ctx, text));
        var baselineOffset = rendererOptions.baselineOffset;
        var totalHeight = rendererOptions.fontSize + paddingTop + paddingBottom;
        var halfHeigth = Math.ceil(totalHeight * 0.5);
        var totalWidth = horzBorder + textWidth + paddingInner + paddingOuter + tickSize;
        var yMid = this._commonData.coordinate;
        if (this._commonData.fixedCoordinate) {
            yMid = this._commonData.fixedCoordinate;
        }
        yMid = Math.round(yMid);
        var yTop = yMid - halfHeigth;
        var yBottom = yTop + totalHeight;
        var alignRight = align === 'right';
        var xInside = alignRight ? width : 0;
        var rightScaled = Math.ceil(width * pixelRatio);
        var xOutside = xInside;
        var xTick;
        var xText;
        ctx.fillStyle = this._commonData.background;
        ctx.lineWidth = 1;
        ctx.lineCap = 'butt';
        if (text) {
            if (alignRight) {
                // 2               1
                //
                //              6  5
                //
                // 3               4
                xOutside = xInside - totalWidth;
                xTick = xInside - tickSize;
                xText = xOutside + paddingOuter;
            }
            else {
                // 1               2
                //
                // 6  5
                //
                // 4               3
                xOutside = xInside + totalWidth;
                xTick = xInside + tickSize;
                xText = xInside + horzBorder + tickSize + paddingInner;
            }
            var tickHeight = Math.max(1, Math.floor(pixelRatio));
            var horzBorderScaled = Math.max(1, Math.floor(horzBorder * pixelRatio));
            var xInsideScaled = alignRight ? rightScaled : 0;
            var yTopScaled = Math.round(yTop * pixelRatio);
            var xOutsideScaled = Math.round(xOutside * pixelRatio);
            var yMidScaled = Math.round(yMid * pixelRatio) - Math.floor(pixelRatio * 0.5);
            var yBottomScaled = yMidScaled + tickHeight + (yMidScaled - yTopScaled);
            var xTickScaled = Math.round(xTick * pixelRatio);
            ctx.save();
            ctx.beginPath();
            ctx.moveTo(xInsideScaled, yTopScaled);
            ctx.lineTo(xOutsideScaled, yTopScaled);
            ctx.lineTo(xOutsideScaled, yBottomScaled);
            ctx.lineTo(xInsideScaled, yBottomScaled);
            ctx.fill();
            // draw border
            ctx.fillStyle = this._data.borderColor;
            ctx.fillRect(alignRight ? rightScaled - horzBorderScaled : 0, yTopScaled, horzBorderScaled, yBottomScaled - yTopScaled);
            if (this._data.tickVisible) {
                ctx.fillStyle = this._commonData.color;
                ctx.fillRect(xInsideScaled, yMidScaled, xTickScaled - xInsideScaled, tickHeight);
            }
            ctx.textAlign = 'left';
            ctx.fillStyle = this._commonData.color;
            drawScaled(ctx, pixelRatio, function () {
                ctx.fillText(text, xText, yBottom - paddingBottom - baselineOffset);
            });
            ctx.restore();
        }
    };
    PriceAxisViewRenderer.prototype.height = function (rendererOptions, useSecondLine) {
        if (!this._data.visible) {
            return 0;
        }
        return rendererOptions.fontSize + rendererOptions.paddingTop + rendererOptions.paddingBottom;
    };
    return PriceAxisViewRenderer;
}());

var PriceAxisView = /** @class */ (function () {
    function PriceAxisView(ctor) {
        this._commonRendererData = {
            coordinate: 0,
            color: '#FFF',
            background: '#000',
        };
        this._axisRendererData = {
            text: '',
            visible: false,
            tickVisible: true,
            moveTextToInvisibleTick: false,
            borderColor: '',
        };
        this._paneRendererData = {
            text: '',
            visible: false,
            tickVisible: false,
            moveTextToInvisibleTick: true,
            borderColor: '',
        };
        this._invalidated = true;
        this._axisRenderer = new (ctor || PriceAxisViewRenderer)(this._axisRendererData, this._commonRendererData);
        this._paneRenderer = new (ctor || PriceAxisViewRenderer)(this._paneRendererData, this._commonRendererData);
    }
    PriceAxisView.prototype.text = function () {
        this._updateRendererDataIfNeeded();
        return this._axisRendererData.text;
    };
    PriceAxisView.prototype.coordinate = function () {
        this._updateRendererDataIfNeeded();
        return this._commonRendererData.coordinate;
    };
    PriceAxisView.prototype.update = function () {
        this._invalidated = true;
    };
    PriceAxisView.prototype.height = function (rendererOptions, useSecondLine) {
        if (useSecondLine === void 0) { useSecondLine = false; }
        return Math.max(this._axisRenderer.height(rendererOptions, useSecondLine), this._paneRenderer.height(rendererOptions, useSecondLine));
    };
    PriceAxisView.prototype.getFixedCoordinate = function () {
        return this._commonRendererData.fixedCoordinate || 0;
    };
    PriceAxisView.prototype.setFixedCoordinate = function (value) {
        this._commonRendererData.fixedCoordinate = value;
    };
    PriceAxisView.prototype.isVisible = function () {
        this._updateRendererDataIfNeeded();
        return this._axisRendererData.visible || this._paneRendererData.visible;
    };
    PriceAxisView.prototype.isAxisLabelVisible = function () {
        this._updateRendererDataIfNeeded();
        return this._axisRendererData.visible;
    };
    PriceAxisView.prototype.renderer = function (priceScale) {
        this._updateRendererDataIfNeeded();
        // force update tickVisible state from price scale options
        // because we don't have and we can't have price axis in other methods
        // (like paneRenderer or any other who call _updateRendererDataIfNeeded)
        this._axisRendererData.tickVisible = this._axisRendererData.tickVisible && priceScale.options().drawTicks;
        this._paneRendererData.tickVisible = this._paneRendererData.tickVisible && priceScale.options().drawTicks;
        this._axisRenderer.setData(this._axisRendererData, this._commonRendererData);
        this._paneRenderer.setData(this._paneRendererData, this._commonRendererData);
        return this._axisRenderer;
    };
    PriceAxisView.prototype.paneRenderer = function () {
        this._updateRendererDataIfNeeded();
        this._axisRenderer.setData(this._axisRendererData, this._commonRendererData);
        this._paneRenderer.setData(this._paneRendererData, this._commonRendererData);
        return this._paneRenderer;
    };
    PriceAxisView.prototype._updateRendererDataIfNeeded = function () {
        if (this._invalidated) {
            this._axisRendererData.tickVisible = true;
            this._paneRendererData.tickVisible = false;
            this._updateRendererData(this._axisRendererData, this._paneRendererData, this._commonRendererData);
        }
    };
    return PriceAxisView;
}());

var CrosshairPriceAxisView = /** @class */ (function (_super) {
    __extends(CrosshairPriceAxisView, _super);
    function CrosshairPriceAxisView(source, priceScale, valueProvider) {
        var _this = _super.call(this) || this;
        _this._source = source;
        _this._priceScale = priceScale;
        _this._valueProvider = valueProvider;
        return _this;
    }
    CrosshairPriceAxisView.prototype._updateRendererData = function (axisRendererData, paneRendererData, commonRendererData) {
        axisRendererData.visible = false;
        var options = this._source.options().horzLine;
        if (!options.labelVisible) {
            return;
        }
        var firstValue = this._priceScale.firstValue();
        if (!this._source.visible() || this._priceScale.isEmpty() || (firstValue === null)) {
            return;
        }
        var colors = generateContrastColors(options.labelBackgroundColor);
        commonRendererData.background = colors.background;
        commonRendererData.color = colors.foreground;
        var value = this._valueProvider(this._priceScale);
        commonRendererData.coordinate = value.coordinate;
        axisRendererData.text = this._priceScale.formatPrice(value.price, firstValue);
        axisRendererData.visible = true;
    };
    return CrosshairPriceAxisView;
}(PriceAxisView));

var optimizationReplacementRe = /[1-9]/g;
var TimeAxisViewRenderer = /** @class */ (function () {
    function TimeAxisViewRenderer() {
        this._data = null;
    }
    TimeAxisViewRenderer.prototype.setData = function (data) {
        this._data = data;
    };
    TimeAxisViewRenderer.prototype.draw = function (ctx, rendererOptions, pixelRatio) {
        var _this = this;
        if (this._data === null || this._data.visible === false || this._data.text.length === 0) {
            return;
        }
        ctx.font = rendererOptions.font;
        var textWidth = Math.round(rendererOptions.widthCache.measureText(ctx, this._data.text, optimizationReplacementRe));
        if (textWidth <= 0) {
            return;
        }
        ctx.save();
        var horzMargin = rendererOptions.paddingHorizontal;
        var labelWidth = textWidth + 2 * horzMargin;
        var labelWidthHalf = labelWidth / 2;
        var timeScaleWidth = this._data.width;
        var coordinate = this._data.coordinate;
        var x1 = Math.floor(coordinate - labelWidthHalf) + 0.5;
        if (x1 < 0) {
            coordinate = coordinate + Math.abs(0 - x1);
            x1 = Math.floor(coordinate - labelWidthHalf) + 0.5;
        }
        else if (x1 + labelWidth > timeScaleWidth) {
            coordinate = coordinate - Math.abs(timeScaleWidth - (x1 + labelWidth));
            x1 = Math.floor(coordinate - labelWidthHalf) + 0.5;
        }
        var x2 = x1 + labelWidth;
        var y1 = 0;
        var y2 = (y1 +
            rendererOptions.borderSize +
            rendererOptions.paddingTop +
            rendererOptions.fontSize +
            rendererOptions.paddingBottom);
        ctx.fillStyle = this._data.background;
        var x1scaled = Math.round(x1 * pixelRatio);
        var y1scaled = Math.round(y1 * pixelRatio);
        var x2scaled = Math.round(x2 * pixelRatio);
        var y2scaled = Math.round(y2 * pixelRatio);
        ctx.fillRect(x1scaled, y1scaled, x2scaled - x1scaled, y2scaled - y1scaled);
        var tickX = Math.round(this._data.coordinate * pixelRatio);
        var tickTop = y1scaled;
        var tickBottom = Math.round((tickTop + rendererOptions.borderSize + rendererOptions.tickLength) * pixelRatio);
        ctx.fillStyle = this._data.color;
        var tickWidth = Math.max(1, Math.floor(pixelRatio));
        var tickOffset = Math.floor(pixelRatio * 0.5);
        ctx.fillRect(tickX - tickOffset, tickTop, tickWidth, tickBottom - tickTop);
        var yText = y2 - rendererOptions.baselineOffset - rendererOptions.paddingBottom;
        ctx.textAlign = 'left';
        ctx.fillStyle = this._data.color;
        drawScaled(ctx, pixelRatio, function () {
            ctx.fillText(ensureNotNull(_this._data).text, x1 + horzMargin, yText);
        });
        ctx.restore();
    };
    return TimeAxisViewRenderer;
}());

var CrosshairTimeAxisView = /** @class */ (function () {
    function CrosshairTimeAxisView(crosshair, model, valueProvider) {
        this._invalidated = true;
        this._renderer = new TimeAxisViewRenderer();
        this._rendererData = {
            visible: false,
            background: '#4c525e',
            color: 'white',
            text: '',
            width: 0,
            coordinate: NaN,
        };
        this._crosshair = crosshair;
        this._model = model;
        this._valueProvider = valueProvider;
    }
    CrosshairTimeAxisView.prototype.update = function () {
        this._invalidated = true;
    };
    CrosshairTimeAxisView.prototype.renderer = function () {
        if (this._invalidated) {
            this._updateImpl();
            this._invalidated = false;
        }
        this._renderer.setData(this._rendererData);
        return this._renderer;
    };
    CrosshairTimeAxisView.prototype._updateImpl = function () {
        var data = this._rendererData;
        data.visible = false;
        var options = this._crosshair.options().vertLine;
        if (!options.labelVisible) {
            return;
        }
        var timeScale = this._model.timeScale();
        if (timeScale.isEmpty()) {
            return;
        }
        var currentTime = timeScale.indexToTime(this._crosshair.appliedIndex());
        data.width = timeScale.width();
        var value = this._valueProvider();
        if (!value.time) {
            return;
        }
        data.coordinate = value.coordinate;
        data.text = timeScale.formatDateTime(ensureNotNull(currentTime));
        data.visible = true;
        var colors = generateContrastColors(options.labelBackgroundColor);
        data.background = colors.background;
        data.color = colors.foreground;
    };
    return CrosshairTimeAxisView;
}());

var DataSource = /** @class */ (function () {
    function DataSource() {
        this._priceScale = null;
        this._zorder = 0;
    }
    DataSource.prototype.zorder = function () {
        return this._zorder;
    };
    DataSource.prototype.setZorder = function (zorder) {
        this._zorder = zorder;
    };
    DataSource.prototype.priceScale = function () {
        return this._priceScale;
    };
    DataSource.prototype.setPriceScale = function (priceScale) {
        this._priceScale = priceScale;
    };
    DataSource.prototype.timeAxisViews = function () {
        return [];
    };
    DataSource.prototype.visible = function () {
        return true;
    };
    return DataSource;
}());

/**
 * Represents the crosshair mode.
 */
var CrosshairMode;
(function (CrosshairMode) {
    /**
     * This mode allows crosshair to move freely on the chart.
     */
    CrosshairMode[CrosshairMode["Normal"] = 0] = "Normal";
    /**
     * This mode sticks crosshair's horizontal line to the price value of a single-value series or to the close price of OHLC-based series.
     */
    CrosshairMode[CrosshairMode["Magnet"] = 1] = "Magnet";
})(CrosshairMode || (CrosshairMode = {}));
var Crosshair = /** @class */ (function (_super) {
    __extends(Crosshair, _super);
    function Crosshair(model, options) {
        var _this = _super.call(this) || this;
        _this._pane = null;
        _this._price = NaN;
        _this._index = 0;
        _this._visible = true;
        _this._priceAxisViews = new Map();
        _this._subscribed = false;
        _this._x = NaN;
        _this._y = NaN;
        _this._originX = NaN;
        _this._originY = NaN;
        _this._model = model;
        _this._options = options;
        _this._markersPaneView = new CrosshairMarksPaneView(model, _this);
        var valuePriceProvider = function (rawPriceProvider, rawCoordinateProvider) {
            return function (priceScale) {
                var coordinate = rawCoordinateProvider();
                var rawPrice = rawPriceProvider();
                if (priceScale === ensureNotNull(_this._pane).defaultPriceScale()) {
                    // price must be defined
                    return { price: rawPrice, coordinate: coordinate };
                }
                else {
                    // always convert from coordinate
                    var firstValue = ensureNotNull(priceScale.firstValue());
                    var price = priceScale.coordinateToPrice(coordinate, firstValue);
                    return { price: price, coordinate: coordinate };
                }
            };
        };
        var valueTimeProvider = function (rawIndexProvider, rawCoordinateProvider) {
            return function () {
                return {
                    time: _this._model.timeScale().indexToTime(rawIndexProvider()),
                    coordinate: rawCoordinateProvider(),
                };
            };
        };
        // for current position always return both price and coordinate
        _this._currentPosPriceProvider = valuePriceProvider(function () { return _this._price; }, function () { return _this._y; });
        var currentPosTimeProvider = valueTimeProvider(function () { return _this._index; }, function () { return _this.appliedX(); });
        _this._timeAxisView = new CrosshairTimeAxisView(_this, model, currentPosTimeProvider);
        _this._paneView = new CrosshairPaneView(_this);
        return _this;
    }
    Crosshair.prototype.options = function () {
        return this._options;
    };
    Crosshair.prototype.saveOriginCoord = function (x, y) {
        this._originX = x;
        this._originY = y;
    };
    Crosshair.prototype.clearOriginCoord = function () {
        this._originX = NaN;
        this._originY = NaN;
    };
    Crosshair.prototype.originCoordX = function () {
        return this._originX;
    };
    Crosshair.prototype.originCoordY = function () {
        return this._originY;
    };
    Crosshair.prototype.setPosition = function (index, price, pane) {
        if (!this._subscribed) {
            this._subscribed = true;
        }
        this._visible = true;
        this._tryToUpdateViews(index, price, pane);
    };
    Crosshair.prototype.appliedIndex = function () {
        return this._index;
    };
    Crosshair.prototype.appliedX = function () {
        return this._x;
    };
    Crosshair.prototype.appliedY = function () {
        return this._y;
    };
    Crosshair.prototype.visible = function () {
        return this._visible;
    };
    Crosshair.prototype.clearPosition = function () {
        this._visible = false;
        this._setIndexToLastSeriesBarIndex();
        this._price = NaN;
        this._x = NaN;
        this._y = NaN;
        this._pane = null;
        this.clearOriginCoord();
    };
    Crosshair.prototype.paneViews = function (pane) {
        return this._pane !== null ? [this._paneView, this._markersPaneView] : [];
    };
    Crosshair.prototype.horzLineVisible = function (pane) {
        return pane === this._pane && this._options.horzLine.visible;
    };
    Crosshair.prototype.vertLineVisible = function () {
        return this._options.vertLine.visible;
    };
    Crosshair.prototype.priceAxisViews = function (pane, priceScale) {
        if (!this._visible || this._pane !== pane) {
            this._priceAxisViews.clear();
        }
        var views = [];
        if (this._pane === pane) {
            views.push(this._createPriceAxisViewOnDemand(this._priceAxisViews, priceScale, this._currentPosPriceProvider));
        }
        return views;
    };
    Crosshair.prototype.timeAxisViews = function () {
        return this._visible ? [this._timeAxisView] : [];
    };
    Crosshair.prototype.pane = function () {
        return this._pane;
    };
    Crosshair.prototype.updateAllViews = function () {
        this._paneView.update();
        this._priceAxisViews.forEach(function (value) { return value.update(); });
        this._timeAxisView.update();
        this._markersPaneView.update();
    };
    Crosshair.prototype._priceScaleByPane = function (pane) {
        if (pane && !pane.defaultPriceScale().isEmpty()) {
            return pane.defaultPriceScale();
        }
        return null;
    };
    Crosshair.prototype._tryToUpdateViews = function (index, price, pane) {
        if (this._tryToUpdateData(index, price, pane)) {
            this.updateAllViews();
        }
    };
    Crosshair.prototype._tryToUpdateData = function (newIndex, newPrice, newPane) {
        var oldX = this._x;
        var oldY = this._y;
        var oldPrice = this._price;
        var oldIndex = this._index;
        var oldPane = this._pane;
        var priceScale = this._priceScaleByPane(newPane);
        this._index = newIndex;
        this._x = isNaN(newIndex) ? NaN : this._model.timeScale().indexToCoordinate(newIndex);
        this._pane = newPane;
        var firstValue = priceScale !== null ? priceScale.firstValue() : null;
        if (priceScale !== null && firstValue !== null) {
            this._price = newPrice;
            this._y = priceScale.priceToCoordinate(newPrice, firstValue);
        }
        else {
            this._price = NaN;
            this._y = NaN;
        }
        return (oldX !== this._x || oldY !== this._y || oldIndex !== this._index ||
            oldPrice !== this._price || oldPane !== this._pane);
    };
    Crosshair.prototype._setIndexToLastSeriesBarIndex = function () {
        var lastIndexes = this._model.serieses()
            .map(function (s) { return s.bars().lastIndex(); })
            .filter(notNull);
        var lastBarIndex = (lastIndexes.length === 0) ? null : Math.max.apply(Math, lastIndexes);
        this._index = lastBarIndex !== null ? lastBarIndex : NaN;
    };
    Crosshair.prototype._createPriceAxisViewOnDemand = function (map, priceScale, valueProvider) {
        var view = map.get(priceScale);
        if (view === undefined) {
            view = new CrosshairPriceAxisView(this, priceScale, valueProvider);
            map.set(priceScale, view);
        }
        return view;
    };
    return Crosshair;
}(DataSource));

var DefaultPriceScaleId;
(function (DefaultPriceScaleId) {
    DefaultPriceScaleId["Left"] = "left";
    DefaultPriceScaleId["Right"] = "right";
})(DefaultPriceScaleId || (DefaultPriceScaleId = {}));
function isDefaultPriceScale(priceScaleId) {
    return priceScaleId === "left" /* DefaultPriceScaleId.Left */ || priceScaleId === "right" /* DefaultPriceScaleId.Right */;
}

var InvalidationLevel;
(function (InvalidationLevel) {
    InvalidationLevel[InvalidationLevel["None"] = 0] = "None";
    InvalidationLevel[InvalidationLevel["Cursor"] = 1] = "Cursor";
    InvalidationLevel[InvalidationLevel["Light"] = 2] = "Light";
    InvalidationLevel[InvalidationLevel["Full"] = 3] = "Full";
})(InvalidationLevel || (InvalidationLevel = {}));
function mergePaneInvalidation(beforeValue, newValue) {
    if (beforeValue === undefined) {
        return newValue;
    }
    var level = Math.max(beforeValue.level, newValue.level);
    var autoScale = beforeValue.autoScale || newValue.autoScale;
    return { level: level, autoScale: autoScale };
}
var TimeScaleInvalidationType;
(function (TimeScaleInvalidationType) {
    TimeScaleInvalidationType[TimeScaleInvalidationType["FitContent"] = 0] = "FitContent";
    TimeScaleInvalidationType[TimeScaleInvalidationType["ApplyRange"] = 1] = "ApplyRange";
    TimeScaleInvalidationType[TimeScaleInvalidationType["ApplyBarSpacing"] = 2] = "ApplyBarSpacing";
    TimeScaleInvalidationType[TimeScaleInvalidationType["ApplyRightOffset"] = 3] = "ApplyRightOffset";
    TimeScaleInvalidationType[TimeScaleInvalidationType["Reset"] = 4] = "Reset";
})(TimeScaleInvalidationType || (TimeScaleInvalidationType = {}));
var InvalidateMask = /** @class */ (function () {
    function InvalidateMask(globalLevel) {
        this._invalidatedPanes = new Map();
        this._timeScaleInvalidations = [];
        this._globalLevel = globalLevel;
    }
    InvalidateMask.prototype.invalidatePane = function (paneIndex, invalidation) {
        var prevValue = this._invalidatedPanes.get(paneIndex);
        var newValue = mergePaneInvalidation(prevValue, invalidation);
        this._invalidatedPanes.set(paneIndex, newValue);
    };
    InvalidateMask.prototype.fullInvalidation = function () {
        return this._globalLevel;
    };
    InvalidateMask.prototype.invalidateForPane = function (paneIndex) {
        var paneInvalidation = this._invalidatedPanes.get(paneIndex);
        if (paneInvalidation === undefined) {
            return {
                level: this._globalLevel,
            };
        }
        return {
            level: Math.max(this._globalLevel, paneInvalidation.level),
            autoScale: paneInvalidation.autoScale,
        };
    };
    InvalidateMask.prototype.setFitContent = function () {
        // modifies both bar spacing and right offset
        this._timeScaleInvalidations = [{ type: 0 /* TimeScaleInvalidationType.FitContent */ }];
    };
    InvalidateMask.prototype.applyRange = function (range) {
        // modifies both bar spacing and right offset
        this._timeScaleInvalidations = [{ type: 1 /* TimeScaleInvalidationType.ApplyRange */, value: range }];
    };
    InvalidateMask.prototype.resetTimeScale = function () {
        // modifies both bar spacing and right offset
        this._timeScaleInvalidations = [{ type: 4 /* TimeScaleInvalidationType.Reset */ }];
    };
    InvalidateMask.prototype.setBarSpacing = function (barSpacing) {
        this._timeScaleInvalidations.push({ type: 2 /* TimeScaleInvalidationType.ApplyBarSpacing */, value: barSpacing });
    };
    InvalidateMask.prototype.setRightOffset = function (offset) {
        this._timeScaleInvalidations.push({ type: 3 /* TimeScaleInvalidationType.ApplyRightOffset */, value: offset });
    };
    InvalidateMask.prototype.timeScaleInvalidations = function () {
        return this._timeScaleInvalidations;
    };
    InvalidateMask.prototype.merge = function (other) {
        var _this = this;
        for (var _i = 0, _a = other._timeScaleInvalidations; _i < _a.length; _i++) {
            var tsInvalidation = _a[_i];
            this._applyTimeScaleInvalidation(tsInvalidation);
        }
        this._globalLevel = Math.max(this._globalLevel, other._globalLevel);
        other._invalidatedPanes.forEach(function (invalidation, index) {
            _this.invalidatePane(index, invalidation);
        });
    };
    InvalidateMask.prototype._applyTimeScaleInvalidation = function (invalidation) {
        switch (invalidation.type) {
            case 0 /* TimeScaleInvalidationType.FitContent */:
                this.setFitContent();
                break;
            case 1 /* TimeScaleInvalidationType.ApplyRange */:
                this.applyRange(invalidation.value);
                break;
            case 2 /* TimeScaleInvalidationType.ApplyBarSpacing */:
                this.setBarSpacing(invalidation.value);
                break;
            case 3 /* TimeScaleInvalidationType.ApplyRightOffset */:
                this.setRightOffset(invalidation.value);
                break;
            case 4 /* TimeScaleInvalidationType.Reset */:
                this.resetTimeScale();
                break;
        }
    };
    return InvalidateMask;
}());

var formatterOptions = {
    decimalSign: '.'};
/**
 * @param value - The number of convert.
 * @param length - The length. Must be between 0 and 16 inclusive.
 */
function numberToStringWithLeadingZero(value, length) {
    if (!isNumber(value)) {
        return 'n/a';
    }
    if (!isInteger(length)) {
        throw new TypeError('invalid length');
    }
    if (length < 0 || length > 16) {
        throw new TypeError('invalid length');
    }
    if (length === 0) {
        return value.toString();
    }
    var dummyString = '0000000000000000';
    return (dummyString + value.toString()).slice(-length);
}
var PriceFormatter = /** @class */ (function () {
    function PriceFormatter(priceScale, minMove) {
        if (!minMove) {
            minMove = 1;
        }
        if (!isNumber(priceScale) || !isInteger(priceScale)) {
            priceScale = 100;
        }
        if (priceScale < 0) {
            throw new TypeError('invalid base');
        }
        this._priceScale = priceScale;
        this._minMove = minMove;
        this._calculateDecimal();
    }
    PriceFormatter.prototype.format = function (price) {
        // \u2212 is unicode's minus sign https://www.fileformat.info/info/unicode/char/2212/index.htm
        // we should use it because it has the same width as plus sign +
        var sign = price < 0 ? '\u2212' : '';
        price = Math.abs(price);
        return sign + this._formatAsDecimal(price);
    };
    PriceFormatter.prototype._calculateDecimal = function () {
        // check if this._base is power of 10
        // for double fractional _fractionalLength if for the main fractional only
        this._fractionalLength = 0;
        if (this._priceScale > 0 && this._minMove > 0) {
            var base = this._priceScale;
            while (base > 1) {
                base /= 10;
                this._fractionalLength++;
            }
        }
    };
    PriceFormatter.prototype._formatAsDecimal = function (price) {
        var base = this._priceScale / this._minMove;
        var intPart = Math.floor(price);
        var fracString = '';
        var fracLength = this._fractionalLength !== undefined ? this._fractionalLength : NaN;
        if (base > 1) {
            var fracPart = +(Math.round(price * base) - intPart * base).toFixed(this._fractionalLength);
            if (fracPart >= base) {
                fracPart -= base;
                intPart += 1;
            }
            fracString = formatterOptions.decimalSign + numberToStringWithLeadingZero(+fracPart.toFixed(this._fractionalLength) * this._minMove, fracLength);
        }
        else {
            // should round int part to min move
            intPart = Math.round(intPart * base) / base;
            // if min move > 1, fractional part is always = 0
            if (fracLength > 0) {
                fracString = formatterOptions.decimalSign + numberToStringWithLeadingZero(0, fracLength);
            }
        }
        return intPart.toFixed(0) + fracString;
    };
    return PriceFormatter;
}());

var PercentageFormatter = /** @class */ (function (_super) {
    __extends(PercentageFormatter, _super);
    function PercentageFormatter(priceScale) {
        if (priceScale === void 0) { priceScale = 100; }
        return _super.call(this, priceScale) || this;
    }
    PercentageFormatter.prototype.format = function (price) {
        return "".concat(_super.prototype.format.call(this, price), "%");
    };
    return PercentageFormatter;
}(PriceFormatter));

var VolumeFormatter = /** @class */ (function () {
    function VolumeFormatter(precision) {
        this._precision = precision;
    }
    VolumeFormatter.prototype.format = function (vol) {
        var sign = '';
        if (vol < 0) {
            sign = '-';
            vol = -vol;
        }
        if (vol < 995) {
            return sign + this._formatNumber(vol);
        }
        else if (vol < 999995) {
            return sign + this._formatNumber(vol / 1000) + 'K';
        }
        else if (vol < 999999995) {
            vol = 1000 * Math.round(vol / 1000);
            return sign + this._formatNumber(vol / 1000000) + 'M';
        }
        else {
            vol = 1000000 * Math.round(vol / 1000000);
            return sign + this._formatNumber(vol / 1000000000) + 'B';
        }
    };
    VolumeFormatter.prototype._formatNumber = function (value) {
        var res;
        var priceScale = Math.pow(10, this._precision);
        value = Math.round(value * priceScale) / priceScale;
        if (value >= 1e-15 && value < 1) {
            res = value.toFixed(this._precision).replace(/\.?0+$/, ''); // regex removes trailing zeroes
        }
        else {
            res = String(value);
        }
        return res.replace(/(\.[1-9]*)0+$/, function (e, p1) { return p1; });
    };
    return VolumeFormatter;
}());

/**
 * BEWARE: The method must be called after beginPath and before stroke/fill/closePath/etc
 */
function walkLine(ctx, points, lineType, visibleRange) {
    if (points.length === 0) {
        return;
    }
    var i = visibleRange.from;
    var x = points[i].x;
    var y = points[i].y;
    ctx.moveTo(x, y);
    i++;
    if (lineType === 1 /* LineType.WithSteps */) {
        for (; i < visibleRange.to; i++) {
            var currItem = points[i];
            var prevY = points[i - 1].y;
            ctx.lineTo(currItem.x, prevY);
            ctx.lineTo(currItem.x, currItem.y);
        }
    }
    else if (lineType === 2 /* LineType.WithGaps */) {
        var isGap = true;
        for (; i < visibleRange.to; i++) {
            var currItem = points[i];
            var currPrice = currItem.price;
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
    }
    else {
        for (; i < visibleRange.to; i++) {
            var currItem = points[i];
            ctx.lineTo(currItem.x, currItem.y);
        }
    }
}

var PaneRendererAreaBase = /** @class */ (function (_super) {
    __extends(PaneRendererAreaBase, _super);
    function PaneRendererAreaBase() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._data = null;
        return _this;
    }
    PaneRendererAreaBase.prototype.setData = function (data) {
        this._data = data;
    };
    PaneRendererAreaBase.prototype._drawImpl = function (ctx) {
        if (this._data === null || this._data.items.length === 0 || this._data.visibleRange === null) {
            return;
        }
        ctx.lineCap = 'butt';
        ctx.lineJoin = 'round';
        ctx.lineWidth = this._data.lineWidth;
        setLineStyle(ctx, this._data.lineStyle);
        // walk lines with width=1 to have more accurate gradient's filling
        ctx.lineWidth = 1;
        ctx.beginPath();
        if (this._data.items.length === 1) {
            var point = this._data.items[0];
            var halfBarWidth = this._data.barWidth / 2;
            ctx.moveTo(point.x - halfBarWidth, this._data.baseLevelCoordinate);
            ctx.lineTo(point.x - halfBarWidth, point.y);
            ctx.lineTo(point.x + halfBarWidth, point.y);
            ctx.lineTo(point.x + halfBarWidth, this._data.baseLevelCoordinate);
        }
        else {
            ctx.moveTo(this._data.items[this._data.visibleRange.from].x, this._data.baseLevelCoordinate);
            ctx.lineTo(this._data.items[this._data.visibleRange.from].x, this._data.items[this._data.visibleRange.from].y);
            walkLine(ctx, this._data.items, this._data.lineType, this._data.visibleRange);
            if (this._data.visibleRange.to > this._data.visibleRange.from) {
                ctx.lineTo(this._data.items[this._data.visibleRange.to - 1].x, this._data.baseLevelCoordinate);
                ctx.lineTo(this._data.items[this._data.visibleRange.from].x, this._data.baseLevelCoordinate);
            }
        }
        ctx.closePath();
        ctx.fillStyle = this._fillStyle(ctx);
        ctx.fill();
    };
    return PaneRendererAreaBase;
}(ScaledRenderer));
var PaneRendererArea = /** @class */ (function (_super) {
    __extends(PaneRendererArea, _super);
    function PaneRendererArea() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PaneRendererArea.prototype._fillStyle = function (ctx) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        var data = this._data;
        var gradient = ctx.createLinearGradient(0, 0, 0, data.bottom);
        gradient.addColorStop(0, data.topColor);
        gradient.addColorStop(1, data.bottomColor);
        return gradient;
    };
    return PaneRendererArea;
}(PaneRendererAreaBase));

var PaneRendererLineBase = /** @class */ (function (_super) {
    __extends(PaneRendererLineBase, _super);
    function PaneRendererLineBase() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._data = null;
        return _this;
    }
    PaneRendererLineBase.prototype.setData = function (data) {
        this._data = data;
    };
    PaneRendererLineBase.prototype._drawImpl = function (ctx) {
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
            var point = this._data.items[0];
            ctx.moveTo(point.x - this._data.barWidth / 2, point.y);
            ctx.lineTo(point.x + this._data.barWidth / 2, point.y);
            if (point.color !== undefined) {
                ctx.strokeStyle = point.color;
            }
            ctx.stroke();
        }
        else {
            this._drawLine(ctx, this._data);
        }
    };
    PaneRendererLineBase.prototype._drawLine = function (ctx, data) {
        ctx.beginPath();
        walkLine(ctx, data.items, data.lineType, data.visibleRange);
        ctx.stroke();
    };
    return PaneRendererLineBase;
}(ScaledRenderer));
var PaneRendererLine = /** @class */ (function (_super) {
    __extends(PaneRendererLine, _super);
    function PaneRendererLine() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Similar to {@link walkLine}, but supports color changes
     */
    PaneRendererLine.prototype._drawLine = function (ctx, data) {
        var _a, _b, _c, _d;
        var items = data.items, visibleRange = data.visibleRange, lineType = data.lineType, lineColor = data.lineColor;
        if (items.length === 0 || visibleRange === null) {
            return;
        }
        ctx.beginPath();
        var i = visibleRange.from;
        var firstItem = items[i];
        ctx.moveTo(firstItem.x, firstItem.y);
        var prevStrokeStyle = (_a = firstItem.color) !== null && _a !== void 0 ? _a : lineColor;
        ctx.strokeStyle = prevStrokeStyle;
        var changeColor = function (color) {
            ctx.stroke();
            ctx.beginPath();
            ctx.strokeStyle = color;
            prevStrokeStyle = color;
        };
        i++;
        if (lineType === 1 /* LineType.WithSteps */) {
            for (; i < visibleRange.to; i++) {
                var currItem = items[i];
                var prevItem = items[i - 1];
                var currentStrokeStyle = (_b = currItem.color) !== null && _b !== void 0 ? _b : lineColor;
                ctx.lineTo(currItem.x, prevItem.y);
                if (currentStrokeStyle !== prevStrokeStyle) {
                    changeColor(currentStrokeStyle);
                    ctx.moveTo(currItem.x, prevItem.y);
                }
                ctx.lineTo(currItem.x, currItem.y);
            }
        }
        else if (lineType === 2 /* LineType.WithGaps */) {
            var isGap = true;
            for (; i < visibleRange.to; i++) {
                var currItem = items[i];
                var prevItem = items[i - 1];
                var currentStrokeStyle = (_c = currItem.color) !== null && _c !== void 0 ? _c : lineColor;
                var currPrice = currItem.price;
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
        }
        else {
            for (; i < visibleRange.to; i++) {
                var currItem = items[i];
                var currentStrokeStyle = (_d = currItem.color) !== null && _d !== void 0 ? _d : lineColor;
                ctx.lineTo(currItem.x, currItem.y);
                if (currentStrokeStyle !== prevStrokeStyle) {
                    changeColor(currentStrokeStyle);
                    ctx.moveTo(currItem.x, currItem.y);
                }
            }
        }
        ctx.stroke();
    };
    PaneRendererLine.prototype._strokeStyle = function () {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        return this._data.lineColor;
    };
    return PaneRendererLine;
}(PaneRendererLineBase));

/**
 * Binary function that accepts two arguments (the first of the type of array elements, and the second is always val), and returns a value convertible to bool.
 * The value returned indicates whether the first argument is considered to go before the second.
 * The function shall not modify any of its arguments.
 */
function lowerbound(arr, value, compare, start, to) {
    if (start === void 0) { start = 0; }
    if (to === void 0) { to = arr.length; }
    var count = to - start;
    while (0 < count) {
        var count2 = (count >> 1);
        var mid = start + count2;
        if (compare(arr[mid], value)) {
            start = mid + 1;
            count -= count2 + 1;
        }
        else {
            count = count2;
        }
    }
    return start;
}
function upperbound(arr, value, compare, start, to) {
    if (start === void 0) { start = 0; }
    if (to === void 0) { to = arr.length; }
    var count = to - start;
    while (0 < count) {
        var count2 = (count >> 1);
        var mid = start + count2;
        if (!(compare(value, arr[mid]))) {
            start = mid + 1;
            count -= count2 + 1;
        }
        else {
            count = count2;
        }
    }
    return start;
}

/**
 * Describes a weight of tick mark, i.e. a part of a time that changed since previous time.
 * Note that you can use any timezone to calculate this value, it is unnecessary to use UTC.
 *
 * @example Between 2020-01-01 and 2020-01-02 there is a day of difference, i.e. for 2020-01-02 weight would be a day.
 * @example Between 2020-01-01 and 2020-02-02 there is a month of difference, i.e. for 2020-02-02 weight would be a month.
 */
var TickMarkWeight;
(function (TickMarkWeight) {
    TickMarkWeight[TickMarkWeight["LessThanSecond"] = 0] = "LessThanSecond";
    TickMarkWeight[TickMarkWeight["Second"] = 10] = "Second";
    TickMarkWeight[TickMarkWeight["Minute1"] = 20] = "Minute1";
    TickMarkWeight[TickMarkWeight["Minute5"] = 21] = "Minute5";
    TickMarkWeight[TickMarkWeight["Minute30"] = 22] = "Minute30";
    TickMarkWeight[TickMarkWeight["Hour1"] = 30] = "Hour1";
    TickMarkWeight[TickMarkWeight["Hour3"] = 31] = "Hour3";
    TickMarkWeight[TickMarkWeight["Hour6"] = 32] = "Hour6";
    TickMarkWeight[TickMarkWeight["Hour12"] = 33] = "Hour12";
    TickMarkWeight[TickMarkWeight["Day"] = 50] = "Day";
    TickMarkWeight[TickMarkWeight["Month"] = 60] = "Month";
    TickMarkWeight[TickMarkWeight["Year"] = 70] = "Year";
})(TickMarkWeight || (TickMarkWeight = {}));
function lowerBoundItemsCompare(item, time) {
    return item.time < time;
}
function upperBoundItemsCompare(time, item) {
    return time < item.time;
}
function visibleTimedValues(items, range, extendedRange) {
    var firstBar = range.left();
    var lastBar = range.right();
    var from = lowerbound(items, firstBar, lowerBoundItemsCompare);
    var to = upperbound(items, lastBar, upperBoundItemsCompare);
    if (!extendedRange) {
        return { from: from, to: to };
    }
    var extendedFrom = from;
    var extendedTo = to;
    if (from > 0 && from < items.length && items[from].time >= firstBar) {
        extendedFrom = from - 1;
    }
    if (to > 0 && to < items.length && items[to - 1].time <= lastBar) {
        extendedTo = to + 1;
    }
    return { from: extendedFrom, to: extendedTo };
}

var SeriesPaneViewBase = /** @class */ (function () {
    function SeriesPaneViewBase(series, model, extendedVisibleRange) {
        this._invalidated = true;
        this._dataInvalidated = true;
        this._optionsInvalidated = true;
        this._items = [];
        this._itemsVisibleRange = null;
        this._series = series;
        this._model = model;
        this._extendedVisibleRange = extendedVisibleRange;
    }
    SeriesPaneViewBase.prototype.update = function (updateType) {
        this._invalidated = true;
        if (updateType === 'data') {
            this._dataInvalidated = true;
        }
        if (updateType === 'options') {
            this._optionsInvalidated = true;
        }
    };
    SeriesPaneViewBase.prototype._makeValid = function () {
        if (this._dataInvalidated) {
            this._fillRawPoints();
            this._dataInvalidated = false;
        }
        if (this._invalidated) {
            this._updatePoints();
            this._invalidated = false;
        }
        if (this._optionsInvalidated) {
            this._updateOptions();
            this._optionsInvalidated = false;
        }
    };
    SeriesPaneViewBase.prototype._clearVisibleRange = function () {
        this._itemsVisibleRange = null;
    };
    SeriesPaneViewBase.prototype._updatePoints = function () {
        var priceScale = this._series.priceScale();
        var timeScale = this._model.timeScale();
        this._clearVisibleRange();
        if (timeScale.isEmpty() || priceScale.isEmpty()) {
            return;
        }
        var visibleBars = timeScale.visibleStrictRange();
        if (visibleBars === null) {
            return;
        }
        if (this._series.bars().size() === 0) {
            return;
        }
        var firstValue = this._series.firstValue();
        if (firstValue === null) {
            return;
        }
        this._itemsVisibleRange = visibleTimedValues(this._items, visibleBars, this._extendedVisibleRange);
        this._convertToCoordinates(priceScale, timeScale, firstValue.value);
    };
    return SeriesPaneViewBase;
}());

var LinePaneViewBase = /** @class */ (function (_super) {
    __extends(LinePaneViewBase, _super);
    function LinePaneViewBase(series, model) {
        return _super.call(this, series, model, true) || this;
    }
    LinePaneViewBase.prototype._convertToCoordinates = function (priceScale, timeScale, firstValue) {
        timeScale.indexesToCoordinates(this._items, undefinedIfNull(this._itemsVisibleRange));
        priceScale.pointsArrayToCoordinates(this._items, firstValue, undefinedIfNull(this._itemsVisibleRange));
    };
    LinePaneViewBase.prototype._createRawItemBase = function (time, price) {
        return {
            time: time,
            price: price,
            x: NaN,
            y: NaN,
        };
    };
    LinePaneViewBase.prototype._updateOptions = function () { };
    LinePaneViewBase.prototype._fillRawPoints = function () {
        var _this = this;
        var colorer = this._series.barColorer();
        this._items = this._series.bars().rows().map(function (row) {
            var value = row.value[3 /* PlotRowValueIndex.Close */];
            return _this._createRawItem(row.index, value, colorer);
        });
    };
    return LinePaneViewBase;
}(SeriesPaneViewBase));

var SeriesAreaPaneView = /** @class */ (function (_super) {
    __extends(SeriesAreaPaneView, _super);
    function SeriesAreaPaneView(series, model) {
        var _this = _super.call(this, series, model) || this;
        _this._renderer = new CompositeRenderer();
        _this._areaRenderer = new PaneRendererArea();
        _this._lineRenderer = new PaneRendererLine();
        _this._renderer.setRenderers([_this._areaRenderer, _this._lineRenderer]);
        return _this;
    }
    SeriesAreaPaneView.prototype.renderer = function (height, width) {
        if (!this._series.visible()) {
            return null;
        }
        var areaStyleProperties = this._series.options();
        this._makeValid();
        this._areaRenderer.setData({
            lineType: areaStyleProperties.lineType,
            items: this._items,
            lineStyle: areaStyleProperties.lineStyle,
            lineWidth: areaStyleProperties.lineWidth,
            topColor: areaStyleProperties.topColor,
            bottomColor: areaStyleProperties.bottomColor,
            baseLevelCoordinate: height,
            bottom: height,
            visibleRange: this._itemsVisibleRange,
            barWidth: this._model.timeScale().barSpacing(),
        });
        this._lineRenderer.setData({
            lineType: areaStyleProperties.lineType,
            items: this._items,
            lineColor: areaStyleProperties.lineColor,
            lineStyle: areaStyleProperties.lineStyle,
            lineWidth: areaStyleProperties.lineWidth,
            visibleRange: this._itemsVisibleRange,
            barWidth: this._model.timeScale().barSpacing(),
        });
        return this._renderer;
    };
    SeriesAreaPaneView.prototype._createRawItem = function (time, price) {
        return this._createRawItemBase(time, price);
    };
    return SeriesAreaPaneView;
}(LinePaneViewBase));

function optimalBarWidth(barSpacing, pixelRatio) {
    return Math.floor(barSpacing * 0.3 * pixelRatio);
}
function optimalCandlestickWidth(barSpacing, pixelRatio) {
    var barSpacingSpecialCaseFrom = 2.5;
    var barSpacingSpecialCaseTo = 4;
    var barSpacingSpecialCaseCoeff = 3;
    if (barSpacing >= barSpacingSpecialCaseFrom && barSpacing <= barSpacingSpecialCaseTo) {
        return Math.floor(barSpacingSpecialCaseCoeff * pixelRatio);
    }
    // coeff should be 1 on small barspacing and go to 0.8 while groing bar spacing
    var barSpacingReducingCoeff = 0.2;
    var coeff = 1 - barSpacingReducingCoeff * Math.atan(Math.max(barSpacingSpecialCaseTo, barSpacing) - barSpacingSpecialCaseTo) / (Math.PI * 0.5);
    var res = Math.floor(barSpacing * coeff * pixelRatio);
    var scaledBarSpacing = Math.floor(barSpacing * pixelRatio);
    var optimal = Math.min(res, scaledBarSpacing);
    return Math.max(Math.floor(pixelRatio), optimal);
}

var PaneRendererBars = /** @class */ (function () {
    function PaneRendererBars() {
        this._data = null;
        this._barWidth = 0;
        this._barLineWidth = 0;
    }
    PaneRendererBars.prototype.setData = function (data) {
        this._data = data;
    };
    // eslint-disable-next-line complexity
    PaneRendererBars.prototype.draw = function (ctx, pixelRatio, isHovered, hitTestData) {
        if (this._data === null || this._data.bars.length === 0 || this._data.visibleRange === null) {
            return;
        }
        this._barWidth = this._calcBarWidth(pixelRatio);
        // grid and crosshair have line width = Math.floor(pixelRatio)
        // if this value is odd, we have to make bars' width odd
        // if this value is even, we have to make bars' width even
        // in order of keeping crosshair-over-bar drawing symmetric
        if (this._barWidth >= 2) {
            var lineWidth = Math.max(1, Math.floor(pixelRatio));
            if ((lineWidth % 2) !== (this._barWidth % 2)) {
                this._barWidth--;
            }
        }
        // if scale is compressed, bar could become less than 1 CSS pixel
        this._barLineWidth = this._data.thinBars ? Math.min(this._barWidth, Math.floor(pixelRatio)) : this._barWidth;
        var prevColor = null;
        var drawOpenClose = this._barLineWidth <= this._barWidth && this._data.barSpacing >= Math.floor(1.5 * pixelRatio);
        for (var i = this._data.visibleRange.from; i < this._data.visibleRange.to; ++i) {
            var bar = this._data.bars[i];
            if (prevColor !== bar.color) {
                ctx.fillStyle = bar.color;
                prevColor = bar.color;
            }
            var bodyWidthHalf = Math.floor(this._barLineWidth * 0.5);
            var bodyCenter = Math.round(bar.x * pixelRatio);
            var bodyLeft = bodyCenter - bodyWidthHalf;
            var bodyWidth = this._barLineWidth;
            var bodyRight = bodyLeft + bodyWidth - 1;
            var high = Math.min(bar.highY, bar.lowY);
            var low = Math.max(bar.highY, bar.lowY);
            var bodyTop = Math.round(high * pixelRatio) - bodyWidthHalf;
            var bodyBottom = Math.round(low * pixelRatio) + bodyWidthHalf;
            var bodyHeight = Math.max((bodyBottom - bodyTop), this._barLineWidth);
            ctx.fillRect(bodyLeft, bodyTop, bodyWidth, bodyHeight);
            var sideWidth = Math.ceil(this._barWidth * 1.5);
            if (drawOpenClose) {
                if (this._data.openVisible) {
                    var openLeft = bodyCenter - sideWidth;
                    var openTop = Math.max(bodyTop, Math.round(bar.openY * pixelRatio) - bodyWidthHalf);
                    var openBottom = openTop + bodyWidth - 1;
                    if (openBottom > bodyTop + bodyHeight - 1) {
                        openBottom = bodyTop + bodyHeight - 1;
                        openTop = openBottom - bodyWidth + 1;
                    }
                    ctx.fillRect(openLeft, openTop, bodyLeft - openLeft, openBottom - openTop + 1);
                }
                var closeRight = bodyCenter + sideWidth;
                var closeTop = Math.max(bodyTop, Math.round(bar.closeY * pixelRatio) - bodyWidthHalf);
                var closeBottom = closeTop + bodyWidth - 1;
                if (closeBottom > bodyTop + bodyHeight - 1) {
                    closeBottom = bodyTop + bodyHeight - 1;
                    closeTop = closeBottom - bodyWidth + 1;
                }
                ctx.fillRect(bodyRight + 1, closeTop, closeRight - bodyRight, closeBottom - closeTop + 1);
            }
        }
    };
    PaneRendererBars.prototype._calcBarWidth = function (pixelRatio) {
        var limit = Math.floor(pixelRatio);
        return Math.max(limit, Math.floor(optimalBarWidth(ensureNotNull(this._data).barSpacing, pixelRatio)));
    };
    return PaneRendererBars;
}());

var BarsPaneViewBase = /** @class */ (function (_super) {
    __extends(BarsPaneViewBase, _super);
    function BarsPaneViewBase(series, model) {
        return _super.call(this, series, model, false) || this;
    }
    BarsPaneViewBase.prototype._convertToCoordinates = function (priceScale, timeScale, firstValue) {
        timeScale.indexesToCoordinates(this._items, undefinedIfNull(this._itemsVisibleRange));
        priceScale.barPricesToCoordinates(this._items, firstValue, undefinedIfNull(this._itemsVisibleRange));
    };
    BarsPaneViewBase.prototype._createDefaultItem = function (time, bar, colorer) {
        return {
            time: time,
            open: bar.value[0 /* PlotRowValueIndex.Open */],
            high: bar.value[1 /* PlotRowValueIndex.High */],
            low: bar.value[2 /* PlotRowValueIndex.Low */],
            close: bar.value[3 /* PlotRowValueIndex.Close */],
            x: NaN,
            openY: NaN,
            highY: NaN,
            lowY: NaN,
            closeY: NaN,
        };
    };
    BarsPaneViewBase.prototype._fillRawPoints = function () {
        var _this = this;
        var colorer = this._series.barColorer();
        this._items = this._series.bars().rows().map(function (row) { return _this._createRawItem(row.index, row, colorer); });
    };
    return BarsPaneViewBase;
}(SeriesPaneViewBase));

var SeriesBarsPaneView = /** @class */ (function (_super) {
    __extends(SeriesBarsPaneView, _super);
    function SeriesBarsPaneView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._renderer = new PaneRendererBars();
        return _this;
    }
    SeriesBarsPaneView.prototype.renderer = function (height, width) {
        if (!this._series.visible()) {
            return null;
        }
        var barStyleProps = this._series.options();
        this._makeValid();
        var data = {
            bars: this._items,
            barSpacing: this._model.timeScale().barSpacing(),
            openVisible: barStyleProps.openVisible,
            thinBars: barStyleProps.thinBars,
            visibleRange: this._itemsVisibleRange,
        };
        this._renderer.setData(data);
        return this._renderer;
    };
    SeriesBarsPaneView.prototype._updateOptions = function () {
        var _this = this;
        this._items.forEach(function (item) {
            item.color = _this._series.barColorer().barStyle(item.time).barColor;
        });
    };
    SeriesBarsPaneView.prototype._createRawItem = function (time, bar, colorer) {
        return __assign(__assign({}, this._createDefaultItem(time, bar, colorer)), { color: colorer.barStyle(time).barColor });
    };
    return SeriesBarsPaneView;
}(BarsPaneViewBase));

function clamp(value, minVal, maxVal) {
    return Math.min(Math.max(value, minVal), maxVal);
}
function isBaseDecimal(value) {
    if (value < 0) {
        return false;
    }
    for (var current = value; current > 1; current /= 10) {
        if ((current % 10) !== 0) {
            return false;
        }
    }
    return true;
}
function greaterOrEqual(x1, x2, epsilon) {
    return (x2 - x1) <= epsilon;
}
function equal(x1, x2, epsilon) {
    return Math.abs(x1 - x2) < epsilon;
}
function log10(x) {
    if (x <= 0) {
        return NaN;
    }
    return Math.log(x) / Math.log(10);
}
function min(arr) {
    if (arr.length < 1) {
        throw Error('array is empty');
    }
    var minVal = arr[0];
    for (var i = 1; i < arr.length; ++i) {
        if (arr[i] < minVal) {
            minVal = arr[i];
        }
    }
    return minVal;
}
function ceiledEven(x) {
    var ceiled = Math.ceil(x);
    return (ceiled % 2 !== 0) ? ceiled - 1 : ceiled;
}
function ceiledOdd(x) {
    var ceiled = Math.ceil(x);
    return (ceiled % 2 === 0) ? ceiled - 1 : ceiled;
}

var PaneRendererBaselineArea = /** @class */ (function (_super) {
    __extends(PaneRendererBaselineArea, _super);
    function PaneRendererBaselineArea() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PaneRendererBaselineArea.prototype._fillStyle = function (ctx) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        var data = this._data;
        var gradient = ctx.createLinearGradient(0, 0, 0, data.bottom);
        var baselinePercent = clamp(data.baseLevelCoordinate / data.bottom, 0, 1);
        gradient.addColorStop(0, data.topFillColor1);
        gradient.addColorStop(baselinePercent, data.topFillColor2);
        gradient.addColorStop(baselinePercent, data.bottomFillColor1);
        gradient.addColorStop(1, data.bottomFillColor2);
        return gradient;
    };
    return PaneRendererBaselineArea;
}(PaneRendererAreaBase));
var PaneRendererBaselineLine = /** @class */ (function (_super) {
    __extends(PaneRendererBaselineLine, _super);
    function PaneRendererBaselineLine() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PaneRendererBaselineLine.prototype._strokeStyle = function (ctx) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        var data = this._data;
        var gradient = ctx.createLinearGradient(0, 0, 0, data.bottom);
        var baselinePercent = clamp(data.baseLevelCoordinate / data.bottom, 0, 1);
        gradient.addColorStop(0, data.topColor);
        gradient.addColorStop(baselinePercent, data.topColor);
        gradient.addColorStop(baselinePercent, data.bottomColor);
        gradient.addColorStop(1, data.bottomColor);
        return gradient;
    };
    return PaneRendererBaselineLine;
}(PaneRendererLineBase));

var SeriesBaselinePaneView = /** @class */ (function (_super) {
    __extends(SeriesBaselinePaneView, _super);
    function SeriesBaselinePaneView(series, model) {
        var _this = _super.call(this, series, model) || this;
        _this._baselineAreaRenderer = new PaneRendererBaselineArea();
        _this._baselineLineRenderer = new PaneRendererBaselineLine();
        _this._compositeRenderer = new CompositeRenderer();
        _this._compositeRenderer.setRenderers([_this._baselineAreaRenderer, _this._baselineLineRenderer]);
        return _this;
    }
    SeriesBaselinePaneView.prototype.renderer = function (height, width) {
        if (!this._series.visible()) {
            return null;
        }
        var firstValue = this._series.firstValue();
        if (firstValue === null) {
            return null;
        }
        var baselineProps = this._series.options();
        this._makeValid();
        var baseLevelCoordinate = this._series.priceScale().priceToCoordinate(baselineProps.baseValue.price, firstValue.value);
        var barWidth = this._model.timeScale().barSpacing();
        this._baselineAreaRenderer.setData({
            items: this._items,
            topFillColor1: baselineProps.topFillColor1,
            topFillColor2: baselineProps.topFillColor2,
            bottomFillColor1: baselineProps.bottomFillColor1,
            bottomFillColor2: baselineProps.bottomFillColor2,
            lineWidth: baselineProps.lineWidth,
            lineStyle: baselineProps.lineStyle,
            lineType: 0 /* LineType.Simple */,
            baseLevelCoordinate: baseLevelCoordinate,
            bottom: height,
            visibleRange: this._itemsVisibleRange,
            barWidth: barWidth,
        });
        this._baselineLineRenderer.setData({
            items: this._items,
            topColor: baselineProps.topLineColor,
            bottomColor: baselineProps.bottomLineColor,
            lineWidth: baselineProps.lineWidth,
            lineStyle: baselineProps.lineStyle,
            lineType: 0 /* LineType.Simple */,
            baseLevelCoordinate: baseLevelCoordinate,
            bottom: height,
            visibleRange: this._itemsVisibleRange,
            barWidth: barWidth,
        });
        return this._compositeRenderer;
    };
    SeriesBaselinePaneView.prototype._createRawItem = function (time, price) {
        return this._createRawItemBase(time, price);
    };
    return SeriesBaselinePaneView;
}(LinePaneViewBase));

var Constants$b;
(function (Constants) {
    Constants[Constants["BarBorderWidth"] = 1] = "BarBorderWidth";
})(Constants$b || (Constants$b = {}));
var PaneRendererCandlesticks = /** @class */ (function () {
    function PaneRendererCandlesticks() {
        this._data = null;
        // scaled with pixelRatio
        this._barWidth = 0;
    }
    PaneRendererCandlesticks.prototype.setData = function (data) {
        this._data = data;
    };
    PaneRendererCandlesticks.prototype.draw = function (ctx, pixelRatio, isHovered, hitTestData) {
        if (this._data === null || this._data.bars.length === 0 || this._data.visibleRange === null) {
            return;
        }
        // now we know pixelRatio and we could calculate barWidth effectively
        this._barWidth = optimalCandlestickWidth(this._data.barSpacing, pixelRatio);
        // grid and crosshair have line width = Math.floor(pixelRatio)
        // if this value is odd, we have to make candlesticks' width odd
        // if this value is even, we have to make candlesticks' width even
        // in order of keeping crosshair-over-candlesticks drawing symmetric
        if (this._barWidth >= 2) {
            var wickWidth = Math.floor(pixelRatio);
            if ((wickWidth % 2) !== (this._barWidth % 2)) {
                this._barWidth--;
            }
        }
        var bars = this._data.bars;
        if (this._data.wickVisible) {
            this._drawWicks(ctx, bars, this._data.visibleRange, pixelRatio);
        }
        if (this._data.borderVisible) {
            this._drawBorder(ctx, bars, this._data.visibleRange, this._data.barSpacing, pixelRatio);
        }
        var borderWidth = this._calculateBorderWidth(pixelRatio);
        if (!this._data.borderVisible || this._barWidth > borderWidth * 2) {
            this._drawCandles(ctx, bars, this._data.visibleRange, pixelRatio);
        }
    };
    PaneRendererCandlesticks.prototype._drawWicks = function (ctx, bars, visibleRange, pixelRatio) {
        if (this._data === null) {
            return;
        }
        var prevWickColor = '';
        var wickWidth = Math.min(Math.floor(pixelRatio), Math.floor(this._data.barSpacing * pixelRatio));
        wickWidth = Math.max(Math.floor(pixelRatio), Math.min(wickWidth, this._barWidth));
        var wickOffset = Math.floor(wickWidth * 0.5);
        var prevEdge = null;
        for (var i = visibleRange.from; i < visibleRange.to; i++) {
            var bar = bars[i];
            if (bar.wickColor !== prevWickColor) {
                ctx.fillStyle = bar.wickColor;
                prevWickColor = bar.wickColor;
            }
            var top_1 = Math.round(Math.min(bar.openY, bar.closeY) * pixelRatio);
            var bottom = Math.round(Math.max(bar.openY, bar.closeY) * pixelRatio);
            var high = Math.round(bar.highY * pixelRatio);
            var low = Math.round(bar.lowY * pixelRatio);
            var scaledX = Math.round(pixelRatio * bar.x);
            var left = scaledX - wickOffset;
            var right = left + wickWidth - 1;
            if (prevEdge !== null) {
                left = Math.max(prevEdge + 1, left);
                left = Math.min(left, right);
            }
            var width = right - left + 1;
            ctx.fillRect(left, high, width, top_1 - high);
            ctx.fillRect(left, bottom + 1, width, low - bottom);
            prevEdge = right;
        }
    };
    PaneRendererCandlesticks.prototype._calculateBorderWidth = function (pixelRatio) {
        var borderWidth = Math.floor(1 /* Constants.BarBorderWidth */ * pixelRatio);
        if (this._barWidth <= 2 * borderWidth) {
            borderWidth = Math.floor((this._barWidth - 1) * 0.5);
        }
        var res = Math.max(Math.floor(pixelRatio), borderWidth);
        if (this._barWidth <= res * 2) {
            // do not draw bodies, restore original value
            return Math.max(Math.floor(pixelRatio), Math.floor(1 /* Constants.BarBorderWidth */ * pixelRatio));
        }
        return res;
    };
    PaneRendererCandlesticks.prototype._drawBorder = function (ctx, bars, visibleRange, barSpacing, pixelRatio) {
        if (this._data === null) {
            return;
        }
        var prevBorderColor = '';
        var borderWidth = this._calculateBorderWidth(pixelRatio);
        var prevEdge = null;
        for (var i = visibleRange.from; i < visibleRange.to; i++) {
            var bar = bars[i];
            if (bar.borderColor !== prevBorderColor) {
                ctx.fillStyle = bar.borderColor;
                prevBorderColor = bar.borderColor;
            }
            var left = Math.round(bar.x * pixelRatio) - Math.floor(this._barWidth * 0.5);
            // this is important to calculate right before patching left
            var right = left + this._barWidth - 1;
            var top_2 = Math.round(Math.min(bar.openY, bar.closeY) * pixelRatio);
            var bottom = Math.round(Math.max(bar.openY, bar.closeY) * pixelRatio);
            if (prevEdge !== null) {
                left = Math.max(prevEdge + 1, left);
                left = Math.min(left, right);
            }
            if (this._data.barSpacing * pixelRatio > 2 * borderWidth) {
                fillRectInnerBorder(ctx, left, top_2, right - left + 1, bottom - top_2 + 1, borderWidth);
            }
            else {
                var width = right - left + 1;
                ctx.fillRect(left, top_2, width, bottom - top_2 + 1);
            }
            prevEdge = right;
        }
    };
    PaneRendererCandlesticks.prototype._drawCandles = function (ctx, bars, visibleRange, pixelRatio) {
        if (this._data === null) {
            return;
        }
        var prevBarColor = '';
        var borderWidth = this._calculateBorderWidth(pixelRatio);
        for (var i = visibleRange.from; i < visibleRange.to; i++) {
            var bar = bars[i];
            var top_3 = Math.round(Math.min(bar.openY, bar.closeY) * pixelRatio);
            var bottom = Math.round(Math.max(bar.openY, bar.closeY) * pixelRatio);
            var left = Math.round(bar.x * pixelRatio) - Math.floor(this._barWidth * 0.5);
            var right = left + this._barWidth - 1;
            if (bar.color !== prevBarColor) {
                var barColor = bar.color;
                ctx.fillStyle = barColor;
                prevBarColor = barColor;
            }
            if (this._data.borderVisible) {
                left += borderWidth;
                top_3 += borderWidth;
                right -= borderWidth;
                bottom -= borderWidth;
            }
            if (top_3 > bottom) {
                continue;
            }
            ctx.fillRect(left, top_3, right - left + 1, bottom - top_3 + 1);
        }
    };
    return PaneRendererCandlesticks;
}());

var SeriesCandlesticksPaneView = /** @class */ (function (_super) {
    __extends(SeriesCandlesticksPaneView, _super);
    function SeriesCandlesticksPaneView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._renderer = new PaneRendererCandlesticks();
        return _this;
    }
    SeriesCandlesticksPaneView.prototype.renderer = function (height, width) {
        if (!this._series.visible()) {
            return null;
        }
        var candlestickStyleProps = this._series.options();
        this._makeValid();
        var data = {
            bars: this._items,
            barSpacing: this._model.timeScale().barSpacing(),
            wickVisible: candlestickStyleProps.wickVisible,
            borderVisible: candlestickStyleProps.borderVisible,
            visibleRange: this._itemsVisibleRange,
        };
        this._renderer.setData(data);
        return this._renderer;
    };
    SeriesCandlesticksPaneView.prototype._updateOptions = function () {
        var _this = this;
        this._items.forEach(function (item) {
            var style = _this._series.barColorer().barStyle(item.time);
            item.color = style.barColor;
            item.wickColor = style.barWickColor;
            item.borderColor = style.barBorderColor;
        });
    };
    SeriesCandlesticksPaneView.prototype._createRawItem = function (time, bar, colorer) {
        var style = colorer.barStyle(time);
        return __assign(__assign({}, this._createDefaultItem(time, bar, colorer)), { color: style.barColor, wickColor: style.barWickColor, borderColor: style.barBorderColor });
    };
    return SeriesCandlesticksPaneView;
}(BarsPaneViewBase));

var showSpacingMinimalBarWidth = 1;
var alignToMinimalWidthLimit = 4;
var PaneRendererHistogram = /** @class */ (function () {
    function PaneRendererHistogram() {
        this._data = null;
        this._precalculatedCache = [];
    }
    PaneRendererHistogram.prototype.setData = function (data) {
        this._data = data;
        this._precalculatedCache = [];
    };
    PaneRendererHistogram.prototype.draw = function (ctx, pixelRatio, isHovered, hitTestData) {
        if (this._data === null || this._data.items.length === 0 || this._data.visibleRange === null) {
            return;
        }
        if (!this._precalculatedCache.length) {
            this._fillPrecalculatedCache(pixelRatio);
        }
        var tickWidth = Math.max(1, Math.floor(pixelRatio));
        var histogramBase = Math.round((this._data.histogramBase) * pixelRatio);
        var topHistogramBase = histogramBase - Math.floor(tickWidth / 2);
        var bottomHistogramBase = topHistogramBase + tickWidth;
        for (var i = this._data.visibleRange.from; i < this._data.visibleRange.to; i++) {
            var item = this._data.items[i];
            var current = this._precalculatedCache[i - this._data.visibleRange.from];
            var y = Math.round(item.y * pixelRatio);
            ctx.fillStyle = item.color;
            var top_1 = void 0;
            var bottom = void 0;
            if (y <= topHistogramBase) {
                top_1 = y;
                bottom = bottomHistogramBase;
            }
            else {
                top_1 = topHistogramBase;
                bottom = y - Math.floor(tickWidth / 2) + tickWidth;
            }
            ctx.fillRect(current.left, top_1, current.right - current.left + 1, bottom - top_1);
        }
    };
    // eslint-disable-next-line complexity
    PaneRendererHistogram.prototype._fillPrecalculatedCache = function (pixelRatio) {
        if (this._data === null || this._data.items.length === 0 || this._data.visibleRange === null) {
            this._precalculatedCache = [];
            return;
        }
        var spacing = Math.ceil(this._data.barSpacing * pixelRatio) <= showSpacingMinimalBarWidth ? 0 : Math.max(1, Math.floor(pixelRatio));
        var columnWidth = Math.round(this._data.barSpacing * pixelRatio) - spacing;
        this._precalculatedCache = new Array(this._data.visibleRange.to - this._data.visibleRange.from);
        for (var i = this._data.visibleRange.from; i < this._data.visibleRange.to; i++) {
            var item = this._data.items[i];
            // force cast to avoid ensureDefined call
            var x = Math.round(item.x * pixelRatio);
            var left = void 0;
            var right = void 0;
            if (columnWidth % 2) {
                var halfWidth = (columnWidth - 1) / 2;
                left = x - halfWidth;
                right = x + halfWidth;
            }
            else {
                // shift pixel to left
                var halfWidth = columnWidth / 2;
                left = x - halfWidth;
                right = x + halfWidth - 1;
            }
            this._precalculatedCache[i - this._data.visibleRange.from] = {
                left: left,
                right: right,
                roundedCenter: x,
                center: (item.x * pixelRatio),
                time: item.time,
            };
        }
        // correct positions
        for (var i = this._data.visibleRange.from + 1; i < this._data.visibleRange.to; i++) {
            var current = this._precalculatedCache[i - this._data.visibleRange.from];
            var prev = this._precalculatedCache[i - this._data.visibleRange.from - 1];
            if (current.time !== prev.time + 1) {
                continue;
            }
            if (current.left - prev.right !== (spacing + 1)) {
                // have to align
                if (prev.roundedCenter > prev.center) {
                    // prev wasshifted to left, so add pixel to right
                    prev.right = current.left - spacing - 1;
                }
                else {
                    // extend current to left
                    current.left = prev.right + spacing + 1;
                }
            }
        }
        var minWidth = Math.ceil(this._data.barSpacing * pixelRatio);
        for (var i = this._data.visibleRange.from; i < this._data.visibleRange.to; i++) {
            var current = this._precalculatedCache[i - this._data.visibleRange.from];
            // this could happen if barspacing < 1
            if (current.right < current.left) {
                current.right = current.left;
            }
            var width = current.right - current.left + 1;
            minWidth = Math.min(width, minWidth);
        }
        if (spacing > 0 && minWidth < alignToMinimalWidthLimit) {
            for (var i = this._data.visibleRange.from; i < this._data.visibleRange.to; i++) {
                var current = this._precalculatedCache[i - this._data.visibleRange.from];
                var width = current.right - current.left + 1;
                if (width > minWidth) {
                    if (current.roundedCenter > current.center) {
                        current.right -= 1;
                    }
                    else {
                        current.left += 1;
                    }
                }
            }
        }
    };
    return PaneRendererHistogram;
}());

function createEmptyHistogramData(barSpacing) {
    return {
        items: [],
        barSpacing: barSpacing,
        histogramBase: NaN,
        visibleRange: null,
    };
}
function createRawItem(time, price, color) {
    return {
        time: time,
        price: price,
        x: NaN,
        y: NaN,
        color: color,
    };
}
var SeriesHistogramPaneView = /** @class */ (function (_super) {
    __extends(SeriesHistogramPaneView, _super);
    function SeriesHistogramPaneView(series, model) {
        var _this = _super.call(this, series, model, false) || this;
        _this._compositeRenderer = new CompositeRenderer();
        _this._histogramData = createEmptyHistogramData(0);
        _this._renderer = new PaneRendererHistogram();
        return _this;
    }
    SeriesHistogramPaneView.prototype.renderer = function (height, width) {
        if (!this._series.visible()) {
            return null;
        }
        this._makeValid();
        return this._compositeRenderer;
    };
    SeriesHistogramPaneView.prototype._fillRawPoints = function () {
        var barSpacing = this._model.timeScale().barSpacing();
        this._histogramData = createEmptyHistogramData(barSpacing);
        var targetIndex = 0;
        var itemIndex = 0;
        var defaultColor = this._series.options().color;
        for (var _i = 0, _a = this._series.bars().rows(); _i < _a.length; _i++) {
            var row = _a[_i];
            var value = row.value[3 /* PlotRowValueIndex.Close */];
            var color = row.color !== undefined ? row.color : defaultColor;
            var item = createRawItem(row.index, value, color);
            targetIndex++;
            if (targetIndex < this._histogramData.items.length) {
                this._histogramData.items[targetIndex] = item;
            }
            else {
                this._histogramData.items.push(item);
            }
            this._items[itemIndex++] = { time: row.index, x: 0 };
        }
        this._renderer.setData(this._histogramData);
        this._compositeRenderer.setRenderers([this._renderer]);
    };
    SeriesHistogramPaneView.prototype._updateOptions = function () { };
    SeriesHistogramPaneView.prototype._clearVisibleRange = function () {
        _super.prototype._clearVisibleRange.call(this);
        this._histogramData.visibleRange = null;
    };
    SeriesHistogramPaneView.prototype._convertToCoordinates = function (priceScale, timeScale, firstValue) {
        if (this._itemsVisibleRange === null) {
            return;
        }
        var barSpacing = timeScale.barSpacing();
        var visibleBars = ensureNotNull(timeScale.visibleStrictRange());
        var histogramBase = priceScale.priceToCoordinate(this._series.options().base, firstValue);
        timeScale.indexesToCoordinates(this._histogramData.items);
        priceScale.pointsArrayToCoordinates(this._histogramData.items, firstValue);
        this._histogramData.histogramBase = histogramBase;
        this._histogramData.visibleRange = visibleTimedValues(this._histogramData.items, visibleBars, false);
        this._histogramData.barSpacing = barSpacing;
        // need this to update cache
        this._renderer.setData(this._histogramData);
    };
    return SeriesHistogramPaneView;
}(SeriesPaneViewBase));

var SeriesLinePaneView = /** @class */ (function (_super) {
    __extends(SeriesLinePaneView, _super);
    // eslint-disable-next-line no-useless-constructor
    function SeriesLinePaneView(series, model) {
        var _this = _super.call(this, series, model) || this;
        _this._lineRenderer = new PaneRendererLine();
        return _this;
    }
    SeriesLinePaneView.prototype.renderer = function (height, width) {
        if (!this._series.visible()) {
            return null;
        }
        var lineStyleProps = this._series.options();
        this._makeValid();
        var data = {
            items: this._items,
            lineColor: lineStyleProps.color,
            lineStyle: lineStyleProps.lineStyle,
            lineType: lineStyleProps.lineType,
            lineWidth: lineStyleProps.lineWidth,
            visibleRange: this._itemsVisibleRange,
            barWidth: this._model.timeScale().barSpacing(),
        };
        this._lineRenderer.setData(data);
        return this._lineRenderer;
    };
    SeriesLinePaneView.prototype._updateOptions = function () {
        var _this = this;
        this._items.forEach(function (item) {
            item.color = _this._series.barColorer().barStyle(item.time).barColor;
        });
    };
    SeriesLinePaneView.prototype._createRawItem = function (time, price, colorer) {
        var item = this._createRawItemBase(time, price);
        item.color = colorer.barStyle(time).barColor;
        return item;
    };
    return SeriesLinePaneView;
}(LinePaneViewBase));

var defaultReplacementRe = /[2-9]/g;
var TextWidthCache = /** @class */ (function () {
    function TextWidthCache(size) {
        if (size === void 0) { size = 50; }
        this._cache = new Map();
        /** Current index in the "cyclic buffer" */
        this._keysIndex = 0;
        // A trick to keep array PACKED_ELEMENTS
        this._keys = Array.from(new Array(size));
    }
    TextWidthCache.prototype.reset = function () {
        this._cache.clear();
        this._keys.fill(undefined);
        // We don't care where exactly the _keysIndex points,
        // so there's no point in resetting it
    };
    TextWidthCache.prototype.measureText = function (ctx, text, optimizationReplacementRe) {
        var re = optimizationReplacementRe || defaultReplacementRe;
        var cacheString = String(text).replace(re, '0');
        var width = this._cache.get(cacheString);
        if (width === undefined) {
            width = ctx.measureText(cacheString).width;
            if (width === 0 && text.length !== 0) {
                // measureText can return 0 in FF depending on a canvas size, don't cache it
                return 0;
            }
            // A cyclic buffer is used to keep track of the cache keys and to delete
            // the oldest one before a new one is inserted.
            // ├──────┬──────┬──────┬──────┤
            // │ foo  │ bar  │      │      │
            // ├──────┴──────┴──────┴──────┤
            //                 ↑ index
            // Eventually, the index reach the end of an array and roll-over to 0.
            // ├──────┬──────┬──────┬──────┤
            // │ foo  │ bar  │ baz  │ quux │
            // ├──────┴──────┴──────┴──────┤
            //   ↑ index = 0
            // After that the oldest value will be overwritten.
            // ├──────┬──────┬──────┬──────┤
            // │ WOOT │ bar  │ baz  │ quux │
            // ├──────┴──────┴──────┴──────┤
            //          ↑ index = 1
            var oldestKey = this._keys[this._keysIndex];
            if (oldestKey !== undefined) {
                this._cache.delete(oldestKey);
            }
            // Set a newest key in place of the just deleted one
            this._keys[this._keysIndex] = cacheString;
            // Advance the index so it always points the oldest value
            this._keysIndex = (this._keysIndex + 1) % this._keys.length;
            this._cache.set(cacheString, width);
        }
        return width;
    };
    return TextWidthCache;
}());

var PanePriceAxisViewRenderer = /** @class */ (function () {
    function PanePriceAxisViewRenderer(textWidthCache) {
        this._priceAxisViewRenderer = null;
        this._rendererOptions = null;
        this._align = 'right';
        this._width = 0;
        this._textWidthCache = textWidthCache;
    }
    PanePriceAxisViewRenderer.prototype.setParams = function (priceAxisViewRenderer, rendererOptions, width, align) {
        this._priceAxisViewRenderer = priceAxisViewRenderer;
        this._rendererOptions = rendererOptions;
        this._width = width;
        this._align = align;
    };
    PanePriceAxisViewRenderer.prototype.draw = function (ctx, pixelRatio) {
        if (this._rendererOptions === null || this._priceAxisViewRenderer === null) {
            return;
        }
        this._priceAxisViewRenderer.draw(ctx, this._rendererOptions, this._textWidthCache, this._width, this._align, pixelRatio);
    };
    return PanePriceAxisViewRenderer;
}());
var PanePriceAxisView = /** @class */ (function () {
    function PanePriceAxisView(priceAxisView, dataSource, chartModel) {
        this._priceAxisView = priceAxisView;
        this._textWidthCache = new TextWidthCache(50); // when should we clear cache?
        this._dataSource = dataSource;
        this._chartModel = chartModel;
        this._fontSize = -1;
        this._renderer = new PanePriceAxisViewRenderer(this._textWidthCache);
    }
    PanePriceAxisView.prototype.renderer = function (height, width) {
        var pane = this._chartModel.paneForSource(this._dataSource);
        if (pane === null) {
            return null;
        }
        // this price scale will be used to find label placement only (left, right, none)
        var priceScale = pane.isOverlay(this._dataSource) ? pane.defaultVisiblePriceScale() : this._dataSource.priceScale();
        if (priceScale === null) {
            return null;
        }
        var position = pane.priceScalePosition(priceScale);
        if (position === 'overlay') {
            return null;
        }
        var options = this._chartModel.priceAxisRendererOptions();
        if (options.fontSize !== this._fontSize) {
            this._fontSize = options.fontSize;
            this._textWidthCache.reset();
        }
        this._renderer.setParams(this._priceAxisView.paneRenderer(), options, width, position);
        return this._renderer;
    };
    return PanePriceAxisView;
}());

var HorizontalLineRenderer = /** @class */ (function () {
    function HorizontalLineRenderer() {
        this._data = null;
    }
    HorizontalLineRenderer.prototype.setData = function (data) {
        this._data = data;
    };
    HorizontalLineRenderer.prototype.draw = function (ctx, pixelRatio, isHovered, hitTestData) {
        if (this._data === null) {
            return;
        }
        if (this._data.visible === false) {
            return;
        }
        var y = Math.round(this._data.y * pixelRatio);
        if (y < 0 || y > Math.ceil(this._data.height * pixelRatio)) {
            return;
        }
        var width = Math.ceil(this._data.width * pixelRatio);
        ctx.lineCap = 'butt';
        ctx.strokeStyle = this._data.color;
        ctx.lineWidth = Math.floor(this._data.lineWidth * pixelRatio);
        setLineStyle(ctx, this._data.lineStyle);
        drawHorizontalLine(ctx, y, 0, width);
    };
    return HorizontalLineRenderer;
}());

var SeriesHorizontalLinePaneView = /** @class */ (function () {
    function SeriesHorizontalLinePaneView(series) {
        this._lineRendererData = {
            width: 0,
            height: 0,
            y: 0,
            color: 'rgba(0, 0, 0, 0)',
            lineWidth: 1,
            lineStyle: 0 /* LineStyle.Solid */,
            visible: false,
        };
        this._lineRenderer = new HorizontalLineRenderer();
        this._invalidated = true;
        this._series = series;
        this._model = series.model();
        this._lineRenderer.setData(this._lineRendererData);
    }
    SeriesHorizontalLinePaneView.prototype.update = function () {
        this._invalidated = true;
    };
    SeriesHorizontalLinePaneView.prototype.renderer = function (height, width) {
        if (!this._series.visible()) {
            return null;
        }
        if (this._invalidated) {
            this._updateImpl(height, width);
            this._invalidated = false;
        }
        return this._lineRenderer;
    };
    return SeriesHorizontalLinePaneView;
}());

var SeriesHorizontalBaseLinePaneView = /** @class */ (function (_super) {
    __extends(SeriesHorizontalBaseLinePaneView, _super);
    // eslint-disable-next-line no-useless-constructor
    function SeriesHorizontalBaseLinePaneView(series) {
        return _super.call(this, series) || this;
    }
    SeriesHorizontalBaseLinePaneView.prototype._updateImpl = function (height, width) {
        this._lineRendererData.visible = false;
        var priceScale = this._series.priceScale();
        var mode = priceScale.mode().mode;
        if (mode !== 2 /* PriceScaleMode.Percentage */ && mode !== 3 /* PriceScaleMode.IndexedTo100 */) {
            return;
        }
        var seriesOptions = this._series.options();
        if (!seriesOptions.baseLineVisible || !this._series.visible()) {
            return;
        }
        var firstValue = this._series.firstValue();
        if (firstValue === null) {
            return;
        }
        this._lineRendererData.visible = true;
        this._lineRendererData.y = priceScale.priceToCoordinate(firstValue.value, firstValue.value);
        this._lineRendererData.width = width;
        this._lineRendererData.height = height;
        this._lineRendererData.color = seriesOptions.baseLineColor;
        this._lineRendererData.lineWidth = seriesOptions.baseLineWidth;
        this._lineRendererData.lineStyle = seriesOptions.baseLineStyle;
    };
    return SeriesHorizontalBaseLinePaneView;
}(SeriesHorizontalLinePaneView));

var SeriesLastPriceAnimationRenderer = /** @class */ (function () {
    function SeriesLastPriceAnimationRenderer() {
        this._data = null;
    }
    SeriesLastPriceAnimationRenderer.prototype.setData = function (data) {
        this._data = data;
    };
    SeriesLastPriceAnimationRenderer.prototype.data = function () {
        return this._data;
    };
    SeriesLastPriceAnimationRenderer.prototype.draw = function (ctx, pixelRatio, isHovered, hitTestData) {
        var data = this._data;
        if (data === null) {
            return;
        }
        ctx.save();
        var tickWidth = Math.max(1, Math.floor(pixelRatio));
        var correction = (tickWidth % 2) / 2;
        var centerX = Math.round(data.center.x * pixelRatio) + correction; // correct x coordinate only
        var centerY = data.center.y * pixelRatio;
        ctx.fillStyle = data.seriesLineColor;
        ctx.beginPath();
        var centerPointRadius = Math.max(2, data.seriesLineWidth * 1.5) * pixelRatio;
        ctx.arc(centerX, centerY, centerPointRadius, 0, 2 * Math.PI, false);
        ctx.fill();
        ctx.fillStyle = data.fillColor;
        ctx.beginPath();
        ctx.arc(centerX, centerY, data.radius * pixelRatio, 0, 2 * Math.PI, false);
        ctx.fill();
        ctx.lineWidth = tickWidth;
        ctx.strokeStyle = data.strokeColor;
        ctx.beginPath();
        ctx.arc(centerX, centerY, data.radius * pixelRatio + tickWidth / 2, 0, 2 * Math.PI, false);
        ctx.stroke();
        ctx.restore();
    };
    return SeriesLastPriceAnimationRenderer;
}());

var Constants$a;
(function (Constants) {
    Constants[Constants["AnimationPeriod"] = 2600] = "AnimationPeriod";
    Constants[Constants["Stage1Period"] = 0.25] = "Stage1Period";
    Constants[Constants["Stage2Period"] = 0.275] = "Stage2Period";
    Constants[Constants["Stage3Period"] = 0.475] = "Stage3Period";
    Constants[Constants["Stage1StartCircleRadius"] = 4] = "Stage1StartCircleRadius";
    Constants[Constants["Stage1EndCircleRadius"] = 10] = "Stage1EndCircleRadius";
    Constants[Constants["Stage1StartFillAlpha"] = 0.25] = "Stage1StartFillAlpha";
    Constants[Constants["Stage1EndFillAlpha"] = 0] = "Stage1EndFillAlpha";
    Constants[Constants["Stage1StartStrokeAlpha"] = 0.4] = "Stage1StartStrokeAlpha";
    Constants[Constants["Stage1EndStrokeAlpha"] = 0.8] = "Stage1EndStrokeAlpha";
    Constants[Constants["Stage2StartCircleRadius"] = 10] = "Stage2StartCircleRadius";
    Constants[Constants["Stage2EndCircleRadius"] = 14] = "Stage2EndCircleRadius";
    Constants[Constants["Stage2StartFillAlpha"] = 0] = "Stage2StartFillAlpha";
    Constants[Constants["Stage2EndFillAlpha"] = 0] = "Stage2EndFillAlpha";
    Constants[Constants["Stage2StartStrokeAlpha"] = 0.8] = "Stage2StartStrokeAlpha";
    Constants[Constants["Stage2EndStrokeAlpha"] = 0] = "Stage2EndStrokeAlpha";
    Constants[Constants["Stage3StartCircleRadius"] = 14] = "Stage3StartCircleRadius";
    Constants[Constants["Stage3EndCircleRadius"] = 14] = "Stage3EndCircleRadius";
    Constants[Constants["Stage3StartFillAlpha"] = 0] = "Stage3StartFillAlpha";
    Constants[Constants["Stage3EndFillAlpha"] = 0] = "Stage3EndFillAlpha";
    Constants[Constants["Stage3StartStrokeAlpha"] = 0] = "Stage3StartStrokeAlpha";
    Constants[Constants["Stage3EndStrokeAlpha"] = 0] = "Stage3EndStrokeAlpha";
})(Constants$a || (Constants$a = {}));
var animationStagesData = [
    {
        start: 0,
        end: 0.25 /* Constants.Stage1Period */,
        startRadius: 4 /* Constants.Stage1StartCircleRadius */,
        endRadius: 10 /* Constants.Stage1EndCircleRadius */,
        startFillAlpha: 0.25 /* Constants.Stage1StartFillAlpha */,
        endFillAlpha: 0 /* Constants.Stage1EndFillAlpha */,
        startStrokeAlpha: 0.4 /* Constants.Stage1StartStrokeAlpha */,
        endStrokeAlpha: 0.8 /* Constants.Stage1EndStrokeAlpha */,
    },
    {
        start: 0.25 /* Constants.Stage1Period */,
        end: 0.25 /* Constants.Stage1Period */ + 0.275 /* Constants.Stage2Period */,
        startRadius: 10 /* Constants.Stage2StartCircleRadius */,
        endRadius: 14 /* Constants.Stage2EndCircleRadius */,
        startFillAlpha: 0 /* Constants.Stage2StartFillAlpha */,
        endFillAlpha: 0 /* Constants.Stage2EndFillAlpha */,
        startStrokeAlpha: 0.8 /* Constants.Stage2StartStrokeAlpha */,
        endStrokeAlpha: 0 /* Constants.Stage2EndStrokeAlpha */,
    },
    {
        start: 0.25 /* Constants.Stage1Period */ + 0.275 /* Constants.Stage2Period */,
        end: 0.25 /* Constants.Stage1Period */ + 0.275 /* Constants.Stage2Period */ + 0.475 /* Constants.Stage3Period */,
        startRadius: 14 /* Constants.Stage3StartCircleRadius */,
        endRadius: 14 /* Constants.Stage3EndCircleRadius */,
        startFillAlpha: 0 /* Constants.Stage3StartFillAlpha */,
        endFillAlpha: 0 /* Constants.Stage3EndFillAlpha */,
        startStrokeAlpha: 0 /* Constants.Stage3StartStrokeAlpha */,
        endStrokeAlpha: 0 /* Constants.Stage3EndStrokeAlpha */,
    },
];
function color(seriesLineColor, stage, startAlpha, endAlpha) {
    var alpha = startAlpha + (endAlpha - startAlpha) * stage;
    return applyAlpha(seriesLineColor, alpha);
}
function radius(stage, startRadius, endRadius) {
    return startRadius + (endRadius - startRadius) * stage;
}
function animationData(durationSinceStart, lineColor) {
    var globalStage = (durationSinceStart % 2600 /* Constants.AnimationPeriod */) / 2600 /* Constants.AnimationPeriod */;
    var currentStageData;
    for (var _i = 0, animationStagesData_1 = animationStagesData; _i < animationStagesData_1.length; _i++) {
        var stageData = animationStagesData_1[_i];
        if (globalStage >= stageData.start && globalStage <= stageData.end) {
            currentStageData = stageData;
            break;
        }
    }
    assert(currentStageData !== undefined, 'Last price animation internal logic error');
    var subStage = (globalStage - currentStageData.start) / (currentStageData.end - currentStageData.start);
    return {
        fillColor: color(lineColor, subStage, currentStageData.startFillAlpha, currentStageData.endFillAlpha),
        strokeColor: color(lineColor, subStage, currentStageData.startStrokeAlpha, currentStageData.endStrokeAlpha),
        radius: radius(subStage, currentStageData.startRadius, currentStageData.endRadius),
    };
}
var SeriesLastPriceAnimationPaneView = /** @class */ (function () {
    function SeriesLastPriceAnimationPaneView(series) {
        this._renderer = new SeriesLastPriceAnimationRenderer();
        this._invalidated = true;
        this._stageInvalidated = true;
        this._startTime = performance.now();
        this._endTime = this._startTime - 1;
        this._series = series;
    }
    SeriesLastPriceAnimationPaneView.prototype.onDataCleared = function () {
        this._endTime = this._startTime - 1;
        this.update();
    };
    SeriesLastPriceAnimationPaneView.prototype.onNewRealtimeDataReceived = function () {
        this.update();
        if (this._series.options().lastPriceAnimation === 2 /* LastPriceAnimationMode.OnDataUpdate */) {
            var now = performance.now();
            var timeToAnimationEnd = this._endTime - now;
            if (timeToAnimationEnd > 0) {
                if (timeToAnimationEnd < 2600 /* Constants.AnimationPeriod */ / 4) {
                    this._endTime += 2600 /* Constants.AnimationPeriod */;
                }
                return;
            }
            this._startTime = now;
            this._endTime = now + 2600 /* Constants.AnimationPeriod */;
        }
    };
    SeriesLastPriceAnimationPaneView.prototype.update = function () {
        this._invalidated = true;
    };
    SeriesLastPriceAnimationPaneView.prototype.invalidateStage = function () {
        this._stageInvalidated = true;
    };
    SeriesLastPriceAnimationPaneView.prototype.visible = function () {
        // center point is always visible if lastPriceAnimation is not LastPriceAnimationMode.Disabled
        return this._series.options().lastPriceAnimation !== 0 /* LastPriceAnimationMode.Disabled */;
    };
    SeriesLastPriceAnimationPaneView.prototype.animationActive = function () {
        switch (this._series.options().lastPriceAnimation) {
            case 0 /* LastPriceAnimationMode.Disabled */:
                return false;
            case 1 /* LastPriceAnimationMode.Continuous */:
                return true;
            case 2 /* LastPriceAnimationMode.OnDataUpdate */:
                return performance.now() <= this._endTime;
        }
    };
    SeriesLastPriceAnimationPaneView.prototype.renderer = function (height, width) {
        if (this._invalidated) {
            this._updateImpl(height, width);
            this._invalidated = false;
            this._stageInvalidated = false;
        }
        else if (this._stageInvalidated) {
            this._updateRendererDataStage();
            this._stageInvalidated = false;
        }
        return this._renderer;
    };
    SeriesLastPriceAnimationPaneView.prototype._updateImpl = function (height, width) {
        this._renderer.setData(null);
        var timeScale = this._series.model().timeScale();
        var visibleRange = timeScale.visibleStrictRange();
        var firstValue = this._series.firstValue();
        if (visibleRange === null || firstValue === null) {
            return;
        }
        var lastValue = this._series.lastValueData(true);
        if (lastValue.noData || !visibleRange.contains(lastValue.index)) {
            return;
        }
        var lastValuePoint = {
            x: timeScale.indexToCoordinate(lastValue.index),
            y: this._series.priceScale().priceToCoordinate(lastValue.price, firstValue.value),
        };
        var seriesLineColor = lastValue.color;
        var seriesLineWidth = this._series.options().lineWidth;
        var data = animationData(this._duration(), seriesLineColor);
        this._renderer.setData({
            seriesLineColor: seriesLineColor,
            seriesLineWidth: seriesLineWidth,
            fillColor: data.fillColor,
            strokeColor: data.strokeColor,
            radius: data.radius,
            center: lastValuePoint,
        });
    };
    SeriesLastPriceAnimationPaneView.prototype._updateRendererDataStage = function () {
        var rendererData = this._renderer.data();
        if (rendererData !== null) {
            var data = animationData(this._duration(), rendererData.seriesLineColor);
            rendererData.fillColor = data.fillColor;
            rendererData.strokeColor = data.strokeColor;
            rendererData.radius = data.radius;
        }
    };
    SeriesLastPriceAnimationPaneView.prototype._duration = function () {
        return this.animationActive() ? performance.now() - this._startTime : 2600 /* Constants.AnimationPeriod */ - 1;
    };
    return SeriesLastPriceAnimationPaneView;
}());

var Constants$9;
(function (Constants) {
    Constants[Constants["MinShapeSize"] = 12] = "MinShapeSize";
    Constants[Constants["MaxShapeSize"] = 30] = "MaxShapeSize";
    Constants[Constants["MinShapeMargin"] = 3] = "MinShapeMargin";
})(Constants$9 || (Constants$9 = {}));
function size(barSpacing, coeff) {
    var result = Math.min(Math.max(barSpacing, 12 /* Constants.MinShapeSize */), 30 /* Constants.MaxShapeSize */) * coeff;
    return ceiledOdd(result);
}
function shapeSize(shape, originalSize) {
    switch (shape) {
        case 'arrowDown':
        case 'arrowUp':
            return size(originalSize, 1);
        case 'circle':
            return size(originalSize, 0.8);
        case 'square':
            return size(originalSize, 0.7);
        case 'triangleDown':
        case 'triangleUp':
            return size(originalSize, 0.7);
    }
}
function calculateShapeHeight(barSpacing) {
    return ceiledEven(size(barSpacing, 1));
}
function shapeMargin(barSpacing) {
    return Math.max(size(barSpacing, 0.1), 3 /* Constants.MinShapeMargin */);
}

function drawSquare(ctx, centerX, centerY, size, borderSize, borderColor) {
    var currentColor = ctx.fillStyle;
    var squareSize = shapeSize('square', size);
    var halfSize = (squareSize - 1) / 2;
    var left = centerX - halfSize;
    var top = centerY - halfSize;
    if (borderColor) {
        ctx.fillStyle = borderColor;
    }
    ctx.fillRect(left, top, squareSize, squareSize);
    if (borderColor) {
        var thickNess = borderSize || 2;
        var thickNess2 = thickNess * 2;
        ctx.fillStyle = currentColor;
        ctx.fillRect(left + thickNess, top + thickNess, squareSize - thickNess2, squareSize - thickNess2);
    }
}
function hitTestSquare(centerX, centerY, size, x, y) {
    var squareSize = shapeSize('square', size);
    var halfSize = (squareSize - 1) / 2;
    var left = centerX - halfSize;
    var top = centerY - halfSize;
    return x >= left && x <= left + squareSize &&
        y >= top && y <= top + squareSize;
}

function drawArrow(up, ctx, centerX, centerY, size, borderSize, borderColor) {
    var currentColor = ctx.fillStyle;
    var arrowSize = shapeSize('arrowUp', size);
    var halfArrowSize = (arrowSize - 1) / 2;
    var baseSize = ceiledOdd(size / 2);
    var halfBaseSize = (baseSize - 1) / 2;
    if (borderColor) {
        ctx.fillStyle = borderColor;
    }
    ctx.beginPath();
    if (up) {
        ctx.moveTo(centerX - halfArrowSize, centerY);
        ctx.lineTo(centerX, centerY - halfArrowSize);
        ctx.lineTo(centerX + halfArrowSize, centerY);
        ctx.lineTo(centerX + halfBaseSize, centerY);
        ctx.lineTo(centerX + halfBaseSize, centerY + halfArrowSize);
        ctx.lineTo(centerX - halfBaseSize, centerY + halfArrowSize);
        ctx.lineTo(centerX - halfBaseSize, centerY);
    }
    else {
        ctx.moveTo(centerX - halfArrowSize, centerY);
        ctx.lineTo(centerX, centerY + halfArrowSize);
        ctx.lineTo(centerX + halfArrowSize, centerY);
        ctx.lineTo(centerX + halfBaseSize, centerY);
        ctx.lineTo(centerX + halfBaseSize, centerY - halfArrowSize);
        ctx.lineTo(centerX - halfBaseSize, centerY - halfArrowSize);
        ctx.lineTo(centerX - halfBaseSize, centerY);
    }
    if (borderColor) {
        var thickNess = borderSize || 2;
        var thickNess2 = thickNess * 2;
        ctx.fill();
        ctx.beginPath();
        ctx.fillStyle = currentColor;
        if (up) {
            ctx.moveTo(centerX - halfArrowSize + thickNess2, centerY - thickNess);
            ctx.lineTo(centerX, centerY - halfArrowSize + thickNess);
            ctx.lineTo(centerX + halfArrowSize - thickNess2, centerY - thickNess);
            ctx.lineTo(centerX + halfBaseSize - thickNess, centerY - thickNess);
            ctx.lineTo(centerX + halfBaseSize - thickNess, centerY + halfArrowSize - thickNess);
            ctx.lineTo(centerX - halfBaseSize + thickNess, centerY + halfArrowSize - thickNess);
            ctx.lineTo(centerX - halfBaseSize + thickNess, centerY - thickNess);
        }
        else {
            ctx.moveTo(centerX - halfArrowSize + thickNess2, centerY + thickNess);
            ctx.lineTo(centerX, centerY + halfArrowSize - thickNess);
            ctx.lineTo(centerX + halfArrowSize - thickNess2, centerY + thickNess);
            ctx.lineTo(centerX + halfBaseSize - thickNess, centerY + thickNess);
            ctx.lineTo(centerX + halfBaseSize - thickNess, centerY - halfArrowSize + thickNess);
            ctx.lineTo(centerX - halfBaseSize + thickNess, centerY - halfArrowSize + thickNess);
            ctx.lineTo(centerX - halfBaseSize + thickNess, centerY + thickNess);
        }
    }
    ctx.fill();
}
function hitTestArrow(up, centerX, centerY, size, x, y) {
    // TODO: implement arrow hit test
    return hitTestSquare(centerX, centerY, size, x, y);
}

function drawCircle(ctx, centerX, centerY, size, borderSize, borderColor) {
    var currentColor = ctx.fillStyle;
    var circleSize = shapeSize('circle', size);
    var halfSize = (circleSize - 1) / 2;
    if (borderColor) {
        ctx.fillStyle = borderColor;
    }
    ctx.beginPath();
    ctx.arc(centerX, centerY, halfSize, 0, 2 * Math.PI, false);
    if (borderColor) {
        var thickNess = borderSize || 2;
        ctx.fill();
        ctx.beginPath();
        ctx.fillStyle = currentColor;
        ctx.arc(centerX, centerY, halfSize - thickNess, 0, 2 * Math.PI, false);
    }
    ctx.fill();
}
function hitTestCircle(centerX, centerY, size, x, y) {
    var circleSize = shapeSize('circle', size);
    var tolerance = 2 + circleSize / 2;
    var xOffset = centerX - x;
    var yOffset = centerY - y;
    var dist = Math.sqrt(xOffset * xOffset + yOffset * yOffset);
    return dist <= tolerance;
}

function drawText(ctx, text, x, y) {
    ctx.fillText(text, x, y);
}
function hitTestText(textX, textY, textWidth, textHeight, x, y) {
    var halfHeight = textHeight / 2;
    return x >= textX && x <= textX + textWidth &&
        y >= textY - halfHeight && y <= textY + halfHeight;
}

function drawTriangle(up, ctx, centerX, centerY, size, borderSize, borderColor) {
    var currentColor = ctx.fillStyle;
    var triangleSize = shapeSize('triangleUp', size);
    var halfTriangleSize = (triangleSize - 1) / 2;
    var left = centerX - halfTriangleSize;
    var right = centerX + halfTriangleSize;
    var bottom = centerY - halfTriangleSize;
    var top = centerY + halfTriangleSize;
    ctx.beginPath();
    if (borderColor) {
        ctx.fillStyle = borderColor;
    }
    if (up) {
        ctx.moveTo(left, top);
        ctx.lineTo(centerX, bottom);
        ctx.lineTo(right, top);
    }
    else {
        ctx.moveTo(left, bottom);
        ctx.lineTo(centerX, top);
        ctx.lineTo(right, bottom);
    }
    if (borderColor) {
        var thickNess = borderSize || 2;
        var thickNess2 = thickNess * 2;
        ctx.fill();
        ctx.beginPath();
        ctx.fillStyle = currentColor;
        if (up) {
            ctx.moveTo(left + thickNess, top - thickNess);
            ctx.lineTo(centerX, bottom + thickNess2);
            ctx.lineTo(right - thickNess, top - thickNess);
        }
        else {
            ctx.moveTo(left + thickNess, bottom + thickNess);
            ctx.lineTo(centerX, top - thickNess2);
            ctx.lineTo(right - thickNess, bottom + thickNess);
        }
    }
    ctx.fill();
}
function hitTestTriangle(up, centerX, centerY, size, x, y) {
    // TODO: implement triangle hit test
    return hitTestSquare(centerX, centerY, size, x, y);
}

var SeriesMarkersRenderer = /** @class */ (function (_super) {
    __extends(SeriesMarkersRenderer, _super);
    function SeriesMarkersRenderer() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._data = null;
        _this._textWidthCache = new TextWidthCache();
        _this._fontSize = -1;
        _this._fontFamily = '';
        _this._font = '';
        return _this;
    }
    SeriesMarkersRenderer.prototype.setData = function (data) {
        this._data = data;
    };
    SeriesMarkersRenderer.prototype.setParams = function (fontSize, fontFamily) {
        if (this._fontSize !== fontSize || this._fontFamily !== fontFamily) {
            this._fontSize = fontSize;
            this._fontFamily = fontFamily;
            this._font = makeFont(fontSize, fontFamily);
            this._textWidthCache.reset();
        }
    };
    SeriesMarkersRenderer.prototype.hitTest = function (x, y) {
        if (this._data === null || this._data.visibleRange === null) {
            return null;
        }
        for (var i = this._data.visibleRange.from; i < this._data.visibleRange.to; i++) {
            var item = this._data.items[i];
            if (hitTestItem(item, x, y)) {
                return {
                    hitTestData: item.internalId,
                    externalId: item.externalId,
                };
            }
        }
        return null;
    };
    SeriesMarkersRenderer.prototype._drawImpl = function (ctx, isHovered, hitTestData) {
        if (this._data === null || this._data.visibleRange === null) {
            return;
        }
        ctx.textBaseline = 'middle';
        ctx.font = this._font;
        for (var i = this._data.visibleRange.from; i < this._data.visibleRange.to; i++) {
            var item = this._data.items[i];
            if (item.text !== undefined) {
                item.text.width = this._textWidthCache.measureText(ctx, item.text.content);
                item.text.height = this._fontSize;
            }
            drawItem(item, ctx);
        }
    };
    return SeriesMarkersRenderer;
}(ScaledRenderer));
function drawItem(item, ctx) {
    ctx.fillStyle = item.color;
    if (item.text !== undefined) {
        drawText(ctx, item.text.content, item.x - item.text.width / 2, item.text.y);
    }
    drawShape(item, ctx);
}
function drawShape(item, ctx) {
    if (item.size === 0) {
        return;
    }
    switch (item.shape) {
        case 'arrowDown':
            drawArrow(false, ctx, item.x, item.y, item.size, item.borderSize, item.borderColor);
            return;
        case 'arrowUp':
            drawArrow(true, ctx, item.x, item.y, item.size, item.borderSize, item.borderColor);
            return;
        case 'triangleDown':
            drawTriangle(false, ctx, item.x, item.y, item.size, item.borderSize, item.borderColor);
            return;
        case 'triangleUp':
            drawTriangle(true, ctx, item.x, item.y, item.size, item.borderSize, item.borderColor);
            return;
        case 'circle':
            drawCircle(ctx, item.x, item.y, item.size, item.borderSize, item.borderColor);
            return;
        case 'square':
            drawSquare(ctx, item.x, item.y, item.size, item.borderSize, item.borderColor);
            return;
    }
    ensureNever(item.shape);
}
function hitTestItem(item, x, y) {
    if (item.text !== undefined && hitTestText(item.x, item.text.y, item.text.width, item.text.height, x, y)) {
        return true;
    }
    return hitTestShape(item, x, y);
}
function hitTestShape(item, x, y) {
    if (item.size === 0) {
        return false;
    }
    switch (item.shape) {
        case 'arrowUp':
            return hitTestArrow(true, item.x, item.y, item.size, x, y);
        case 'arrowDown':
            return hitTestArrow(false, item.x, item.y, item.size, x, y);
        case 'triangleUp':
            return hitTestTriangle(true, item.x, item.y, item.size, x, y);
        case 'triangleDown':
            return hitTestTriangle(false, item.x, item.y, item.size, x, y);
        case 'circle':
            return hitTestCircle(item.x, item.y, item.size, x, y);
        case 'square':
            return hitTestSquare(item.x, item.y, item.size, x, y);
    }
}

var Constants$8;
(function (Constants) {
    Constants[Constants["TextMargin"] = 0.1] = "TextMargin";
})(Constants$8 || (Constants$8 = {}));
// eslint-disable-next-line max-params
function fillSizeAndY(rendererItem, marker, seriesData, offsets, textHeight, shapeMargin, priceScale, timeScale, firstValue) {
    var inBarPrice = isNumber(seriesData) ? seriesData : seriesData.close;
    var highPrice = isNumber(seriesData) ? seriesData : seriesData.high;
    var lowPrice = isNumber(seriesData) ? seriesData : seriesData.low;
    var sizeMultiplier = isNumber(marker.size) ? Math.max(marker.size, 0) : 1;
    var shapeSize = calculateShapeHeight(timeScale.barSpacing()) * sizeMultiplier;
    var halfSize = shapeSize / 2;
    rendererItem.size = shapeSize;
    if (typeof marker.position === 'number') {
        rendererItem.y = priceScale.priceToCoordinate(marker.position, firstValue);
        if (rendererItem.text !== undefined) {
            rendererItem.text.y = rendererItem.y + halfSize + shapeMargin + textHeight * (0.5 + 0.1 /* Constants.TextMargin */);
        }
        return;
    }
    switch (marker.position) {
        case 'inBar': {
            rendererItem.y = priceScale.priceToCoordinate(inBarPrice, firstValue);
            if (rendererItem.text !== undefined) {
                rendererItem.text.y = rendererItem.y + halfSize + shapeMargin + textHeight * (0.5 + 0.1 /* Constants.TextMargin */);
            }
            return;
        }
        case 'aboveBar': {
            rendererItem.y = (priceScale.priceToCoordinate(highPrice, firstValue) - halfSize - offsets.aboveBar);
            if (rendererItem.text !== undefined) {
                rendererItem.text.y = rendererItem.y - halfSize - textHeight * (0.5 + 0.1 /* Constants.TextMargin */);
                offsets.aboveBar += textHeight * (1 + 2 * 0.1 /* Constants.TextMargin */);
            }
            offsets.aboveBar += shapeSize + shapeMargin;
            return;
        }
        case 'belowBar': {
            rendererItem.y = (priceScale.priceToCoordinate(lowPrice, firstValue) + halfSize + offsets.belowBar);
            if (rendererItem.text !== undefined) {
                rendererItem.text.y = rendererItem.y + halfSize + shapeMargin + textHeight * (0.5 + 0.1 /* Constants.TextMargin */);
                offsets.belowBar += textHeight * (1 + 2 * 0.1 /* Constants.TextMargin */);
            }
            offsets.belowBar += shapeSize + shapeMargin;
            return;
        }
    }
    ensureNever(marker.position);
}
var SeriesMarkersPaneView = /** @class */ (function () {
    function SeriesMarkersPaneView(series, model) {
        this._invalidated = true;
        this._dataInvalidated = true;
        this._autoScaleMarginsInvalidated = true;
        this._autoScaleMargins = null;
        this._renderer = new SeriesMarkersRenderer();
        this._series = series;
        this._model = model;
        this._data = {
            items: [],
            visibleRange: null,
        };
    }
    SeriesMarkersPaneView.prototype.update = function (updateType) {
        this._invalidated = true;
        this._autoScaleMarginsInvalidated = true;
        if (updateType === 'data') {
            this._dataInvalidated = true;
        }
    };
    SeriesMarkersPaneView.prototype.renderer = function (height, width, addAnchors) {
        if (!this._series.visible()) {
            return null;
        }
        if (this._invalidated) {
            this._makeValid();
        }
        var layout = this._model.options().layout;
        this._renderer.setParams(layout.fontSize, layout.fontFamily);
        this._renderer.setData(this._data);
        return this._renderer;
    };
    SeriesMarkersPaneView.prototype.autoScaleMargins = function () {
        if (this._autoScaleMarginsInvalidated) {
            if (this._series.indexedMarkers().length > 0) {
                var barSpacing = this._model.timeScale().barSpacing();
                var shapeMargin$1 = shapeMargin(barSpacing);
                var marginsAboveAndBelow = calculateShapeHeight(barSpacing) * 1.5 + shapeMargin$1 * 2;
                this._autoScaleMargins = {
                    above: marginsAboveAndBelow,
                    below: marginsAboveAndBelow,
                };
            }
            else {
                this._autoScaleMargins = null;
            }
            this._autoScaleMarginsInvalidated = false;
        }
        return this._autoScaleMargins;
    };
    SeriesMarkersPaneView.prototype._makeValid = function () {
        var priceScale = this._series.priceScale();
        var timeScale = this._model.timeScale();
        var seriesMarkers = this._series.indexedMarkers();
        if (this._dataInvalidated) {
            this._data.items = seriesMarkers.map(function (marker) { return ({
                time: marker.time,
                x: 0,
                y: 0,
                size: 0,
                shape: marker.shape,
                color: marker.color,
                internalId: marker.internalId,
                externalId: marker.id,
                text: undefined,
                borderColor: marker.borderColor,
                borderSize: marker.borderSize
            }); });
            this._dataInvalidated = false;
        }
        var layoutOptions = this._model.options().layout;
        this._data.visibleRange = null;
        var visibleBars = timeScale.visibleStrictRange();
        if (visibleBars === null) {
            return;
        }
        var firstValue = this._series.firstValue();
        if (firstValue === null) {
            return;
        }
        if (this._data.items.length === 0) {
            return;
        }
        var prevTimeIndex = NaN;
        var shapeMargin$1 = shapeMargin(timeScale.barSpacing());
        var offsets = {
            aboveBar: shapeMargin$1,
            belowBar: shapeMargin$1,
        };
        this._data.visibleRange = visibleTimedValues(this._data.items, visibleBars, true);
        for (var index = this._data.visibleRange.from; index < this._data.visibleRange.to; index++) {
            var marker = seriesMarkers[index];
            if (marker.time !== prevTimeIndex) {
                // new bar, reset stack counter
                offsets.aboveBar = shapeMargin$1;
                offsets.belowBar = shapeMargin$1;
                prevTimeIndex = marker.time;
            }
            var rendererItem = this._data.items[index];
            rendererItem.x = timeScale.indexToCoordinate(marker.time);
            if (marker.text !== undefined && marker.text.length > 0) {
                rendererItem.text = {
                    content: marker.text,
                    y: 0,
                    width: 0,
                    height: 0,
                };
            }
            var dataAt = this._series.dataAt(marker.time);
            if (dataAt === null) {
                continue;
            }
            fillSizeAndY(rendererItem, marker, dataAt, offsets, layoutOptions.fontSize, shapeMargin$1, priceScale, timeScale, firstValue.value);
        }
        this._invalidated = false;
    };
    return SeriesMarkersPaneView;
}());

var SeriesPriceLinePaneView = /** @class */ (function (_super) {
    __extends(SeriesPriceLinePaneView, _super);
    // eslint-disable-next-line no-useless-constructor
    function SeriesPriceLinePaneView(series) {
        return _super.call(this, series) || this;
    }
    SeriesPriceLinePaneView.prototype._updateImpl = function (height, width) {
        var data = this._lineRendererData;
        data.visible = false;
        var seriesOptions = this._series.options();
        if (!seriesOptions.priceLineVisible || !this._series.visible()) {
            return;
        }
        var lastValueData = this._series.lastValueData(seriesOptions.priceLineSource === 0 /* PriceLineSource.LastBar */);
        if (lastValueData.noData) {
            return;
        }
        data.visible = true;
        data.y = lastValueData.coordinate;
        data.color = this._series.priceLineColor(lastValueData.color);
        data.width = width;
        data.height = height;
        data.lineWidth = seriesOptions.priceLineWidth;
        data.lineStyle = seriesOptions.priceLineStyle;
    };
    return SeriesPriceLinePaneView;
}(SeriesHorizontalLinePaneView));

var SeriesPriceAxisView = /** @class */ (function (_super) {
    __extends(SeriesPriceAxisView, _super);
    function SeriesPriceAxisView(source) {
        var _this = _super.call(this) || this;
        _this._source = source;
        return _this;
    }
    SeriesPriceAxisView.prototype._updateRendererData = function (axisRendererData, paneRendererData, commonRendererData) {
        axisRendererData.visible = false;
        paneRendererData.visible = false;
        var source = this._source;
        if (!source.visible()) {
            return;
        }
        var seriesOptions = source.options();
        var showSeriesLastValue = seriesOptions.lastValueVisible;
        var showSymbolLabel = source.title() !== '';
        var showPriceAndPercentage = seriesOptions.seriesLastValueMode === 0 /* PriceAxisLastValueMode.LastPriceAndPercentageValue */;
        var lastValueData = source.lastValueData(seriesOptions.priceLineSource === 0 /* PriceLineSource.LastBar */);
        if (lastValueData.noData) {
            return;
        }
        if (showSeriesLastValue) {
            axisRendererData.text = this._axisText(lastValueData, showSeriesLastValue, showPriceAndPercentage);
            axisRendererData.visible = axisRendererData.text.length !== 0;
        }
        if (showSymbolLabel || showPriceAndPercentage) {
            paneRendererData.text = this._paneText(lastValueData, showSeriesLastValue, showSymbolLabel, showPriceAndPercentage);
            paneRendererData.visible = paneRendererData.text.length > 0;
        }
        var lastValueColor = source.priceLineColor(lastValueData.color);
        var colors = generateContrastColors(lastValueColor);
        commonRendererData.background = colors.background;
        commonRendererData.color = colors.foreground;
        commonRendererData.coordinate = lastValueData.coordinate;
        paneRendererData.borderColor = source.model().backgroundColorAtYPercentFromTop(lastValueData.coordinate / source.priceScale().height());
        axisRendererData.borderColor = lastValueColor;
    };
    SeriesPriceAxisView.prototype._paneText = function (lastValue, showSeriesLastValue, showSymbolLabel, showPriceAndPercentage) {
        var result = '';
        var title = this._source.title();
        if (showSymbolLabel && title.length !== 0) {
            result += "".concat(title, " ");
        }
        if (showSeriesLastValue && showPriceAndPercentage) {
            result += this._source.priceScale().isPercentage() ?
                lastValue.formattedPriceAbsolute : lastValue.formattedPricePercentage;
        }
        return result.trim();
    };
    SeriesPriceAxisView.prototype._axisText = function (lastValueData, showSeriesLastValue, showPriceAndPercentage) {
        if (!showSeriesLastValue) {
            return '';
        }
        if (!showPriceAndPercentage) {
            return lastValueData.text;
        }
        return this._source.priceScale().isPercentage() ?
            lastValueData.formattedPricePercentage : lastValueData.formattedPriceAbsolute;
    };
    return SeriesPriceAxisView;
}(PriceAxisView));

var PriceRangeImpl = /** @class */ (function () {
    function PriceRangeImpl(minValue, maxValue) {
        this._minValue = minValue;
        this._maxValue = maxValue;
    }
    PriceRangeImpl.prototype.equals = function (pr) {
        if (pr === null) {
            return false;
        }
        return this._minValue === pr._minValue && this._maxValue === pr._maxValue;
    };
    PriceRangeImpl.prototype.clone = function () {
        return new PriceRangeImpl(this._minValue, this._maxValue);
    };
    PriceRangeImpl.prototype.minValue = function () {
        return this._minValue;
    };
    PriceRangeImpl.prototype.maxValue = function () {
        return this._maxValue;
    };
    PriceRangeImpl.prototype.length = function () {
        return this._maxValue - this._minValue;
    };
    PriceRangeImpl.prototype.isEmpty = function () {
        return this._maxValue === this._minValue || Number.isNaN(this._maxValue) || Number.isNaN(this._minValue);
    };
    PriceRangeImpl.prototype.merge = function (anotherRange) {
        if (anotherRange === null) {
            return this;
        }
        return new PriceRangeImpl(Math.min(this.minValue(), anotherRange.minValue()), Math.max(this.maxValue(), anotherRange.maxValue()));
    };
    PriceRangeImpl.prototype.scaleAroundCenter = function (coeff) {
        if (!isNumber(coeff)) {
            return;
        }
        var delta = this._maxValue - this._minValue;
        if (delta === 0) {
            return;
        }
        var center = (this._maxValue + this._minValue) * 0.5;
        var maxDelta = this._maxValue - center;
        var minDelta = this._minValue - center;
        maxDelta *= coeff;
        minDelta *= coeff;
        this._maxValue = center + maxDelta;
        this._minValue = center + minDelta;
    };
    PriceRangeImpl.prototype.shift = function (delta) {
        if (!isNumber(delta)) {
            return;
        }
        this._maxValue += delta;
        this._minValue += delta;
    };
    PriceRangeImpl.prototype.toRaw = function () {
        return {
            minValue: this._minValue,
            maxValue: this._maxValue,
        };
    };
    PriceRangeImpl.fromRaw = function (raw) {
        return (raw === null) ? null : new PriceRangeImpl(raw.minValue, raw.maxValue);
    };
    return PriceRangeImpl;
}());

var AutoscaleInfoImpl = /** @class */ (function () {
    function AutoscaleInfoImpl(priceRange, margins) {
        this._priceRange = priceRange;
        this._margins = margins || null;
    }
    AutoscaleInfoImpl.prototype.priceRange = function () {
        return this._priceRange;
    };
    AutoscaleInfoImpl.prototype.margins = function () {
        return this._margins;
    };
    AutoscaleInfoImpl.prototype.toRaw = function () {
        if (this._priceRange === null) {
            return null;
        }
        return {
            priceRange: this._priceRange.toRaw(),
            margins: this._margins || undefined,
        };
    };
    AutoscaleInfoImpl.fromRaw = function (raw) {
        return (raw === null) ? null : new AutoscaleInfoImpl(PriceRangeImpl.fromRaw(raw.priceRange), raw.margins);
    };
    return AutoscaleInfoImpl;
}());

var CustomPriceLinePaneView = /** @class */ (function (_super) {
    __extends(CustomPriceLinePaneView, _super);
    function CustomPriceLinePaneView(series, priceLine) {
        var _this = _super.call(this, series) || this;
        _this._priceLine = priceLine;
        return _this;
    }
    CustomPriceLinePaneView.prototype._updateImpl = function (height, width) {
        var data = this._lineRendererData;
        data.visible = false;
        var lineOptions = this._priceLine.options();
        if (!this._series.visible() || !lineOptions.lineVisible) {
            return;
        }
        var y = this._priceLine.yCoord();
        if (y === null) {
            return;
        }
        data.visible = true;
        data.y = y;
        data.color = lineOptions.color;
        data.width = width;
        data.height = height;
        data.lineWidth = lineOptions.lineWidth;
        data.lineStyle = lineOptions.lineStyle;
    };
    return CustomPriceLinePaneView;
}(SeriesHorizontalLinePaneView));

var CustomPriceLinePriceAxisView = /** @class */ (function (_super) {
    __extends(CustomPriceLinePriceAxisView, _super);
    function CustomPriceLinePriceAxisView(series, priceLine) {
        var _this = _super.call(this) || this;
        _this._series = series;
        _this._priceLine = priceLine;
        return _this;
    }
    CustomPriceLinePriceAxisView.prototype._updateRendererData = function (axisRendererData, paneRendererData, commonData) {
        axisRendererData.visible = false;
        paneRendererData.visible = false;
        var options = this._priceLine.options();
        var labelVisible = options.axisLabelVisible;
        var showPaneLabel = options.title !== '';
        var series = this._series;
        if (!labelVisible || !series.visible()) {
            return;
        }
        var y = this._priceLine.yCoord();
        if (y === null) {
            return;
        }
        if (showPaneLabel) {
            paneRendererData.text = options.title;
            paneRendererData.visible = true;
        }
        paneRendererData.borderColor = series.model().backgroundColorAtYPercentFromTop(y / series.priceScale().height());
        axisRendererData.text = series.priceScale().formatPriceAbsolute(options.price);
        axisRendererData.visible = true;
        var colors = generateContrastColors(options.color);
        commonData.background = colors.background;
        commonData.color = colors.foreground;
        commonData.coordinate = y;
    };
    return CustomPriceLinePriceAxisView;
}(PriceAxisView));

var CustomPriceLine = /** @class */ (function () {
    function CustomPriceLine(series, options) {
        this._series = series;
        this._options = options;
        this._priceLineView = new CustomPriceLinePaneView(series, this);
        this._priceAxisView = new CustomPriceLinePriceAxisView(series, this);
        this._panePriceAxisView = new PanePriceAxisView(this._priceAxisView, series, series.model());
    }
    CustomPriceLine.prototype.applyOptions = function (options) {
        merge(this._options, options);
        this.update();
        this._series.model().lightUpdate();
    };
    CustomPriceLine.prototype.options = function () {
        return this._options;
    };
    CustomPriceLine.prototype.series = function () {
        return this._series;
    };
    CustomPriceLine.prototype.paneViews = function () {
        return [
            this._priceLineView,
            this._panePriceAxisView,
        ];
    };
    CustomPriceLine.prototype.priceAxisView = function () {
        return this._priceAxisView;
    };
    CustomPriceLine.prototype.update = function () {
        this._priceLineView.update();
        this._priceAxisView.update();
    };
    CustomPriceLine.prototype.yCoord = function () {
        var series = this._series;
        var priceScale = series.priceScale();
        var timeScale = series.model().timeScale();
        if (timeScale.isEmpty() || priceScale.isEmpty()) {
            return null;
        }
        var firstValue = series.firstValue();
        if (firstValue === null) {
            return null;
        }
        return priceScale.priceToCoordinate(this._options.price, firstValue.value);
    };
    return CustomPriceLine;
}());

var PriceDataSource = /** @class */ (function (_super) {
    __extends(PriceDataSource, _super);
    function PriceDataSource(model) {
        var _this = _super.call(this) || this;
        _this._model = model;
        return _this;
    }
    PriceDataSource.prototype.model = function () {
        return this._model;
    };
    return PriceDataSource;
}(DataSource));

var emptyResult = {
    barColor: '',
    barBorderColor: '',
    barWickColor: '',
};
var SeriesBarColorer = /** @class */ (function () {
    function SeriesBarColorer(series) {
        this._series = series;
    }
    SeriesBarColorer.prototype.barStyle = function (barIndex, precomputedBars) {
        // precomputedBars: {value: [Array BarValues], previousValue: [Array BarValues] | undefined}
        // Used to avoid binary search if bars are already known
        var targetType = this._series.seriesType();
        var seriesOptions = this._series.options();
        switch (targetType) {
            case 'Line':
                return this._lineStyle(seriesOptions, barIndex, precomputedBars);
            case 'Area':
                return this._areaStyle(seriesOptions);
            case 'Baseline':
                return this._baselineStyle(seriesOptions, barIndex, precomputedBars);
            case 'Bar':
                return this._barStyle(seriesOptions, barIndex, precomputedBars);
            case 'Candlestick':
                return this._candleStyle(seriesOptions, barIndex, precomputedBars);
            case 'Histogram':
                return this._histogramStyle(seriesOptions, barIndex, precomputedBars);
        }
        throw new Error('Unknown chart style');
    };
    SeriesBarColorer.prototype._barStyle = function (barStyle, barIndex, precomputedBars) {
        var result = __assign({}, emptyResult);
        var upColor = barStyle.upColor;
        var downColor = barStyle.downColor;
        var borderUpColor = upColor;
        var borderDownColor = downColor;
        var currentBar = ensureNotNull(this._findBar(barIndex, precomputedBars));
        var isUp = ensure(currentBar.value[0 /* PlotRowValueIndex.Open */]) <= ensure(currentBar.value[3 /* PlotRowValueIndex.Close */]);
        if (currentBar.color !== undefined) {
            result.barColor = currentBar.color;
            result.barBorderColor = currentBar.color;
        }
        else {
            result.barColor = isUp ? upColor : downColor;
            result.barBorderColor = isUp ? borderUpColor : borderDownColor;
        }
        return result;
    };
    SeriesBarColorer.prototype._candleStyle = function (candlestickStyle, barIndex, precomputedBars) {
        var _a, _b, _c;
        var result = __assign({}, emptyResult);
        var upColor = candlestickStyle.upColor;
        var downColor = candlestickStyle.downColor;
        var borderUpColor = candlestickStyle.borderUpColor;
        var borderDownColor = candlestickStyle.borderDownColor;
        var wickUpColor = candlestickStyle.wickUpColor;
        var wickDownColor = candlestickStyle.wickDownColor;
        var currentBar = ensureNotNull(this._findBar(barIndex, precomputedBars));
        var isUp = ensure(currentBar.value[0 /* PlotRowValueIndex.Open */]) <= ensure(currentBar.value[3 /* PlotRowValueIndex.Close */]);
        result.barColor = (_a = currentBar.color) !== null && _a !== void 0 ? _a : (isUp ? upColor : downColor);
        result.barBorderColor = (_b = currentBar.borderColor) !== null && _b !== void 0 ? _b : (isUp ? borderUpColor : borderDownColor);
        result.barWickColor = (_c = currentBar.wickColor) !== null && _c !== void 0 ? _c : (isUp ? wickUpColor : wickDownColor);
        return result;
    };
    SeriesBarColorer.prototype._areaStyle = function (areaStyle) {
        return __assign(__assign({}, emptyResult), { barColor: areaStyle.lineColor });
    };
    SeriesBarColorer.prototype._baselineStyle = function (baselineStyle, barIndex, precomputedBars) {
        var currentBar = ensureNotNull(this._findBar(barIndex, precomputedBars));
        var isAboveBaseline = currentBar.value[3 /* PlotRowValueIndex.Close */] >= baselineStyle.baseValue.price;
        return __assign(__assign({}, emptyResult), { barColor: isAboveBaseline ? baselineStyle.topLineColor : baselineStyle.bottomLineColor });
    };
    SeriesBarColorer.prototype._lineStyle = function (lineStyle, barIndex, precomputedBars) {
        var _a;
        var currentBar = ensureNotNull(this._findBar(barIndex, precomputedBars));
        return __assign(__assign({}, emptyResult), { barColor: (_a = currentBar.color) !== null && _a !== void 0 ? _a : lineStyle.color });
    };
    SeriesBarColorer.prototype._histogramStyle = function (histogramStyle, barIndex, precomputedBars) {
        var result = __assign({}, emptyResult);
        var currentBar = ensureNotNull(this._findBar(barIndex, precomputedBars));
        result.barColor = currentBar.color !== undefined ? currentBar.color : histogramStyle.color;
        return result;
    };
    SeriesBarColorer.prototype._findBar = function (barIndex, precomputedBars) {
        if (precomputedBars !== undefined) {
            return precomputedBars.value;
        }
        return this._series.bars().valueAt(barIndex);
    };
    return SeriesBarColorer;
}());

var PlotRowSearchMode;
(function (PlotRowSearchMode) {
    PlotRowSearchMode[PlotRowSearchMode["NearestLeft"] = -1] = "NearestLeft";
    PlotRowSearchMode[PlotRowSearchMode["Exact"] = 0] = "Exact";
    PlotRowSearchMode[PlotRowSearchMode["NearestRight"] = 1] = "NearestRight";
})(PlotRowSearchMode || (PlotRowSearchMode = {}));
// TODO: think about changing it dynamically
var CHUNK_SIZE = 30;
/**
 * PlotList is an array of plot rows
 * each plot row consists of key (index in timescale) and plot value map
 */
var PlotList = /** @class */ (function () {
    function PlotList() {
        this._items = [];
        this._minMaxCache = new Map();
        this._rowSearchCache = new Map();
    }
    // @returns Last row
    PlotList.prototype.last = function () {
        return this.size() > 0 ? this._items[this._items.length - 1] : null;
    };
    PlotList.prototype.firstIndex = function () {
        return this.size() > 0 ? this._indexAt(0) : null;
    };
    PlotList.prototype.lastIndex = function () {
        return this.size() > 0 ? this._indexAt((this._items.length - 1)) : null;
    };
    PlotList.prototype.size = function () {
        return this._items.length;
    };
    PlotList.prototype.isEmpty = function () {
        return this.size() === 0;
    };
    PlotList.prototype.contains = function (index) {
        return this._search(index, 0 /* PlotRowSearchMode.Exact */) !== null;
    };
    PlotList.prototype.valueAt = function (index) {
        return this.search(index);
    };
    PlotList.prototype.search = function (index, searchMode) {
        if (searchMode === void 0) { searchMode = 0 /* PlotRowSearchMode.Exact */; }
        var pos = this._search(index, searchMode);
        if (pos === null) {
            return null;
        }
        return __assign(__assign({}, this._valueAt(pos)), { index: this._indexAt(pos) });
    };
    PlotList.prototype.rows = function () {
        return this._items;
    };
    PlotList.prototype.minMaxOnRangeCached = function (start, end, plots) {
        // this code works for single series only
        // could fail after whitespaces implementation
        if (this.isEmpty()) {
            return null;
        }
        var result = null;
        for (var _i = 0, plots_1 = plots; _i < plots_1.length; _i++) {
            var plot = plots_1[_i];
            var plotMinMax = this._minMaxOnRangeCachedImpl(start, end, plot);
            result = mergeMinMax(result, plotMinMax);
        }
        return result;
    };
    PlotList.prototype.setData = function (plotRows) {
        this._rowSearchCache.clear();
        this._minMaxCache.clear();
        this._items = plotRows;
    };
    PlotList.prototype._indexAt = function (offset) {
        return this._items[offset].index;
    };
    PlotList.prototype._valueAt = function (offset) {
        return this._items[offset];
    };
    PlotList.prototype._search = function (index, searchMode) {
        var exactPos = this._bsearch(index);
        if (exactPos === null && searchMode !== 0 /* PlotRowSearchMode.Exact */) {
            switch (searchMode) {
                case -1 /* PlotRowSearchMode.NearestLeft */:
                    return this._searchNearestLeft(index);
                case 1 /* PlotRowSearchMode.NearestRight */:
                    return this._searchNearestRight(index);
                default:
                    throw new TypeError('Unknown search mode');
            }
        }
        return exactPos;
    };
    PlotList.prototype._searchNearestLeft = function (index) {
        var nearestLeftPos = this._lowerbound(index);
        if (nearestLeftPos > 0) {
            nearestLeftPos = nearestLeftPos - 1;
        }
        return (nearestLeftPos !== this._items.length && this._indexAt(nearestLeftPos) < index) ? nearestLeftPos : null;
    };
    PlotList.prototype._searchNearestRight = function (index) {
        var nearestRightPos = this._upperbound(index);
        return (nearestRightPos !== this._items.length && index < this._indexAt(nearestRightPos)) ? nearestRightPos : null;
    };
    PlotList.prototype._bsearch = function (index) {
        var start = this._lowerbound(index);
        if (start !== this._items.length && !(index < this._items[start].index)) {
            return start;
        }
        return null;
    };
    PlotList.prototype._lowerbound = function (index) {
        return lowerbound(this._items, index, function (a, b) { return a.index < b; });
    };
    PlotList.prototype._upperbound = function (index) {
        return upperbound(this._items, index, function (a, b) { return b.index > a; });
    };
    PlotList.prototype._plotMinMax = function (startIndex, endIndexExclusive, plotIndex) {
        var result = null;
        for (var i = startIndex; i < endIndexExclusive; i++) {
            var values = this._items[i].value;
            var v = values[plotIndex];
            if (Number.isNaN(v) || v === null) {
                continue;
            }
            if (result === null) {
                result = { min: v, max: v };
            }
            else {
                if (v < result.min) {
                    result.min = v;
                }
                if (v > result.max) {
                    result.max = v;
                }
            }
        }
        return result;
    };
    PlotList.prototype._minMaxOnRangeCachedImpl = function (start, end, plotIndex) {
        // this code works for single series only
        // could fail after whitespaces implementation
        if (this.isEmpty()) {
            return null;
        }
        var result = null;
        // assume that bar indexes only increase
        var firstIndex = ensureNotNull(this.firstIndex());
        var lastIndex = ensureNotNull(this.lastIndex());
        var s = Math.max(start, firstIndex);
        var e = Math.min(end, lastIndex);
        var cachedLow = Math.ceil(s / CHUNK_SIZE) * CHUNK_SIZE;
        var cachedHigh = Math.max(cachedLow, Math.floor(e / CHUNK_SIZE) * CHUNK_SIZE);
        {
            var startIndex = this._lowerbound(s);
            var endIndex = this._upperbound(Math.min(e, cachedLow, end)); // non-inclusive end
            var plotMinMax = this._plotMinMax(startIndex, endIndex, plotIndex);
            result = mergeMinMax(result, plotMinMax);
        }
        var minMaxCache = this._minMaxCache.get(plotIndex);
        if (minMaxCache === undefined) {
            minMaxCache = new Map();
            this._minMaxCache.set(plotIndex, minMaxCache);
        }
        // now go cached
        for (var c = Math.max(cachedLow + 1, s); c < cachedHigh; c += CHUNK_SIZE) {
            var chunkIndex = Math.floor(c / CHUNK_SIZE);
            var chunkMinMax = minMaxCache.get(chunkIndex);
            if (chunkMinMax === undefined) {
                var chunkStart = this._lowerbound(chunkIndex * CHUNK_SIZE);
                var chunkEnd = this._upperbound((chunkIndex + 1) * CHUNK_SIZE - 1);
                chunkMinMax = this._plotMinMax(chunkStart, chunkEnd, plotIndex);
                minMaxCache.set(chunkIndex, chunkMinMax);
            }
            result = mergeMinMax(result, chunkMinMax);
        }
        // tail
        {
            var startIndex = this._lowerbound(cachedHigh);
            var endIndex = this._upperbound(e); // non-inclusive end
            var plotMinMax = this._plotMinMax(startIndex, endIndex, plotIndex);
            result = mergeMinMax(result, plotMinMax);
        }
        return result;
    };
    return PlotList;
}());
function mergeMinMax(first, second) {
    if (first === null) {
        return second;
    }
    else {
        if (second === null) {
            return first;
        }
        else {
            // merge MinMax values
            var min = Math.min(first.min, second.min);
            var max = Math.max(first.max, second.max);
            return { min: min, max: max };
        }
    }
}

function createSeriesPlotList() {
    return new PlotList();
}

var Series = /** @class */ (function (_super) {
    __extends(Series, _super);
    function Series(model, options, seriesType) {
        var _this = _super.call(this, model) || this;
        _this._data = createSeriesPlotList();
        _this._priceLineView = new SeriesPriceLinePaneView(_this);
        _this._customPriceLines = [];
        _this._baseHorizontalLineView = new SeriesHorizontalBaseLinePaneView(_this);
        _this._lastPriceAnimationPaneView = null;
        _this._barColorerCache = null;
        _this._markers = [];
        _this._indexedMarkers = [];
        _this._animationTimeoutId = null;
        _this._options = options;
        _this._seriesType = seriesType;
        var priceAxisView = new SeriesPriceAxisView(_this);
        _this._priceAxisViews = [priceAxisView];
        _this._panePriceAxisView = new PanePriceAxisView(priceAxisView, _this, model);
        if (seriesType === 'Area' || seriesType === 'Line' || seriesType === 'Baseline') {
            _this._lastPriceAnimationPaneView = new SeriesLastPriceAnimationPaneView(_this);
        }
        _this._recreateFormatter();
        _this._recreatePaneViews();
        return _this;
    }
    Series.prototype.destroy = function () {
        if (this._animationTimeoutId !== null) {
            clearTimeout(this._animationTimeoutId);
        }
    };
    Series.prototype.priceLineColor = function (lastBarColor) {
        return this._options.priceLineColor || lastBarColor;
    };
    Series.prototype.lastValueData = function (globalLast) {
        var noDataRes = { noData: true };
        var priceScale = this.priceScale();
        if (this.model().timeScale().isEmpty() || priceScale.isEmpty() || this._data.isEmpty()) {
            return noDataRes;
        }
        var visibleBars = this.model().timeScale().visibleStrictRange();
        var firstValue = this.firstValue();
        if (visibleBars === null || firstValue === null) {
            return noDataRes;
        }
        // find range of bars inside range
        // TODO: make it more optimal
        var bar;
        var lastIndex;
        if (globalLast) {
            var lastBar = this._data.last();
            if (lastBar === null) {
                return noDataRes;
            }
            bar = lastBar;
            lastIndex = lastBar.index;
        }
        else {
            var endBar = this._data.search(visibleBars.right(), -1 /* PlotRowSearchMode.NearestLeft */);
            if (endBar === null) {
                return noDataRes;
            }
            bar = this._data.valueAt(endBar.index);
            if (bar === null) {
                return noDataRes;
            }
            lastIndex = endBar.index;
        }
        var price = bar.value[3 /* PlotRowValueIndex.Close */];
        var barColorer = this.barColorer();
        var style = barColorer.barStyle(lastIndex, { value: bar });
        var coordinate = priceScale.priceToCoordinate(price, firstValue.value);
        return {
            noData: false,
            price: price,
            text: priceScale.formatPrice(price, firstValue.value),
            formattedPriceAbsolute: priceScale.formatPriceAbsolute(price),
            formattedPricePercentage: priceScale.formatPricePercentage(price, firstValue.value),
            color: style.barColor,
            coordinate: coordinate,
            index: lastIndex,
        };
    };
    Series.prototype.barColorer = function () {
        if (this._barColorerCache !== null) {
            return this._barColorerCache;
        }
        this._barColorerCache = new SeriesBarColorer(this);
        return this._barColorerCache;
    };
    Series.prototype.options = function () {
        return this._options;
    };
    Series.prototype.applyOptions = function (options) {
        var targetPriceScaleId = options.priceScaleId;
        if (targetPriceScaleId !== undefined && targetPriceScaleId !== this._options.priceScaleId) {
            // series cannot do it itself, ask model
            this.model().moveSeriesToScale(this, targetPriceScaleId);
        }
        merge(this._options, options);
        // eslint-disable-next-line deprecation/deprecation
        if (this._priceScale !== null && options.scaleMargins !== undefined) {
            this._priceScale.applyOptions({
                // eslint-disable-next-line deprecation/deprecation
                scaleMargins: options.scaleMargins,
            });
        }
        if (options.priceFormat !== undefined) {
            this._recreateFormatter();
            // updated formatter might affect rendering  and as a consequence of this the width of price axis might be changed
            // thus we need to force the chart to do a full update to apply changes correctly
            // full update is quite heavy operation in terms of performance
            // but updating formatter looks like quite rare so forcing a full update here shouldn't affect the performance a lot
            this.model().fullUpdate();
        }
        this.model().updateSource(this);
        // a series might affect crosshair by some options (like crosshair markers)
        // that's why we need to update crosshair as well
        this.model().updateCrosshair();
        this._paneView.update('options');
    };
    Series.prototype.setData = function (data, updateInfo) {
        this._data.setData(data);
        this._recalculateMarkers();
        this._paneView.update('data');
        this._markersPaneView.update('data');
        if (this._lastPriceAnimationPaneView !== null) {
            if (updateInfo && updateInfo.lastBarUpdatedOrNewBarsAddedToTheRight) {
                this._lastPriceAnimationPaneView.onNewRealtimeDataReceived();
            }
            else if (data.length === 0) {
                this._lastPriceAnimationPaneView.onDataCleared();
            }
        }
        var sourcePane = this.model().paneForSource(this);
        this.model().recalculatePane(sourcePane);
        this.model().updateSource(this);
        this.model().updateCrosshair();
        this.model().lightUpdate();
    };
    Series.prototype.setMarkers = function (data) {
        this._markers = data.map(function (item) { return (__assign({}, item)); });
        this._recalculateMarkers();
        var sourcePane = this.model().paneForSource(this);
        this._markersPaneView.update('data');
        this.model().recalculatePane(sourcePane);
        this.model().updateSource(this);
        this.model().updateCrosshair();
        this.model().lightUpdate();
    };
    Series.prototype.indexedMarkers = function () {
        return this._indexedMarkers;
    };
    Series.prototype.createPriceLine = function (options) {
        var result = new CustomPriceLine(this, options);
        this._customPriceLines.push(result);
        this.model().updateSource(this);
        return result;
    };
    Series.prototype.removePriceLine = function (line) {
        var index = this._customPriceLines.indexOf(line);
        if (index !== -1) {
            this._customPriceLines.splice(index, 1);
        }
        this.model().updateSource(this);
    };
    Series.prototype.customPriceLines = function () {
        return this._customPriceLines;
    };
    Series.prototype.seriesType = function () {
        return this._seriesType;
    };
    Series.prototype.firstValue = function () {
        var bar = this.firstBar();
        if (bar === null) {
            return null;
        }
        return {
            value: bar.value[3 /* PlotRowValueIndex.Close */],
            timePoint: bar.time,
        };
    };
    Series.prototype.firstBar = function () {
        var visibleBars = this.model().timeScale().visibleStrictRange();
        if (visibleBars === null) {
            return null;
        }
        var startTimePoint = visibleBars.left();
        return this._data.search(startTimePoint, 1 /* PlotRowSearchMode.NearestRight */);
    };
    Series.prototype.bars = function () {
        return this._data;
    };
    Series.prototype.dataAt = function (time) {
        var prices = this._data.valueAt(time);
        if (prices === null) {
            return null;
        }
        if (this._seriesType === 'Bar' || this._seriesType === 'Candlestick') {
            return {
                open: prices.value[0 /* PlotRowValueIndex.Open */],
                high: prices.value[1 /* PlotRowValueIndex.High */],
                low: prices.value[2 /* PlotRowValueIndex.Low */],
                close: prices.value[3 /* PlotRowValueIndex.Close */],
            };
        }
        else {
            return prices.value[3 /* PlotRowValueIndex.Close */];
        }
    };
    Series.prototype.topPaneViews = function (pane) {
        var _this = this;
        var animationPaneView = this._lastPriceAnimationPaneView;
        if (animationPaneView === null || !animationPaneView.visible()) {
            return [];
        }
        if (this._animationTimeoutId === null && animationPaneView.animationActive()) {
            this._animationTimeoutId = setTimeout(function () {
                _this._animationTimeoutId = null;
                _this.model().cursorUpdate();
            }, 0);
        }
        animationPaneView.invalidateStage();
        return [animationPaneView];
    };
    Series.prototype.paneViews = function () {
        var res = [];
        if (!this._isOverlay()) {
            res.push(this._baseHorizontalLineView);
        }
        for (var _i = 0, _a = this._customPriceLines; _i < _a.length; _i++) {
            var customPriceLine = _a[_i];
            res.push.apply(res, customPriceLine.paneViews());
        }
        res.push(this._paneView, this._priceLineView, this._panePriceAxisView, this._markersPaneView);
        return res;
    };
    Series.prototype.priceAxisViews = function (pane, priceScale) {
        if (priceScale !== this._priceScale && !this._isOverlay()) {
            return [];
        }
        var result = __spreadArray([], this._priceAxisViews, true);
        for (var _i = 0, _a = this._customPriceLines; _i < _a.length; _i++) {
            var customPriceLine = _a[_i];
            result.push(customPriceLine.priceAxisView());
        }
        return result;
    };
    Series.prototype.autoscaleInfo = function (startTimePoint, endTimePoint) {
        var _this = this;
        if (this._options.autoscaleInfoProvider !== undefined) {
            var autoscaleInfo = this._options.autoscaleInfoProvider(function () {
                var res = _this._autoscaleInfoImpl(startTimePoint, endTimePoint);
                return (res === null) ? null : res.toRaw();
            });
            return AutoscaleInfoImpl.fromRaw(autoscaleInfo);
        }
        return this._autoscaleInfoImpl(startTimePoint, endTimePoint);
    };
    Series.prototype.minMove = function () {
        return this._options.priceFormat.minMove;
    };
    Series.prototype.formatter = function () {
        return this._formatter;
    };
    Series.prototype.updateAllViews = function () {
        var _a;
        this._paneView.update();
        this._markersPaneView.update();
        for (var _i = 0, _b = this._priceAxisViews; _i < _b.length; _i++) {
            var priceAxisView = _b[_i];
            priceAxisView.update();
        }
        for (var _c = 0, _d = this._customPriceLines; _c < _d.length; _c++) {
            var customPriceLine = _d[_c];
            customPriceLine.update();
        }
        this._priceLineView.update();
        this._baseHorizontalLineView.update();
        (_a = this._lastPriceAnimationPaneView) === null || _a === void 0 ? void 0 : _a.update();
    };
    Series.prototype.priceScale = function () {
        return ensureNotNull(_super.prototype.priceScale.call(this));
    };
    Series.prototype.markerDataAtIndex = function (index) {
        var getValue = (this._seriesType === 'Line' || this._seriesType === 'Area' || this._seriesType === 'Baseline') &&
            this._options.crosshairMarkerVisible;
        if (!getValue) {
            return null;
        }
        var bar = this._data.valueAt(index);
        if (bar === null) {
            return null;
        }
        var price = bar.value[3 /* PlotRowValueIndex.Close */];
        var radius = this._markerRadius();
        var borderColor = this._markerBorderColor();
        var backgroundColor = this._markerBackgroundColor(index);
        return { price: price, radius: radius, borderColor: borderColor, backgroundColor: backgroundColor };
    };
    Series.prototype.title = function () {
        return this._options.title;
    };
    Series.prototype.visible = function () {
        return this._options.visible;
    };
    Series.prototype._isOverlay = function () {
        var priceScale = this.priceScale();
        return !isDefaultPriceScale(priceScale.id());
    };
    Series.prototype._autoscaleInfoImpl = function (startTimePoint, endTimePoint) {
        if (!isInteger(startTimePoint) || !isInteger(endTimePoint) || this._data.isEmpty()) {
            return null;
        }
        // TODO: refactor this
        // series data is strongly hardcoded to keep bars
        var plots = this._seriesType === 'Line' || this._seriesType === 'Area' || this._seriesType === 'Baseline' || this._seriesType === 'Histogram'
            ? [3 /* PlotRowValueIndex.Close */]
            : [2 /* PlotRowValueIndex.Low */, 1 /* PlotRowValueIndex.High */];
        var barsMinMax = this._data.minMaxOnRangeCached(startTimePoint, endTimePoint, plots);
        var range = barsMinMax !== null ? new PriceRangeImpl(barsMinMax.min, barsMinMax.max) : null;
        if (this.seriesType() === 'Histogram') {
            var base = this._options.base;
            var rangeWithBase = new PriceRangeImpl(base, base);
            range = range !== null ? range.merge(rangeWithBase) : rangeWithBase;
        }
        return new AutoscaleInfoImpl(range, this._markersPaneView.autoScaleMargins());
    };
    Series.prototype._markerRadius = function () {
        switch (this._seriesType) {
            case 'Line':
            case 'Area':
            case 'Baseline':
                return this._options.crosshairMarkerRadius;
        }
        return 0;
    };
    Series.prototype._markerBorderColor = function () {
        switch (this._seriesType) {
            case 'Line':
            case 'Area':
            case 'Baseline': {
                var crosshairMarkerBorderColor = this._options.crosshairMarkerBorderColor;
                if (crosshairMarkerBorderColor.length !== 0) {
                    return crosshairMarkerBorderColor;
                }
            }
        }
        return null;
    };
    Series.prototype._markerBackgroundColor = function (index) {
        switch (this._seriesType) {
            case 'Line':
            case 'Area':
            case 'Baseline': {
                var crosshairMarkerBackgroundColor = this._options.crosshairMarkerBackgroundColor;
                if (crosshairMarkerBackgroundColor.length !== 0) {
                    return crosshairMarkerBackgroundColor;
                }
            }
        }
        return this.barColorer().barStyle(index).barColor;
    };
    Series.prototype._recreateFormatter = function () {
        switch (this._options.priceFormat.type) {
            case 'custom': {
                this._formatter = { format: this._options.priceFormat.formatter };
                break;
            }
            case 'volume': {
                this._formatter = new VolumeFormatter(this._options.priceFormat.precision);
                break;
            }
            case 'percent': {
                this._formatter = new PercentageFormatter(this._options.priceFormat.precision);
                break;
            }
            default: {
                var priceScale = Math.pow(10, this._options.priceFormat.precision);
                this._formatter = new PriceFormatter(priceScale, this._options.priceFormat.minMove * priceScale);
            }
        }
        if (this._priceScale !== null) {
            this._priceScale.updateFormatter();
        }
    };
    Series.prototype._recalculateMarkers = function () {
        var _this = this;
        var timeScale = this.model().timeScale();
        if (timeScale.isEmpty() || this._data.size() === 0) {
            this._indexedMarkers = [];
            return;
        }
        var firstDataIndex = ensureNotNull(this._data.firstIndex());
        this._indexedMarkers = this._markers.map(function (marker, index) {
            // the first find index on the time scale (across all series)
            var timePointIndex = ensureNotNull(timeScale.timeToIndex(marker.time, true));
            // and then search that index inside the series data
            var searchMode = timePointIndex < firstDataIndex ? 1 /* PlotRowSearchMode.NearestRight */ : -1 /* PlotRowSearchMode.NearestLeft */;
            var seriesDataIndex = ensureNotNull(_this._data.search(timePointIndex, searchMode)).index;
            return {
                time: seriesDataIndex,
                position: marker.position,
                shape: marker.shape,
                color: marker.color,
                id: marker.id,
                internalId: index,
                text: marker.text,
                size: marker.size,
                borderColor: marker.borderColor,
                borderSize: marker.borderSize
            };
        });
    };
    Series.prototype._recreatePaneViews = function () {
        this._markersPaneView = new SeriesMarkersPaneView(this, this.model());
        switch (this._seriesType) {
            case 'Bar': {
                this._paneView = new SeriesBarsPaneView(this, this.model());
                break;
            }
            case 'Candlestick': {
                this._paneView = new SeriesCandlesticksPaneView(this, this.model());
                break;
            }
            case 'Line': {
                this._paneView = new SeriesLinePaneView(this, this.model());
                break;
            }
            case 'Area': {
                this._paneView = new SeriesAreaPaneView(this, this.model());
                break;
            }
            case 'Baseline': {
                this._paneView = new SeriesBaselinePaneView(this, this.model());
                break;
            }
            case 'Histogram': {
                this._paneView = new SeriesHistogramPaneView(this, this.model());
                break;
            }
            default: throw Error('Unknown chart style assigned: ' + this._seriesType);
        }
    };
    return Series;
}(PriceDataSource));

var Magnet = /** @class */ (function () {
    function Magnet(options) {
        this._options = options;
    }
    Magnet.prototype.align = function (price, index, pane) {
        var res = price;
        if (this._options.mode === 0 /* CrosshairMode.Normal */) {
            return res;
        }
        var defaultPriceScale = pane.defaultPriceScale();
        var firstValue = defaultPriceScale.firstValue();
        if (firstValue === null) {
            return res;
        }
        var y = defaultPriceScale.priceToCoordinate(price, firstValue);
        // get all serieses from the pane
        var serieses = pane.dataSources().filter((function (ds) { return (ds instanceof Series); }));
        var candidates = serieses.reduce(function (acc, series) {
            if (pane.isOverlay(series) || !series.visible()) {
                return acc;
            }
            var ps = series.priceScale();
            var bars = series.bars();
            if (ps.isEmpty() || !bars.contains(index)) {
                return acc;
            }
            var bar = bars.valueAt(index);
            if (bar === null) {
                return acc;
            }
            // convert bar to pixels
            var firstPrice = ensure(series.firstValue());
            return acc.concat([ps.priceToCoordinate(bar.value[3 /* PlotRowValueIndex.Close */], firstPrice.value)]);
        }, []);
        if (candidates.length === 0) {
            return res;
        }
        candidates.sort(function (y1, y2) { return Math.abs(y1 - y) - Math.abs(y2 - y); });
        var nearest = candidates[0];
        res = defaultPriceScale.coordinateToPrice(nearest, firstValue);
        return res;
    };
    return Magnet;
}());

var GridRenderer = /** @class */ (function () {
    function GridRenderer() {
        this._data = null;
    }
    GridRenderer.prototype.setData = function (data) {
        this._data = data;
    };
    GridRenderer.prototype.draw = function (ctx, pixelRatio, isHovered, hitTestData) {
        var _this = this;
        if (this._data === null) {
            return;
        }
        var lineWidth = Math.max(1, Math.floor(pixelRatio));
        ctx.lineWidth = lineWidth;
        var height = Math.ceil(this._data.h * pixelRatio);
        var width = Math.ceil(this._data.w * pixelRatio);
        strokeInPixel(ctx, function () {
            var data = ensureNotNull(_this._data);
            if (data.vertLinesVisible) {
                ctx.strokeStyle = data.vertLinesColor;
                setLineStyle(ctx, data.vertLineStyle);
                ctx.beginPath();
                for (var _i = 0, _a = data.timeMarks; _i < _a.length; _i++) {
                    var timeMark = _a[_i];
                    var x = Math.round(timeMark.coord * pixelRatio);
                    ctx.moveTo(x, -lineWidth);
                    ctx.lineTo(x, height + lineWidth);
                }
                ctx.stroke();
            }
            if (data.horzLinesVisible) {
                ctx.strokeStyle = data.horzLinesColor;
                setLineStyle(ctx, data.horzLineStyle);
                ctx.beginPath();
                for (var _b = 0, _c = data.priceMarks; _b < _c.length; _b++) {
                    var priceMark = _c[_b];
                    var y = Math.round(priceMark.coord * pixelRatio);
                    ctx.moveTo(-lineWidth, y);
                    ctx.lineTo(width + lineWidth, y);
                }
                ctx.stroke();
            }
        });
    };
    return GridRenderer;
}());

var GridPaneView = /** @class */ (function () {
    function GridPaneView(pane) {
        this._renderer = new GridRenderer();
        this._invalidated = true;
        this._pane = pane;
    }
    GridPaneView.prototype.update = function () {
        this._invalidated = true;
    };
    GridPaneView.prototype.renderer = function (height, width) {
        if (this._invalidated) {
            var gridOptions = this._pane.model().options().grid;
            var data = {
                h: height,
                w: width,
                horzLinesVisible: gridOptions.horzLines.visible,
                vertLinesVisible: gridOptions.vertLines.visible,
                horzLinesColor: gridOptions.horzLines.color,
                vertLinesColor: gridOptions.vertLines.color,
                horzLineStyle: gridOptions.horzLines.style,
                vertLineStyle: gridOptions.vertLines.style,
                priceMarks: this._pane.defaultPriceScale().marks(),
                timeMarks: this._pane.model().timeScale().marks() || [],
            };
            this._renderer.setData(data);
            this._invalidated = false;
        }
        return this._renderer;
    };
    return GridPaneView;
}());

var Grid = /** @class */ (function () {
    function Grid(pane) {
        this._paneView = new GridPaneView(pane);
    }
    Grid.prototype.paneView = function () {
        return this._paneView;
    };
    return Grid;
}());

var defLogFormula = {
    logicalOffset: 4,
    coordOffset: 0.0001,
};
function fromPercent(value, baseValue) {
    if (baseValue < 0) {
        value = -value;
    }
    return (value / 100) * baseValue + baseValue;
}
function toPercent(value, baseValue) {
    var result = 100 * (value - baseValue) / baseValue;
    return (baseValue < 0 ? -result : result);
}
function toPercentRange(priceRange, baseValue) {
    var minPercent = toPercent(priceRange.minValue(), baseValue);
    var maxPercent = toPercent(priceRange.maxValue(), baseValue);
    return new PriceRangeImpl(minPercent, maxPercent);
}
function fromIndexedTo100(value, baseValue) {
    value -= 100;
    if (baseValue < 0) {
        value = -value;
    }
    return (value / 100) * baseValue + baseValue;
}
function toIndexedTo100(value, baseValue) {
    var result = 100 * (value - baseValue) / baseValue + 100;
    return (baseValue < 0 ? -result : result);
}
function toIndexedTo100Range(priceRange, baseValue) {
    var minPercent = toIndexedTo100(priceRange.minValue(), baseValue);
    var maxPercent = toIndexedTo100(priceRange.maxValue(), baseValue);
    return new PriceRangeImpl(minPercent, maxPercent);
}
function toLog(price, logFormula) {
    var m = Math.abs(price);
    if (m < 1e-15) {
        return 0;
    }
    var res = log10(m + logFormula.coordOffset) + logFormula.logicalOffset;
    return ((price < 0) ? -res : res);
}
function fromLog(logical, logFormula) {
    var m = Math.abs(logical);
    if (m < 1e-15) {
        return 0;
    }
    var res = Math.pow(10, m - logFormula.logicalOffset) - logFormula.coordOffset;
    return (logical < 0) ? -res : res;
}
function convertPriceRangeToLog(priceRange, logFormula) {
    if (priceRange === null) {
        return null;
    }
    var min = toLog(priceRange.minValue(), logFormula);
    var max = toLog(priceRange.maxValue(), logFormula);
    return new PriceRangeImpl(min, max);
}
function canConvertPriceRangeFromLog(priceRange, logFormula) {
    if (priceRange === null) {
        return false;
    }
    var min = fromLog(priceRange.minValue(), logFormula);
    var max = fromLog(priceRange.maxValue(), logFormula);
    return isFinite(min) && isFinite(max);
}
function convertPriceRangeFromLog(priceRange, logFormula) {
    if (priceRange === null) {
        return null;
    }
    var min = fromLog(priceRange.minValue(), logFormula);
    var max = fromLog(priceRange.maxValue(), logFormula);
    return new PriceRangeImpl(min, max);
}
function logFormulaForPriceRange(range) {
    if (range === null) {
        return defLogFormula;
    }
    var diff = Math.abs(range.maxValue() - range.minValue());
    if (diff >= 1 || diff < 1e-15) {
        return defLogFormula;
    }
    var digits = Math.ceil(Math.abs(Math.log10(diff)));
    var logicalOffset = defLogFormula.logicalOffset + digits;
    var coordOffset = 1 / Math.pow(10, logicalOffset);
    return {
        logicalOffset: logicalOffset,
        coordOffset: coordOffset,
    };
}
function logFormulasAreSame(f1, f2) {
    return f1.logicalOffset === f2.logicalOffset && f1.coordOffset === f2.coordOffset;
}

var Constants$7;
(function (Constants) {
    Constants[Constants["TickSpanEpsilon"] = 1e-14] = "TickSpanEpsilon";
})(Constants$7 || (Constants$7 = {}));
var PriceTickSpanCalculator = /** @class */ (function () {
    function PriceTickSpanCalculator(base, integralDividers) {
        this._base = base;
        this._integralDividers = integralDividers;
        if (isBaseDecimal(this._base)) {
            this._fractionalDividers = [2, 2.5, 2];
        }
        else {
            this._fractionalDividers = [];
            for (var baseRest = this._base; baseRest !== 1;) {
                if ((baseRest % 2) === 0) {
                    this._fractionalDividers.push(2);
                    baseRest /= 2;
                }
                else if ((baseRest % 5) === 0) {
                    this._fractionalDividers.push(2, 2.5);
                    baseRest /= 5;
                }
                else {
                    throw new Error('unexpected base');
                }
                if (this._fractionalDividers.length > 100) {
                    throw new Error('something wrong with base');
                }
            }
        }
    }
    PriceTickSpanCalculator.prototype.tickSpan = function (high, low, maxTickSpan) {
        var minMovement = (this._base === 0) ? (0) : (1 / this._base);
        var resultTickSpan = Math.pow(10, Math.max(0, Math.ceil(log10(high - low))));
        var index = 0;
        var c = this._integralDividers[0];
        // eslint-disable-next-line no-constant-condition
        while (true) {
            // the second part is actual for small with very small values like 1e-10
            // greaterOrEqual fails for such values
            var resultTickSpanLargerMinMovement = greaterOrEqual(resultTickSpan, minMovement, 1e-14 /* Constants.TickSpanEpsilon */) && resultTickSpan > (minMovement + 1e-14 /* Constants.TickSpanEpsilon */);
            var resultTickSpanLargerMaxTickSpan = greaterOrEqual(resultTickSpan, maxTickSpan * c, 1e-14 /* Constants.TickSpanEpsilon */);
            var resultTickSpanLarger1 = greaterOrEqual(resultTickSpan, 1, 1e-14 /* Constants.TickSpanEpsilon */);
            var haveToContinue = resultTickSpanLargerMinMovement && resultTickSpanLargerMaxTickSpan && resultTickSpanLarger1;
            if (!haveToContinue) {
                break;
            }
            resultTickSpan /= c;
            c = this._integralDividers[++index % this._integralDividers.length];
        }
        if (resultTickSpan <= (minMovement + 1e-14 /* Constants.TickSpanEpsilon */)) {
            resultTickSpan = minMovement;
        }
        resultTickSpan = Math.max(1, resultTickSpan);
        if ((this._fractionalDividers.length > 0) && equal(resultTickSpan, 1, 1e-14 /* Constants.TickSpanEpsilon */)) {
            index = 0;
            c = this._fractionalDividers[0];
            while (greaterOrEqual(resultTickSpan, maxTickSpan * c, 1e-14 /* Constants.TickSpanEpsilon */) && resultTickSpan > (minMovement + 1e-14 /* Constants.TickSpanEpsilon */)) {
                resultTickSpan /= c;
                c = this._fractionalDividers[++index % this._fractionalDividers.length];
            }
        }
        return resultTickSpan;
    };
    return PriceTickSpanCalculator;
}());

var TICK_DENSITY = 2.5;
var PriceTickMarkBuilder = /** @class */ (function () {
    function PriceTickMarkBuilder(priceScale, base, coordinateToLogicalFunc, logicalToCoordinateFunc) {
        this._marks = [];
        this._priceScale = priceScale;
        this._base = base;
        this._coordinateToLogicalFunc = coordinateToLogicalFunc;
        this._logicalToCoordinateFunc = logicalToCoordinateFunc;
    }
    PriceTickMarkBuilder.prototype.tickSpan = function (high, low) {
        if (high < low) {
            throw new Error('high < low');
        }
        var scaleHeight = this._priceScale.height();
        var markHeight = this._tickMarkHeight();
        var maxTickSpan = (high - low) * markHeight / scaleHeight;
        var spanCalculator1 = new PriceTickSpanCalculator(this._base, [2, 2.5, 2]);
        var spanCalculator2 = new PriceTickSpanCalculator(this._base, [2, 2, 2.5]);
        var spanCalculator3 = new PriceTickSpanCalculator(this._base, [2.5, 2, 2]);
        var spans = [];
        spans.push(spanCalculator1.tickSpan(high, low, maxTickSpan), spanCalculator2.tickSpan(high, low, maxTickSpan), spanCalculator3.tickSpan(high, low, maxTickSpan));
        return min(spans);
    };
    PriceTickMarkBuilder.prototype.rebuildTickMarks = function () {
        var priceScale = this._priceScale;
        var firstValue = priceScale.firstValue();
        if (firstValue === null) {
            this._marks = [];
            return;
        }
        var scaleHeight = priceScale.height();
        var bottom = this._coordinateToLogicalFunc(scaleHeight - 1, firstValue);
        var top = this._coordinateToLogicalFunc(0, firstValue);
        var extraTopBottomMargin = this._priceScale.options().entireTextOnly ? this._fontHeight() / 2 : 0;
        var minCoord = extraTopBottomMargin;
        var maxCoord = scaleHeight - 1 - extraTopBottomMargin;
        var high = Math.max(bottom, top);
        var low = Math.min(bottom, top);
        if (high === low) {
            this._marks = [];
            return;
        }
        var span = this.tickSpan(high, low);
        var mod = high % span;
        mod += mod < 0 ? span : 0;
        var sign = (high >= low) ? 1 : -1;
        var prevCoord = null;
        var targetIndex = 0;
        for (var logical = high - mod; logical > low; logical -= span) {
            var coord = this._logicalToCoordinateFunc(logical, firstValue, true);
            // check if there is place for it
            // this is required for log scale
            if (prevCoord !== null && Math.abs(coord - prevCoord) < this._tickMarkHeight()) {
                continue;
            }
            // check if a tick mark is partially visible and skip it if entireTextOnly is true
            if (coord < minCoord || coord > maxCoord) {
                continue;
            }
            if (targetIndex < this._marks.length) {
                this._marks[targetIndex].coord = coord;
                this._marks[targetIndex].label = priceScale.formatLogical(logical);
            }
            else {
                this._marks.push({
                    coord: coord,
                    label: priceScale.formatLogical(logical),
                });
            }
            targetIndex++;
            prevCoord = coord;
            if (priceScale.isLog()) {
                // recalc span
                span = this.tickSpan(logical * sign, low);
            }
        }
        this._marks.length = targetIndex;
    };
    PriceTickMarkBuilder.prototype.marks = function () {
        return this._marks;
    };
    PriceTickMarkBuilder.prototype._fontHeight = function () {
        return this._priceScale.fontSize();
    };
    PriceTickMarkBuilder.prototype._tickMarkHeight = function () {
        return Math.ceil(this._fontHeight() * TICK_DENSITY);
    };
    return PriceTickMarkBuilder;
}());

function sortSources(sources) {
    return sources.slice().sort(function (s1, s2) {
        return (ensureNotNull(s1.zorder()) - ensureNotNull(s2.zorder()));
    });
}

/**
 * Represents the price scale mode.
 */
var PriceScaleMode;
(function (PriceScaleMode) {
    /**
     * Price scale shows prices. Price range changes linearly.
     */
    PriceScaleMode[PriceScaleMode["Normal"] = 0] = "Normal";
    /**
     * Price scale shows prices. Price range changes logarithmically.
     */
    PriceScaleMode[PriceScaleMode["Logarithmic"] = 1] = "Logarithmic";
    /**
     * Price scale shows percentage values according the first visible value of the price scale.
     * The first visible value is 0% in this mode.
     */
    PriceScaleMode[PriceScaleMode["Percentage"] = 2] = "Percentage";
    /**
     * The same as percentage mode, but the first value is moved to 100.
     */
    PriceScaleMode[PriceScaleMode["IndexedTo100"] = 3] = "IndexedTo100";
})(PriceScaleMode || (PriceScaleMode = {}));
var percentageFormatter = new PercentageFormatter();
var defaultPriceFormatter = new PriceFormatter(100, 1);
var PriceScale = /** @class */ (function () {
    function PriceScale(id, options, layoutOptions, localizationOptions) {
        this._height = 0;
        this._internalHeightCache = null;
        this._priceRange = null;
        this._priceRangeSnapshot = null;
        this._invalidatedForRange = { isValid: false, visibleBars: null };
        this._marginAbove = 0;
        this._marginBelow = 0;
        this._onMarksChanged = new Delegate();
        this._modeChanged = new Delegate();
        this._dataSources = [];
        this._cachedOrderedSources = null;
        this._marksCache = null;
        this._scaleStartPoint = null;
        this._scrollStartPoint = null;
        this._formatter = defaultPriceFormatter;
        this._logFormula = logFormulaForPriceRange(null);
        this._id = id;
        this._options = options;
        this._layoutOptions = layoutOptions;
        this._localizationOptions = localizationOptions;
        this._markBuilder = new PriceTickMarkBuilder(this, 100, this._coordinateToLogical.bind(this), this._logicalToCoordinate.bind(this));
    }
    PriceScale.prototype.id = function () {
        return this._id;
    };
    PriceScale.prototype.options = function () {
        return this._options;
    };
    PriceScale.prototype.applyOptions = function (options) {
        merge(this._options, options);
        this.updateFormatter();
        if (options.mode !== undefined) {
            this.setMode({ mode: options.mode });
        }
        if (options.scaleMargins !== undefined) {
            var top_1 = ensureDefined(options.scaleMargins.top);
            var bottom = ensureDefined(options.scaleMargins.bottom);
            if (top_1 < 0 || top_1 > 1) {
                throw new Error("Invalid top margin - expect value between 0 and 1, given=".concat(top_1));
            }
            if (bottom < 0 || bottom > 1 || top_1 + bottom > 1) {
                throw new Error("Invalid bottom margin - expect value between 0 and 1, given=".concat(bottom));
            }
            if (top_1 + bottom > 1) {
                throw new Error("Invalid margins - sum of margins must be less than 1, given=".concat(top_1 + bottom));
            }
            this._invalidateInternalHeightCache();
            this._marksCache = null;
        }
    };
    PriceScale.prototype.isAutoScale = function () {
        return this._options.autoScale;
    };
    PriceScale.prototype.isLog = function () {
        return this._options.mode === 1 /* PriceScaleMode.Logarithmic */;
    };
    PriceScale.prototype.isPercentage = function () {
        return this._options.mode === 2 /* PriceScaleMode.Percentage */;
    };
    PriceScale.prototype.isIndexedTo100 = function () {
        return this._options.mode === 3 /* PriceScaleMode.IndexedTo100 */;
    };
    PriceScale.prototype.mode = function () {
        return {
            autoScale: this._options.autoScale,
            isInverted: this._options.invertScale,
            mode: this._options.mode,
        };
    };
    // eslint-disable-next-line complexity
    PriceScale.prototype.setMode = function (newMode) {
        var oldMode = this.mode();
        var priceRange = null;
        if (newMode.autoScale !== undefined) {
            this._options.autoScale = newMode.autoScale;
        }
        if (newMode.mode !== undefined) {
            this._options.mode = newMode.mode;
            if (newMode.mode === 2 /* PriceScaleMode.Percentage */ || newMode.mode === 3 /* PriceScaleMode.IndexedTo100 */) {
                this._options.autoScale = true;
            }
            // TODO: Remove after making rebuildTickMarks lazy
            this._invalidatedForRange.isValid = false;
        }
        // define which scale converted from
        if (oldMode.mode === 1 /* PriceScaleMode.Logarithmic */ && newMode.mode !== oldMode.mode) {
            if (canConvertPriceRangeFromLog(this._priceRange, this._logFormula)) {
                priceRange = convertPriceRangeFromLog(this._priceRange, this._logFormula);
                if (priceRange !== null) {
                    this.setPriceRange(priceRange);
                }
            }
            else {
                this._options.autoScale = true;
            }
        }
        // define which scale converted to
        if (newMode.mode === 1 /* PriceScaleMode.Logarithmic */ && newMode.mode !== oldMode.mode) {
            priceRange = convertPriceRangeToLog(this._priceRange, this._logFormula);
            if (priceRange !== null) {
                this.setPriceRange(priceRange);
            }
        }
        var modeChanged = oldMode.mode !== this._options.mode;
        if (modeChanged && (oldMode.mode === 2 /* PriceScaleMode.Percentage */ || this.isPercentage())) {
            this.updateFormatter();
        }
        if (modeChanged && (oldMode.mode === 3 /* PriceScaleMode.IndexedTo100 */ || this.isIndexedTo100())) {
            this.updateFormatter();
        }
        if (newMode.isInverted !== undefined && oldMode.isInverted !== newMode.isInverted) {
            this._options.invertScale = newMode.isInverted;
            this._onIsInvertedChanged();
        }
        this._modeChanged.fire(oldMode, this.mode());
    };
    PriceScale.prototype.modeChanged = function () {
        return this._modeChanged;
    };
    PriceScale.prototype.fontSize = function () {
        return this._layoutOptions.fontSize;
    };
    PriceScale.prototype.height = function () {
        return this._height;
    };
    PriceScale.prototype.setHeight = function (value) {
        if (this._height === value) {
            return;
        }
        this._height = value;
        this._invalidateInternalHeightCache();
        this._marksCache = null;
    };
    PriceScale.prototype.internalHeight = function () {
        if (this._internalHeightCache) {
            return this._internalHeightCache;
        }
        var res = this.height() - this._topMarginPx() - this._bottomMarginPx();
        this._internalHeightCache = res;
        return res;
    };
    PriceScale.prototype.priceRange = function () {
        this._makeSureItIsValid();
        return this._priceRange;
    };
    PriceScale.prototype.setPriceRange = function (newPriceRange, isForceSetValue) {
        var oldPriceRange = this._priceRange;
        if (!isForceSetValue &&
            !(oldPriceRange === null && newPriceRange !== null) &&
            (oldPriceRange === null || oldPriceRange.equals(newPriceRange))) {
            return;
        }
        this._marksCache = null;
        this._priceRange = newPriceRange;
    };
    PriceScale.prototype.isEmpty = function () {
        this._makeSureItIsValid();
        return this._height === 0 || !this._priceRange || this._priceRange.isEmpty();
    };
    PriceScale.prototype.invertedCoordinate = function (coordinate) {
        return this.isInverted() ? coordinate : this.height() - 1 - coordinate;
    };
    PriceScale.prototype.priceToCoordinate = function (price, baseValue) {
        if (this.isPercentage()) {
            price = toPercent(price, baseValue);
        }
        else if (this.isIndexedTo100()) {
            price = toIndexedTo100(price, baseValue);
        }
        return this._logicalToCoordinate(price, baseValue);
    };
    PriceScale.prototype.pointsArrayToCoordinates = function (points, baseValue, visibleRange) {
        this._makeSureItIsValid();
        var bh = this._bottomMarginPx();
        var range = ensureNotNull(this.priceRange());
        var min = range.minValue();
        var max = range.maxValue();
        var ih = (this.internalHeight() - 1);
        var isInverted = this.isInverted();
        var hmm = ih / (max - min);
        var fromIndex = (visibleRange === undefined) ? 0 : visibleRange.from;
        var toIndex = (visibleRange === undefined) ? points.length : visibleRange.to;
        var transformFn = this._getCoordinateTransformer();
        for (var i = fromIndex; i < toIndex; i++) {
            var point = points[i];
            var price = point.price;
            if (isNaN(price)) {
                continue;
            }
            var logical = price;
            if (transformFn !== null) {
                logical = transformFn(point.price, baseValue);
            }
            var invCoordinate = bh + hmm * (logical - min);
            var coordinate = isInverted ? invCoordinate : this._height - 1 - invCoordinate;
            point.y = coordinate;
        }
    };
    PriceScale.prototype.barPricesToCoordinates = function (pricesList, baseValue, visibleRange) {
        this._makeSureItIsValid();
        var bh = this._bottomMarginPx();
        var range = ensureNotNull(this.priceRange());
        var min = range.minValue();
        var max = range.maxValue();
        var ih = (this.internalHeight() - 1);
        var isInverted = this.isInverted();
        var hmm = ih / (max - min);
        var fromIndex = (visibleRange === undefined) ? 0 : visibleRange.from;
        var toIndex = (visibleRange === undefined) ? pricesList.length : visibleRange.to;
        var transformFn = this._getCoordinateTransformer();
        for (var i = fromIndex; i < toIndex; i++) {
            var bar = pricesList[i];
            var openLogical = bar.open;
            var highLogical = bar.high;
            var lowLogical = bar.low;
            var closeLogical = bar.close;
            if (transformFn !== null) {
                openLogical = transformFn(bar.open, baseValue);
                highLogical = transformFn(bar.high, baseValue);
                lowLogical = transformFn(bar.low, baseValue);
                closeLogical = transformFn(bar.close, baseValue);
            }
            var invCoordinate = bh + hmm * (openLogical - min);
            var coordinate = isInverted ? invCoordinate : this._height - 1 - invCoordinate;
            bar.openY = coordinate;
            invCoordinate = bh + hmm * (highLogical - min);
            coordinate = isInverted ? invCoordinate : this._height - 1 - invCoordinate;
            bar.highY = coordinate;
            invCoordinate = bh + hmm * (lowLogical - min);
            coordinate = isInverted ? invCoordinate : this._height - 1 - invCoordinate;
            bar.lowY = coordinate;
            invCoordinate = bh + hmm * (closeLogical - min);
            coordinate = isInverted ? invCoordinate : this._height - 1 - invCoordinate;
            bar.closeY = coordinate;
        }
    };
    PriceScale.prototype.coordinateToPrice = function (coordinate, baseValue) {
        var logical = this._coordinateToLogical(coordinate, baseValue);
        return this.logicalToPrice(logical, baseValue);
    };
    PriceScale.prototype.logicalToPrice = function (logical, baseValue) {
        var value = logical;
        if (this.isPercentage()) {
            value = fromPercent(value, baseValue);
        }
        else if (this.isIndexedTo100()) {
            value = fromIndexedTo100(value, baseValue);
        }
        return value;
    };
    PriceScale.prototype.dataSources = function () {
        return this._dataSources;
    };
    PriceScale.prototype.orderedSources = function () {
        if (this._cachedOrderedSources) {
            return this._cachedOrderedSources;
        }
        var sources = [];
        for (var i = 0; i < this._dataSources.length; i++) {
            var ds = this._dataSources[i];
            if (ds.zorder() === null) {
                ds.setZorder(i + 1);
            }
            sources.push(ds);
        }
        sources = sortSources(sources);
        this._cachedOrderedSources = sources;
        return this._cachedOrderedSources;
    };
    PriceScale.prototype.addDataSource = function (source) {
        if (this._dataSources.indexOf(source) !== -1) {
            return;
        }
        this._dataSources.push(source);
        this.updateFormatter();
        this.invalidateSourcesCache();
    };
    PriceScale.prototype.removeDataSource = function (source) {
        var index = this._dataSources.indexOf(source);
        if (index === -1) {
            throw new Error('source is not attached to scale');
        }
        this._dataSources.splice(index, 1);
        if (this._dataSources.length === 0) {
            this.setMode({
                autoScale: true,
            });
            // if no sources on price scale let's clear price range cache as well as enabling auto scale
            this.setPriceRange(null);
        }
        this.updateFormatter();
        this.invalidateSourcesCache();
    };
    PriceScale.prototype.firstValue = function () {
        // TODO: cache the result
        var result = null;
        for (var _i = 0, _a = this._dataSources; _i < _a.length; _i++) {
            var source = _a[_i];
            var firstValue = source.firstValue();
            if (firstValue === null || firstValue.value === null) {
                continue;
            }
            if (result === null || firstValue.timePoint < result.timePoint) {
                result = firstValue;
            }
        }
        return result === null ? null : result.value;
    };
    PriceScale.prototype.isInverted = function () {
        return this._options.invertScale;
    };
    PriceScale.prototype.marks = function () {
        var firstValueIsNull = this.firstValue() === null;
        // do not recalculate marks if firstValueIsNull is true because in this case we'll always get empty result
        // this could happen in case when a series had some data and then you set empty data to it (in a simplified case)
        // we could display an empty price scale, but this is not good from UX
        // so in this case we need to keep an previous marks to display them on the scale
        // as one of possible examples for this situation could be the following:
        // let's say you have a study/indicator attached to a price scale and then you decide to stop it, i.e. remove its data because of its visibility
        // a user will see the previous marks on the scale until you turn on your study back or remove it from the chart completely
        if (this._marksCache !== null && (firstValueIsNull || this._marksCache.firstValueIsNull === firstValueIsNull)) {
            return this._marksCache.marks;
        }
        this._markBuilder.rebuildTickMarks();
        var marks = this._markBuilder.marks();
        this._marksCache = { marks: marks, firstValueIsNull: firstValueIsNull };
        this._onMarksChanged.fire();
        return marks;
    };
    PriceScale.prototype.onMarksChanged = function () {
        return this._onMarksChanged;
    };
    PriceScale.prototype.startScale = function (x) {
        if (this.isPercentage() || this.isIndexedTo100()) {
            return;
        }
        if (this._scaleStartPoint !== null || this._priceRangeSnapshot !== null) {
            return;
        }
        if (this.isEmpty()) {
            return;
        }
        // invert x
        this._scaleStartPoint = this._height - x;
        this._priceRangeSnapshot = ensureNotNull(this.priceRange()).clone();
    };
    PriceScale.prototype.scaleTo = function (x) {
        if (this.isPercentage() || this.isIndexedTo100()) {
            return;
        }
        if (this._scaleStartPoint === null) {
            return;
        }
        this.setMode({
            autoScale: false,
        });
        // invert x
        x = this._height - x;
        if (x < 0) {
            x = 0;
        }
        var scaleCoeff = (this._scaleStartPoint + (this._height - 1) * 0.2) / (x + (this._height - 1) * 0.2);
        var newPriceRange = ensureNotNull(this._priceRangeSnapshot).clone();
        scaleCoeff = Math.max(scaleCoeff, 0.1);
        newPriceRange.scaleAroundCenter(scaleCoeff);
        this.setPriceRange(newPriceRange);
    };
    PriceScale.prototype.endScale = function () {
        if (this.isPercentage() || this.isIndexedTo100()) {
            return;
        }
        this._scaleStartPoint = null;
        this._priceRangeSnapshot = null;
    };
    PriceScale.prototype.startScroll = function (x) {
        if (this.isAutoScale()) {
            return;
        }
        if (this._scrollStartPoint !== null || this._priceRangeSnapshot !== null) {
            return;
        }
        if (this.isEmpty()) {
            return;
        }
        this._scrollStartPoint = x;
        this._priceRangeSnapshot = ensureNotNull(this.priceRange()).clone();
    };
    PriceScale.prototype.scrollTo = function (x) {
        if (this.isAutoScale()) {
            return;
        }
        if (this._scrollStartPoint === null) {
            return;
        }
        var priceUnitsPerPixel = ensureNotNull(this.priceRange()).length() / (this.internalHeight() - 1);
        var pixelDelta = x - this._scrollStartPoint;
        if (this.isInverted()) {
            pixelDelta *= -1;
        }
        var priceDelta = pixelDelta * priceUnitsPerPixel;
        var newPriceRange = ensureNotNull(this._priceRangeSnapshot).clone();
        newPriceRange.shift(priceDelta);
        this.setPriceRange(newPriceRange, true);
        this._marksCache = null;
    };
    PriceScale.prototype.endScroll = function () {
        if (this.isAutoScale()) {
            return;
        }
        if (this._scrollStartPoint === null) {
            return;
        }
        this._scrollStartPoint = null;
        this._priceRangeSnapshot = null;
    };
    PriceScale.prototype.formatter = function () {
        if (!this._formatter) {
            this.updateFormatter();
        }
        return this._formatter;
    };
    PriceScale.prototype.formatPrice = function (price, firstValue) {
        switch (this._options.mode) {
            case 2 /* PriceScaleMode.Percentage */:
                return this.formatter().format(toPercent(price, firstValue));
            case 3 /* PriceScaleMode.IndexedTo100 */:
                return this.formatter().format(toIndexedTo100(price, firstValue));
            default:
                return this._formatPrice(price);
        }
    };
    PriceScale.prototype.formatLogical = function (logical) {
        switch (this._options.mode) {
            case 2 /* PriceScaleMode.Percentage */:
            case 3 /* PriceScaleMode.IndexedTo100 */:
                return this.formatter().format(logical);
            default:
                return this._formatPrice(logical);
        }
    };
    PriceScale.prototype.formatPriceAbsolute = function (price) {
        return this._formatPrice(price, ensureNotNull(this._formatterSource()).formatter());
    };
    PriceScale.prototype.formatPricePercentage = function (price, baseValue) {
        price = toPercent(price, baseValue);
        return percentageFormatter.format(price);
    };
    PriceScale.prototype.sourcesForAutoScale = function () {
        return this._dataSources;
    };
    PriceScale.prototype.recalculatePriceRange = function (visibleBars) {
        this._invalidatedForRange = {
            visibleBars: visibleBars,
            isValid: false,
        };
    };
    PriceScale.prototype.updateAllViews = function () {
        this._dataSources.forEach(function (s) { return s.updateAllViews(); });
    };
    PriceScale.prototype.updateFormatter = function () {
        this._marksCache = null;
        var formatterSource = this._formatterSource();
        var base = 100;
        if (formatterSource !== null) {
            base = Math.round(1 / formatterSource.minMove());
        }
        this._formatter = defaultPriceFormatter;
        if (this.isPercentage()) {
            this._formatter = percentageFormatter;
            base = 100;
        }
        else if (this.isIndexedTo100()) {
            this._formatter = new PriceFormatter(100, 1);
            base = 100;
        }
        else {
            if (formatterSource !== null) {
                // user
                this._formatter = formatterSource.formatter();
            }
        }
        this._markBuilder = new PriceTickMarkBuilder(this, base, this._coordinateToLogical.bind(this), this._logicalToCoordinate.bind(this));
        this._markBuilder.rebuildTickMarks();
    };
    PriceScale.prototype.invalidateSourcesCache = function () {
        this._cachedOrderedSources = null;
    };
    /**
     * @returns The {@link IPriceDataSource} that will be used as the "formatter source" (take minMove for formatter).
     */
    PriceScale.prototype._formatterSource = function () {
        return this._dataSources[0] || null;
    };
    PriceScale.prototype._topMarginPx = function () {
        return this.isInverted()
            ? this._options.scaleMargins.bottom * this.height() + this._marginBelow
            : this._options.scaleMargins.top * this.height() + this._marginAbove;
    };
    PriceScale.prototype._bottomMarginPx = function () {
        return this.isInverted()
            ? this._options.scaleMargins.top * this.height() + this._marginAbove
            : this._options.scaleMargins.bottom * this.height() + this._marginBelow;
    };
    PriceScale.prototype._makeSureItIsValid = function () {
        if (!this._invalidatedForRange.isValid) {
            this._invalidatedForRange.isValid = true;
            this._recalculatePriceRangeImpl();
        }
    };
    PriceScale.prototype._invalidateInternalHeightCache = function () {
        this._internalHeightCache = null;
    };
    PriceScale.prototype._logicalToCoordinate = function (logical, baseValue) {
        this._makeSureItIsValid();
        if (this.isEmpty()) {
            return 0;
        }
        logical = this.isLog() && logical ? toLog(logical, this._logFormula) : logical;
        var range = ensureNotNull(this.priceRange());
        var invCoordinate = this._bottomMarginPx() +
            (this.internalHeight() - 1) * (logical - range.minValue()) / range.length();
        var coordinate = this.invertedCoordinate(invCoordinate);
        return coordinate;
    };
    PriceScale.prototype._coordinateToLogical = function (coordinate, baseValue) {
        this._makeSureItIsValid();
        if (this.isEmpty()) {
            return 0;
        }
        var invCoordinate = this.invertedCoordinate(coordinate);
        var range = ensureNotNull(this.priceRange());
        var logical = range.minValue() + range.length() *
            ((invCoordinate - this._bottomMarginPx()) / (this.internalHeight() - 1));
        return this.isLog() ? fromLog(logical, this._logFormula) : logical;
    };
    PriceScale.prototype._onIsInvertedChanged = function () {
        this._marksCache = null;
        this._markBuilder.rebuildTickMarks();
    };
    // eslint-disable-next-line complexity
    PriceScale.prototype._recalculatePriceRangeImpl = function () {
        var visibleBars = this._invalidatedForRange.visibleBars;
        if (visibleBars === null) {
            return;
        }
        var priceRange = null;
        var sources = this.sourcesForAutoScale();
        var marginAbove = 0;
        var marginBelow = 0;
        for (var _i = 0, sources_1 = sources; _i < sources_1.length; _i++) {
            var source = sources_1[_i];
            if (!source.visible()) {
                continue;
            }
            var firstValue = source.firstValue();
            if (firstValue === null) {
                continue;
            }
            var autoScaleInfo = source.autoscaleInfo(visibleBars.left(), visibleBars.right());
            var sourceRange = autoScaleInfo && autoScaleInfo.priceRange();
            if (sourceRange !== null) {
                switch (this._options.mode) {
                    case 1 /* PriceScaleMode.Logarithmic */:
                        sourceRange = convertPriceRangeToLog(sourceRange, this._logFormula);
                        break;
                    case 2 /* PriceScaleMode.Percentage */:
                        sourceRange = toPercentRange(sourceRange, firstValue.value);
                        break;
                    case 3 /* PriceScaleMode.IndexedTo100 */:
                        sourceRange = toIndexedTo100Range(sourceRange, firstValue.value);
                        break;
                }
                if (priceRange === null) {
                    priceRange = sourceRange;
                }
                else {
                    priceRange = priceRange.merge(ensureNotNull(sourceRange));
                }
                if (autoScaleInfo !== null) {
                    var margins = autoScaleInfo.margins();
                    if (margins !== null) {
                        marginAbove = Math.max(marginAbove, margins.above);
                        marginBelow = Math.max(marginAbove, margins.below);
                    }
                }
            }
        }
        if (marginAbove !== this._marginAbove || marginBelow !== this._marginBelow) {
            this._marginAbove = marginAbove;
            this._marginBelow = marginBelow;
            this._marksCache = null;
            this._invalidateInternalHeightCache();
        }
        if (priceRange !== null) {
            // keep current range is new is empty
            if (priceRange.minValue() === priceRange.maxValue()) {
                var formatterSource = this._formatterSource();
                var minMove = formatterSource === null || this.isPercentage() || this.isIndexedTo100() ? 1 : formatterSource.minMove();
                // if price range is degenerated to 1 point let's extend it by 10 min move values
                // to avoid incorrect range and empty (blank) scale (in case of min tick much greater than 1)
                var extendValue = 5 * minMove;
                if (this.isLog()) {
                    priceRange = convertPriceRangeFromLog(priceRange, this._logFormula);
                }
                priceRange = new PriceRangeImpl(priceRange.minValue() - extendValue, priceRange.maxValue() + extendValue);
                if (this.isLog()) {
                    priceRange = convertPriceRangeToLog(priceRange, this._logFormula);
                }
            }
            if (this.isLog()) {
                var rawRange = convertPriceRangeFromLog(priceRange, this._logFormula);
                var newLogFormula = logFormulaForPriceRange(rawRange);
                if (!logFormulasAreSame(newLogFormula, this._logFormula)) {
                    var rawSnapshot = this._priceRangeSnapshot !== null ? convertPriceRangeFromLog(this._priceRangeSnapshot, this._logFormula) : null;
                    this._logFormula = newLogFormula;
                    priceRange = convertPriceRangeToLog(rawRange, newLogFormula);
                    if (rawSnapshot !== null) {
                        this._priceRangeSnapshot = convertPriceRangeToLog(rawSnapshot, newLogFormula);
                    }
                }
            }
            this.setPriceRange(priceRange);
        }
        else {
            // reset empty to default
            if (this._priceRange === null) {
                this.setPriceRange(new PriceRangeImpl(-0.5, 0.5));
                this._logFormula = logFormulaForPriceRange(null);
            }
        }
        this._invalidatedForRange.isValid = true;
    };
    PriceScale.prototype._getCoordinateTransformer = function () {
        var _this = this;
        if (this.isPercentage()) {
            return toPercent;
        }
        else if (this.isIndexedTo100()) {
            return toIndexedTo100;
        }
        else if (this.isLog()) {
            return function (price) { return toLog(price, _this._logFormula); };
        }
        return null;
    };
    PriceScale.prototype._formatPrice = function (price, fallbackFormatter) {
        if (this._localizationOptions.priceFormatter === undefined) {
            if (fallbackFormatter === undefined) {
                fallbackFormatter = this.formatter();
            }
            return fallbackFormatter.format(price);
        }
        return this._localizationOptions.priceFormatter(price);
    };
    return PriceScale;
}());

var DEFAULT_STRETCH_FACTOR = 1000;
var Pane = /** @class */ (function () {
    function Pane(timeScale, model) {
        this._dataSources = [];
        this._overlaySourcesByScaleId = new Map();
        this._height = 0;
        this._width = 0;
        this._stretchFactor = DEFAULT_STRETCH_FACTOR;
        this._cachedOrderedSources = null;
        this._destroyed = new Delegate();
        this._timeScale = timeScale;
        this._model = model;
        this._grid = new Grid(this);
        var options = model.options();
        this._leftPriceScale = this._createPriceScale("left" /* DefaultPriceScaleId.Left */, options.leftPriceScale);
        this._rightPriceScale = this._createPriceScale("right" /* DefaultPriceScaleId.Right */, options.rightPriceScale);
        this._leftPriceScale.modeChanged().subscribe(this._onPriceScaleModeChanged.bind(this, this._leftPriceScale), this);
        this._rightPriceScale.modeChanged().subscribe(this._onPriceScaleModeChanged.bind(this, this._leftPriceScale), this);
        this.applyScaleOptions(options);
    }
    Pane.prototype.applyScaleOptions = function (options) {
        if (options.leftPriceScale) {
            this._leftPriceScale.applyOptions(options.leftPriceScale);
        }
        if (options.rightPriceScale) {
            this._rightPriceScale.applyOptions(options.rightPriceScale);
        }
        if (options.localization) {
            this._leftPriceScale.updateFormatter();
            this._rightPriceScale.updateFormatter();
        }
        if (options.overlayPriceScales) {
            var sourceArrays = Array.from(this._overlaySourcesByScaleId.values());
            for (var _i = 0, sourceArrays_1 = sourceArrays; _i < sourceArrays_1.length; _i++) {
                var arr = sourceArrays_1[_i];
                var priceScale = ensureNotNull(arr[0].priceScale());
                priceScale.applyOptions(options.overlayPriceScales);
                if (options.localization) {
                    priceScale.updateFormatter();
                }
            }
        }
    };
    Pane.prototype.priceScaleById = function (id) {
        switch (id) {
            case "left" /* DefaultPriceScaleId.Left */: {
                return this._leftPriceScale;
            }
            case "right" /* DefaultPriceScaleId.Right */: {
                return this._rightPriceScale;
            }
        }
        if (this._overlaySourcesByScaleId.has(id)) {
            return ensureDefined(this._overlaySourcesByScaleId.get(id))[0].priceScale();
        }
        return null;
    };
    Pane.prototype.destroy = function () {
        this.model().priceScalesOptionsChanged().unsubscribeAll(this);
        this._leftPriceScale.modeChanged().unsubscribeAll(this);
        this._rightPriceScale.modeChanged().unsubscribeAll(this);
        this._dataSources.forEach(function (source) {
            if (source.destroy) {
                source.destroy();
            }
        });
        this._destroyed.fire();
    };
    Pane.prototype.stretchFactor = function () {
        return this._stretchFactor;
    };
    Pane.prototype.setStretchFactor = function (factor) {
        this._stretchFactor = factor;
    };
    Pane.prototype.model = function () {
        return this._model;
    };
    Pane.prototype.width = function () {
        return this._width;
    };
    Pane.prototype.height = function () {
        return this._height;
    };
    Pane.prototype.setWidth = function (width) {
        this._width = width;
        this.updateAllSources();
    };
    Pane.prototype.setHeight = function (height) {
        var _this = this;
        this._height = height;
        this._leftPriceScale.setHeight(height);
        this._rightPriceScale.setHeight(height);
        // process overlays
        this._dataSources.forEach(function (ds) {
            if (_this.isOverlay(ds)) {
                var priceScale = ds.priceScale();
                if (priceScale !== null) {
                    priceScale.setHeight(height);
                }
            }
        });
        this.updateAllSources();
    };
    Pane.prototype.dataSources = function () {
        return this._dataSources;
    };
    Pane.prototype.isOverlay = function (source) {
        var priceScale = source.priceScale();
        if (priceScale === null) {
            return true;
        }
        return this._leftPriceScale !== priceScale && this._rightPriceScale !== priceScale;
    };
    Pane.prototype.addDataSource = function (source, targetScaleId, zOrder) {
        var targetZOrder = (zOrder !== undefined) ? zOrder : this._getZOrderMinMax().maxZOrder + 1;
        this._insertDataSource(source, targetScaleId, targetZOrder);
    };
    Pane.prototype.removeDataSource = function (source) {
        var index = this._dataSources.indexOf(source);
        assert(index !== -1, 'removeDataSource: invalid data source');
        this._dataSources.splice(index, 1);
        var priceScaleId = ensureNotNull(source.priceScale()).id();
        if (this._overlaySourcesByScaleId.has(priceScaleId)) {
            var overlaySources = ensureDefined(this._overlaySourcesByScaleId.get(priceScaleId));
            var overlayIndex = overlaySources.indexOf(source);
            if (overlayIndex !== -1) {
                overlaySources.splice(overlayIndex, 1);
                if (overlaySources.length === 0) {
                    this._overlaySourcesByScaleId.delete(priceScaleId);
                }
            }
        }
        var priceScale = source.priceScale();
        // if source has owner, it returns owner's price scale
        // and it does not have source in their list
        if (priceScale && priceScale.dataSources().indexOf(source) >= 0) {
            priceScale.removeDataSource(source);
        }
        if (priceScale !== null) {
            priceScale.invalidateSourcesCache();
            this.recalculatePriceScale(priceScale);
        }
        this._cachedOrderedSources = null;
    };
    Pane.prototype.priceScalePosition = function (priceScale) {
        if (priceScale === this._leftPriceScale) {
            return 'left';
        }
        if (priceScale === this._rightPriceScale) {
            return 'right';
        }
        return 'overlay';
    };
    Pane.prototype.leftPriceScale = function () {
        return this._leftPriceScale;
    };
    Pane.prototype.rightPriceScale = function () {
        return this._rightPriceScale;
    };
    Pane.prototype.startScalePrice = function (priceScale, x) {
        priceScale.startScale(x);
    };
    Pane.prototype.scalePriceTo = function (priceScale, x) {
        priceScale.scaleTo(x);
        // TODO: be more smart and update only affected views
        this.updateAllSources();
    };
    Pane.prototype.endScalePrice = function (priceScale) {
        priceScale.endScale();
    };
    Pane.prototype.startScrollPrice = function (priceScale, x) {
        priceScale.startScroll(x);
    };
    Pane.prototype.scrollPriceTo = function (priceScale, x) {
        priceScale.scrollTo(x);
        this.updateAllSources();
    };
    Pane.prototype.endScrollPrice = function (priceScale) {
        priceScale.endScroll();
    };
    Pane.prototype.updateAllSources = function () {
        this._dataSources.forEach(function (source) {
            source.updateAllViews();
        });
    };
    Pane.prototype.defaultPriceScale = function () {
        var priceScale = null;
        if (this._model.options().rightPriceScale.visible && this._rightPriceScale.dataSources().length !== 0) {
            priceScale = this._rightPriceScale;
        }
        else if (this._model.options().leftPriceScale.visible && this._leftPriceScale.dataSources().length !== 0) {
            priceScale = this._leftPriceScale;
        }
        else if (this._dataSources.length !== 0) {
            priceScale = this._dataSources[0].priceScale();
        }
        if (priceScale === null) {
            priceScale = this._rightPriceScale;
        }
        return priceScale;
    };
    Pane.prototype.defaultVisiblePriceScale = function () {
        var priceScale = null;
        if (this._model.options().rightPriceScale.visible) {
            priceScale = this._rightPriceScale;
        }
        else if (this._model.options().leftPriceScale.visible) {
            priceScale = this._leftPriceScale;
        }
        return priceScale;
    };
    Pane.prototype.recalculatePriceScale = function (priceScale) {
        if (priceScale === null || !priceScale.isAutoScale()) {
            return;
        }
        this._recalculatePriceScaleImpl(priceScale);
    };
    Pane.prototype.resetPriceScale = function (priceScale) {
        var visibleBars = this._timeScale.visibleStrictRange();
        priceScale.setMode({ autoScale: true });
        if (visibleBars !== null) {
            priceScale.recalculatePriceRange(visibleBars);
        }
        this.updateAllSources();
    };
    Pane.prototype.momentaryAutoScale = function () {
        this._recalculatePriceScaleImpl(this._leftPriceScale);
        this._recalculatePriceScaleImpl(this._rightPriceScale);
    };
    Pane.prototype.recalculate = function () {
        var _this = this;
        this.recalculatePriceScale(this._leftPriceScale);
        this.recalculatePriceScale(this._rightPriceScale);
        this._dataSources.forEach(function (ds) {
            if (_this.isOverlay(ds)) {
                _this.recalculatePriceScale(ds.priceScale());
            }
        });
        this.updateAllSources();
        this._model.lightUpdate();
    };
    Pane.prototype.orderedSources = function () {
        if (this._cachedOrderedSources === null) {
            this._cachedOrderedSources = sortSources(this._dataSources);
        }
        return this._cachedOrderedSources;
    };
    Pane.prototype.onDestroyed = function () {
        return this._destroyed;
    };
    Pane.prototype.grid = function () {
        return this._grid;
    };
    Pane.prototype._recalculatePriceScaleImpl = function (priceScale) {
        // TODO: can use this checks
        var sourceForAutoScale = priceScale.sourcesForAutoScale();
        if (sourceForAutoScale && sourceForAutoScale.length > 0 && !this._timeScale.isEmpty()) {
            var visibleBars = this._timeScale.visibleStrictRange();
            if (visibleBars !== null) {
                priceScale.recalculatePriceRange(visibleBars);
            }
        }
        priceScale.updateAllViews();
    };
    Pane.prototype._getZOrderMinMax = function () {
        var sources = this.orderedSources();
        if (sources.length === 0) {
            return { minZOrder: 0, maxZOrder: 0 };
        }
        var minZOrder = 0;
        var maxZOrder = 0;
        for (var j = 0; j < sources.length; j++) {
            var ds = sources[j];
            var zOrder = ds.zorder();
            if (zOrder !== null) {
                if (zOrder < minZOrder) {
                    minZOrder = zOrder;
                }
                if (zOrder > maxZOrder) {
                    maxZOrder = zOrder;
                }
            }
        }
        return { minZOrder: minZOrder, maxZOrder: maxZOrder };
    };
    Pane.prototype._insertDataSource = function (source, priceScaleId, zOrder) {
        var priceScale = this.priceScaleById(priceScaleId);
        if (priceScale === null) {
            priceScale = this._createPriceScale(priceScaleId, this._model.options().overlayPriceScales);
        }
        this._dataSources.push(source);
        if (!isDefaultPriceScale(priceScaleId)) {
            var overlaySources = this._overlaySourcesByScaleId.get(priceScaleId) || [];
            overlaySources.push(source);
            this._overlaySourcesByScaleId.set(priceScaleId, overlaySources);
        }
        priceScale.addDataSource(source);
        source.setPriceScale(priceScale);
        source.setZorder(zOrder);
        this.recalculatePriceScale(priceScale);
        this._cachedOrderedSources = null;
    };
    Pane.prototype._onPriceScaleModeChanged = function (priceScale, oldMode, newMode) {
        if (oldMode.mode === newMode.mode) {
            return;
        }
        // momentary auto scale if we toggle percentage/indexedTo100 mode
        this._recalculatePriceScaleImpl(priceScale);
    };
    Pane.prototype._createPriceScale = function (id, options) {
        var actualOptions = __assign({ visible: true, autoScale: true }, clone(options));
        var priceScale = new PriceScale(id, actualOptions, this._model.options().layout, this._model.options().localization);
        priceScale.setHeight(this.height());
        return priceScale;
    };
    return Pane;
}());

var getMonth = function (date) { return date.getUTCMonth() + 1; };
var getDay = function (date) { return date.getUTCDate(); };
var getYear = function (date) { return date.getUTCFullYear(); };
var dd = function (date) { return numberToStringWithLeadingZero(getDay(date), 2); };
var MMMM = function (date, locale) { return new Date(date.getUTCFullYear(), date.getUTCMonth(), 1)
    .toLocaleString(locale, { month: 'long' }); };
var MMM = function (date, locale) { return new Date(date.getUTCFullYear(), date.getUTCMonth(), 1)
    .toLocaleString(locale, { month: 'short' }); };
var MM = function (date) { return numberToStringWithLeadingZero(getMonth(date), 2); };
var yy = function (date) { return numberToStringWithLeadingZero(getYear(date) % 100, 2); };
var yyyy = function (date) { return numberToStringWithLeadingZero(getYear(date), 4); };
function formatDate(date, format, locale) {
    return format
        .replace(/yyyy/g, yyyy(date))
        .replace(/yy/g, yy(date))
        .replace(/MMMM/g, MMMM(date, locale))
        .replace(/MMM/g, MMM(date, locale))
        .replace(/MM/g, MM(date))
        .replace(/dd/g, dd(date));
}

var DateFormatter = /** @class */ (function () {
    function DateFormatter(dateFormat, locale) {
        if (dateFormat === void 0) { dateFormat = 'yyyy-MM-dd'; }
        if (locale === void 0) { locale = 'default'; }
        this._dateFormat = dateFormat;
        this._locale = locale;
    }
    DateFormatter.prototype.format = function (date) {
        return formatDate(date, this._dateFormat, this._locale);
    };
    return DateFormatter;
}());

var TimeFormatter = /** @class */ (function () {
    function TimeFormatter(format) {
        this._formatStr = format || '%h:%m:%s';
    }
    TimeFormatter.prototype.format = function (date) {
        return this._formatStr.replace('%h', numberToStringWithLeadingZero(date.getUTCHours(), 2)).
            replace('%m', numberToStringWithLeadingZero(date.getUTCMinutes(), 2)).
            replace('%s', numberToStringWithLeadingZero(date.getUTCSeconds(), 2));
    };
    return TimeFormatter;
}());

var defaultParams = {
    dateFormat: 'yyyy-MM-dd',
    timeFormat: '%h:%m:%s',
    dateTimeSeparator: ' ',
    locale: 'default',
};
var DateTimeFormatter = /** @class */ (function () {
    function DateTimeFormatter(params) {
        if (params === void 0) { params = {}; }
        var formatterParams = __assign(__assign({}, defaultParams), params);
        this._dateFormatter = new DateFormatter(formatterParams.dateFormat, formatterParams.locale);
        this._timeFormatter = new TimeFormatter(formatterParams.timeFormat);
        this._separator = formatterParams.dateTimeSeparator;
    }
    DateTimeFormatter.prototype.format = function (dateTime) {
        return "".concat(this._dateFormatter.format(dateTime)).concat(this._separator).concat(this._timeFormatter.format(dateTime));
    };
    return DateTimeFormatter;
}());

function defaultTickMarkFormatter(timePoint, tickMarkType, locale) {
    var formatOptions = {};
    switch (tickMarkType) {
        case 0 /* TickMarkType.Year */:
            formatOptions.year = 'numeric';
            break;
        case 1 /* TickMarkType.Month */:
            formatOptions.month = 'short';
            break;
        case 2 /* TickMarkType.DayOfMonth */:
            formatOptions.day = 'numeric';
            break;
        case 3 /* TickMarkType.Time */:
            formatOptions.hour12 = false;
            formatOptions.hour = '2-digit';
            formatOptions.minute = '2-digit';
            break;
        case 4 /* TickMarkType.TimeWithSeconds */:
            formatOptions.hour12 = false;
            formatOptions.hour = '2-digit';
            formatOptions.minute = '2-digit';
            formatOptions.second = '2-digit';
            break;
    }
    var date = timePoint.businessDay === undefined
        ? new Date(timePoint.timestamp * 1000)
        : new Date(Date.UTC(timePoint.businessDay.year, timePoint.businessDay.month - 1, timePoint.businessDay.day));
    // from given date we should use only as UTC date or timestamp
    // but to format as locale date we can convert UTC date to local date
    var localDateFromUtc = new Date(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate(), date.getUTCHours(), date.getUTCMinutes(), date.getUTCSeconds(), date.getUTCMilliseconds());
    return localDateFromUtc.toLocaleString(locale, formatOptions);
}

var FormattedLabelsCache = /** @class */ (function () {
    function FormattedLabelsCache(format, size) {
        if (size === void 0) { size = 50; }
        this._actualSize = 0;
        this._usageTick = 1;
        this._oldestTick = 1;
        this._cache = new Map();
        this._tick2Labels = new Map();
        this._format = format;
        this._maxSize = size;
    }
    FormattedLabelsCache.prototype.format = function (value) {
        var cacheKey = value.businessDay === undefined
            ? new Date(value.timestamp * 1000).getTime()
            : new Date(Date.UTC(value.businessDay.year, value.businessDay.month - 1, value.businessDay.day)).getTime();
        var tick = this._cache.get(cacheKey);
        if (tick !== undefined) {
            return tick.string;
        }
        if (this._actualSize === this._maxSize) {
            var oldestValue = this._tick2Labels.get(this._oldestTick);
            this._tick2Labels.delete(this._oldestTick);
            this._cache.delete(ensureDefined(oldestValue));
            this._oldestTick++;
            this._actualSize--;
        }
        var str = this._format(value);
        this._cache.set(cacheKey, { string: str, tick: this._usageTick });
        this._tick2Labels.set(this._usageTick, cacheKey);
        this._actualSize++;
        this._usageTick++;
        return str;
    };
    return FormattedLabelsCache;
}());

var RangeImpl = /** @class */ (function () {
    function RangeImpl(left, right) {
        assert(left <= right, 'right should be >= left');
        this._left = left;
        this._right = right;
    }
    RangeImpl.prototype.left = function () {
        return this._left;
    };
    RangeImpl.prototype.right = function () {
        return this._right;
    };
    RangeImpl.prototype.count = function () {
        return this._right - this._left + 1;
    };
    RangeImpl.prototype.contains = function (index) {
        return this._left <= index && index <= this._right;
    };
    RangeImpl.prototype.equals = function (other) {
        return this._left === other.left() && this._right === other.right();
    };
    return RangeImpl;
}());
function areRangesEqual(first, second) {
    if (first === null || second === null) {
        return first === second;
    }
    return first.equals(second);
}

var TickMarks = /** @class */ (function () {
    function TickMarks() {
        this._marksByWeight = new Map();
        this._cache = null;
    }
    TickMarks.prototype.setTimeScalePoints = function (newPoints, firstChangedPointIndex) {
        this._removeMarksSinceIndex(firstChangedPointIndex);
        this._cache = null;
        for (var index = firstChangedPointIndex; index < newPoints.length; ++index) {
            var point = newPoints[index];
            var marksForWeight = this._marksByWeight.get(point.timeWeight);
            if (marksForWeight === undefined) {
                marksForWeight = [];
                this._marksByWeight.set(point.timeWeight, marksForWeight);
            }
            marksForWeight.push({
                index: index,
                time: point.time,
                weight: point.timeWeight,
            });
        }
    };
    TickMarks.prototype.build = function (spacing, maxWidth) {
        var maxIndexesPerMark = Math.ceil(maxWidth / spacing);
        if (this._cache === null || this._cache.maxIndexesPerMark !== maxIndexesPerMark) {
            this._cache = {
                marks: this._buildMarksImpl(maxIndexesPerMark),
                maxIndexesPerMark: maxIndexesPerMark,
            };
        }
        return this._cache.marks;
    };
    TickMarks.prototype._removeMarksSinceIndex = function (sinceIndex) {
        if (sinceIndex === 0) {
            this._marksByWeight.clear();
            return;
        }
        var weightsToClear = [];
        this._marksByWeight.forEach(function (marks, timeWeight) {
            if (sinceIndex <= marks[0].index) {
                weightsToClear.push(timeWeight);
            }
            else {
                marks.splice(lowerbound(marks, sinceIndex, function (tm) { return tm.index < sinceIndex; }), Infinity);
            }
        });
        for (var _i = 0, weightsToClear_1 = weightsToClear; _i < weightsToClear_1.length; _i++) {
            var weight = weightsToClear_1[_i];
            this._marksByWeight.delete(weight);
        }
    };
    TickMarks.prototype._buildMarksImpl = function (maxIndexesPerMark) {
        var marks = [];
        for (var _i = 0, _a = Array.from(this._marksByWeight.keys()).sort(function (a, b) { return b - a; }); _i < _a.length; _i++) {
            var weight = _a[_i];
            if (!this._marksByWeight.get(weight)) {
                continue;
            }
            // Built tickMarks are now prevMarks, and marks it as new array
            var prevMarks = marks;
            marks = [];
            var prevMarksLength = prevMarks.length;
            var prevMarksPointer = 0;
            var currentWeight = ensureDefined(this._marksByWeight.get(weight));
            var currentWeightLength = currentWeight.length;
            var rightIndex = Infinity;
            var leftIndex = -Infinity;
            for (var i = 0; i < currentWeightLength; i++) {
                var mark = currentWeight[i];
                var currentIndex = mark.index;
                // Determine indexes with which current index will be compared
                // All marks to the right is moved to new array
                while (prevMarksPointer < prevMarksLength) {
                    var lastMark = prevMarks[prevMarksPointer];
                    var lastIndex = lastMark.index;
                    if (lastIndex < currentIndex) {
                        prevMarksPointer++;
                        marks.push(lastMark);
                        leftIndex = lastIndex;
                        rightIndex = Infinity;
                    }
                    else {
                        rightIndex = lastIndex;
                        break;
                    }
                }
                if (rightIndex - currentIndex >= maxIndexesPerMark && currentIndex - leftIndex >= maxIndexesPerMark) {
                    // TickMark fits. Place it into new array
                    marks.push(mark);
                    leftIndex = currentIndex;
                }
            }
            // Place all unused tickMarks into new array;
            for (; prevMarksPointer < prevMarksLength; prevMarksPointer++) {
                marks.push(prevMarks[prevMarksPointer]);
            }
        }
        return marks;
    };
    return TickMarks;
}());

var TimeScaleVisibleRange = /** @class */ (function () {
    function TimeScaleVisibleRange(logicalRange) {
        this._logicalRange = logicalRange;
    }
    TimeScaleVisibleRange.prototype.strictRange = function () {
        if (this._logicalRange === null) {
            return null;
        }
        return new RangeImpl(Math.floor(this._logicalRange.left()), Math.ceil(this._logicalRange.right()));
    };
    TimeScaleVisibleRange.prototype.logicalRange = function () {
        return this._logicalRange;
    };
    TimeScaleVisibleRange.invalid = function () {
        return new TimeScaleVisibleRange(null);
    };
    return TimeScaleVisibleRange;
}());

var Constants$6;
(function (Constants) {
    Constants[Constants["DefaultAnimationDuration"] = 400] = "DefaultAnimationDuration";
    // make sure that this (1 / MinVisibleBarsCount) >= coeff in max bar spacing
    Constants[Constants["MinVisibleBarsCount"] = 2] = "MinVisibleBarsCount";
})(Constants$6 || (Constants$6 = {}));
/**
 * Represents the type of a tick mark on the time axis.
 */
var TickMarkType;
(function (TickMarkType) {
    /**
     * The start of the year (e.g. it's the first tick mark in a year).
     */
    TickMarkType[TickMarkType["Year"] = 0] = "Year";
    /**
     * The start of the month (e.g. it's the first tick mark in a month).
     */
    TickMarkType[TickMarkType["Month"] = 1] = "Month";
    /**
     * A day of the month.
     */
    TickMarkType[TickMarkType["DayOfMonth"] = 2] = "DayOfMonth";
    /**
     * A time without seconds.
     */
    TickMarkType[TickMarkType["Time"] = 3] = "Time";
    /**
     * A time with seconds.
     */
    TickMarkType[TickMarkType["TimeWithSeconds"] = 4] = "TimeWithSeconds";
})(TickMarkType || (TickMarkType = {}));
var TimeScale = /** @class */ (function () {
    function TimeScale(model, options, localizationOptions) {
        this._width = 0;
        this._baseIndexOrNull = null;
        this._points = [];
        this._scrollStartPoint = null;
        this._scaleStartPoint = null;
        this._tickMarks = new TickMarks();
        this._formattedByWeight = new Map();
        this._visibleRange = TimeScaleVisibleRange.invalid();
        this._visibleRangeInvalidated = true;
        this._visibleBarsChanged = new Delegate();
        this._logicalRangeChanged = new Delegate();
        this._optionsApplied = new Delegate();
        this._commonTransitionStartState = null;
        this._timeMarksCache = null;
        this._labels = [];
        this._options = options;
        this._localizationOptions = localizationOptions;
        this._rightOffset = options.rightOffset;
        this._barSpacing = options.barSpacing;
        this._model = model;
        this._updateDateTimeFormatter();
    }
    TimeScale.prototype.options = function () {
        return this._options;
    };
    TimeScale.prototype.applyLocalizationOptions = function (localizationOptions) {
        merge(this._localizationOptions, localizationOptions);
        this._invalidateTickMarks();
        this._updateDateTimeFormatter();
    };
    TimeScale.prototype.applyOptions = function (options, localizationOptions) {
        var _a;
        merge(this._options, options);
        if (this._options.fixLeftEdge) {
            this._doFixLeftEdge();
        }
        if (this._options.fixRightEdge) {
            this._doFixRightEdge();
        }
        // note that bar spacing should be applied before right offset
        // because right offset depends on bar spacing
        if (options.barSpacing !== undefined) {
            this._model.setBarSpacing(options.barSpacing);
        }
        if (options.rightOffset !== undefined) {
            this._model.setRightOffset(options.rightOffset);
        }
        if (options.minBarSpacing !== undefined) {
            // yes, if we apply min bar spacing then we need to correct bar spacing
            // the easiest way is to apply it once again
            this._model.setBarSpacing((_a = options.barSpacing) !== null && _a !== void 0 ? _a : this._barSpacing);
        }
        this._invalidateTickMarks();
        this._updateDateTimeFormatter();
        this._optionsApplied.fire();
    };
    TimeScale.prototype.indexToTime = function (index) {
        var _a;
        return ((_a = this._points[index]) === null || _a === void 0 ? void 0 : _a.time) || null;
    };
    TimeScale.prototype.timeToIndex = function (time, findNearest) {
        if (this._points.length < 1) {
            // no time points available
            return null;
        }
        if (time.timestamp > this._points[this._points.length - 1].time.timestamp) {
            // special case
            return findNearest ? this._points.length - 1 : null;
        }
        var index = lowerbound(this._points, time.timestamp, function (a, b) { return a.time.timestamp < b; });
        if (time.timestamp < this._points[index].time.timestamp) {
            return findNearest ? index : null;
        }
        return index;
    };
    TimeScale.prototype.isEmpty = function () {
        return this._width === 0 || this._points.length === 0 || this._baseIndexOrNull === null;
    };
    // strict range: integer indices of the bars in the visible range rounded in more wide direction
    TimeScale.prototype.visibleStrictRange = function () {
        this._updateVisibleRange();
        return this._visibleRange.strictRange();
    };
    TimeScale.prototype.visibleLogicalRange = function () {
        this._updateVisibleRange();
        return this._visibleRange.logicalRange();
    };
    TimeScale.prototype.visibleTimeRange = function () {
        var visibleBars = this.visibleStrictRange();
        if (visibleBars === null) {
            return null;
        }
        var range = {
            from: visibleBars.left(),
            to: visibleBars.right(),
        };
        return this.timeRangeForLogicalRange(range);
    };
    TimeScale.prototype.timeRangeForLogicalRange = function (range) {
        var from = Math.round(range.from);
        var to = Math.round(range.to);
        var firstIndex = ensureNotNull(this._firstIndex());
        var lastIndex = ensureNotNull(this._lastIndex());
        return {
            from: ensureNotNull(this.indexToTime(Math.max(firstIndex, from))),
            to: ensureNotNull(this.indexToTime(Math.min(lastIndex, to))),
        };
    };
    TimeScale.prototype.logicalRangeForTimeRange = function (range) {
        return {
            from: ensureNotNull(this.timeToIndex(range.from, true)),
            to: ensureNotNull(this.timeToIndex(range.to, true)),
        };
    };
    TimeScale.prototype.width = function () {
        return this._width;
    };
    TimeScale.prototype.setWidth = function (width) {
        if (!isFinite(width) || width <= 0) {
            return;
        }
        if (this._width === width) {
            return;
        }
        if (this._options.lockVisibleTimeRangeOnResize && this._width) {
            // recalculate bar spacing
            var newBarSpacing = this._barSpacing * width / this._width;
            this._barSpacing = newBarSpacing;
        }
        // if time scale is scrolled to the end of data and we have fixed right edge
        // keep left edge instead of right
        // we need it to avoid "shaking" if the last bar visibility affects time scale width
        if (this._options.fixLeftEdge) {
            var visibleRange = this.visibleStrictRange();
            if (visibleRange !== null) {
                var firstVisibleBar = visibleRange.left();
                // firstVisibleBar could be less than 0
                // since index is a center of bar
                if (firstVisibleBar <= 0) {
                    var delta = this._width - width;
                    // reduce  _rightOffset means move right
                    // we could move more than required - this will be fixed by _correctOffset()
                    this._rightOffset -= Math.round(delta / this._barSpacing) + 1;
                }
            }
        }
        this._width = width;
        this._visibleRangeInvalidated = true;
        // updating bar spacing should be first because right offset depends on it
        this._correctBarSpacing();
        this._correctOffset();
    };
    TimeScale.prototype.indexToCoordinate = function (index) {
        if (this.isEmpty() || !isInteger(index)) {
            return 0;
        }
        var baseIndex = this.baseIndex();
        var deltaFromRight = baseIndex + this._rightOffset - index;
        var coordinate = this._width - (deltaFromRight + 0.5) * this._barSpacing - 1;
        return coordinate;
    };
    TimeScale.prototype.indexesToCoordinates = function (points, visibleRange) {
        var baseIndex = this.baseIndex();
        var indexFrom = (visibleRange === undefined) ? 0 : visibleRange.from;
        var indexTo = (visibleRange === undefined) ? points.length : visibleRange.to;
        for (var i = indexFrom; i < indexTo; i++) {
            var index = points[i].time;
            var deltaFromRight = baseIndex + this._rightOffset - index;
            var coordinate = this._width - (deltaFromRight + 0.5) * this._barSpacing - 1;
            points[i].x = coordinate;
        }
    };
    TimeScale.prototype.coordinateToIndex = function (x) {
        return Math.ceil(this._coordinateToFloatIndex(x));
    };
    TimeScale.prototype.setRightOffset = function (offset) {
        this._visibleRangeInvalidated = true;
        this._rightOffset = offset;
        this._correctOffset();
        this._model.recalculateAllPanes();
        this._model.lightUpdate();
    };
    TimeScale.prototype.barSpacing = function () {
        return this._barSpacing;
    };
    TimeScale.prototype.setBarSpacing = function (newBarSpacing) {
        this._setBarSpacing(newBarSpacing);
        // do not allow scroll out of visible bars
        this._correctOffset();
        this._model.recalculateAllPanes();
        this._model.lightUpdate();
    };
    TimeScale.prototype.rightOffset = function () {
        return this._rightOffset;
    };
    // eslint-disable-next-line complexity
    TimeScale.prototype.marks = function () {
        if (this.isEmpty()) {
            return null;
        }
        if (this._timeMarksCache !== null) {
            return this._timeMarksCache;
        }
        var spacing = this._barSpacing;
        var fontSize = this._model.options().layout.fontSize;
        var maxLabelWidth = (fontSize + 4) * 5;
        var indexPerLabel = Math.round(maxLabelWidth / spacing);
        var visibleBars = ensureNotNull(this.visibleStrictRange());
        var firstBar = Math.max(visibleBars.left(), visibleBars.left() - indexPerLabel);
        var lastBar = Math.max(visibleBars.right(), visibleBars.right() - indexPerLabel);
        var items = this._tickMarks.build(spacing, maxLabelWidth);
        // according to indexPerLabel value this value means "earliest index which _might be_ used as the second label on time scale"
        var earliestIndexOfSecondLabel = this._firstIndex() + indexPerLabel;
        // according to indexPerLabel value this value means "earliest index which _might be_ used as the second last label on time scale"
        var indexOfSecondLastLabel = this._lastIndex() - indexPerLabel;
        var isAllScalingAndScrollingDisabled = this._isAllScalingAndScrollingDisabled();
        var isLeftEdgeFixed = this._options.fixLeftEdge || isAllScalingAndScrollingDisabled;
        var isRightEdgeFixed = this._options.fixRightEdge || isAllScalingAndScrollingDisabled;
        var targetIndex = 0;
        for (var _i = 0, items_1 = items; _i < items_1.length; _i++) {
            var tm = items_1[_i];
            if (!(firstBar <= tm.index && tm.index <= lastBar)) {
                continue;
            }
            var label = void 0;
            if (targetIndex < this._labels.length) {
                label = this._labels[targetIndex];
                label.coord = this.indexToCoordinate(tm.index);
                label.label = this._formatLabel(tm.time, tm.weight);
                label.weight = tm.weight;
            }
            else {
                label = {
                    needAlignCoordinate: false,
                    coord: this.indexToCoordinate(tm.index),
                    label: this._formatLabel(tm.time, tm.weight),
                    weight: tm.weight,
                };
                this._labels.push(label);
            }
            if (this._barSpacing > (maxLabelWidth / 2) && !isAllScalingAndScrollingDisabled) {
                // if there is enough space then let's show all tick marks as usual
                label.needAlignCoordinate = false;
            }
            else {
                // if a user is able to scroll after a tick mark then show it as usual, otherwise the coordinate might be aligned
                // if the index is for the second (last) label or later (earlier) then most likely this label might be displayed without correcting the coordinate
                label.needAlignCoordinate = (isLeftEdgeFixed && tm.index <= earliestIndexOfSecondLabel) || (isRightEdgeFixed && tm.index >= indexOfSecondLastLabel);
            }
            targetIndex++;
        }
        this._labels.length = targetIndex;
        this._timeMarksCache = this._labels;
        return this._labels;
    };
    TimeScale.prototype.restoreDefault = function () {
        this._visibleRangeInvalidated = true;
        this.setBarSpacing(this._options.barSpacing);
        this.setRightOffset(this._options.rightOffset);
    };
    TimeScale.prototype.setBaseIndex = function (baseIndex) {
        this._visibleRangeInvalidated = true;
        this._baseIndexOrNull = baseIndex;
        this._correctOffset();
        this._doFixLeftEdge();
    };
    /**
     * Zoom in/out the scale around a `zoomPoint` on `scale` value.
     *
     * @param zoomPoint - X coordinate of the point to apply the zoom.
     * If `rightBarStaysOnScroll` option is disabled, then will be used to restore right offset.
     * @param scale - Zoom value (in 1/10 parts of current bar spacing).
     * Negative value means zoom out, positive - zoom in.
     */
    TimeScale.prototype.zoom = function (zoomPoint, scale) {
        var floatIndexAtZoomPoint = this._coordinateToFloatIndex(zoomPoint);
        var barSpacing = this.barSpacing();
        var newBarSpacing = barSpacing + scale * (barSpacing / 10);
        // zoom in/out bar spacing
        this.setBarSpacing(newBarSpacing);
        if (!this._options.rightBarStaysOnScroll) {
            // and then correct right offset to move index under zoomPoint back to its coordinate
            this.setRightOffset(this.rightOffset() + (floatIndexAtZoomPoint - this._coordinateToFloatIndex(zoomPoint)));
        }
    };
    TimeScale.prototype.startScale = function (x) {
        if (this._scrollStartPoint) {
            this.endScroll();
        }
        if (this._scaleStartPoint !== null || this._commonTransitionStartState !== null) {
            return;
        }
        if (this.isEmpty()) {
            return;
        }
        this._scaleStartPoint = x;
        this._saveCommonTransitionsStartState();
    };
    TimeScale.prototype.scaleTo = function (x) {
        if (this._commonTransitionStartState === null) {
            return;
        }
        var startLengthFromRight = clamp(this._width - x, 0, this._width);
        var currentLengthFromRight = clamp(this._width - ensureNotNull(this._scaleStartPoint), 0, this._width);
        if (startLengthFromRight === 0 || currentLengthFromRight === 0) {
            return;
        }
        this.setBarSpacing(this._commonTransitionStartState.barSpacing * startLengthFromRight / currentLengthFromRight);
    };
    TimeScale.prototype.endScale = function () {
        if (this._scaleStartPoint === null) {
            return;
        }
        this._scaleStartPoint = null;
        this._clearCommonTransitionsStartState();
    };
    TimeScale.prototype.startScroll = function (x) {
        if (this._scrollStartPoint !== null || this._commonTransitionStartState !== null) {
            return;
        }
        if (this.isEmpty()) {
            return;
        }
        this._scrollStartPoint = x;
        this._saveCommonTransitionsStartState();
    };
    TimeScale.prototype.scrollTo = function (x) {
        if (this._scrollStartPoint === null) {
            return;
        }
        var shiftInLogical = (this._scrollStartPoint - x) / this.barSpacing();
        this._rightOffset = ensureNotNull(this._commonTransitionStartState).rightOffset + shiftInLogical;
        this._visibleRangeInvalidated = true;
        // do not allow scroll out of visible bars
        this._correctOffset();
    };
    TimeScale.prototype.endScroll = function () {
        if (this._scrollStartPoint === null) {
            return;
        }
        this._scrollStartPoint = null;
        this._clearCommonTransitionsStartState();
    };
    TimeScale.prototype.scrollToRealTime = function () {
        this.scrollToOffsetAnimated(this._options.rightOffset);
    };
    TimeScale.prototype.scrollToOffsetAnimated = function (offset, animationDuration) {
        var _this = this;
        if (animationDuration === void 0) { animationDuration = 400 /* Constants.DefaultAnimationDuration */; }
        if (!isFinite(offset)) {
            throw new RangeError('offset is required and must be finite number');
        }
        if (!isFinite(animationDuration) || animationDuration <= 0) {
            throw new RangeError('animationDuration (optional) must be finite positive number');
        }
        var source = this._rightOffset;
        var animationStart = performance.now();
        var animationFn = function () {
            var animationProgress = (performance.now() - animationStart) / animationDuration;
            var finishAnimation = animationProgress >= 1;
            var rightOffset = finishAnimation ? offset : source + (offset - source) * animationProgress;
            _this.setRightOffset(rightOffset);
            if (!finishAnimation) {
                setTimeout(animationFn, 20);
            }
        };
        animationFn();
    };
    TimeScale.prototype.update = function (newPoints, firstChangedPointIndex) {
        this._visibleRangeInvalidated = true;
        this._points = newPoints;
        this._tickMarks.setTimeScalePoints(newPoints, firstChangedPointIndex);
        this._correctOffset();
    };
    TimeScale.prototype.visibleBarsChanged = function () {
        return this._visibleBarsChanged;
    };
    TimeScale.prototype.logicalRangeChanged = function () {
        return this._logicalRangeChanged;
    };
    TimeScale.prototype.optionsApplied = function () {
        return this._optionsApplied;
    };
    TimeScale.prototype.baseIndex = function () {
        // null is used to known that baseIndex is not set yet
        // so in methods which should known whether it is set or not
        // we should check field `_baseIndexOrNull` instead of getter `baseIndex()`
        // see minRightOffset for example
        return this._baseIndexOrNull || 0;
    };
    TimeScale.prototype.setVisibleRange = function (range) {
        var length = range.count();
        this._setBarSpacing(this._width / length);
        this._rightOffset = range.right() - this.baseIndex();
        this._correctOffset();
        this._visibleRangeInvalidated = true;
        this._model.recalculateAllPanes();
        this._model.lightUpdate();
    };
    TimeScale.prototype.fitContent = function () {
        var first = this._firstIndex();
        var last = this._lastIndex();
        if (first === null || last === null) {
            return;
        }
        this.setVisibleRange(new RangeImpl(first, last + this._options.rightOffset));
    };
    TimeScale.prototype.setLogicalRange = function (range) {
        var barRange = new RangeImpl(range.from, range.to);
        this.setVisibleRange(barRange);
    };
    TimeScale.prototype.formatDateTime = function (time) {
        if (this._localizationOptions.timeFormatter !== undefined) {
            return this._localizationOptions.timeFormatter(time.businessDay || time.timestamp);
        }
        return this._dateTimeFormatter.format(new Date(time.timestamp * 1000));
    };
    TimeScale.prototype._isAllScalingAndScrollingDisabled = function () {
        var _a = this._model.options(), handleScroll = _a.handleScroll, handleScale = _a.handleScale;
        return !handleScroll.horzTouchDrag
            && !handleScroll.mouseWheel
            && !handleScroll.pressedMouseMove
            && !handleScroll.vertTouchDrag
            && !handleScale.axisDoubleClickReset
            && !handleScale.axisPressedMouseMove.time
            && !handleScale.mouseWheel
            && !handleScale.pinch;
    };
    TimeScale.prototype._firstIndex = function () {
        return this._points.length === 0 ? null : 0;
    };
    TimeScale.prototype._lastIndex = function () {
        return this._points.length === 0 ? null : (this._points.length - 1);
    };
    TimeScale.prototype._rightOffsetForCoordinate = function (x) {
        return (this._width - 1 - x) / this._barSpacing;
    };
    TimeScale.prototype._coordinateToFloatIndex = function (x) {
        var deltaFromRight = this._rightOffsetForCoordinate(x);
        var baseIndex = this.baseIndex();
        var index = baseIndex + this._rightOffset - deltaFromRight;
        // JavaScript uses very strange rounding
        // we need rounding to avoid problems with calculation errors
        return Math.round(index * 1000000) / 1000000;
    };
    TimeScale.prototype._setBarSpacing = function (newBarSpacing) {
        var oldBarSpacing = this._barSpacing;
        this._barSpacing = newBarSpacing;
        this._correctBarSpacing();
        // this._barSpacing might be changed in _correctBarSpacing
        if (oldBarSpacing !== this._barSpacing) {
            this._visibleRangeInvalidated = true;
            this._resetTimeMarksCache();
        }
    };
    TimeScale.prototype._updateVisibleRange = function () {
        if (!this._visibleRangeInvalidated) {
            return;
        }
        this._visibleRangeInvalidated = false;
        if (this.isEmpty()) {
            this._setVisibleRange(TimeScaleVisibleRange.invalid());
            return;
        }
        var baseIndex = this.baseIndex();
        var newBarsLength = this._width / this._barSpacing;
        var rightBorder = this._rightOffset + baseIndex;
        var leftBorder = rightBorder - newBarsLength + 1;
        var logicalRange = new RangeImpl(leftBorder, rightBorder);
        this._setVisibleRange(new TimeScaleVisibleRange(logicalRange));
    };
    TimeScale.prototype._correctBarSpacing = function () {
        var minBarSpacing = this._minBarSpacing();
        if (this._barSpacing < minBarSpacing) {
            this._barSpacing = minBarSpacing;
            this._visibleRangeInvalidated = true;
        }
        if (this._width !== 0) {
            // make sure that this (1 / Constants.MinVisibleBarsCount) >= coeff in max bar spacing (it's 0.5 here)
            var maxBarSpacing = this._width * 0.5;
            if (this._barSpacing > maxBarSpacing) {
                this._barSpacing = maxBarSpacing;
                this._visibleRangeInvalidated = true;
            }
        }
    };
    TimeScale.prototype._minBarSpacing = function () {
        // if both options are enabled then limit bar spacing so that zooming-out is not possible
        // if it would cause either the first or last points to move too far from an edge
        if (this._options.fixLeftEdge && this._options.fixRightEdge && this._points.length !== 0) {
            return this._width / this._points.length;
        }
        return this._options.minBarSpacing;
    };
    TimeScale.prototype._correctOffset = function () {
        // block scrolling of to future
        var maxRightOffset = this._maxRightOffset();
        if (this._rightOffset > maxRightOffset) {
            this._rightOffset = maxRightOffset;
            this._visibleRangeInvalidated = true;
        }
        // block scrolling of to past
        var minRightOffset = this._minRightOffset();
        if (minRightOffset !== null && this._rightOffset < minRightOffset) {
            this._rightOffset = minRightOffset;
            this._visibleRangeInvalidated = true;
        }
    };
    TimeScale.prototype._minRightOffset = function () {
        var firstIndex = this._firstIndex();
        var baseIndex = this._baseIndexOrNull;
        if (firstIndex === null || baseIndex === null) {
            return null;
        }
        var barsEstimation = this._options.fixLeftEdge
            ? this._width / this._barSpacing
            : Math.min(2 /* Constants.MinVisibleBarsCount */, this._points.length);
        return firstIndex - baseIndex - 1 + barsEstimation;
    };
    TimeScale.prototype._maxRightOffset = function () {
        return this._options.fixRightEdge
            ? 0
            : (this._width / this._barSpacing) - Math.min(2 /* Constants.MinVisibleBarsCount */, this._points.length);
    };
    TimeScale.prototype._saveCommonTransitionsStartState = function () {
        this._commonTransitionStartState = {
            barSpacing: this.barSpacing(),
            rightOffset: this.rightOffset(),
        };
    };
    TimeScale.prototype._clearCommonTransitionsStartState = function () {
        this._commonTransitionStartState = null;
    };
    TimeScale.prototype._formatLabel = function (time, weight) {
        var _this = this;
        var formatter = this._formattedByWeight.get(weight);
        if (formatter === undefined) {
            formatter = new FormattedLabelsCache(function (timePoint) {
                return _this._formatLabelImpl(timePoint, weight);
            });
            this._formattedByWeight.set(weight, formatter);
        }
        return formatter.format(time);
    };
    TimeScale.prototype._formatLabelImpl = function (timePoint, weight) {
        var _a;
        var tickMarkType = weightToTickMarkType(weight, this._options.timeVisible, this._options.secondsVisible);
        if (this._options.tickMarkFormatter !== undefined) {
            // this is temporary solution to make more consistency API
            // it looks like that all time types in API should have the same form
            // but for know defaultTickMarkFormatter is on model level and can't determine whether passed time is business day or UTCTimestamp
            // because type guards are declared on API level
            // in other hand, type guards couldn't be declared on model level so far
            // because they are know about string representation of business day ¯\_(ツ)_/¯
            // let's fix in for all cases for the whole API
            return this._options.tickMarkFormatter((_a = timePoint.businessDay) !== null && _a !== void 0 ? _a : timePoint.timestamp, tickMarkType, this._localizationOptions.locale);
        }
        return defaultTickMarkFormatter(timePoint, tickMarkType, this._localizationOptions.locale);
    };
    TimeScale.prototype._setVisibleRange = function (newVisibleRange) {
        var oldVisibleRange = this._visibleRange;
        this._visibleRange = newVisibleRange;
        if (!areRangesEqual(oldVisibleRange.strictRange(), this._visibleRange.strictRange())) {
            this._visibleBarsChanged.fire();
        }
        if (!areRangesEqual(oldVisibleRange.logicalRange(), this._visibleRange.logicalRange())) {
            this._logicalRangeChanged.fire();
        }
        // TODO: reset only coords in case when this._visibleBars has not been changed
        this._resetTimeMarksCache();
    };
    TimeScale.prototype._resetTimeMarksCache = function () {
        this._timeMarksCache = null;
    };
    TimeScale.prototype._invalidateTickMarks = function () {
        this._resetTimeMarksCache();
        this._formattedByWeight.clear();
    };
    TimeScale.prototype._updateDateTimeFormatter = function () {
        var dateFormat = this._localizationOptions.dateFormat;
        if (this._options.timeVisible) {
            this._dateTimeFormatter = new DateTimeFormatter({
                dateFormat: dateFormat,
                timeFormat: this._options.secondsVisible ? '%h:%m:%s' : '%h:%m',
                dateTimeSeparator: '   ',
                locale: this._localizationOptions.locale,
            });
        }
        else {
            this._dateTimeFormatter = new DateFormatter(dateFormat, this._localizationOptions.locale);
        }
    };
    TimeScale.prototype._doFixLeftEdge = function () {
        if (!this._options.fixLeftEdge) {
            return;
        }
        var firstIndex = this._firstIndex();
        if (firstIndex === null) {
            return;
        }
        var visibleRange = this.visibleStrictRange();
        if (visibleRange === null) {
            return;
        }
        var delta = visibleRange.left() - firstIndex;
        if (delta < 0) {
            var leftEdgeOffset = this._rightOffset - delta - 1;
            this.setRightOffset(leftEdgeOffset);
        }
        this._correctBarSpacing();
    };
    TimeScale.prototype._doFixRightEdge = function () {
        this._correctOffset();
        this._correctBarSpacing();
    };
    return TimeScale;
}());
// eslint-disable-next-line complexity
function weightToTickMarkType(weight, timeVisible, secondsVisible) {
    switch (weight) {
        case 0 /* TickMarkWeight.LessThanSecond */:
        case 10 /* TickMarkWeight.Second */:
            return timeVisible
                ? (secondsVisible ? 4 /* TickMarkType.TimeWithSeconds */ : 3 /* TickMarkType.Time */)
                : 2 /* TickMarkType.DayOfMonth */;
        case 20 /* TickMarkWeight.Minute1 */:
        case 21 /* TickMarkWeight.Minute5 */:
        case 22 /* TickMarkWeight.Minute30 */:
        case 30 /* TickMarkWeight.Hour1 */:
        case 31 /* TickMarkWeight.Hour3 */:
        case 32 /* TickMarkWeight.Hour6 */:
        case 33 /* TickMarkWeight.Hour12 */:
            return timeVisible ? 3 /* TickMarkType.Time */ : 2 /* TickMarkType.DayOfMonth */;
        case 50 /* TickMarkWeight.Day */:
            return 2 /* TickMarkType.DayOfMonth */;
        case 60 /* TickMarkWeight.Month */:
            return 1 /* TickMarkType.Month */;
        case 70 /* TickMarkWeight.Year */:
            return 0 /* TickMarkType.Year */;
    }
}

var WatermarkRenderer = /** @class */ (function (_super) {
    __extends(WatermarkRenderer, _super);
    function WatermarkRenderer(data) {
        var _this = _super.call(this) || this;
        _this._metricsCache = new Map();
        _this._data = data;
        return _this;
    }
    WatermarkRenderer.prototype._drawImpl = function (ctx) { };
    WatermarkRenderer.prototype._drawBackgroundImpl = function (ctx) {
        if (!this._data.visible) {
            return;
        }
        ctx.save();
        var textHeight = 0;
        for (var _i = 0, _a = this._data.lines; _i < _a.length; _i++) {
            var line = _a[_i];
            if (line.text.length === 0) {
                continue;
            }
            ctx.font = line.font;
            var textWidth = this._metrics(ctx, line.text);
            if (textWidth > this._data.width) {
                line.zoom = this._data.width / textWidth;
            }
            else {
                line.zoom = 1;
            }
            textHeight += line.lineHeight * line.zoom;
        }
        var vertOffset = 0;
        switch (this._data.vertAlign) {
            case 'top':
                vertOffset = 0;
                break;
            case 'center':
                vertOffset = Math.max((this._data.height - textHeight) / 2, 0);
                break;
            case 'bottom':
                vertOffset = Math.max((this._data.height - textHeight), 0);
                break;
        }
        ctx.fillStyle = this._data.color;
        for (var _b = 0, _c = this._data.lines; _b < _c.length; _b++) {
            var line = _c[_b];
            ctx.save();
            var horzOffset = 0;
            switch (this._data.horzAlign) {
                case 'left':
                    ctx.textAlign = 'left';
                    horzOffset = line.lineHeight / 2;
                    break;
                case 'center':
                    ctx.textAlign = 'center';
                    horzOffset = this._data.width / 2;
                    break;
                case 'right':
                    ctx.textAlign = 'right';
                    horzOffset = this._data.width - 1 - line.lineHeight / 2;
                    break;
            }
            ctx.translate(horzOffset, vertOffset);
            ctx.textBaseline = 'top';
            ctx.font = line.font;
            ctx.scale(line.zoom, line.zoom);
            ctx.fillText(line.text, 0, line.vertOffset);
            ctx.restore();
            vertOffset += line.lineHeight * line.zoom;
        }
        ctx.restore();
    };
    WatermarkRenderer.prototype._metrics = function (ctx, text) {
        var fontCache = this._fontCache(ctx.font);
        var result = fontCache.get(text);
        if (result === undefined) {
            result = ctx.measureText(text).width;
            fontCache.set(text, result);
        }
        return result;
    };
    WatermarkRenderer.prototype._fontCache = function (font) {
        var fontCache = this._metricsCache.get(font);
        if (fontCache === undefined) {
            fontCache = new Map();
            this._metricsCache.set(font, fontCache);
        }
        return fontCache;
    };
    return WatermarkRenderer;
}(ScaledRenderer));

var WatermarkPaneView = /** @class */ (function () {
    function WatermarkPaneView(source) {
        this._invalidated = true;
        this._rendererData = {
            visible: false,
            color: '',
            height: 0,
            width: 0,
            lines: [],
            vertAlign: 'center',
            horzAlign: 'center',
        };
        this._renderer = new WatermarkRenderer(this._rendererData);
        this._source = source;
    }
    WatermarkPaneView.prototype.update = function () {
        this._invalidated = true;
    };
    WatermarkPaneView.prototype.renderer = function (height, width) {
        if (this._invalidated) {
            this._updateImpl(height, width);
            this._invalidated = false;
        }
        return this._renderer;
    };
    WatermarkPaneView.prototype._updateImpl = function (height, width) {
        var options = this._source.options();
        var data = this._rendererData;
        data.visible = options.visible;
        if (!data.visible) {
            return;
        }
        data.color = options.color;
        data.width = width;
        data.height = height;
        data.horzAlign = options.horzAlign;
        data.vertAlign = options.vertAlign;
        data.lines = [
            {
                text: options.text,
                font: makeFont(options.fontSize, options.fontFamily, options.fontStyle),
                lineHeight: options.fontSize * 1.2,
                vertOffset: 0,
                zoom: 0,
            },
        ];
    };
    return WatermarkPaneView;
}());

var Watermark = /** @class */ (function (_super) {
    __extends(Watermark, _super);
    function Watermark(model, options) {
        var _this = _super.call(this) || this;
        _this._options = options;
        _this._paneView = new WatermarkPaneView(_this);
        return _this;
    }
    Watermark.prototype.priceAxisViews = function () {
        return [];
    };
    Watermark.prototype.paneViews = function () {
        return [this._paneView];
    };
    Watermark.prototype.options = function () {
        return this._options;
    };
    Watermark.prototype.updateAllViews = function () {
        this._paneView.update();
    };
    return Watermark;
}(DataSource));

/// <reference types="_build-time-constants" />
var BackgroundColorSide;
(function (BackgroundColorSide) {
    BackgroundColorSide[BackgroundColorSide["Top"] = 0] = "Top";
    BackgroundColorSide[BackgroundColorSide["Bottom"] = 1] = "Bottom";
})(BackgroundColorSide || (BackgroundColorSide = {}));
/**
 * Determine how to exit the tracking mode.
 *
 * By default, mobile users will long press to deactivate the scroll and have the ability to check values and dates.
 * Another press is required to activate the scroll, be able to move left/right, zoom, etc.
 */
var TrackingModeExitMode;
(function (TrackingModeExitMode) {
    /**
     * Tracking Mode will be deactivated on touch end event.
     */
    TrackingModeExitMode[TrackingModeExitMode["OnTouchEnd"] = 0] = "OnTouchEnd";
    /**
     * Tracking Mode will be deactivated on the next tap event.
     */
    TrackingModeExitMode[TrackingModeExitMode["OnNextTap"] = 1] = "OnNextTap";
})(TrackingModeExitMode || (TrackingModeExitMode = {}));
var ChartModel = /** @class */ (function () {
    function ChartModel(invalidateHandler, options) {
        this._panes = [];
        this._serieses = [];
        this._width = 0;
        this._initialTimeScrollPos = null;
        this._hoveredSource = null;
        this._priceScalesOptionsChanged = new Delegate();
        this._crosshairMoved = new Delegate();
        this._customPriceLineDragged = new Delegate();
        this._gradientColorsCache = null;
        this._invalidateHandler = invalidateHandler;
        this._options = options;
        this._rendererOptionsProvider = new PriceAxisRendererOptionsProvider(this);
        this._timeScale = new TimeScale(this, options.timeScale, this._options.localization);
        this._crosshair = new Crosshair(this, options.crosshair);
        this._magnet = new Magnet(options.crosshair);
        this._watermark = new Watermark(this, options.watermark);
        this.createPane();
        this._panes[0].setStretchFactor(DEFAULT_STRETCH_FACTOR * 2);
        this._backgroundTopColor = this._getBackgroundColor(0 /* BackgroundColorSide.Top */);
        this._backgroundBottomColor = this._getBackgroundColor(1 /* BackgroundColorSide.Bottom */);
    }
    ChartModel.prototype.fullUpdate = function () {
        this._invalidate(new InvalidateMask(3 /* InvalidationLevel.Full */));
    };
    ChartModel.prototype.lightUpdate = function () {
        this._invalidate(new InvalidateMask(2 /* InvalidationLevel.Light */));
    };
    ChartModel.prototype.cursorUpdate = function () {
        this._invalidate(new InvalidateMask(1 /* InvalidationLevel.Cursor */));
    };
    ChartModel.prototype.updateSource = function (source) {
        var inv = this._invalidationMaskForSource(source);
        this._invalidate(inv);
    };
    ChartModel.prototype.hoveredSource = function () {
        return this._hoveredSource;
    };
    ChartModel.prototype.setHoveredSource = function (source) {
        var prevSource = this._hoveredSource;
        this._hoveredSource = source;
        if (prevSource !== null) {
            this.updateSource(prevSource.source);
        }
        if (source !== null) {
            this.updateSource(source.source);
        }
    };
    ChartModel.prototype.options = function () {
        return this._options;
    };
    ChartModel.prototype.applyOptions = function (options) {
        merge(this._options, options);
        this._panes.forEach(function (p) { return p.applyScaleOptions(options); });
        if (options.timeScale !== undefined) {
            this._timeScale.applyOptions(options.timeScale);
        }
        if (options.localization !== undefined) {
            this._timeScale.applyLocalizationOptions(options.localization);
        }
        if (options.leftPriceScale || options.rightPriceScale) {
            this._priceScalesOptionsChanged.fire();
        }
        this._backgroundTopColor = this._getBackgroundColor(0 /* BackgroundColorSide.Top */);
        this._backgroundBottomColor = this._getBackgroundColor(1 /* BackgroundColorSide.Bottom */);
        this.fullUpdate();
    };
    ChartModel.prototype.applyPriceScaleOptions = function (priceScaleId, options) {
        if (priceScaleId === "left" /* DefaultPriceScaleId.Left */) {
            this.applyOptions({
                leftPriceScale: options,
            });
            return;
        }
        else if (priceScaleId === "right" /* DefaultPriceScaleId.Right */) {
            this.applyOptions({
                rightPriceScale: options,
            });
            return;
        }
        var res = this.findPriceScale(priceScaleId);
        if (res === null) {
            {
                throw new Error("Trying to apply price scale options with incorrect ID: ".concat(priceScaleId));
            }
        }
        res.priceScale.applyOptions(options);
        this._priceScalesOptionsChanged.fire();
    };
    ChartModel.prototype.findPriceScale = function (priceScaleId) {
        for (var _i = 0, _a = this._panes; _i < _a.length; _i++) {
            var pane = _a[_i];
            var priceScale = pane.priceScaleById(priceScaleId);
            if (priceScale !== null) {
                return {
                    pane: pane,
                    priceScale: priceScale,
                };
            }
        }
        return null;
    };
    ChartModel.prototype.timeScale = function () {
        return this._timeScale;
    };
    ChartModel.prototype.panes = function () {
        return this._panes;
    };
    ChartModel.prototype.watermarkSource = function () {
        return this._watermark;
    };
    ChartModel.prototype.crosshairSource = function () {
        return this._crosshair;
    };
    ChartModel.prototype.crosshairMoved = function () {
        return this._crosshairMoved;
    };
    ChartModel.prototype.customPriceLineDragged = function () {
        return this._customPriceLineDragged;
    };
    ChartModel.prototype.setPaneHeight = function (pane, height) {
        pane.setHeight(height);
        this.recalculateAllPanes();
    };
    ChartModel.prototype.setWidth = function (width) {
        this._width = width;
        this._timeScale.setWidth(this._width);
        this._panes.forEach(function (pane) { return pane.setWidth(width); });
        this.recalculateAllPanes();
    };
    ChartModel.prototype.createPane = function (index) {
        var pane = new Pane(this._timeScale, this);
        if (index !== undefined) {
            this._panes.splice(index, 0, pane);
        }
        else {
            // adding to the end - common case
            this._panes.push(pane);
        }
        var actualIndex = (index === undefined) ? this._panes.length - 1 : index;
        // we always do autoscaling on the creation
        // if autoscale option is true, it is ok, just recalculate by invalidation mask
        // if autoscale option is false, autoscale anyway on the first draw
        // also there is a scenario when autoscale is true in constructor and false later on applyOptions
        var mask = new InvalidateMask(3 /* InvalidationLevel.Full */);
        mask.invalidatePane(actualIndex, {
            level: 0 /* InvalidationLevel.None */,
            autoScale: true,
        });
        this._invalidate(mask);
        return pane;
    };
    ChartModel.prototype.startScalePrice = function (pane, priceScale, x) {
        pane.startScalePrice(priceScale, x);
    };
    ChartModel.prototype.scalePriceTo = function (pane, priceScale, x) {
        pane.scalePriceTo(priceScale, x);
        this.updateCrosshair();
        this._invalidate(this._paneInvalidationMask(pane, 2 /* InvalidationLevel.Light */));
    };
    ChartModel.prototype.endScalePrice = function (pane, priceScale) {
        pane.endScalePrice(priceScale);
        this._invalidate(this._paneInvalidationMask(pane, 2 /* InvalidationLevel.Light */));
    };
    ChartModel.prototype.startScrollPrice = function (pane, priceScale, x) {
        if (priceScale.isAutoScale()) {
            return;
        }
        pane.startScrollPrice(priceScale, x);
    };
    ChartModel.prototype.scrollPriceTo = function (pane, priceScale, x) {
        if (priceScale.isAutoScale()) {
            return;
        }
        pane.scrollPriceTo(priceScale, x);
        this.updateCrosshair();
        this._invalidate(this._paneInvalidationMask(pane, 2 /* InvalidationLevel.Light */));
    };
    ChartModel.prototype.endScrollPrice = function (pane, priceScale) {
        if (priceScale.isAutoScale()) {
            return;
        }
        pane.endScrollPrice(priceScale);
        this._invalidate(this._paneInvalidationMask(pane, 2 /* InvalidationLevel.Light */));
    };
    ChartModel.prototype.resetPriceScale = function (pane, priceScale) {
        pane.resetPriceScale(priceScale);
        this._invalidate(this._paneInvalidationMask(pane, 2 /* InvalidationLevel.Light */));
    };
    ChartModel.prototype.startScaleTime = function (position) {
        this._timeScale.startScale(position);
    };
    /**
     * Zoom in/out the chart (depends on scale value).
     *
     * @param pointX - X coordinate of the point to apply the zoom (the point which should stay on its place)
     * @param scale - Zoom value. Negative value means zoom out, positive - zoom in.
     */
    ChartModel.prototype.zoomTime = function (pointX, scale) {
        var timeScale = this.timeScale();
        if (timeScale.isEmpty() || scale === 0) {
            return;
        }
        var timeScaleWidth = timeScale.width();
        pointX = Math.max(1, Math.min(pointX, timeScaleWidth));
        timeScale.zoom(pointX, scale);
        this.recalculateAllPanes();
    };
    ChartModel.prototype.scrollChart = function (x) {
        this.startScrollTime(0);
        this.scrollTimeTo(x);
        this.endScrollTime();
    };
    ChartModel.prototype.scaleTimeTo = function (x) {
        this._timeScale.scaleTo(x);
        this.recalculateAllPanes();
    };
    ChartModel.prototype.endScaleTime = function () {
        this._timeScale.endScale();
        this.lightUpdate();
    };
    ChartModel.prototype.startScrollTime = function (x) {
        this._initialTimeScrollPos = x;
        this._timeScale.startScroll(x);
    };
    ChartModel.prototype.scrollTimeTo = function (x) {
        var res = false;
        if (this._initialTimeScrollPos !== null && Math.abs(x - this._initialTimeScrollPos) > 20) {
            this._initialTimeScrollPos = null;
            res = true;
        }
        this._timeScale.scrollTo(x);
        this.recalculateAllPanes();
        return res;
    };
    ChartModel.prototype.endScrollTime = function () {
        this._timeScale.endScroll();
        this.lightUpdate();
        this._initialTimeScrollPos = null;
    };
    ChartModel.prototype.serieses = function () {
        return this._serieses;
    };
    ChartModel.prototype.setAndSaveCurrentPosition = function (x, y, pane) {
        this._crosshair.saveOriginCoord(x, y);
        var price = NaN;
        var index = this._timeScale.coordinateToIndex(x);
        var visibleBars = this._timeScale.visibleStrictRange();
        if (visibleBars !== null) {
            index = Math.min(Math.max(visibleBars.left(), index), visibleBars.right());
        }
        var priceScale = pane.defaultPriceScale();
        var firstValue = priceScale.firstValue();
        if (firstValue !== null) {
            price = priceScale.coordinateToPrice(y, firstValue);
        }
        price = this._magnet.align(price, index, pane);
        this._crosshair.setPosition(index, price, pane);
        this.cursorUpdate();
        this._crosshairMoved.fire(this._crosshair.appliedIndex(), { x: x, y: y });
    };
    ChartModel.prototype.clearCurrentPosition = function () {
        var crosshair = this.crosshairSource();
        crosshair.clearPosition();
        this.cursorUpdate();
        this._crosshairMoved.fire(null, null);
    };
    ChartModel.prototype.updateCrosshair = function () {
        // apply magnet
        var pane = this._crosshair.pane();
        if (pane !== null) {
            var x = this._crosshair.originCoordX();
            var y = this._crosshair.originCoordY();
            this.setAndSaveCurrentPosition(x, y, pane);
        }
        this._crosshair.updateAllViews();
    };
    ChartModel.prototype.updateTimeScale = function (newBaseIndex, newPoints, firstChangedPointIndex) {
        var oldFirstTime = this._timeScale.indexToTime(0);
        if (newPoints !== undefined && firstChangedPointIndex !== undefined) {
            this._timeScale.update(newPoints, firstChangedPointIndex);
        }
        var newFirstTime = this._timeScale.indexToTime(0);
        var currentBaseIndex = this._timeScale.baseIndex();
        var visibleBars = this._timeScale.visibleStrictRange();
        // if time scale cannot return current visible bars range (e.g. time scale has zero-width)
        // then we do not need to update right offset to shift visible bars range to have the same right offset as we have before new bar
        // (and actually we cannot)
        if (visibleBars !== null && oldFirstTime !== null && newFirstTime !== null) {
            var isLastSeriesBarVisible = visibleBars.contains(currentBaseIndex);
            var isLeftBarShiftToLeft = oldFirstTime.timestamp > newFirstTime.timestamp;
            var isSeriesPointsAdded = newBaseIndex !== null && newBaseIndex > currentBaseIndex;
            var isSeriesPointsAddedToRight = isSeriesPointsAdded && !isLeftBarShiftToLeft;
            var needShiftVisibleRangeOnNewBar = isLastSeriesBarVisible && this._timeScale.options().shiftVisibleRangeOnNewBar;
            if (newBaseIndex !== null && isSeriesPointsAddedToRight && !needShiftVisibleRangeOnNewBar) {
                var compensationShift = newBaseIndex - currentBaseIndex;
                this._timeScale.setRightOffset(this._timeScale.rightOffset() - compensationShift);
            }
        }
        this._timeScale.setBaseIndex(newBaseIndex);
    };
    ChartModel.prototype.recalculatePane = function (pane) {
        if (pane !== null) {
            pane.recalculate();
        }
    };
    ChartModel.prototype.paneForSource = function (source) {
        var pane = this._panes.find(function (p) { return p.orderedSources().includes(source); });
        return pane === undefined ? null : pane;
    };
    ChartModel.prototype.recalculateAllPanes = function () {
        this._watermark.updateAllViews();
        this._panes.forEach(function (p) { return p.recalculate(); });
        this.updateCrosshair();
    };
    ChartModel.prototype.fireCustomPriceLineDragged = function (customPriceLine, fromPriceString) {
        this._customPriceLineDragged.fire(customPriceLine, fromPriceString);
    };
    ChartModel.prototype.destroy = function () {
        this._panes.forEach(function (p) { return p.destroy(); });
        this._panes.length = 0;
        // to avoid memleaks
        this._options.localization.priceFormatter = undefined;
        this._options.localization.timeFormatter = undefined;
    };
    ChartModel.prototype.rendererOptionsProvider = function () {
        return this._rendererOptionsProvider;
    };
    ChartModel.prototype.priceAxisRendererOptions = function () {
        return this._rendererOptionsProvider.options();
    };
    ChartModel.prototype.priceScalesOptionsChanged = function () {
        return this._priceScalesOptionsChanged;
    };
    ChartModel.prototype.createSeries = function (seriesType, options) {
        var pane = this._panes[0];
        var series = this._createSeries(options, seriesType, pane);
        this._serieses.push(series);
        if (this._serieses.length === 1) {
            // call fullUpdate to recalculate chart's parts geometry
            this.fullUpdate();
        }
        else {
            this.lightUpdate();
        }
        return series;
    };
    ChartModel.prototype.removeSeries = function (series) {
        var pane = this.paneForSource(series);
        var seriesIndex = this._serieses.indexOf(series);
        assert(seriesIndex !== -1, 'Series not found');
        this._serieses.splice(seriesIndex, 1);
        ensureNotNull(pane).removeDataSource(series);
        if (series.destroy) {
            series.destroy();
        }
    };
    ChartModel.prototype.moveSeriesToScale = function (series, targetScaleId) {
        var pane = ensureNotNull(this.paneForSource(series));
        pane.removeDataSource(series);
        // check if targetScaleId exists
        var target = this.findPriceScale(targetScaleId);
        if (target === null) {
            // new scale on the same pane
            var zOrder = series.zorder();
            pane.addDataSource(series, targetScaleId, zOrder);
        }
        else {
            // if move to the new scale of the same pane, keep zorder
            // if move to new pane
            var zOrder = (target.pane === pane) ? series.zorder() : undefined;
            target.pane.addDataSource(series, targetScaleId, zOrder);
        }
    };
    ChartModel.prototype.fitContent = function () {
        var mask = new InvalidateMask(2 /* InvalidationLevel.Light */);
        mask.setFitContent();
        this._invalidate(mask);
    };
    ChartModel.prototype.setTargetLogicalRange = function (range) {
        var mask = new InvalidateMask(2 /* InvalidationLevel.Light */);
        mask.applyRange(range);
        this._invalidate(mask);
    };
    ChartModel.prototype.resetTimeScale = function () {
        var mask = new InvalidateMask(2 /* InvalidationLevel.Light */);
        mask.resetTimeScale();
        this._invalidate(mask);
    };
    ChartModel.prototype.setBarSpacing = function (spacing) {
        var mask = new InvalidateMask(2 /* InvalidationLevel.Light */);
        mask.setBarSpacing(spacing);
        this._invalidate(mask);
    };
    ChartModel.prototype.setRightOffset = function (offset) {
        var mask = new InvalidateMask(2 /* InvalidationLevel.Light */);
        mask.setRightOffset(offset);
        this._invalidate(mask);
    };
    ChartModel.prototype.defaultVisiblePriceScaleId = function () {
        return this._options.rightPriceScale.visible ? "right" /* DefaultPriceScaleId.Right */ : "left" /* DefaultPriceScaleId.Left */;
    };
    ChartModel.prototype.backgroundBottomColor = function () {
        return this._backgroundBottomColor;
    };
    ChartModel.prototype.backgroundTopColor = function () {
        return this._backgroundTopColor;
    };
    ChartModel.prototype.backgroundColorAtYPercentFromTop = function (percent) {
        var bottomColor = this._backgroundBottomColor;
        var topColor = this._backgroundTopColor;
        if (bottomColor === topColor) {
            // solid background
            return bottomColor;
        }
        // gradient background
        // percent should be from 0 to 100 (we're using only integer values to make cache more efficient)
        percent = Math.max(0, Math.min(100, Math.round(percent * 100)));
        if (this._gradientColorsCache === null ||
            this._gradientColorsCache.topColor !== topColor || this._gradientColorsCache.bottomColor !== bottomColor) {
            this._gradientColorsCache = {
                topColor: topColor,
                bottomColor: bottomColor,
                colors: new Map(),
            };
        }
        else {
            var cachedValue = this._gradientColorsCache.colors.get(percent);
            if (cachedValue !== undefined) {
                return cachedValue;
            }
        }
        var result = gradientColorAtPercent(topColor, bottomColor, percent / 100);
        this._gradientColorsCache.colors.set(percent, result);
        return result;
    };
    ChartModel.prototype._paneInvalidationMask = function (pane, level) {
        var inv = new InvalidateMask(level);
        if (pane !== null) {
            var index = this._panes.indexOf(pane);
            inv.invalidatePane(index, {
                level: level,
            });
        }
        return inv;
    };
    ChartModel.prototype._invalidationMaskForSource = function (source, invalidateType) {
        if (invalidateType === undefined) {
            invalidateType = 2 /* InvalidationLevel.Light */;
        }
        return this._paneInvalidationMask(this.paneForSource(source), invalidateType);
    };
    ChartModel.prototype._invalidate = function (mask) {
        if (this._invalidateHandler) {
            this._invalidateHandler(mask);
        }
        this._panes.forEach(function (pane) { return pane.grid().paneView().update(); });
    };
    ChartModel.prototype._createSeries = function (options, seriesType, pane) {
        var series = new Series(this, options, seriesType);
        var targetScaleId = options.priceScaleId !== undefined ? options.priceScaleId : this.defaultVisiblePriceScaleId();
        pane.addDataSource(series, targetScaleId);
        if (!isDefaultPriceScale(targetScaleId)) {
            // let's apply that options again to apply margins
            series.applyOptions(options);
        }
        return series;
    };
    ChartModel.prototype._getBackgroundColor = function (side) {
        var layoutOptions = this._options.layout;
        if (layoutOptions.background.type === "gradient" /* ColorType.VerticalGradient */) {
            return side === 0 /* BackgroundColorSide.Top */ ?
                layoutOptions.background.topColor :
                layoutOptions.background.bottomColor;
        }
        return layoutOptions.background.color;
    };
    return ChartModel;
}());

function fillUpDownCandlesticksColors(options) {
    if (options.borderColor !== undefined) {
        options.borderUpColor = options.borderColor;
        options.borderDownColor = options.borderColor;
    }
    if (options.wickColor !== undefined) {
        options.wickUpColor = options.wickColor;
        options.wickDownColor = options.wickColor;
    }
}
/**
 * Represents the type of the last price animation for series such as area or line.
 */
var LastPriceAnimationMode;
(function (LastPriceAnimationMode) {
    /**
     * Animation is always disabled
     */
    LastPriceAnimationMode[LastPriceAnimationMode["Disabled"] = 0] = "Disabled";
    /**
     * Animation is always enabled.
     */
    LastPriceAnimationMode[LastPriceAnimationMode["Continuous"] = 1] = "Continuous";
    /**
     * Animation is active after new data.
     */
    LastPriceAnimationMode[LastPriceAnimationMode["OnDataUpdate"] = 2] = "OnDataUpdate";
})(LastPriceAnimationMode || (LastPriceAnimationMode = {}));
function precisionByMinMove(minMove) {
    if (minMove >= 1) {
        return 0;
    }
    var i = 0;
    for (; i < 8; i++) {
        var intPart = Math.round(minMove);
        var fractPart = Math.abs(intPart - minMove);
        if (fractPart < 1e-8) {
            return i;
        }
        minMove = minMove * 10;
    }
    return i;
}
var PriceAxisLastValueMode;
(function (PriceAxisLastValueMode) {
    PriceAxisLastValueMode[PriceAxisLastValueMode["LastPriceAndPercentageValue"] = 0] = "LastPriceAndPercentageValue";
    PriceAxisLastValueMode[PriceAxisLastValueMode["LastValueAccordingToScale"] = 1] = "LastValueAccordingToScale";
})(PriceAxisLastValueMode || (PriceAxisLastValueMode = {}));
/**
 * Represents the source of data to be used for the horizontal price line.
 */
var PriceLineSource;
(function (PriceLineSource) {
    /**
     * Use the last bar data.
     */
    PriceLineSource[PriceLineSource["LastBar"] = 0] = "LastBar";
    /**
     * Use the last visible data of the chart viewport.
     */
    PriceLineSource[PriceLineSource["LastVisible"] = 1] = "LastVisible";
})(PriceLineSource || (PriceLineSource = {}));

/**
 * Represents a type of color.
 */
var ColorType;
(function (ColorType) {
    /** Solid color */
    ColorType["Solid"] = "solid";
    /** Vertical gradient color */
    ColorType["VerticalGradient"] = "gradient";
})(ColorType || (ColorType = {}));

/**
 * Check if a time value is a business day object.
 *
 * @param time - The time to check.
 * @returns `true` if `time` is a {@link BusinessDay} object, false otherwise.
 */
function isBusinessDay(time) {
    return !isNumber(time) && !isString(time);
}
/**
 * Check if a time value is a UTC timestamp number.
 *
 * @param time - The time to check.
 * @returns `true` if `time` is a {@link UTCTimestamp} number, false otherwise.
 */
function isUTCTimestamp(time) {
    return isNumber(time);
}
function isWhitespaceData(data) {
    return data.open === undefined && data.value === undefined;
}
function isFulfilledData(data) {
    return data.open !== undefined || data.value !== undefined;
}

var Size = /** @class */ (function () {
    function Size(w, h) {
        this.w = w;
        this.h = h;
    }
    Size.prototype.equals = function (size) {
        return (this.w === size.w) && (this.h === size.h);
    };
    return Size;
}());
function getCanvasDevicePixelRatio(canvas) {
    return canvas.ownerDocument &&
        canvas.ownerDocument.defaultView &&
        canvas.ownerDocument.defaultView.devicePixelRatio
        || 1;
}
function getContext2D(canvas) {
    var ctx = ensureNotNull(canvas.getContext('2d'));
    // sometimes (very often) ctx getContext returns the same context every time
    // and there might be previous transformation
    // so let's reset it to be sure that everything is ok
    // do no use resetTransform to respect Edge
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    return ctx;
}
function createPreconfiguredCanvas(doc, size) {
    var canvas = doc.createElement('canvas');
    var pixelRatio = getCanvasDevicePixelRatio(canvas);
    // we should keep the layout size...
    canvas.style.width = "".concat(size.w, "px");
    canvas.style.height = "".concat(size.h, "px");
    // ...but multiply coordinate space dimensions to device pixel ratio
    canvas.width = size.w * pixelRatio;
    canvas.height = size.h * pixelRatio;
    return canvas;
}
function createBoundCanvas(parentElement, size) {
    var doc = ensureNotNull(parentElement.ownerDocument);
    var canvas = doc.createElement('canvas');
    parentElement.appendChild(canvas);
    var binding = bindToDevicePixelRatio(canvas, { allowDownsampling: false });
    binding.resizeCanvas({
        width: size.w,
        height: size.h,
    });
    return binding;
}

var Constants$5;
(function (Constants) {
    Constants[Constants["MaxStartDelay"] = 50] = "MaxStartDelay";
    Constants[Constants["EpsilonDistance"] = 1] = "EpsilonDistance";
})(Constants$5 || (Constants$5 = {}));
function distanceBetweenPoints(pos1, pos2) {
    return pos1.position - pos2.position;
}
function speedPxPerMSec(pos1, pos2, maxSpeed) {
    var speed = (pos1.position - pos2.position) / (pos1.time - pos2.time);
    return Math.sign(speed) * Math.min(Math.abs(speed), maxSpeed);
}
function durationMSec(speed, dumpingCoeff) {
    var lnDumpingCoeff = Math.log(dumpingCoeff);
    return Math.log((1 /* Constants.EpsilonDistance */ * lnDumpingCoeff) / -speed) / (lnDumpingCoeff);
}
var KineticAnimation = /** @class */ (function () {
    function KineticAnimation(minSpeed, maxSpeed, dumpingCoeff, minMove) {
        this._position1 = null;
        this._position2 = null;
        this._position3 = null;
        this._position4 = null;
        this._animationStartPosition = null;
        this._durationMsecs = 0;
        this._speedPxPerMsec = 0;
        this._terminated = false;
        this._minSpeed = minSpeed;
        this._maxSpeed = maxSpeed;
        this._dumpingCoeff = dumpingCoeff;
        this._minMove = minMove;
    }
    KineticAnimation.prototype.addPosition = function (position, time) {
        if (this._position1 !== null) {
            if (this._position1.time === time) {
                this._position1.position = position;
                return;
            }
            if (Math.abs(this._position1.position - position) < this._minMove) {
                return;
            }
        }
        this._position4 = this._position3;
        this._position3 = this._position2;
        this._position2 = this._position1;
        this._position1 = { time: time, position: position };
    };
    KineticAnimation.prototype.start = function (position, time) {
        if (this._position1 === null || this._position2 === null) {
            return;
        }
        if (time - this._position1.time > 50 /* Constants.MaxStartDelay */) {
            return;
        }
        // To calculate all the rest parameters we should calculate the speed af first
        var totalDistance = 0;
        var speed1 = speedPxPerMSec(this._position1, this._position2, this._maxSpeed);
        var distance1 = distanceBetweenPoints(this._position1, this._position2);
        // We're calculating weighted average speed
        // Than more distance for a segment, than more its weight
        var speedItems = [speed1];
        var distanceItems = [distance1];
        totalDistance += distance1;
        if (this._position3 !== null) {
            var speed2 = speedPxPerMSec(this._position2, this._position3, this._maxSpeed);
            // stop at this moment if direction of the segment is opposite
            if (Math.sign(speed2) === Math.sign(speed1)) {
                var distance2 = distanceBetweenPoints(this._position2, this._position3);
                speedItems.push(speed2);
                distanceItems.push(distance2);
                totalDistance += distance2;
                if (this._position4 !== null) {
                    var speed3 = speedPxPerMSec(this._position3, this._position4, this._maxSpeed);
                    if (Math.sign(speed3) === Math.sign(speed1)) {
                        var distance3 = distanceBetweenPoints(this._position3, this._position4);
                        speedItems.push(speed3);
                        distanceItems.push(distance3);
                        totalDistance += distance3;
                    }
                }
            }
        }
        var resultSpeed = 0;
        for (var i = 0; i < speedItems.length; ++i) {
            resultSpeed += distanceItems[i] / totalDistance * speedItems[i];
        }
        if (Math.abs(resultSpeed) < this._minSpeed) {
            return;
        }
        this._animationStartPosition = { position: position, time: time };
        this._speedPxPerMsec = resultSpeed;
        this._durationMsecs = durationMSec(Math.abs(resultSpeed), this._dumpingCoeff);
    };
    KineticAnimation.prototype.getPosition = function (time) {
        var startPosition = ensureNotNull(this._animationStartPosition);
        var durationMsecs = time - startPosition.time;
        return startPosition.position + this._speedPxPerMsec * (Math.pow(this._dumpingCoeff, durationMsecs) - 1) / (Math.log(this._dumpingCoeff));
    };
    KineticAnimation.prototype.finished = function (time) {
        return this._animationStartPosition === null || this._progressDuration(time) === this._durationMsecs;
    };
    KineticAnimation.prototype.terminated = function () {
        return this._terminated;
    };
    KineticAnimation.prototype.terminate = function () {
        this._terminated = true;
    };
    KineticAnimation.prototype._progressDuration = function (time) {
        var startPosition = ensureNotNull(this._animationStartPosition);
        var progress = time - startPosition.time;
        return Math.min(progress, this._durationMsecs);
    };
    return KineticAnimation;
}());

/**
 * When you're trying to use the library in server-side context (for instance in SSR)
 * you don't have some browser-specific variables like navigator or window
 * and if the library will use them on the top level of the library
 * the import will fail due ReferenceError
 * thus, this allows use the navigator on the top level and being imported in server-side context as well
 * See issue #446
 */
// eslint-disable-next-line @typescript-eslint/tslint/config
var isRunningOnClientSide = typeof window !== 'undefined';

function isFF() {
    if (!isRunningOnClientSide) {
        return false;
    }
    return window.navigator.userAgent.toLowerCase().indexOf('firefox') > -1;
}
function isIOS() {
    if (!isRunningOnClientSide) {
        return false;
    }
    // eslint-disable-next-line deprecation/deprecation
    return /iPhone|iPad|iPod/.test(window.navigator.platform);
}
function isChrome() {
    if (!isRunningOnClientSide) {
        return false;
    }
    return window.chrome !== undefined;
}

function preventScrollByWheelClick(el) {
    if (!isChrome()) {
        return;
    }
    el.addEventListener('mousedown', function (e) {
        if (e.button === 1 /* MouseEventButton.Middle */) {
            // prevent incorrect scrolling event
            e.preventDefault();
            return false;
        }
        return undefined;
    });
}

// we can use `const name = 500;` but with `const enum` this values will be inlined into code
// so we do not need to have it as variables
var Delay;
(function (Delay) {
    Delay[Delay["ResetClick"] = 500] = "ResetClick";
    Delay[Delay["LongTap"] = 240] = "LongTap";
    Delay[Delay["PreventFiresTouchEvents"] = 500] = "PreventFiresTouchEvents";
})(Delay || (Delay = {}));
var Constants$4;
(function (Constants) {
    Constants[Constants["CancelClickManhattanDistance"] = 5] = "CancelClickManhattanDistance";
    Constants[Constants["CancelTapManhattanDistance"] = 5] = "CancelTapManhattanDistance";
    Constants[Constants["DoubleClickManhattanDistance"] = 5] = "DoubleClickManhattanDistance";
    Constants[Constants["DoubleTapManhattanDistance"] = 30] = "DoubleTapManhattanDistance";
})(Constants$4 || (Constants$4 = {}));
// TODO: get rid of a lot of boolean flags, probably we should replace it with some enum
var MouseEventHandler = /** @class */ (function () {
    function MouseEventHandler(target, handler, options) {
        var _this = this;
        this._clickCount = 0;
        this._clickTimeoutId = null;
        this._clickPosition = { x: Number.NEGATIVE_INFINITY, y: Number.POSITIVE_INFINITY };
        this._tapCount = 0;
        this._tapTimeoutId = null;
        this._tapPosition = { x: Number.NEGATIVE_INFINITY, y: Number.POSITIVE_INFINITY };
        this._longTapTimeoutId = null;
        this._longTapActive = false;
        this._mouseMoveStartPosition = null;
        this._touchMoveStartPosition = null;
        this._touchMoveExceededManhattanDistance = false;
        this._cancelClick = false;
        this._cancelTap = false;
        this._unsubscribeOutsideMouseEvents = null;
        this._unsubscribeOutsideTouchEvents = null;
        this._unsubscribeMobileSafariEvents = null;
        this._unsubscribeMousemove = null;
        this._unsubscribeRootMouseEvents = null;
        this._unsubscribeRootTouchEvents = null;
        this._startPinchMiddlePoint = null;
        this._startPinchDistance = 0;
        this._pinchPrevented = false;
        this._preventTouchDragProcess = false;
        this._mousePressed = false;
        this._lastTouchEventTimeStamp = 0;
        // for touchstart/touchmove/touchend events we handle only first touch
        // i.e. we don't support several active touches at the same time (except pinch event)
        this._activeTouchId = null;
        // accept all mouse leave events if it's not an iOS device
        // see _mouseEnterHandler, _mouseMoveHandler, _mouseLeaveHandler
        this._acceptMouseLeave = !isIOS();
        /**
         * In Firefox mouse events dont't fire if the mouse position is outside of the browser's border.
         * To prevent the mouse from hanging while pressed we're subscribing on the mouseleave event of the document element.
         * We're subscribing on mouseleave, but this event is actually fired on mouseup outside of the browser's border.
         */
        this._onFirefoxOutsideMouseUp = function (mouseUpEvent) {
            _this._mouseUpHandler(mouseUpEvent);
        };
        /**
         * Safari doesn't fire touchstart/mousedown events on double tap since iOS 13.
         * There are two possible solutions:
         * 1) Call preventDefault in touchEnd handler. But it also prevents click event from firing.
         * 2) Add listener on dblclick event that fires with the preceding mousedown/mouseup.
         * https://developer.apple.com/forums/thread/125073
         */
        this._onMobileSafariDoubleClick = function (dblClickEvent) {
            if (_this._firesTouchEvents(dblClickEvent)) {
                var compatEvent = _this._makeCompatEvent(dblClickEvent);
                ++_this._tapCount;
                if (_this._tapTimeoutId && _this._tapCount > 1) {
                    var manhattanDistance = _this._touchMouseMoveWithDownInfo(getPosition(dblClickEvent), _this._tapPosition).manhattanDistance;
                    if (manhattanDistance < 30 /* Constants.DoubleTapManhattanDistance */ && !_this._cancelTap) {
                        _this._processTouchEvent(compatEvent, _this._handler.doubleTapEvent);
                    }
                    _this._resetTapTimeout();
                }
            }
            else {
                var compatEvent = _this._makeCompatEvent(dblClickEvent);
                ++_this._clickCount;
                if (_this._clickTimeoutId && _this._clickCount > 1) {
                    var manhattanDistance = _this._touchMouseMoveWithDownInfo(getPosition(dblClickEvent), _this._clickPosition).manhattanDistance;
                    if (manhattanDistance < 5 /* Constants.DoubleClickManhattanDistance */ && !_this._cancelClick) {
                        _this._processMouseEvent(compatEvent, _this._handler.mouseDoubleClickEvent);
                    }
                    _this._resetClickTimeout();
                }
            }
        };
        this._target = target;
        this._handler = handler;
        this._options = options;
        this._init();
    }
    MouseEventHandler.prototype.destroy = function () {
        if (this._unsubscribeOutsideMouseEvents !== null) {
            this._unsubscribeOutsideMouseEvents();
            this._unsubscribeOutsideMouseEvents = null;
        }
        if (this._unsubscribeOutsideTouchEvents !== null) {
            this._unsubscribeOutsideTouchEvents();
            this._unsubscribeOutsideTouchEvents = null;
        }
        if (this._unsubscribeMousemove !== null) {
            this._unsubscribeMousemove();
            this._unsubscribeMousemove = null;
        }
        if (this._unsubscribeRootMouseEvents !== null) {
            this._unsubscribeRootMouseEvents();
            this._unsubscribeRootMouseEvents = null;
        }
        if (this._unsubscribeRootTouchEvents !== null) {
            this._unsubscribeRootTouchEvents();
            this._unsubscribeRootTouchEvents = null;
        }
        if (this._unsubscribeMobileSafariEvents !== null) {
            this._unsubscribeMobileSafariEvents();
            this._unsubscribeMobileSafariEvents = null;
        }
        this._clearLongTapTimeout();
        this._resetClickTimeout();
    };
    MouseEventHandler.prototype._mouseEnterHandler = function (enterEvent) {
        var _this = this;
        if (this._unsubscribeMousemove) {
            this._unsubscribeMousemove();
        }
        var boundMouseMoveHandler = this._mouseMoveHandler.bind(this);
        this._unsubscribeMousemove = function () {
            _this._target.removeEventListener('mousemove', boundMouseMoveHandler);
        };
        this._target.addEventListener('mousemove', boundMouseMoveHandler);
        if (this._firesTouchEvents(enterEvent)) {
            return;
        }
        var compatEvent = this._makeCompatEvent(enterEvent);
        this._processMouseEvent(compatEvent, this._handler.mouseEnterEvent);
        this._acceptMouseLeave = true;
    };
    MouseEventHandler.prototype._resetClickTimeout = function () {
        if (this._clickTimeoutId !== null) {
            clearTimeout(this._clickTimeoutId);
        }
        this._clickCount = 0;
        this._clickTimeoutId = null;
        this._clickPosition = { x: Number.NEGATIVE_INFINITY, y: Number.POSITIVE_INFINITY };
    };
    MouseEventHandler.prototype._resetTapTimeout = function () {
        if (this._tapTimeoutId !== null) {
            clearTimeout(this._tapTimeoutId);
        }
        this._tapCount = 0;
        this._tapTimeoutId = null;
        this._tapPosition = { x: Number.NEGATIVE_INFINITY, y: Number.POSITIVE_INFINITY };
    };
    MouseEventHandler.prototype._mouseMoveHandler = function (moveEvent) {
        if (this._mousePressed || this._touchMoveStartPosition !== null) {
            return;
        }
        if (this._firesTouchEvents(moveEvent)) {
            return;
        }
        var compatEvent = this._makeCompatEvent(moveEvent);
        this._processMouseEvent(compatEvent, this._handler.mouseMoveEvent);
        this._acceptMouseLeave = true;
    };
    MouseEventHandler.prototype._touchMoveHandler = function (moveEvent) {
        var touch = touchWithId(moveEvent.changedTouches, ensureNotNull(this._activeTouchId));
        if (touch === null) {
            return;
        }
        this._lastTouchEventTimeStamp = eventTimeStamp(moveEvent);
        if (this._startPinchMiddlePoint !== null) {
            return;
        }
        if (this._preventTouchDragProcess) {
            return;
        }
        // prevent pinch if move event comes faster than the second touch
        this._pinchPrevented = true;
        var moveInfo = this._touchMouseMoveWithDownInfo(getPosition(touch), ensureNotNull(this._touchMoveStartPosition));
        var xOffset = moveInfo.xOffset, yOffset = moveInfo.yOffset, manhattanDistance = moveInfo.manhattanDistance;
        if (!this._touchMoveExceededManhattanDistance && manhattanDistance < 5 /* Constants.CancelTapManhattanDistance */) {
            return;
        }
        if (!this._touchMoveExceededManhattanDistance) {
            // first time when current position exceeded manhattan distance
            // vertical drag is more important than horizontal drag
            // because we scroll the page vertically often than horizontally
            var correctedXOffset = xOffset * 0.5;
            // a drag can be only if touch page scroll isn't allowed
            var isVertDrag = yOffset >= correctedXOffset && !this._options.treatVertTouchDragAsPageScroll();
            var isHorzDrag = correctedXOffset > yOffset && !this._options.treatHorzTouchDragAsPageScroll();
            // if drag event happened then we should revert preventDefault state to original one
            // and try to process the drag event
            // else we shouldn't prevent default of the event and ignore processing the drag event
            if (!isVertDrag && !isHorzDrag) {
                this._preventTouchDragProcess = true;
            }
            this._touchMoveExceededManhattanDistance = true;
            // if manhattan distance is more that 5 - we should cancel tap event
            this._cancelTap = true;
            this._clearLongTapTimeout();
            this._resetTapTimeout();
        }
        if (!this._preventTouchDragProcess) {
            var compatEvent = this._makeCompatEvent(moveEvent, touch);
            this._processTouchEvent(compatEvent, this._handler.touchMoveEvent);
            // we should prevent default in case of touch only
            // to prevent scroll of the page
            preventDefault(moveEvent);
        }
    };
    MouseEventHandler.prototype._mouseMoveWithDownHandler = function (moveEvent) {
        if (moveEvent.button !== 0 /* MouseEventButton.Left */) {
            return;
        }
        var moveInfo = this._touchMouseMoveWithDownInfo(getPosition(moveEvent), ensureNotNull(this._mouseMoveStartPosition));
        var manhattanDistance = moveInfo.manhattanDistance;
        if (manhattanDistance >= 5 /* Constants.CancelClickManhattanDistance */) {
            // if manhattan distance is more that 5 - we should cancel click event
            this._cancelClick = true;
            this._resetClickTimeout();
        }
        if (this._cancelClick) {
            // if this._cancelClick is true, that means that minimum manhattan distance is already exceeded
            var compatEvent = this._makeCompatEvent(moveEvent);
            this._processMouseEvent(compatEvent, this._handler.pressedMouseMoveEvent);
        }
    };
    MouseEventHandler.prototype._touchMouseMoveWithDownInfo = function (currentPosition, startPosition) {
        var xOffset = Math.abs(startPosition.x - currentPosition.x);
        var yOffset = Math.abs(startPosition.y - currentPosition.y);
        var manhattanDistance = xOffset + yOffset;
        return {
            xOffset: xOffset,
            yOffset: yOffset,
            manhattanDistance: manhattanDistance,
        };
    };
    // eslint-disable-next-line complexity
    MouseEventHandler.prototype._touchEndHandler = function (touchEndEvent) {
        var touch = touchWithId(touchEndEvent.changedTouches, ensureNotNull(this._activeTouchId));
        if (touch === null && touchEndEvent.touches.length === 0) {
            // something went wrong, somehow we missed the required touchend event
            // probably the browser has not sent this event
            touch = touchEndEvent.changedTouches[0];
        }
        if (touch === null) {
            return;
        }
        this._activeTouchId = null;
        this._lastTouchEventTimeStamp = eventTimeStamp(touchEndEvent);
        this._clearLongTapTimeout();
        this._touchMoveStartPosition = null;
        if (this._unsubscribeRootTouchEvents) {
            this._unsubscribeRootTouchEvents();
            this._unsubscribeRootTouchEvents = null;
        }
        var compatEvent = this._makeCompatEvent(touchEndEvent, touch);
        this._processTouchEvent(compatEvent, this._handler.touchEndEvent);
        ++this._tapCount;
        if (this._tapTimeoutId && this._tapCount > 1) {
            // check that both clicks are near enough
            var manhattanDistance = this._touchMouseMoveWithDownInfo(getPosition(touch), this._tapPosition).manhattanDistance;
            if (manhattanDistance < 30 /* Constants.DoubleTapManhattanDistance */ && !this._cancelTap) {
                this._processTouchEvent(compatEvent, this._handler.doubleTapEvent);
            }
            this._resetTapTimeout();
        }
        else {
            if (!this._cancelTap) {
                this._processTouchEvent(compatEvent, this._handler.tapEvent);
                // do not fire mouse events if tap handler was executed
                // prevent click event on new dom element (who appeared after tap)
                if (this._handler.tapEvent) {
                    preventDefault(touchEndEvent);
                }
            }
        }
        // prevent, for example, safari's dblclick-to-zoom or fast-click after long-tap
        // we handle mouseDoubleClickEvent here ourselves
        if (this._tapCount === 0) {
            preventDefault(touchEndEvent);
        }
        if (touchEndEvent.touches.length === 0) {
            if (this._longTapActive) {
                this._longTapActive = false;
                // prevent native click event
                preventDefault(touchEndEvent);
            }
        }
    };
    MouseEventHandler.prototype._mouseUpHandler = function (mouseUpEvent) {
        if (mouseUpEvent.button !== 0 /* MouseEventButton.Left */) {
            return;
        }
        var compatEvent = this._makeCompatEvent(mouseUpEvent);
        this._mouseMoveStartPosition = null;
        this._mousePressed = false;
        if (this._unsubscribeRootMouseEvents) {
            this._unsubscribeRootMouseEvents();
            this._unsubscribeRootMouseEvents = null;
        }
        if (isFF()) {
            var rootElement = this._target.ownerDocument.documentElement;
            rootElement.removeEventListener('mouseleave', this._onFirefoxOutsideMouseUp);
        }
        if (this._firesTouchEvents(mouseUpEvent)) {
            return;
        }
        this._processMouseEvent(compatEvent, this._handler.mouseUpEvent);
        ++this._clickCount;
        if (this._clickTimeoutId && this._clickCount > 1) {
            // check that both clicks are near enough
            var manhattanDistance = this._touchMouseMoveWithDownInfo(getPosition(mouseUpEvent), this._clickPosition).manhattanDistance;
            if (manhattanDistance < 5 /* Constants.DoubleClickManhattanDistance */ && !this._cancelClick) {
                this._processMouseEvent(compatEvent, this._handler.mouseDoubleClickEvent);
            }
            this._resetClickTimeout();
        }
        else {
            if (!this._cancelClick) {
                this._processMouseEvent(compatEvent, this._handler.mouseClickEvent);
            }
        }
    };
    MouseEventHandler.prototype._clearLongTapTimeout = function () {
        if (this._longTapTimeoutId === null) {
            return;
        }
        clearTimeout(this._longTapTimeoutId);
        this._longTapTimeoutId = null;
    };
    MouseEventHandler.prototype._touchStartHandler = function (downEvent) {
        if (this._activeTouchId !== null) {
            return;
        }
        var touch = downEvent.changedTouches[0];
        this._activeTouchId = touch.identifier;
        this._lastTouchEventTimeStamp = eventTimeStamp(downEvent);
        var rootElement = this._target.ownerDocument.documentElement;
        this._cancelTap = false;
        this._touchMoveExceededManhattanDistance = false;
        this._preventTouchDragProcess = false;
        this._touchMoveStartPosition = getPosition(touch);
        if (this._unsubscribeRootTouchEvents) {
            this._unsubscribeRootTouchEvents();
            this._unsubscribeRootTouchEvents = null;
        }
        {
            var boundTouchMoveWithDownHandler_1 = this._touchMoveHandler.bind(this);
            var boundTouchEndHandler_1 = this._touchEndHandler.bind(this);
            this._unsubscribeRootTouchEvents = function () {
                rootElement.removeEventListener('touchmove', boundTouchMoveWithDownHandler_1);
                rootElement.removeEventListener('touchend', boundTouchEndHandler_1);
            };
            rootElement.addEventListener('touchmove', boundTouchMoveWithDownHandler_1, { passive: false });
            rootElement.addEventListener('touchend', boundTouchEndHandler_1, { passive: false });
            this._clearLongTapTimeout();
            this._longTapTimeoutId = setTimeout(this._longTapHandler.bind(this, downEvent), 240 /* Delay.LongTap */);
        }
        var compatEvent = this._makeCompatEvent(downEvent, touch);
        this._processTouchEvent(compatEvent, this._handler.touchStartEvent);
        if (!this._tapTimeoutId) {
            this._tapCount = 0;
            this._tapTimeoutId = setTimeout(this._resetTapTimeout.bind(this), 500 /* Delay.ResetClick */);
            this._tapPosition = getPosition(touch);
        }
    };
    MouseEventHandler.prototype._mouseDownHandler = function (downEvent) {
        if (downEvent.button !== 0 /* MouseEventButton.Left */) {
            return;
        }
        var rootElement = this._target.ownerDocument.documentElement;
        if (isFF()) {
            rootElement.addEventListener('mouseleave', this._onFirefoxOutsideMouseUp);
        }
        this._cancelClick = false;
        this._mouseMoveStartPosition = getPosition(downEvent);
        if (this._unsubscribeRootMouseEvents) {
            this._unsubscribeRootMouseEvents();
            this._unsubscribeRootMouseEvents = null;
        }
        {
            var boundMouseMoveWithDownHandler_1 = this._mouseMoveWithDownHandler.bind(this);
            var boundMouseUpHandler_1 = this._mouseUpHandler.bind(this);
            this._unsubscribeRootMouseEvents = function () {
                rootElement.removeEventListener('mousemove', boundMouseMoveWithDownHandler_1);
                rootElement.removeEventListener('mouseup', boundMouseUpHandler_1);
            };
            rootElement.addEventListener('mousemove', boundMouseMoveWithDownHandler_1);
            rootElement.addEventListener('mouseup', boundMouseUpHandler_1);
        }
        this._mousePressed = true;
        if (this._firesTouchEvents(downEvent)) {
            return;
        }
        var compatEvent = this._makeCompatEvent(downEvent);
        this._processMouseEvent(compatEvent, this._handler.mouseDownEvent);
        if (!this._clickTimeoutId) {
            this._clickCount = 0;
            this._clickTimeoutId = setTimeout(this._resetClickTimeout.bind(this), 500 /* Delay.ResetClick */);
            this._clickPosition = getPosition(downEvent);
        }
    };
    MouseEventHandler.prototype._init = function () {
        var _this = this;
        this._target.addEventListener('mouseenter', this._mouseEnterHandler.bind(this));
        // Do not show context menu when something went wrong
        this._target.addEventListener('touchcancel', this._clearLongTapTimeout.bind(this));
        {
            var doc_1 = this._target.ownerDocument;
            var outsideHandler_1 = function (event) {
                if (!_this._handler.mouseDownOutsideEvent) {
                    return;
                }
                if (event.target && _this._target.contains(event.target)) {
                    return;
                }
                _this._handler.mouseDownOutsideEvent();
            };
            this._unsubscribeOutsideTouchEvents = function () {
                doc_1.removeEventListener('touchstart', outsideHandler_1);
            };
            this._unsubscribeOutsideMouseEvents = function () {
                doc_1.removeEventListener('mousedown', outsideHandler_1);
            };
            doc_1.addEventListener('mousedown', outsideHandler_1);
            doc_1.addEventListener('touchstart', outsideHandler_1, { passive: true });
        }
        if (isIOS()) {
            this._unsubscribeMobileSafariEvents = function () {
                _this._target.removeEventListener('dblclick', _this._onMobileSafariDoubleClick);
            };
            this._target.addEventListener('dblclick', this._onMobileSafariDoubleClick);
        }
        this._target.addEventListener('mouseleave', this._mouseLeaveHandler.bind(this));
        this._target.addEventListener('touchstart', this._touchStartHandler.bind(this), { passive: true });
        preventScrollByWheelClick(this._target);
        this._target.addEventListener('mousedown', this._mouseDownHandler.bind(this));
        this._initPinch();
        // Hey mobile Safari, what's up?
        // If mobile Safari doesn't have any touchmove handler with passive=false
        // it treats a touchstart and the following touchmove events as cancelable=false,
        // so we can't prevent them (as soon we subscribe on touchmove inside touchstart's handler).
        // And we'll get scroll of the page along with chart's one instead of only chart's scroll.
        this._target.addEventListener('touchmove', function () { }, { passive: false });
    };
    MouseEventHandler.prototype._initPinch = function () {
        var _this = this;
        if (this._handler.pinchStartEvent === undefined &&
            this._handler.pinchEvent === undefined &&
            this._handler.pinchEndEvent === undefined) {
            return;
        }
        this._target.addEventListener('touchstart', function (event) { return _this._checkPinchState(event.touches); }, { passive: true });
        this._target.addEventListener('touchmove', function (event) {
            if (event.touches.length !== 2 || _this._startPinchMiddlePoint === null) {
                return;
            }
            if (_this._handler.pinchEvent !== undefined) {
                var currentDistance = getDistance(event.touches[0], event.touches[1]);
                var scale = currentDistance / _this._startPinchDistance;
                _this._handler.pinchEvent(_this._startPinchMiddlePoint, scale);
                preventDefault(event);
            }
        }, { passive: false });
        this._target.addEventListener('touchend', function (event) {
            _this._checkPinchState(event.touches);
        });
    };
    MouseEventHandler.prototype._checkPinchState = function (touches) {
        if (touches.length === 1) {
            this._pinchPrevented = false;
        }
        if (touches.length !== 2 || this._pinchPrevented || this._longTapActive) {
            this._stopPinch();
        }
        else {
            this._startPinch(touches);
        }
    };
    MouseEventHandler.prototype._startPinch = function (touches) {
        var box = getBoundingClientRect(this._target);
        this._startPinchMiddlePoint = {
            x: ((touches[0].clientX - box.left) + (touches[1].clientX - box.left)) / 2,
            y: ((touches[0].clientY - box.top) + (touches[1].clientY - box.top)) / 2,
        };
        this._startPinchDistance = getDistance(touches[0], touches[1]);
        if (this._handler.pinchStartEvent !== undefined) {
            this._handler.pinchStartEvent();
        }
        this._clearLongTapTimeout();
    };
    MouseEventHandler.prototype._stopPinch = function () {
        if (this._startPinchMiddlePoint === null) {
            return;
        }
        this._startPinchMiddlePoint = null;
        if (this._handler.pinchEndEvent !== undefined) {
            this._handler.pinchEndEvent();
        }
    };
    MouseEventHandler.prototype._mouseLeaveHandler = function (event) {
        if (this._unsubscribeMousemove) {
            this._unsubscribeMousemove();
        }
        if (this._firesTouchEvents(event)) {
            return;
        }
        if (!this._acceptMouseLeave) {
            // mobile Safari sometimes emits mouse leave event for no reason, there is no way to handle it in other way
            // just ignore this event if there was no mouse move or mouse enter events
            return;
        }
        var compatEvent = this._makeCompatEvent(event);
        this._processMouseEvent(compatEvent, this._handler.mouseLeaveEvent);
        // accept all mouse leave events if it's not an iOS device
        this._acceptMouseLeave = !isIOS();
    };
    MouseEventHandler.prototype._longTapHandler = function (event) {
        var touch = touchWithId(event.touches, ensureNotNull(this._activeTouchId));
        if (touch === null) {
            return;
        }
        var compatEvent = this._makeCompatEvent(event, touch);
        this._processTouchEvent(compatEvent, this._handler.longTapEvent);
        this._cancelTap = true;
        // long tap is active until touchend event with 0 touches occurred
        this._longTapActive = true;
    };
    MouseEventHandler.prototype._firesTouchEvents = function (e) {
        if (e.sourceCapabilities && e.sourceCapabilities.firesTouchEvents !== undefined) {
            return e.sourceCapabilities.firesTouchEvents;
        }
        return eventTimeStamp(e) < this._lastTouchEventTimeStamp + 500 /* Delay.PreventFiresTouchEvents */;
    };
    MouseEventHandler.prototype._processTouchEvent = function (event, callback) {
        if (callback) {
            callback.call(this._handler, event);
        }
    };
    MouseEventHandler.prototype._processMouseEvent = function (event, callback) {
        if (!callback) {
            return;
        }
        callback.call(this._handler, event);
    };
    MouseEventHandler.prototype._makeCompatEvent = function (event, touch) {
        // TouchEvent has no clientX/Y coordinates:
        // We have to use the last Touch instead
        var eventLike = touch || event;
        var box = this._target.getBoundingClientRect() || { left: 0, top: 0 };
        return {
            clientX: eventLike.clientX,
            clientY: eventLike.clientY,
            pageX: eventLike.pageX,
            pageY: eventLike.pageY,
            screenX: eventLike.screenX,
            screenY: eventLike.screenY,
            localX: (eventLike.clientX - box.left),
            localY: (eventLike.clientY - box.top),
            ctrlKey: event.ctrlKey,
            altKey: event.altKey,
            shiftKey: event.shiftKey,
            metaKey: event.metaKey,
            isTouch: !event.type.startsWith('mouse') && event.type !== 'contextmenu' && event.type !== 'click',
            srcType: event.type,
            target: eventLike.target,
            view: event.view,
            preventDefault: function () {
                if (event.type !== 'touchstart') {
                    // touchstart is passive and cannot be prevented
                    preventDefault(event);
                }
            },
        };
    };
    return MouseEventHandler;
}());
function getBoundingClientRect(element) {
    return element.getBoundingClientRect() || { left: 0, top: 0 };
}
function getDistance(p1, p2) {
    var xDiff = p1.clientX - p2.clientX;
    var yDiff = p1.clientY - p2.clientY;
    return Math.sqrt(xDiff * xDiff + yDiff * yDiff);
}
function preventDefault(event) {
    if (event.cancelable) {
        event.preventDefault();
    }
}
function getPosition(eventLike) {
    return {
        x: eventLike.pageX,
        y: eventLike.pageY,
    };
}
function eventTimeStamp(e) {
    // for some reason e.timestamp is always 0 on iPad with magic mouse, so we use performance.now() as a fallback
    return e.timeStamp || performance.now();
}
function touchWithId(touches, id) {
    for (var i = 0; i < touches.length; ++i) {
        if (touches[i].identifier === id) {
            return touches[i];
        }
    }
    return null;
}

var MAX_COUNT = 200;
var LabelsImageCache = /** @class */ (function () {
    function LabelsImageCache(fontSize, color, fontFamily, fontStyle) {
        this._textWidthCache = new TextWidthCache(MAX_COUNT);
        this._fontSize = 0;
        this._color = '';
        this._font = '';
        this._keys = [];
        this._hash = new Map();
        this._fontSize = fontSize;
        this._color = color;
        this._font = makeFont(fontSize, fontFamily, fontStyle);
    }
    LabelsImageCache.prototype.destroy = function () {
        this._textWidthCache.reset();
        this._keys = [];
        this._hash.clear();
    };
    LabelsImageCache.prototype.paintTo = function (ctx, text, x, y, align) {
        var label = this._getLabelImage(ctx, text);
        if (align !== 'left') {
            var pixelRatio = getCanvasDevicePixelRatio(ctx.canvas);
            x -= Math.floor(label.textWidth * pixelRatio);
        }
        y -= Math.floor(label.height / 2);
        ctx.drawImage(label.canvas, x, y, label.width, label.height);
    };
    LabelsImageCache.prototype._getLabelImage = function (ctx, text) {
        var _this = this;
        var item;
        if (this._hash.has(text)) {
            // Cache hit!
            item = ensureDefined(this._hash.get(text));
        }
        else {
            if (this._keys.length >= MAX_COUNT) {
                var key = ensureDefined(this._keys.shift());
                this._hash.delete(key);
            }
            var pixelRatio = getCanvasDevicePixelRatio(ctx.canvas);
            var margin_1 = Math.ceil(this._fontSize / 4.5);
            var baselineOffset_1 = Math.round(this._fontSize / 10);
            var textWidth = Math.ceil(this._textWidthCache.measureText(ctx, text));
            var width = ceiledEven(Math.round(textWidth + margin_1 * 2));
            var height_1 = ceiledEven(this._fontSize + margin_1 * 2);
            var canvas = createPreconfiguredCanvas(document, new Size(width, height_1));
            // Allocate new
            item = {
                text: text,
                textWidth: Math.round(Math.max(1, textWidth)),
                width: Math.ceil(width * pixelRatio),
                height: Math.ceil(height_1 * pixelRatio),
                canvas: canvas,
            };
            if (textWidth !== 0) {
                this._keys.push(item.text);
                this._hash.set(item.text, item);
            }
            ctx = getContext2D(item.canvas);
            drawScaled(ctx, pixelRatio, function () {
                ctx.font = _this._font;
                ctx.fillStyle = _this._color;
                ctx.fillText(text, 0, height_1 - margin_1 - baselineOffset_1);
            });
        }
        return item;
    };
    return LabelsImageCache;
}());

var CursorType$1;
(function (CursorType) {
    CursorType[CursorType["Default"] = 0] = "Default";
    CursorType[CursorType["NsResize"] = 1] = "NsResize";
    CursorType[CursorType["Grab"] = 2] = "Grab";
    CursorType[CursorType["Grabbing"] = 3] = "Grabbing";
})(CursorType$1 || (CursorType$1 = {}));
var Constants$3;
(function (Constants) {
    Constants[Constants["DefaultOptimalWidth"] = 34] = "DefaultOptimalWidth";
})(Constants$3 || (Constants$3 = {}));
var PriceAxisWidget = /** @class */ (function () {
    function PriceAxisWidget(pane, options, rendererOptionsProvider, side) {
        var _this = this;
        this._priceScale = null;
        this._size = null;
        this._mousedown = false;
        this._mouseDraggingCustomPriceLine = null;
        this._mouseDragFromPriceString = '';
        this._widthCache = new TextWidthCache(50);
        this._tickMarksCache = new LabelsImageCache(11, '#000');
        this._color = null;
        this._font = null;
        this._prevOptimalWidth = 0;
        this._isSettingSize = false;
        this._canvasConfiguredHandler = function () {
            _this._recreateTickMarksCache(_this._rendererOptionsProvider.options());
            if (!_this._isSettingSize) {
                _this._pane.chart().model().lightUpdate();
            }
        };
        this._topCanvasConfiguredHandler = function () {
            if (_this._isSettingSize) {
                return;
            }
            _this._pane.chart().model().lightUpdate();
        };
        this._pane = pane;
        this._options = options;
        this._rendererOptionsProvider = rendererOptionsProvider;
        this._isLeft = side === 'left';
        this._cell = document.createElement('div');
        this._cell.style.height = '100%';
        this._cell.style.overflow = 'hidden';
        this._cell.style.width = '25px';
        this._cell.style.left = '0';
        this._cell.style.position = 'relative';
        this._canvasBinding = createBoundCanvas(this._cell, new Size(16, 16));
        this._canvasBinding.subscribeCanvasConfigured(this._canvasConfiguredHandler);
        var canvas = this._canvasBinding.canvas;
        canvas.style.position = 'absolute';
        canvas.style.zIndex = '1';
        canvas.style.left = '0';
        canvas.style.top = '0';
        this._topCanvasBinding = createBoundCanvas(this._cell, new Size(16, 16));
        this._topCanvasBinding.subscribeCanvasConfigured(this._topCanvasConfiguredHandler);
        var topCanvas = this._topCanvasBinding.canvas;
        topCanvas.style.position = 'absolute';
        topCanvas.style.zIndex = '2';
        topCanvas.style.left = '0';
        topCanvas.style.top = '0';
        var handler = {
            mouseMoveEvent: this._mouseMoveEvent.bind(this),
            mouseDownEvent: this._mouseDownEvent.bind(this),
            touchStartEvent: this._mouseDownEvent.bind(this),
            pressedMouseMoveEvent: this._pressedMouseMoveEvent.bind(this),
            touchMoveEvent: this._pressedMouseMoveEvent.bind(this),
            mouseDownOutsideEvent: this._mouseDownOutsideEvent.bind(this),
            mouseUpEvent: this._mouseUpEvent.bind(this),
            touchEndEvent: this._mouseUpEvent.bind(this),
            mouseDoubleClickEvent: this._mouseDoubleClickEvent.bind(this),
            doubleTapEvent: this._mouseDoubleClickEvent.bind(this),
            mouseEnterEvent: this._mouseEnterEvent.bind(this),
            mouseLeaveEvent: this._mouseLeaveEvent.bind(this),
        };
        this._mouseEventHandler = new MouseEventHandler(this._topCanvasBinding.canvas, handler, {
            treatVertTouchDragAsPageScroll: function () { return false; },
            treatHorzTouchDragAsPageScroll: function () { return true; },
        });
    }
    PriceAxisWidget.prototype.destroy = function () {
        this._mouseEventHandler.destroy();
        this._topCanvasBinding.unsubscribeCanvasConfigured(this._topCanvasConfiguredHandler);
        this._topCanvasBinding.destroy();
        this._canvasBinding.unsubscribeCanvasConfigured(this._canvasConfiguredHandler);
        this._canvasBinding.destroy();
        if (this._priceScale !== null) {
            this._priceScale.onMarksChanged().unsubscribeAll(this);
        }
        this._priceScale = null;
        this._tickMarksCache.destroy();
    };
    PriceAxisWidget.prototype.getElement = function () {
        return this._cell;
    };
    PriceAxisWidget.prototype.lineColor = function () {
        return ensureNotNull(this._priceScale).options().borderColor;
    };
    PriceAxisWidget.prototype.textColor = function () {
        return this._options.textColor;
    };
    PriceAxisWidget.prototype.fontSize = function () {
        return this._options.fontSize;
    };
    PriceAxisWidget.prototype.baseFont = function () {
        return makeFont(this.fontSize(), this._options.fontFamily);
    };
    PriceAxisWidget.prototype.rendererOptions = function () {
        var options = this._rendererOptionsProvider.options();
        var isColorChanged = this._color !== options.color;
        var isFontChanged = this._font !== options.font;
        if (isColorChanged || isFontChanged) {
            this._recreateTickMarksCache(options);
            this._color = options.color;
        }
        if (isFontChanged) {
            this._widthCache.reset();
            this._font = options.font;
        }
        return options;
    };
    PriceAxisWidget.prototype.optimalWidth = function () {
        if (this._priceScale === null) {
            return 0;
        }
        var tickMarkMaxWidth = 0;
        var rendererOptions = this.rendererOptions();
        var ctx = getContext2D(this._canvasBinding.canvas);
        var tickMarks = this._priceScale.marks();
        ctx.font = this.baseFont();
        if (tickMarks.length > 0) {
            tickMarkMaxWidth = Math.max(this._widthCache.measureText(ctx, tickMarks[0].label), this._widthCache.measureText(ctx, tickMarks[tickMarks.length - 1].label));
        }
        var views = this._backLabels();
        for (var j = views.length; j--;) {
            var width = this._widthCache.measureText(ctx, views[j].text());
            if (width > tickMarkMaxWidth) {
                tickMarkMaxWidth = width;
            }
        }
        var firstValue = this._priceScale.firstValue();
        if (firstValue !== null && this._size !== null) {
            var topValue = this._priceScale.coordinateToPrice(1, firstValue);
            var bottomValue = this._priceScale.coordinateToPrice(this._size.h - 2, firstValue);
            tickMarkMaxWidth = Math.max(tickMarkMaxWidth, this._widthCache.measureText(ctx, this._priceScale.formatPrice(Math.floor(Math.min(topValue, bottomValue)) + 0.11111111111111, firstValue)), this._widthCache.measureText(ctx, this._priceScale.formatPrice(Math.ceil(Math.max(topValue, bottomValue)) - 0.11111111111111, firstValue)));
        }
        var resultTickMarksMaxWidth = Math.max(tickMarkMaxWidth || 34 /* Constants.DefaultOptimalWidth */, rendererOptions.width);
        var res = Math.ceil(rendererOptions.borderSize +
            rendererOptions.tickLength +
            rendererOptions.paddingInner +
            rendererOptions.paddingOuter +
            resultTickMarksMaxWidth);
        // make it even
        res += res % 2;
        return res;
    };
    PriceAxisWidget.prototype.setSize = function (size) {
        if (size.w < 0 || size.h < 0) {
            throw new Error('Try to set invalid size to PriceAxisWidget ' + JSON.stringify(size));
        }
        if (this._size === null || !this._size.equals(size)) {
            this._size = size;
            this._isSettingSize = true;
            this._canvasBinding.resizeCanvas({ width: size.w, height: size.h });
            this._topCanvasBinding.resizeCanvas({ width: size.w, height: size.h });
            this._isSettingSize = false;
            this._cell.style.width = size.w + 'px';
            // need this for IE11
            this._cell.style.height = size.h + 'px';
            this._cell.style.minWidth = size.w + 'px'; // for right calculate position of .pane-legend
        }
    };
    PriceAxisWidget.prototype.getWidth = function () {
        return ensureNotNull(this._size).w;
    };
    PriceAxisWidget.prototype.setPriceScale = function (priceScale) {
        if (this._priceScale === priceScale) {
            return;
        }
        if (this._priceScale !== null) {
            this._priceScale.onMarksChanged().unsubscribeAll(this);
        }
        this._priceScale = priceScale;
        priceScale.onMarksChanged().subscribe(this._onMarksChanged.bind(this), this);
    };
    PriceAxisWidget.prototype.priceScale = function () {
        return this._priceScale;
    };
    PriceAxisWidget.prototype.reset = function () {
        var pane = this._pane.state();
        var model = this._pane.chart().model();
        model.resetPriceScale(pane, ensureNotNull(this.priceScale()));
    };
    PriceAxisWidget.prototype.paint = function (type) {
        if (this._size === null) {
            return;
        }
        if (type !== 1 /* InvalidationLevel.Cursor */) {
            var ctx = getContext2D(this._canvasBinding.canvas);
            this._alignLabels();
            this._drawBackground(ctx, this._canvasBinding.pixelRatio);
            this._drawBorder(ctx, this._canvasBinding.pixelRatio);
            this._drawTickMarks(ctx, this._canvasBinding.pixelRatio);
            this._drawBackLabels(ctx, this._canvasBinding.pixelRatio);
        }
        var topCtx = getContext2D(this._topCanvasBinding.canvas);
        var width = this._size.w;
        var height = this._size.h;
        drawScaled(topCtx, this._topCanvasBinding.pixelRatio, function () {
            topCtx.clearRect(0, 0, width, height);
        });
        this._drawCrosshairLabel(topCtx, this._topCanvasBinding.pixelRatio);
    };
    PriceAxisWidget.prototype.getImage = function () {
        return this._canvasBinding.canvas;
    };
    PriceAxisWidget.prototype.update = function () {
        var _a;
        // this call has side-effect - it regenerates marks on the price scale
        (_a = this._priceScale) === null || _a === void 0 ? void 0 : _a.marks();
    };
    PriceAxisWidget.prototype._getDraggableCustomPriceLines = function () {
        var lines = [];
        for (var _i = 0, _a = this._pane.state().orderedSources(); _i < _a.length; _i++) {
            var source = _a[_i];
            if (source instanceof Series) {
                lines.push.apply(lines, source.customPriceLines().filter(function (line) { return line.options().draggable && line.priceAxisView().isAxisLabelVisible(); }));
            }
        }
        return lines;
    };
    PriceAxisWidget.prototype._mouseHoveredCustomPriceLine = function (y) {
        var rendererOptions = this.rendererOptions();
        for (var _i = 0, _a = this._getDraggableCustomPriceLines(); _i < _a.length; _i++) {
            var customPriceLine = _a[_i];
            var view = customPriceLine.priceAxisView();
            var height = view.height(rendererOptions, false);
            var fixedCoordinate = view.getFixedCoordinate();
            if (fixedCoordinate - height / 2 <= y && y <= fixedCoordinate + height / 2) {
                return customPriceLine;
            }
        }
        return null;
    };
    PriceAxisWidget.prototype._mouseMoveEvent = function (e) {
        if (this._mouseHoveredCustomPriceLine(e.localY) !== null) {
            this._setCursor(2 /* CursorType.Grab */);
        }
        else {
            this._setCursor(1 /* CursorType.NsResize */);
        }
    };
    PriceAxisWidget.prototype._mouseDownEvent = function (e) {
        if (this._priceScale === null || this._priceScale.isEmpty()) {
            return;
        }
        this._mousedown = true;
        var hoveredCustomPriceLine = this._mouseHoveredCustomPriceLine(e.localY);
        if (hoveredCustomPriceLine) {
            this._mouseDraggingCustomPriceLine = hoveredCustomPriceLine;
            var price = hoveredCustomPriceLine.options().price;
            var firstValue = ensureNotNull(this._priceScale.firstValue());
            this._mouseDragFromPriceString = this._priceScale.formatPrice(price, firstValue);
            this._setCursor(3 /* CursorType.Grabbing */);
            return;
        }
        if (!this._pane.chart().options().handleScale.axisPressedMouseMove.price) {
            return;
        }
        var model = this._pane.chart().model();
        var pane = this._pane.state();
        model.startScalePrice(pane, this._priceScale, e.localY);
    };
    PriceAxisWidget.prototype._pressedMouseMoveEvent = function (e) {
        if (this._priceScale === null) {
            return;
        }
        var priceScale = this._priceScale;
        if (this._mouseDraggingCustomPriceLine) {
            var firstValue = ensureNotNull(priceScale.firstValue());
            var price = priceScale.coordinateToPrice(e.localY, firstValue);
            this._mouseDraggingCustomPriceLine.applyOptions({ price: price });
            return;
        }
        if (!this._pane.chart().options().handleScale.axisPressedMouseMove.price) {
            return;
        }
        var model = this._pane.chart().model();
        var pane = this._pane.state();
        model.scalePriceTo(pane, priceScale, e.localY);
    };
    PriceAxisWidget.prototype._mouseDownOutsideEvent = function () {
        if (this._priceScale === null) {
            return;
        }
        if (this._mousedown) {
            this._mousedown = false;
            this._mouseDraggingCustomPriceLine = null;
            this._mouseDragFromPriceString = '';
            if (!this._pane.chart().options().handleScale.axisPressedMouseMove.price) {
                return;
            }
            var model = this._pane.chart().model();
            var pane = this._pane.state();
            var priceScale = this._priceScale;
            model.endScalePrice(pane, priceScale);
        }
    };
    PriceAxisWidget.prototype._mouseUpEvent = function (e) {
        if (this._priceScale === null) {
            return;
        }
        var model = this._pane.chart().model();
        this._mousedown = false;
        if (this._mouseDraggingCustomPriceLine) {
            model.fireCustomPriceLineDragged(this._mouseDraggingCustomPriceLine, this._mouseDragFromPriceString);
            this._mouseDraggingCustomPriceLine = null;
            this._mouseDragFromPriceString = '';
            this._setCursor(2 /* CursorType.Grab */);
            return;
        }
        if (!this._pane.chart().options().handleScale.axisPressedMouseMove.price) {
            return;
        }
        var pane = this._pane.state();
        model.endScalePrice(pane, this._priceScale);
    };
    PriceAxisWidget.prototype._mouseDoubleClickEvent = function (e) {
        if (this._mouseHoveredCustomPriceLine(e.localY) !== null) {
            return;
        }
        if (this._pane.chart().options().handleScale.axisDoubleClickReset) {
            this.reset();
        }
    };
    PriceAxisWidget.prototype._mouseEnterEvent = function (e) {
        if (this._priceScale === null) {
            return;
        }
        if (this._mouseDraggingCustomPriceLine !== null) {
            this._setCursor(3 /* CursorType.Grabbing */);
            return;
        }
        if (this._mouseHoveredCustomPriceLine(e.localY) !== null) {
            this._setCursor(2 /* CursorType.Grab */);
            return;
        }
        var model = this._pane.chart().model();
        if (model.options().handleScale.axisPressedMouseMove.price && !this._priceScale.isPercentage() && !this._priceScale.isIndexedTo100()) {
            this._setCursor(1 /* CursorType.NsResize */);
        }
    };
    PriceAxisWidget.prototype._mouseLeaveEvent = function (e) {
        this._setCursor(0 /* CursorType.Default */);
    };
    PriceAxisWidget.prototype._backLabels = function () {
        var _this = this;
        var res = [];
        var priceScale = (this._priceScale === null) ? undefined : this._priceScale;
        var addViewsForSources = function (sources) {
            for (var i = 0; i < sources.length; ++i) {
                var source = sources[i];
                var views = source.priceAxisViews(_this._pane.state(), priceScale);
                for (var j = 0; j < views.length; j++) {
                    res.push(views[j]);
                }
            }
        };
        // calculate max and min coordinates for views on selection
        // crosshair individually
        addViewsForSources(this._pane.state().orderedSources());
        return res;
    };
    PriceAxisWidget.prototype._drawBackground = function (ctx, pixelRatio) {
        var _this = this;
        if (this._size === null) {
            return;
        }
        var width = this._size.w;
        var height = this._size.h;
        drawScaled(ctx, pixelRatio, function () {
            var model = _this._pane.state().model();
            var topColor = model.backgroundTopColor();
            var bottomColor = model.backgroundBottomColor();
            if (topColor === bottomColor) {
                clearRect(ctx, 0, 0, width, height, topColor);
            }
            else {
                clearRectWithGradient(ctx, 0, 0, width, height, topColor, bottomColor);
            }
        });
    };
    PriceAxisWidget.prototype._drawBorder = function (ctx, pixelRatio) {
        if (this._size === null || this._priceScale === null || !this._priceScale.options().borderVisible) {
            return;
        }
        ctx.save();
        ctx.fillStyle = this.lineColor();
        var borderSize = Math.max(1, Math.floor(this.rendererOptions().borderSize * pixelRatio));
        var left;
        if (this._isLeft) {
            left = Math.floor(this._size.w * pixelRatio) - borderSize;
        }
        else {
            left = 0;
        }
        ctx.fillRect(left, 0, borderSize, Math.ceil(this._size.h * pixelRatio));
        ctx.restore();
    };
    PriceAxisWidget.prototype._drawTickMarks = function (ctx, pixelRatio) {
        if (this._size === null || this._priceScale === null) {
            return;
        }
        var tickMarks = this._priceScale.marks();
        ctx.save();
        ctx.strokeStyle = this.lineColor();
        ctx.font = this.baseFont();
        ctx.fillStyle = this.lineColor();
        var rendererOptions = this.rendererOptions();
        var drawTicks = this._priceScale.options().borderVisible && this._priceScale.options().drawTicks;
        var tickMarkLeftX = this._isLeft ?
            Math.floor((this._size.w - rendererOptions.tickLength) * pixelRatio - rendererOptions.borderSize * pixelRatio) :
            Math.floor(rendererOptions.borderSize * pixelRatio);
        var textLeftX = this._isLeft ?
            Math.round(tickMarkLeftX - rendererOptions.paddingInner * pixelRatio) :
            Math.round(tickMarkLeftX + rendererOptions.tickLength * pixelRatio + rendererOptions.paddingInner * pixelRatio);
        var textAlign = this._isLeft ? 'right' : 'left';
        var tickHeight = Math.max(1, Math.floor(pixelRatio));
        var tickOffset = Math.floor(pixelRatio * 0.5);
        if (drawTicks) {
            var tickLength = Math.round(rendererOptions.tickLength * pixelRatio);
            ctx.beginPath();
            for (var _i = 0, tickMarks_1 = tickMarks; _i < tickMarks_1.length; _i++) {
                var tickMark = tickMarks_1[_i];
                ctx.rect(tickMarkLeftX, Math.round(tickMark.coord * pixelRatio) - tickOffset, tickLength, tickHeight);
            }
            ctx.fill();
        }
        ctx.fillStyle = this.textColor();
        for (var _a = 0, tickMarks_2 = tickMarks; _a < tickMarks_2.length; _a++) {
            var tickMark = tickMarks_2[_a];
            this._tickMarksCache.paintTo(ctx, tickMark.label, textLeftX, Math.round(tickMark.coord * pixelRatio), textAlign);
        }
        ctx.restore();
    };
    PriceAxisWidget.prototype._alignLabels = function () {
        if (this._size === null || this._priceScale === null) {
            return;
        }
        var center = this._size.h / 2;
        var views = [];
        var orderedSources = this._priceScale.orderedSources().slice(); // Copy of array
        var pane = this._pane;
        var paneState = pane.state();
        var rendererOptions = this.rendererOptions();
        // if we are default price scale, append labels from no-scale
        var isDefault = this._priceScale === paneState.defaultVisiblePriceScale();
        if (isDefault) {
            this._pane.state().orderedSources().forEach(function (source) {
                if (paneState.isOverlay(source)) {
                    orderedSources.push(source);
                }
            });
        }
        // we can use any, but let's use the first source as "center" one
        var centerSource = this._priceScale.dataSources()[0];
        var priceScale = this._priceScale;
        var updateForSources = function (sources) {
            sources.forEach(function (source) {
                var sourceViews = source.priceAxisViews(paneState, priceScale);
                // never align selected sources
                sourceViews.forEach(function (view) {
                    view.setFixedCoordinate(null);
                    if (view.isVisible()) {
                        views.push(view);
                    }
                });
                if (centerSource === source && sourceViews.length > 0) {
                    center = sourceViews[0].coordinate();
                }
            });
        };
        // crosshair individually
        updateForSources(orderedSources);
        // split into two parts
        var top = views.filter(function (view) { return view.coordinate() <= center; });
        var bottom = views.filter(function (view) { return view.coordinate() > center; });
        // sort top from center to top
        top.sort(function (l, r) { return r.coordinate() - l.coordinate(); });
        // share center label
        if (top.length && bottom.length) {
            bottom.push(top[0]);
        }
        bottom.sort(function (l, r) { return l.coordinate() - r.coordinate(); });
        views.forEach(function (view) { return view.setFixedCoordinate(view.coordinate()); });
        var options = this._priceScale.options();
        if (!options.alignLabels) {
            return;
        }
        for (var i = 1; i < top.length; i++) {
            var view = top[i];
            var prev = top[i - 1];
            var height = prev.height(rendererOptions, false);
            var coordinate = view.coordinate();
            var prevFixedCoordinate = prev.getFixedCoordinate();
            if (coordinate > prevFixedCoordinate - height) {
                view.setFixedCoordinate(prevFixedCoordinate - height);
            }
        }
        for (var j = 1; j < bottom.length; j++) {
            var view = bottom[j];
            var prev = bottom[j - 1];
            var height = prev.height(rendererOptions, true);
            var coordinate = view.coordinate();
            var prevFixedCoordinate = prev.getFixedCoordinate();
            if (coordinate < prevFixedCoordinate + height) {
                view.setFixedCoordinate(prevFixedCoordinate + height);
            }
        }
    };
    PriceAxisWidget.prototype._drawBackLabels = function (ctx, pixelRatio) {
        var _this = this;
        if (this._size === null) {
            return;
        }
        ctx.save();
        var size = this._size;
        var views = this._backLabels();
        var rendererOptions = this.rendererOptions();
        var align = this._isLeft ? 'right' : 'left';
        views.forEach(function (view) {
            if (view.isAxisLabelVisible()) {
                var renderer = view.renderer(ensureNotNull(_this._priceScale));
                ctx.save();
                renderer.draw(ctx, rendererOptions, _this._widthCache, size.w, align, pixelRatio);
                ctx.restore();
            }
        });
        ctx.restore();
    };
    PriceAxisWidget.prototype._drawCrosshairLabel = function (ctx, pixelRatio) {
        var _this = this;
        if (this._size === null || this._priceScale === null) {
            return;
        }
        ctx.save();
        var size = this._size;
        var model = this._pane.chart().model();
        var views = []; // array of arrays
        var pane = this._pane.state();
        var v = model.crosshairSource().priceAxisViews(pane, this._priceScale);
        if (v.length) {
            views.push(v);
        }
        var ro = this.rendererOptions();
        var align = this._isLeft ? 'right' : 'left';
        views.forEach(function (arr) {
            arr.forEach(function (view) {
                ctx.save();
                view.renderer(ensureNotNull(_this._priceScale)).draw(ctx, ro, _this._widthCache, size.w, align, pixelRatio);
                ctx.restore();
            });
        });
        ctx.restore();
    };
    PriceAxisWidget.prototype._setCursor = function (type) {
        var cursor = 'default';
        if (type === 1 /* CursorType.NsResize */) {
            cursor = 'ns-resize';
        }
        else if (type === 2 /* CursorType.Grab */) {
            cursor = 'grab';
        }
        else if (type === 3 /* CursorType.Grabbing */) {
            cursor = 'grabbing';
        }
        this._cell.style.cursor = cursor;
    };
    PriceAxisWidget.prototype._onMarksChanged = function () {
        var width = this.optimalWidth();
        // avoid price scale is shrunk
        // using < instead !== to avoid infinite changes
        if (this._prevOptimalWidth < width) {
            this._pane.chart().model().fullUpdate();
        }
        this._prevOptimalWidth = width;
    };
    PriceAxisWidget.prototype._recreateTickMarksCache = function (options) {
        this._tickMarksCache.destroy();
        this._tickMarksCache = new LabelsImageCache(options.fontSize, options.color, options.fontFamily);
    };
    return PriceAxisWidget;
}());

var Constants$2;
(function (Constants) {
    Constants[Constants["MinScrollSpeed"] = 0.2] = "MinScrollSpeed";
    Constants[Constants["MaxScrollSpeed"] = 7] = "MaxScrollSpeed";
    Constants[Constants["DumpingCoeff"] = 0.997] = "DumpingCoeff";
    Constants[Constants["ScrollMinMove"] = 15] = "ScrollMinMove";
})(Constants$2 || (Constants$2 = {}));
function drawBackground(renderer, ctx, pixelRatio, isHovered, hitTestData) {
    if (renderer.drawBackground) {
        renderer.drawBackground(ctx, pixelRatio, isHovered, hitTestData);
    }
}
function drawForeground(renderer, ctx, pixelRatio, isHovered, hitTestData) {
    renderer.draw(ctx, pixelRatio, isHovered, hitTestData);
}
function sourcePaneViews(source, pane) {
    return source.paneViews(pane);
}
function sourceTopPaneViews(source, pane) {
    return source.topPaneViews !== undefined ? source.topPaneViews(pane) : [];
}
var PaneWidget = /** @class */ (function () {
    function PaneWidget(chart, state) {
        var _this = this;
        this._size = new Size(0, 0);
        this._leftPriceAxisWidget = null;
        this._rightPriceAxisWidget = null;
        this._startScrollingPos = null;
        this._isScrolling = false;
        this._clicked = new Delegate();
        this._prevPinchScale = 0;
        this._longTap = false;
        this._startTrackPoint = null;
        this._exitTrackingModeOnNextTry = false;
        this._initCrosshairPosition = null;
        this._scrollXAnimation = null;
        this._isSettingSize = false;
        this._canvasConfiguredHandler = function () {
            if (_this._isSettingSize || _this._state === null) {
                return;
            }
            _this._model().lightUpdate();
        };
        this._topCanvasConfiguredHandler = function () {
            if (_this._isSettingSize || _this._state === null) {
                return;
            }
            _this._model().lightUpdate();
        };
        this._chart = chart;
        this._state = state;
        this._state.onDestroyed().subscribe(this._onStateDestroyed.bind(this), this, true);
        this._paneCell = document.createElement('td');
        this._paneCell.style.padding = '0';
        this._paneCell.style.position = 'relative';
        var paneWrapper = document.createElement('div');
        paneWrapper.style.width = '100%';
        paneWrapper.style.height = '100%';
        paneWrapper.style.position = 'relative';
        paneWrapper.style.overflow = 'hidden';
        this._leftAxisCell = document.createElement('td');
        this._leftAxisCell.style.padding = '0';
        this._rightAxisCell = document.createElement('td');
        this._rightAxisCell.style.padding = '0';
        this._paneCell.appendChild(paneWrapper);
        this._canvasBinding = createBoundCanvas(paneWrapper, new Size(16, 16));
        this._canvasBinding.subscribeCanvasConfigured(this._canvasConfiguredHandler);
        var canvas = this._canvasBinding.canvas;
        canvas.style.position = 'absolute';
        canvas.style.zIndex = '1';
        canvas.style.left = '0';
        canvas.style.top = '0';
        this._topCanvasBinding = createBoundCanvas(paneWrapper, new Size(16, 16));
        this._topCanvasBinding.subscribeCanvasConfigured(this._topCanvasConfiguredHandler);
        var topCanvas = this._topCanvasBinding.canvas;
        topCanvas.style.position = 'absolute';
        topCanvas.style.zIndex = '2';
        topCanvas.style.left = '0';
        topCanvas.style.top = '0';
        this._rowElement = document.createElement('tr');
        this._rowElement.appendChild(this._leftAxisCell);
        this._rowElement.appendChild(this._paneCell);
        this._rowElement.appendChild(this._rightAxisCell);
        this.updatePriceAxisWidgetsStates();
        this._mouseEventHandler = new MouseEventHandler(this._topCanvasBinding.canvas, this, {
            treatVertTouchDragAsPageScroll: function () { return _this._startTrackPoint === null && !_this._chart.options().handleScroll.vertTouchDrag; },
            treatHorzTouchDragAsPageScroll: function () { return _this._startTrackPoint === null && !_this._chart.options().handleScroll.horzTouchDrag; },
        });
    }
    PaneWidget.prototype.destroy = function () {
        if (this._leftPriceAxisWidget !== null) {
            this._leftPriceAxisWidget.destroy();
        }
        if (this._rightPriceAxisWidget !== null) {
            this._rightPriceAxisWidget.destroy();
        }
        this._topCanvasBinding.unsubscribeCanvasConfigured(this._topCanvasConfiguredHandler);
        this._topCanvasBinding.destroy();
        this._canvasBinding.unsubscribeCanvasConfigured(this._canvasConfiguredHandler);
        this._canvasBinding.destroy();
        if (this._state !== null) {
            this._state.onDestroyed().unsubscribeAll(this);
        }
        this._mouseEventHandler.destroy();
    };
    PaneWidget.prototype.state = function () {
        return ensureNotNull(this._state);
    };
    PaneWidget.prototype.setState = function (pane) {
        if (this._state !== null) {
            this._state.onDestroyed().unsubscribeAll(this);
        }
        this._state = pane;
        if (this._state !== null) {
            this._state.onDestroyed().subscribe(PaneWidget.prototype._onStateDestroyed.bind(this), this, true);
        }
        this.updatePriceAxisWidgetsStates();
    };
    PaneWidget.prototype.chart = function () {
        return this._chart;
    };
    PaneWidget.prototype.getElement = function () {
        return this._rowElement;
    };
    PaneWidget.prototype.updatePriceAxisWidgetsStates = function () {
        if (this._state === null) {
            return;
        }
        this._recreatePriceAxisWidgets();
        if (this._model().serieses().length === 0) {
            return;
        }
        if (this._leftPriceAxisWidget !== null) {
            var leftPriceScale = this._state.leftPriceScale();
            this._leftPriceAxisWidget.setPriceScale(ensureNotNull(leftPriceScale));
        }
        if (this._rightPriceAxisWidget !== null) {
            var rightPriceScale = this._state.rightPriceScale();
            this._rightPriceAxisWidget.setPriceScale(ensureNotNull(rightPriceScale));
        }
    };
    PaneWidget.prototype.updatePriceAxisWidgets = function () {
        if (this._leftPriceAxisWidget !== null) {
            this._leftPriceAxisWidget.update();
        }
        if (this._rightPriceAxisWidget !== null) {
            this._rightPriceAxisWidget.update();
        }
    };
    PaneWidget.prototype.stretchFactor = function () {
        return this._state !== null ? this._state.stretchFactor() : 0;
    };
    PaneWidget.prototype.setStretchFactor = function (stretchFactor) {
        if (this._state) {
            this._state.setStretchFactor(stretchFactor);
        }
    };
    PaneWidget.prototype.mouseEnterEvent = function (event) {
        if (!this._state) {
            return;
        }
        this._onMouseEvent();
        var x = event.localX;
        var y = event.localY;
        this._setCrosshairPosition(x, y);
    };
    PaneWidget.prototype.mouseDownEvent = function (event) {
        this._onMouseEvent();
        this._mouseTouchDownEvent();
        this._setCrosshairPosition(event.localX, event.localY);
    };
    PaneWidget.prototype.mouseMoveEvent = function (event) {
        if (!this._state) {
            return;
        }
        this._onMouseEvent();
        var x = event.localX;
        var y = event.localY;
        this._setCrosshairPosition(x, y);
        var hitTest = this.hitTest(x, y);
        this._model().setHoveredSource(hitTest && { source: hitTest.source, object: hitTest.object });
    };
    PaneWidget.prototype.mouseClickEvent = function (event) {
        if (this._state === null) {
            return;
        }
        this._onMouseEvent();
        var x = event.localX;
        var y = event.localY;
        if (this._clicked.hasListeners()) {
            var currentTime = this._model().crosshairSource().appliedIndex();
            this._clicked.fire(currentTime, { x: x, y: y });
        }
    };
    PaneWidget.prototype.pressedMouseMoveEvent = function (event) {
        this._onMouseEvent();
        this._pressedMouseTouchMoveEvent(event);
        this._setCrosshairPosition(event.localX, event.localY);
    };
    PaneWidget.prototype.mouseUpEvent = function (event) {
        if (this._state === null) {
            return;
        }
        this._onMouseEvent();
        this._longTap = false;
        this._endScroll(event);
    };
    PaneWidget.prototype.longTapEvent = function (event) {
        this._longTap = true;
        if (this._startTrackPoint === null) {
            var point = { x: event.localX, y: event.localY };
            this._startTrackingMode(point, point);
        }
    };
    PaneWidget.prototype.mouseLeaveEvent = function (event) {
        if (this._state === null) {
            return;
        }
        this._onMouseEvent();
        this._state.model().setHoveredSource(null);
        this._clearCrosshairPosition();
    };
    PaneWidget.prototype.clicked = function () {
        return this._clicked;
    };
    PaneWidget.prototype.pinchStartEvent = function () {
        this._prevPinchScale = 1;
        this._terminateKineticAnimation();
    };
    PaneWidget.prototype.pinchEvent = function (middlePoint, scale) {
        if (!this._chart.options().handleScale.pinch) {
            return;
        }
        var zoomScale = (scale - this._prevPinchScale) * 5;
        this._prevPinchScale = scale;
        this._model().zoomTime(middlePoint.x, zoomScale);
    };
    PaneWidget.prototype.touchStartEvent = function (event) {
        this._longTap = false;
        this._exitTrackingModeOnNextTry = this._startTrackPoint !== null;
        this._mouseTouchDownEvent();
        if (this._startTrackPoint !== null) {
            var crosshair = this._model().crosshairSource();
            this._initCrosshairPosition = { x: crosshair.appliedX(), y: crosshair.appliedY() };
            this._startTrackPoint = { x: event.localX, y: event.localY };
        }
    };
    PaneWidget.prototype.touchMoveEvent = function (event) {
        if (this._state === null) {
            return;
        }
        var x = event.localX;
        var y = event.localY;
        if (this._startTrackPoint !== null) {
            // tracking mode: move crosshair
            this._exitTrackingModeOnNextTry = false;
            var origPoint = ensureNotNull(this._initCrosshairPosition);
            var newX = origPoint.x + (x - this._startTrackPoint.x);
            var newY = origPoint.y + (y - this._startTrackPoint.y);
            this._setCrosshairPosition(newX, newY);
            return;
        }
        this._pressedMouseTouchMoveEvent(event);
    };
    PaneWidget.prototype.touchEndEvent = function (event) {
        if (this.chart().options().trackingMode.exitMode === 0 /* TrackingModeExitMode.OnTouchEnd */) {
            this._exitTrackingModeOnNextTry = true;
        }
        this._tryExitTrackingMode();
        this._endScroll(event);
    };
    PaneWidget.prototype.hitTest = function (x, y) {
        var state = this._state;
        if (state === null) {
            return null;
        }
        var sources = state.orderedSources();
        for (var _i = 0, sources_1 = sources; _i < sources_1.length; _i++) {
            var source = sources_1[_i];
            var sourceResult = this._hitTestPaneView(source.paneViews(state), x, y);
            if (sourceResult !== null) {
                return {
                    source: source,
                    view: sourceResult.view,
                    object: sourceResult.object,
                };
            }
        }
        return null;
    };
    PaneWidget.prototype.setPriceAxisSize = function (width, position) {
        var priceAxisWidget = position === 'left' ? this._leftPriceAxisWidget : this._rightPriceAxisWidget;
        ensureNotNull(priceAxisWidget).setSize(new Size(width, this._size.h));
    };
    PaneWidget.prototype.getSize = function () {
        return this._size;
    };
    PaneWidget.prototype.setSize = function (size) {
        if (size.w < 0 || size.h < 0) {
            throw new Error('Try to set invalid size to PaneWidget ' + JSON.stringify(size));
        }
        if (this._size.equals(size)) {
            return;
        }
        this._size = size;
        this._isSettingSize = true;
        this._canvasBinding.resizeCanvas({ width: size.w, height: size.h });
        this._topCanvasBinding.resizeCanvas({ width: size.w, height: size.h });
        this._isSettingSize = false;
        this._paneCell.style.width = size.w + 'px';
        this._paneCell.style.height = size.h + 'px';
    };
    PaneWidget.prototype.recalculatePriceScales = function () {
        var pane = ensureNotNull(this._state);
        pane.recalculatePriceScale(pane.leftPriceScale());
        pane.recalculatePriceScale(pane.rightPriceScale());
        for (var _i = 0, _a = pane.dataSources(); _i < _a.length; _i++) {
            var source = _a[_i];
            if (pane.isOverlay(source)) {
                var priceScale = source.priceScale();
                if (priceScale !== null) {
                    pane.recalculatePriceScale(priceScale);
                }
                // for overlay drawings price scale is owner's price scale
                // however owner's price scale could not contain ds
                source.updateAllViews();
            }
        }
    };
    PaneWidget.prototype.getImage = function () {
        return this._canvasBinding.canvas;
    };
    PaneWidget.prototype.paint = function (type) {
        if (type === 0 /* InvalidationLevel.None */) {
            return;
        }
        if (this._state === null) {
            return;
        }
        if (type > 1 /* InvalidationLevel.Cursor */) {
            this.recalculatePriceScales();
        }
        if (this._leftPriceAxisWidget !== null) {
            this._leftPriceAxisWidget.paint(type);
        }
        if (this._rightPriceAxisWidget !== null) {
            this._rightPriceAxisWidget.paint(type);
        }
        if (type !== 1 /* InvalidationLevel.Cursor */) {
            var ctx = getContext2D(this._canvasBinding.canvas);
            ctx.save();
            this._drawBackground(ctx, this._canvasBinding.pixelRatio);
            if (this._state) {
                this._drawGrid(ctx, this._canvasBinding.pixelRatio);
                this._drawWatermark(ctx, this._canvasBinding.pixelRatio);
                this._drawSources(ctx, this._canvasBinding.pixelRatio, sourcePaneViews);
            }
            ctx.restore();
        }
        var topCtx = getContext2D(this._topCanvasBinding.canvas);
        topCtx.clearRect(0, 0, Math.ceil(this._size.w * this._topCanvasBinding.pixelRatio), Math.ceil(this._size.h * this._topCanvasBinding.pixelRatio));
        this._drawSources(topCtx, this._canvasBinding.pixelRatio, sourceTopPaneViews);
        this._drawCrosshair(topCtx, this._topCanvasBinding.pixelRatio);
    };
    PaneWidget.prototype.leftPriceAxisWidget = function () {
        return this._leftPriceAxisWidget;
    };
    PaneWidget.prototype.rightPriceAxisWidget = function () {
        return this._rightPriceAxisWidget;
    };
    PaneWidget.prototype._onStateDestroyed = function () {
        if (this._state !== null) {
            this._state.onDestroyed().unsubscribeAll(this);
        }
        this._state = null;
    };
    PaneWidget.prototype._drawBackground = function (ctx, pixelRatio) {
        var _this = this;
        drawScaled(ctx, pixelRatio, function () {
            var model = _this._model();
            var topColor = model.backgroundTopColor();
            var bottomColor = model.backgroundBottomColor();
            if (topColor === bottomColor) {
                clearRect(ctx, 0, 0, _this._size.w, _this._size.h, bottomColor);
            }
            else {
                clearRectWithGradient(ctx, 0, 0, _this._size.w, _this._size.h, topColor, bottomColor);
            }
        });
    };
    PaneWidget.prototype._drawGrid = function (ctx, pixelRatio) {
        var state = ensureNotNull(this._state);
        var paneView = state.grid().paneView();
        var renderer = paneView.renderer(state.height(), state.width());
        if (renderer !== null) {
            ctx.save();
            renderer.draw(ctx, pixelRatio, false);
            ctx.restore();
        }
    };
    PaneWidget.prototype._drawWatermark = function (ctx, pixelRatio) {
        var source = this._model().watermarkSource();
        this._drawSourceImpl(ctx, pixelRatio, sourcePaneViews, drawBackground, source);
        this._drawSourceImpl(ctx, pixelRatio, sourcePaneViews, drawForeground, source);
    };
    PaneWidget.prototype._drawCrosshair = function (ctx, pixelRatio) {
        this._drawSourceImpl(ctx, pixelRatio, sourcePaneViews, drawForeground, this._model().crosshairSource());
    };
    PaneWidget.prototype._drawSources = function (ctx, pixelRatio, paneViewsGetter) {
        var state = ensureNotNull(this._state);
        var sources = state.orderedSources();
        for (var _i = 0, sources_2 = sources; _i < sources_2.length; _i++) {
            var source = sources_2[_i];
            this._drawSourceImpl(ctx, pixelRatio, paneViewsGetter, drawBackground, source);
        }
        for (var _a = 0, sources_3 = sources; _a < sources_3.length; _a++) {
            var source = sources_3[_a];
            this._drawSourceImpl(ctx, pixelRatio, paneViewsGetter, drawForeground, source);
        }
    };
    PaneWidget.prototype._drawSourceImpl = function (ctx, pixelRatio, paneViewsGetter, drawFn, source) {
        var state = ensureNotNull(this._state);
        var paneViews = paneViewsGetter(source, state);
        var height = state.height();
        var width = state.width();
        var hoveredSource = state.model().hoveredSource();
        var isHovered = hoveredSource !== null && hoveredSource.source === source;
        var objecId = hoveredSource !== null && isHovered && hoveredSource.object !== undefined
            ? hoveredSource.object.hitTestData
            : undefined;
        for (var _i = 0, paneViews_1 = paneViews; _i < paneViews_1.length; _i++) {
            var paneView = paneViews_1[_i];
            var renderer = paneView.renderer(height, width);
            if (renderer !== null) {
                ctx.save();
                drawFn(renderer, ctx, pixelRatio, isHovered, objecId);
                ctx.restore();
            }
        }
    };
    PaneWidget.prototype._hitTestPaneView = function (paneViews, x, y) {
        for (var _i = 0, paneViews_2 = paneViews; _i < paneViews_2.length; _i++) {
            var paneView = paneViews_2[_i];
            var renderer = paneView.renderer(this._size.h, this._size.w);
            if (renderer !== null && renderer.hitTest) {
                var result = renderer.hitTest(x, y);
                if (result !== null) {
                    return {
                        view: paneView,
                        object: result,
                    };
                }
            }
        }
        return null;
    };
    PaneWidget.prototype._recreatePriceAxisWidgets = function () {
        if (this._state === null) {
            return;
        }
        var chart = this._chart;
        var leftAxisVisible = this._state.leftPriceScale().options().visible;
        var rightAxisVisible = this._state.rightPriceScale().options().visible;
        if (!leftAxisVisible && this._leftPriceAxisWidget !== null) {
            this._leftAxisCell.removeChild(this._leftPriceAxisWidget.getElement());
            this._leftPriceAxisWidget.destroy();
            this._leftPriceAxisWidget = null;
        }
        if (!rightAxisVisible && this._rightPriceAxisWidget !== null) {
            this._rightAxisCell.removeChild(this._rightPriceAxisWidget.getElement());
            this._rightPriceAxisWidget.destroy();
            this._rightPriceAxisWidget = null;
        }
        var rendererOptionsProvider = chart.model().rendererOptionsProvider();
        if (leftAxisVisible && this._leftPriceAxisWidget === null) {
            this._leftPriceAxisWidget = new PriceAxisWidget(this, chart.options().layout, rendererOptionsProvider, 'left');
            this._leftAxisCell.appendChild(this._leftPriceAxisWidget.getElement());
        }
        if (rightAxisVisible && this._rightPriceAxisWidget === null) {
            this._rightPriceAxisWidget = new PriceAxisWidget(this, chart.options().layout, rendererOptionsProvider, 'right');
            this._rightAxisCell.appendChild(this._rightPriceAxisWidget.getElement());
        }
    };
    PaneWidget.prototype._preventScroll = function (event) {
        return event.isTouch && this._longTap || this._startTrackPoint !== null;
    };
    PaneWidget.prototype._correctXCoord = function (x) {
        return Math.max(0, Math.min(x, this._size.w - 1));
    };
    PaneWidget.prototype._correctYCoord = function (y) {
        return Math.max(0, Math.min(y, this._size.h - 1));
    };
    PaneWidget.prototype._setCrosshairPosition = function (x, y) {
        this._model().setAndSaveCurrentPosition(this._correctXCoord(x), this._correctYCoord(y), ensureNotNull(this._state));
    };
    PaneWidget.prototype._clearCrosshairPosition = function () {
        this._model().clearCurrentPosition();
    };
    PaneWidget.prototype._tryExitTrackingMode = function () {
        if (this._exitTrackingModeOnNextTry) {
            this._startTrackPoint = null;
            this._clearCrosshairPosition();
        }
    };
    PaneWidget.prototype._startTrackingMode = function (startTrackPoint, crossHairPosition) {
        this._startTrackPoint = startTrackPoint;
        this._exitTrackingModeOnNextTry = false;
        this._setCrosshairPosition(crossHairPosition.x, crossHairPosition.y);
        var crosshair = this._model().crosshairSource();
        this._initCrosshairPosition = { x: crosshair.appliedX(), y: crosshair.appliedY() };
    };
    PaneWidget.prototype._model = function () {
        return this._chart.model();
    };
    PaneWidget.prototype._finishScroll = function () {
        var model = this._model();
        var state = this.state();
        var priceScale = state.defaultPriceScale();
        model.endScrollPrice(state, priceScale);
        model.endScrollTime();
        this._startScrollingPos = null;
        this._isScrolling = false;
    };
    PaneWidget.prototype._endScroll = function (event) {
        var _this = this;
        if (!this._isScrolling) {
            return;
        }
        var startAnimationTime = performance.now();
        if (this._scrollXAnimation !== null) {
            this._scrollXAnimation.start(event.localX, startAnimationTime);
        }
        if ((this._scrollXAnimation === null || this._scrollXAnimation.finished(startAnimationTime))) {
            // animation is not needed
            this._finishScroll();
            return;
        }
        var model = this._model();
        var timeScale = model.timeScale();
        var scrollXAnimation = this._scrollXAnimation;
        var animationFn = function () {
            if ((scrollXAnimation.terminated())) {
                // animation terminated, see _terminateKineticAnimation
                return;
            }
            var now = performance.now();
            var xAnimationFinished = scrollXAnimation.finished(now);
            if (!scrollXAnimation.terminated()) {
                var prevRightOffset = timeScale.rightOffset();
                model.scrollTimeTo(scrollXAnimation.getPosition(now));
                if (prevRightOffset === timeScale.rightOffset()) {
                    xAnimationFinished = true;
                    _this._scrollXAnimation = null;
                }
            }
            if (xAnimationFinished) {
                _this._finishScroll();
                return;
            }
            requestAnimationFrame(animationFn);
        };
        requestAnimationFrame(animationFn);
    };
    PaneWidget.prototype._onMouseEvent = function () {
        this._startTrackPoint = null;
    };
    PaneWidget.prototype._mouseTouchDownEvent = function () {
        if (!this._state) {
            return;
        }
        this._terminateKineticAnimation();
        if (document.activeElement !== document.body && document.activeElement !== document.documentElement) {
            // If any focusable element except the page itself is focused, remove the focus
            ensureNotNull(document.activeElement).blur();
        }
        else {
            // Clear selection
            var selection = document.getSelection();
            if (selection !== null) {
                selection.removeAllRanges();
            }
        }
        var priceScale = this._state.defaultPriceScale();
        if (priceScale.isEmpty() || this._model().timeScale().isEmpty()) {
            return;
        }
    };
    // eslint-disable-next-line complexity
    PaneWidget.prototype._pressedMouseTouchMoveEvent = function (event) {
        if (this._state === null) {
            return;
        }
        var model = this._model();
        if (model.timeScale().isEmpty()) {
            return;
        }
        var chartOptions = this._chart.options();
        var scrollOptions = chartOptions.handleScroll;
        var kineticScrollOptions = chartOptions.kineticScroll;
        if ((!scrollOptions.pressedMouseMove || event.isTouch) &&
            (!scrollOptions.horzTouchDrag && !scrollOptions.vertTouchDrag || !event.isTouch)) {
            return;
        }
        var priceScale = this._state.defaultPriceScale();
        var now = performance.now();
        if (this._startScrollingPos === null && !this._preventScroll(event)) {
            this._startScrollingPos = {
                x: event.clientX,
                y: event.clientY,
                timestamp: now,
                localX: event.localX,
                localY: event.localY,
            };
        }
        if (this._scrollXAnimation !== null) {
            this._scrollXAnimation.addPosition(event.localX, now);
        }
        if (this._startScrollingPos !== null &&
            !this._isScrolling &&
            (this._startScrollingPos.x !== event.clientX || this._startScrollingPos.y !== event.clientY)) {
            if (this._scrollXAnimation === null && (event.isTouch && kineticScrollOptions.touch ||
                !event.isTouch && kineticScrollOptions.mouse)) {
                this._scrollXAnimation = new KineticAnimation(0.2 /* Constants.MinScrollSpeed */, 7 /* Constants.MaxScrollSpeed */, 0.997 /* Constants.DumpingCoeff */, 15 /* Constants.ScrollMinMove */);
                this._scrollXAnimation.addPosition(this._startScrollingPos.localX, this._startScrollingPos.timestamp);
                this._scrollXAnimation.addPosition(event.localX, now);
            }
            if (!priceScale.isEmpty()) {
                model.startScrollPrice(this._state, priceScale, event.localY);
            }
            model.startScrollTime(event.localX);
            this._isScrolling = true;
        }
        if (this._isScrolling) {
            // this allows scrolling not default price scales
            if (!priceScale.isEmpty()) {
                model.scrollPriceTo(this._state, priceScale, event.localY);
            }
            model.scrollTimeTo(event.localX);
        }
    };
    PaneWidget.prototype._terminateKineticAnimation = function () {
        var now = performance.now();
        var xAnimationFinished = this._scrollXAnimation === null || this._scrollXAnimation.finished(now);
        if (this._scrollXAnimation !== null) {
            if (!xAnimationFinished) {
                this._finishScroll();
            }
        }
        if (this._scrollXAnimation !== null) {
            this._scrollXAnimation.terminate();
            this._scrollXAnimation = null;
        }
    };
    return PaneWidget;
}());

var PriceAxisStub = /** @class */ (function () {
    function PriceAxisStub(side, options, params, borderVisible, bottomColor) {
        var _this = this;
        this._invalidated = true;
        this._size = new Size(0, 0);
        this._canvasConfiguredHandler = function () { return _this.paint(3 /* InvalidationLevel.Full */); };
        this._isLeft = side === 'left';
        this._rendererOptionsProvider = params.rendererOptionsProvider;
        this._options = options;
        this._borderVisible = borderVisible;
        this._bottomColor = bottomColor;
        this._cell = document.createElement('div');
        this._cell.style.width = '25px';
        this._cell.style.height = '100%';
        this._cell.style.overflow = 'hidden';
        this._canvasBinding = createBoundCanvas(this._cell, new Size(16, 16));
        this._canvasBinding.subscribeCanvasConfigured(this._canvasConfiguredHandler);
    }
    PriceAxisStub.prototype.destroy = function () {
        this._canvasBinding.unsubscribeCanvasConfigured(this._canvasConfiguredHandler);
        this._canvasBinding.destroy();
    };
    PriceAxisStub.prototype.getElement = function () {
        return this._cell;
    };
    PriceAxisStub.prototype.getSize = function () {
        return this._size;
    };
    PriceAxisStub.prototype.setSize = function (size) {
        if (size.w < 0 || size.h < 0) {
            throw new Error('Try to set invalid size to PriceAxisStub ' + JSON.stringify(size));
        }
        if (!this._size.equals(size)) {
            this._size = size;
            this._canvasBinding.resizeCanvas({ width: size.w, height: size.h });
            this._cell.style.width = "".concat(size.w, "px");
            this._cell.style.minWidth = "".concat(size.w, "px"); // for right calculate position of .pane-legend
            this._cell.style.height = "".concat(size.h, "px");
            this._invalidated = true;
        }
    };
    PriceAxisStub.prototype.paint = function (type) {
        if (type < 3 /* InvalidationLevel.Full */ && !this._invalidated) {
            return;
        }
        if (this._size.w === 0 || this._size.h === 0) {
            return;
        }
        this._invalidated = false;
        var ctx = getContext2D(this._canvasBinding.canvas);
        this._drawBackground(ctx, this._canvasBinding.pixelRatio);
        this._drawBorder(ctx, this._canvasBinding.pixelRatio);
    };
    PriceAxisStub.prototype.getImage = function () {
        return this._canvasBinding.canvas;
    };
    PriceAxisStub.prototype._drawBorder = function (ctx, pixelRatio) {
        if (!this._borderVisible()) {
            return;
        }
        var width = this._size.w;
        ctx.save();
        ctx.fillStyle = this._options.timeScale.borderColor;
        var borderSize = Math.floor(this._rendererOptionsProvider.options().borderSize * pixelRatio);
        var left = (this._isLeft) ? Math.round(width * pixelRatio) - borderSize : 0;
        ctx.fillRect(left, 0, borderSize, borderSize);
        ctx.restore();
    };
    PriceAxisStub.prototype._drawBackground = function (ctx, pixelRatio) {
        var _this = this;
        drawScaled(ctx, pixelRatio, function () {
            clearRect(ctx, 0, 0, _this._size.w, _this._size.h, _this._bottomColor());
        });
    };
    return PriceAxisStub;
}());

var Constants$1;
(function (Constants) {
    Constants[Constants["BorderSize"] = 1] = "BorderSize";
    Constants[Constants["TickLength"] = 3] = "TickLength";
})(Constants$1 || (Constants$1 = {}));
var CursorType;
(function (CursorType) {
    CursorType[CursorType["Default"] = 0] = "Default";
    CursorType[CursorType["EwResize"] = 1] = "EwResize";
})(CursorType || (CursorType = {}));
function markWithGreaterWeight(a, b) {
    return a.weight > b.weight ? a : b;
}
var TimeAxisWidget = /** @class */ (function () {
    function TimeAxisWidget(chartWidget) {
        var _this = this;
        this._leftStub = null;
        this._rightStub = null;
        this._rendererOptions = null;
        this._mouseDown = false;
        this._size = new Size(0, 0);
        this._sizeChanged = new Delegate();
        this._widthCache = new TextWidthCache(5);
        this._isSettingSize = false;
        this._canvasConfiguredHandler = function () {
            if (!_this._isSettingSize) {
                _this._chart.model().lightUpdate();
            }
        };
        this._topCanvasConfiguredHandler = function () {
            if (!_this._isSettingSize) {
                _this._chart.model().lightUpdate();
            }
        };
        this._chart = chartWidget;
        this._options = chartWidget.options().layout;
        this._element = document.createElement('tr');
        this._leftStubCell = document.createElement('td');
        this._leftStubCell.style.padding = '0';
        this._rightStubCell = document.createElement('td');
        this._rightStubCell.style.padding = '0';
        this._cell = document.createElement('td');
        this._cell.style.height = '25px';
        this._cell.style.padding = '0';
        this._dv = document.createElement('div');
        this._dv.style.width = '100%';
        this._dv.style.height = '100%';
        this._dv.style.position = 'relative';
        this._dv.style.overflow = 'hidden';
        this._cell.appendChild(this._dv);
        this._canvasBinding = createBoundCanvas(this._dv, new Size(16, 16));
        this._canvasBinding.subscribeCanvasConfigured(this._canvasConfiguredHandler);
        var canvas = this._canvasBinding.canvas;
        canvas.style.position = 'absolute';
        canvas.style.zIndex = '1';
        canvas.style.left = '0';
        canvas.style.top = '0';
        this._topCanvasBinding = createBoundCanvas(this._dv, new Size(16, 16));
        this._topCanvasBinding.subscribeCanvasConfigured(this._topCanvasConfiguredHandler);
        var topCanvas = this._topCanvasBinding.canvas;
        topCanvas.style.position = 'absolute';
        topCanvas.style.zIndex = '2';
        topCanvas.style.left = '0';
        topCanvas.style.top = '0';
        this._element.appendChild(this._leftStubCell);
        this._element.appendChild(this._cell);
        this._element.appendChild(this._rightStubCell);
        this._recreateStubs();
        this._chart.model().priceScalesOptionsChanged().subscribe(this._recreateStubs.bind(this), this);
        this._mouseEventHandler = new MouseEventHandler(this._topCanvasBinding.canvas, this, {
            treatVertTouchDragAsPageScroll: function () { return true; },
            treatHorzTouchDragAsPageScroll: function () { return false; },
        });
    }
    TimeAxisWidget.prototype.destroy = function () {
        this._mouseEventHandler.destroy();
        if (this._leftStub !== null) {
            this._leftStub.destroy();
        }
        if (this._rightStub !== null) {
            this._rightStub.destroy();
        }
        this._topCanvasBinding.unsubscribeCanvasConfigured(this._topCanvasConfiguredHandler);
        this._topCanvasBinding.destroy();
        this._canvasBinding.unsubscribeCanvasConfigured(this._canvasConfiguredHandler);
        this._canvasBinding.destroy();
    };
    TimeAxisWidget.prototype.getElement = function () {
        return this._element;
    };
    TimeAxisWidget.prototype.leftStub = function () {
        return this._leftStub;
    };
    TimeAxisWidget.prototype.rightStub = function () {
        return this._rightStub;
    };
    TimeAxisWidget.prototype.mouseDownEvent = function (event) {
        if (this._mouseDown) {
            return;
        }
        this._mouseDown = true;
        var model = this._chart.model();
        if (model.timeScale().isEmpty() || !this._chart.options().handleScale.axisPressedMouseMove.time) {
            return;
        }
        model.startScaleTime(event.localX);
    };
    TimeAxisWidget.prototype.touchStartEvent = function (event) {
        this.mouseDownEvent(event);
    };
    TimeAxisWidget.prototype.mouseDownOutsideEvent = function () {
        var model = this._chart.model();
        if (!model.timeScale().isEmpty() && this._mouseDown) {
            this._mouseDown = false;
            if (this._chart.options().handleScale.axisPressedMouseMove.time) {
                model.endScaleTime();
            }
        }
    };
    TimeAxisWidget.prototype.pressedMouseMoveEvent = function (event) {
        var model = this._chart.model();
        if (model.timeScale().isEmpty() || !this._chart.options().handleScale.axisPressedMouseMove.time) {
            return;
        }
        model.scaleTimeTo(event.localX);
    };
    TimeAxisWidget.prototype.touchMoveEvent = function (event) {
        this.pressedMouseMoveEvent(event);
    };
    TimeAxisWidget.prototype.mouseUpEvent = function () {
        this._mouseDown = false;
        var model = this._chart.model();
        if (model.timeScale().isEmpty() && !this._chart.options().handleScale.axisPressedMouseMove.time) {
            return;
        }
        model.endScaleTime();
    };
    TimeAxisWidget.prototype.touchEndEvent = function () {
        this.mouseUpEvent();
    };
    TimeAxisWidget.prototype.mouseDoubleClickEvent = function () {
        if (this._chart.options().handleScale.axisDoubleClickReset) {
            this._chart.model().resetTimeScale();
        }
    };
    TimeAxisWidget.prototype.doubleTapEvent = function () {
        this.mouseDoubleClickEvent();
    };
    TimeAxisWidget.prototype.mouseEnterEvent = function () {
        if (this._chart.model().options().handleScale.axisPressedMouseMove.time) {
            this._setCursor(1 /* CursorType.EwResize */);
        }
    };
    TimeAxisWidget.prototype.mouseLeaveEvent = function () {
        this._setCursor(0 /* CursorType.Default */);
    };
    TimeAxisWidget.prototype.getSize = function () {
        return this._size;
    };
    TimeAxisWidget.prototype.sizeChanged = function () {
        return this._sizeChanged;
    };
    TimeAxisWidget.prototype.setSizes = function (timeAxisSize, leftStubWidth, rightStubWidth) {
        if (!this._size || !this._size.equals(timeAxisSize)) {
            this._size = timeAxisSize;
            this._isSettingSize = true;
            this._canvasBinding.resizeCanvas({ width: timeAxisSize.w, height: timeAxisSize.h });
            this._topCanvasBinding.resizeCanvas({ width: timeAxisSize.w, height: timeAxisSize.h });
            this._isSettingSize = false;
            this._cell.style.width = timeAxisSize.w + 'px';
            this._cell.style.height = timeAxisSize.h + 'px';
            this._sizeChanged.fire(timeAxisSize);
        }
        if (this._leftStub !== null) {
            this._leftStub.setSize(new Size(leftStubWidth, timeAxisSize.h));
        }
        if (this._rightStub !== null) {
            this._rightStub.setSize(new Size(rightStubWidth, timeAxisSize.h));
        }
    };
    TimeAxisWidget.prototype.optimalHeight = function () {
        var rendererOptions = this._getRendererOptions();
        return Math.ceil(
        // rendererOptions.offsetSize +
        rendererOptions.borderSize +
            rendererOptions.tickLength +
            rendererOptions.fontSize +
            rendererOptions.paddingTop +
            rendererOptions.paddingBottom);
    };
    TimeAxisWidget.prototype.update = function () {
        // this call has side-effect - it regenerates marks on the time scale
        this._chart.model().timeScale().marks();
    };
    TimeAxisWidget.prototype.getImage = function () {
        return this._canvasBinding.canvas;
    };
    TimeAxisWidget.prototype.paint = function (type) {
        if (type === 0 /* InvalidationLevel.None */) {
            return;
        }
        if (type !== 1 /* InvalidationLevel.Cursor */) {
            var ctx = getContext2D(this._canvasBinding.canvas);
            this._drawBackground(ctx, this._canvasBinding.pixelRatio);
            this._drawBorder(ctx, this._canvasBinding.pixelRatio);
            this._drawTickMarks(ctx, this._canvasBinding.pixelRatio);
            // atm we don't have sources to be drawn on time axis except crosshair which is rendered on top level canvas
            // so let's don't call this code at all for now
            // this._drawLabels(this._chart.model().dataSources(), ctx, pixelRatio);
            if (this._leftStub !== null) {
                this._leftStub.paint(type);
            }
            if (this._rightStub !== null) {
                this._rightStub.paint(type);
            }
        }
        var topCtx = getContext2D(this._topCanvasBinding.canvas);
        var pixelRatio = this._topCanvasBinding.pixelRatio;
        topCtx.clearRect(0, 0, Math.ceil(this._size.w * pixelRatio), Math.ceil(this._size.h * pixelRatio));
        this._drawLabels([this._chart.model().crosshairSource()], topCtx, pixelRatio);
    };
    TimeAxisWidget.prototype._drawBackground = function (ctx, pixelRatio) {
        var _this = this;
        drawScaled(ctx, pixelRatio, function () {
            clearRect(ctx, 0, 0, _this._size.w, _this._size.h, _this._chart.model().backgroundBottomColor());
        });
    };
    TimeAxisWidget.prototype._drawBorder = function (ctx, pixelRatio) {
        if (this._chart.options().timeScale.borderVisible) {
            ctx.save();
            ctx.fillStyle = this._lineColor();
            var borderSize = Math.max(1, Math.floor(this._getRendererOptions().borderSize * pixelRatio));
            ctx.fillRect(0, 0, Math.ceil(this._size.w * pixelRatio), borderSize);
            ctx.restore();
        }
    };
    TimeAxisWidget.prototype._drawTickMarks = function (ctx, pixelRatio) {
        var _this = this;
        var tickMarks = this._chart.model().timeScale().marks();
        if (!tickMarks || tickMarks.length === 0) {
            return;
        }
        var maxWeight = tickMarks.reduce(markWithGreaterWeight, tickMarks[0]).weight;
        // special case: it looks strange if 15:00 is bold but 14:00 is not
        // so if maxWeight > TickMarkWeight.Hour1 and < TickMarkWeight.Day reduce it to TickMarkWeight.Hour1
        if (maxWeight > 30 /* TickMarkWeight.Hour1 */ && maxWeight < 50 /* TickMarkWeight.Day */) {
            maxWeight = 30 /* TickMarkWeight.Hour1 */;
        }
        ctx.save();
        ctx.strokeStyle = this._lineColor();
        var rendererOptions = this._getRendererOptions();
        var yText = (rendererOptions.borderSize +
            rendererOptions.tickLength +
            rendererOptions.paddingTop +
            rendererOptions.fontSize -
            rendererOptions.baselineOffset);
        ctx.textAlign = 'center';
        ctx.fillStyle = this._lineColor();
        var borderSize = Math.floor(this._getRendererOptions().borderSize * pixelRatio);
        var tickWidth = Math.max(1, Math.floor(pixelRatio));
        var tickOffset = Math.floor(pixelRatio * 0.5);
        if (this._chart.model().timeScale().options().borderVisible) {
            ctx.beginPath();
            var tickLen = Math.round(rendererOptions.tickLength * pixelRatio);
            for (var index = tickMarks.length; index--;) {
                var x = Math.round(tickMarks[index].coord * pixelRatio);
                ctx.rect(x - tickOffset, borderSize, tickWidth, tickLen);
            }
            ctx.fill();
        }
        ctx.fillStyle = this._textColor();
        drawScaled(ctx, pixelRatio, function () {
            // draw base marks
            ctx.font = _this._baseFont();
            for (var _i = 0, tickMarks_1 = tickMarks; _i < tickMarks_1.length; _i++) {
                var tickMark = tickMarks_1[_i];
                if (tickMark.weight < maxWeight) {
                    var coordinate = tickMark.needAlignCoordinate ? _this._alignTickMarkLabelCoordinate(ctx, tickMark.coord, tickMark.label) : tickMark.coord;
                    ctx.fillText(tickMark.label, coordinate, yText);
                }
            }
            ctx.font = _this._baseBoldFont();
            for (var _a = 0, tickMarks_2 = tickMarks; _a < tickMarks_2.length; _a++) {
                var tickMark = tickMarks_2[_a];
                if (tickMark.weight >= maxWeight) {
                    var coordinate = tickMark.needAlignCoordinate ? _this._alignTickMarkLabelCoordinate(ctx, tickMark.coord, tickMark.label) : tickMark.coord;
                    ctx.fillText(tickMark.label, coordinate, yText);
                }
            }
        });
        ctx.restore();
    };
    TimeAxisWidget.prototype._alignTickMarkLabelCoordinate = function (ctx, coordinate, labelText) {
        var labelWidth = this._widthCache.measureText(ctx, labelText);
        var labelWidthHalf = labelWidth / 2;
        var leftTextCoordinate = Math.floor(coordinate - labelWidthHalf) + 0.5;
        if (leftTextCoordinate < 0) {
            coordinate = coordinate + Math.abs(0 - leftTextCoordinate);
        }
        else if (leftTextCoordinate + labelWidth > this._size.w) {
            coordinate = coordinate - Math.abs(this._size.w - (leftTextCoordinate + labelWidth));
        }
        return coordinate;
    };
    TimeAxisWidget.prototype._drawLabels = function (sources, ctx, pixelRatio) {
        var rendererOptions = this._getRendererOptions();
        for (var _i = 0, sources_1 = sources; _i < sources_1.length; _i++) {
            var source = sources_1[_i];
            for (var _a = 0, _b = source.timeAxisViews(); _a < _b.length; _a++) {
                var view = _b[_a];
                ctx.save();
                view.renderer().draw(ctx, rendererOptions, pixelRatio);
                ctx.restore();
            }
        }
    };
    TimeAxisWidget.prototype._lineColor = function () {
        return this._chart.options().timeScale.borderColor;
    };
    TimeAxisWidget.prototype._textColor = function () {
        return this._options.textColor;
    };
    TimeAxisWidget.prototype._fontSize = function () {
        return this._options.fontSize;
    };
    TimeAxisWidget.prototype._baseFont = function () {
        return makeFont(this._fontSize(), this._options.fontFamily);
    };
    TimeAxisWidget.prototype._baseBoldFont = function () {
        return makeFont(this._fontSize(), this._options.fontFamily, 'bold');
    };
    TimeAxisWidget.prototype._getRendererOptions = function () {
        if (this._rendererOptions === null) {
            this._rendererOptions = {
                borderSize: 1 /* Constants.BorderSize */,
                baselineOffset: NaN,
                paddingTop: NaN,
                paddingBottom: NaN,
                paddingHorizontal: NaN,
                tickLength: 3 /* Constants.TickLength */,
                fontSize: NaN,
                font: '',
                widthCache: new TextWidthCache(),
            };
        }
        var rendererOptions = this._rendererOptions;
        var newFont = this._baseFont();
        if (rendererOptions.font !== newFont) {
            var fontSize = this._fontSize();
            rendererOptions.fontSize = fontSize;
            rendererOptions.font = newFont;
            rendererOptions.paddingTop = Math.ceil(fontSize / 2.5);
            rendererOptions.paddingBottom = rendererOptions.paddingTop;
            rendererOptions.paddingHorizontal = Math.ceil(fontSize / 2);
            rendererOptions.baselineOffset = Math.round(this._fontSize() / 5);
            rendererOptions.widthCache.reset();
        }
        return this._rendererOptions;
    };
    TimeAxisWidget.prototype._setCursor = function (type) {
        this._cell.style.cursor = type === 1 /* CursorType.EwResize */ ? 'ew-resize' : 'default';
    };
    TimeAxisWidget.prototype._recreateStubs = function () {
        var model = this._chart.model();
        var options = model.options();
        if (!options.leftPriceScale.visible && this._leftStub !== null) {
            this._leftStubCell.removeChild(this._leftStub.getElement());
            this._leftStub.destroy();
            this._leftStub = null;
        }
        if (!options.rightPriceScale.visible && this._rightStub !== null) {
            this._rightStubCell.removeChild(this._rightStub.getElement());
            this._rightStub.destroy();
            this._rightStub = null;
        }
        var rendererOptionsProvider = this._chart.model().rendererOptionsProvider();
        var params = {
            rendererOptionsProvider: rendererOptionsProvider,
        };
        var borderVisibleGetter = function () {
            return options.leftPriceScale.borderVisible && model.timeScale().options().borderVisible;
        };
        var bottomColorGetter = function () { return model.backgroundBottomColor(); };
        if (options.leftPriceScale.visible && this._leftStub === null) {
            this._leftStub = new PriceAxisStub('left', options, params, borderVisibleGetter, bottomColorGetter);
            this._leftStubCell.appendChild(this._leftStub.getElement());
        }
        if (options.rightPriceScale.visible && this._rightStub === null) {
            this._rightStub = new PriceAxisStub('right', options, params, borderVisibleGetter, bottomColorGetter);
            this._rightStubCell.appendChild(this._rightStub.getElement());
        }
    };
    return TimeAxisWidget;
}());

var ChartWidget = /** @class */ (function () {
    function ChartWidget(container, options) {
        this._paneWidgets = [];
        this._drawRafId = 0;
        this._height = 0;
        this._width = 0;
        this._leftPriceAxisWidth = 0;
        this._rightPriceAxisWidth = 0;
        this._invalidateMask = null;
        this._drawPlanned = false;
        this._clicked = new Delegate();
        this._crosshairMoved = new Delegate();
        this._customPriceLineDragged = new Delegate();
        this._options = options;
        this._element = document.createElement('div');
        this._element.classList.add('tv-lightweight-charts');
        this._element.style.overflow = 'hidden';
        this._element.style.width = '100%';
        this._element.style.height = '100%';
        disableSelection(this._element);
        this._tableElement = document.createElement('table');
        this._tableElement.setAttribute('cellspacing', '0');
        this._element.appendChild(this._tableElement);
        this._onWheelBound = this._onMousewheel.bind(this);
        this._element.addEventListener('wheel', this._onWheelBound, { passive: false });
        this._model = new ChartModel(this._invalidateHandler.bind(this), this._options);
        this.model().crosshairMoved().subscribe(this._onPaneWidgetCrosshairMoved.bind(this), this);
        this.model().customPriceLineDragged().subscribe(this._onCustomPriceLineDragged.bind(this), this);
        this._timeAxisWidget = new TimeAxisWidget(this);
        this._tableElement.appendChild(this._timeAxisWidget.getElement());
        var width = this._options.width;
        var height = this._options.height;
        if (width === 0 || height === 0) {
            var containerRect = container.getBoundingClientRect();
            // TODO: Fix it better
            // on Hi-DPI CSS size * Device Pixel Ratio should be integer to avoid smoothing
            // For chart widget we decreases because we must be inside container.
            // For time axis this is not important, since it just affects space for pane widgets
            if (width === 0) {
                width = Math.floor(containerRect.width);
                width -= width % 2;
            }
            if (height === 0) {
                height = Math.floor(containerRect.height);
                height -= height % 2;
            }
        }
        // BEWARE: resize must be called BEFORE _syncGuiWithModel (in constructor only)
        // or after but with adjustSize to properly update time scale
        this.resize(width, height);
        this._syncGuiWithModel();
        container.appendChild(this._element);
        this._updateTimeAxisVisibility();
        this._model.timeScale().optionsApplied().subscribe(this._model.fullUpdate.bind(this._model), this);
        this._model.priceScalesOptionsChanged().subscribe(this._model.fullUpdate.bind(this._model), this);
    }
    ChartWidget.prototype.model = function () {
        return this._model;
    };
    ChartWidget.prototype.options = function () {
        return this._options;
    };
    ChartWidget.prototype.paneWidgets = function () {
        return this._paneWidgets;
    };
    ChartWidget.prototype.timeAxisWidget = function () {
        return this._timeAxisWidget;
    };
    ChartWidget.prototype.destroy = function () {
        this._element.removeEventListener('wheel', this._onWheelBound);
        if (this._drawRafId !== 0) {
            window.cancelAnimationFrame(this._drawRafId);
        }
        this._model.crosshairMoved().unsubscribeAll(this);
        this._model.customPriceLineDragged().unsubscribeAll(this);
        this._model.timeScale().optionsApplied().unsubscribeAll(this);
        this._model.priceScalesOptionsChanged().unsubscribeAll(this);
        this._model.destroy();
        for (var _i = 0, _a = this._paneWidgets; _i < _a.length; _i++) {
            var paneWidget = _a[_i];
            this._tableElement.removeChild(paneWidget.getElement());
            paneWidget.clicked().unsubscribeAll(this);
            paneWidget.destroy();
        }
        this._paneWidgets = [];
        // for (const paneSeparator of this._paneSeparators) {
        // 	this._destroySeparator(paneSeparator);
        // }
        // this._paneSeparators = [];
        ensureNotNull(this._timeAxisWidget).destroy();
        if (this._element.parentElement !== null) {
            this._element.parentElement.removeChild(this._element);
        }
        this._crosshairMoved.destroy();
        this._clicked.destroy();
    };
    ChartWidget.prototype.resize = function (width, height, forceRepaint) {
        if (forceRepaint === void 0) { forceRepaint = false; }
        if (this._height === height && this._width === width) {
            return;
        }
        this._height = height;
        this._width = width;
        var heightStr = height + 'px';
        var widthStr = width + 'px';
        ensureNotNull(this._element).style.height = heightStr;
        ensureNotNull(this._element).style.width = widthStr;
        this._tableElement.style.height = heightStr;
        this._tableElement.style.width = widthStr;
        if (forceRepaint) {
            this._drawImpl(new InvalidateMask(3 /* InvalidationLevel.Full */));
        }
        else {
            this._model.fullUpdate();
        }
    };
    ChartWidget.prototype.paint = function (invalidateMask) {
        if (invalidateMask === undefined) {
            invalidateMask = new InvalidateMask(3 /* InvalidationLevel.Full */);
        }
        for (var i = 0; i < this._paneWidgets.length; i++) {
            this._paneWidgets[i].paint(invalidateMask.invalidateForPane(i).level);
        }
        if (this._options.timeScale.visible) {
            this._timeAxisWidget.paint(invalidateMask.fullInvalidation());
        }
    };
    ChartWidget.prototype.applyOptions = function (options) {
        // we don't need to merge options here because it's done in chart model
        // and since both model and widget share the same object it will be done automatically for widget as well
        // not ideal solution for sure, but it work's for now ¯\_(ツ)_/¯
        this._model.applyOptions(options);
        this._updateTimeAxisVisibility();
        var width = options.width || this._width;
        var height = options.height || this._height;
        this.resize(width, height);
    };
    ChartWidget.prototype.clicked = function () {
        return this._clicked;
    };
    ChartWidget.prototype.crosshairMoved = function () {
        return this._crosshairMoved;
    };
    ChartWidget.prototype.customPriceLineDragged = function () {
        return this._customPriceLineDragged;
    };
    ChartWidget.prototype.takeScreenshot = function () {
        var _this = this;
        if (this._invalidateMask !== null) {
            this._drawImpl(this._invalidateMask);
            this._invalidateMask = null;
        }
        // calculate target size
        var firstPane = this._paneWidgets[0];
        var targetCanvas = createPreconfiguredCanvas(document, new Size(this._width, this._height));
        var ctx = getContext2D(targetCanvas);
        var pixelRatio = getCanvasDevicePixelRatio(targetCanvas);
        drawScaled(ctx, pixelRatio, function () {
            var targetX = 0;
            var targetY = 0;
            var drawPriceAxises = function (position) {
                for (var paneIndex = 0; paneIndex < _this._paneWidgets.length; paneIndex++) {
                    var paneWidget = _this._paneWidgets[paneIndex];
                    var paneWidgetHeight = paneWidget.getSize().h;
                    var priceAxisWidget = ensureNotNull(position === 'left' ? paneWidget.leftPriceAxisWidget() : paneWidget.rightPriceAxisWidget());
                    var image = priceAxisWidget.getImage();
                    ctx.drawImage(image, targetX, targetY, priceAxisWidget.getWidth(), paneWidgetHeight);
                    targetY += paneWidgetHeight;
                    // if (paneIndex < this._paneWidgets.length - 1) {
                    // 	const separator = this._paneSeparators[paneIndex];
                    // 	const separatorSize = separator.getSize();
                    // 	const separatorImage = separator.getImage();
                    // 	ctx.drawImage(separatorImage, targetX, targetY, separatorSize.w, separatorSize.h);
                    // 	targetY += separatorSize.h;
                    // }
                }
            };
            // draw left price scale if exists
            if (_this._isLeftAxisVisible()) {
                drawPriceAxises('left');
                targetX = ensureNotNull(firstPane.leftPriceAxisWidget()).getWidth();
            }
            targetY = 0;
            for (var paneIndex = 0; paneIndex < _this._paneWidgets.length; paneIndex++) {
                var paneWidget = _this._paneWidgets[paneIndex];
                var paneWidgetSize = paneWidget.getSize();
                var image = paneWidget.getImage();
                ctx.drawImage(image, targetX, targetY, paneWidgetSize.w, paneWidgetSize.h);
                targetY += paneWidgetSize.h;
                // if (paneIndex < this._paneWidgets.length - 1) {
                // 	const separator = this._paneSeparators[paneIndex];
                // 	const separatorSize = separator.getSize();
                // 	const separatorImage = separator.getImage();
                // 	ctx.drawImage(separatorImage, targetX, targetY, separatorSize.w, separatorSize.h);
                // 	targetY += separatorSize.h;
                // }
            }
            targetX += firstPane.getSize().w;
            if (_this._isRightAxisVisible()) {
                targetY = 0;
                drawPriceAxises('right');
            }
            var drawStub = function (position) {
                var stub = ensureNotNull(position === 'left' ? _this._timeAxisWidget.leftStub() : _this._timeAxisWidget.rightStub());
                var size = stub.getSize();
                var image = stub.getImage();
                ctx.drawImage(image, targetX, targetY, size.w, size.h);
            };
            // draw time scale
            if (_this._options.timeScale.visible) {
                targetX = 0;
                if (_this._isLeftAxisVisible()) {
                    drawStub('left');
                    targetX = ensureNotNull(firstPane.leftPriceAxisWidget()).getWidth();
                }
                var size = _this._timeAxisWidget.getSize();
                var image = _this._timeAxisWidget.getImage();
                ctx.drawImage(image, targetX, targetY, size.w, size.h);
                if (_this._isRightAxisVisible()) {
                    targetX += firstPane.getSize().w;
                    drawStub('right');
                    ctx.restore();
                }
            }
        });
        return targetCanvas;
    };
    ChartWidget.prototype.getPriceAxisWidth = function (position) {
        if (position === 'none') {
            return 0;
        }
        if (position === 'left' && !this._isLeftAxisVisible()) {
            return 0;
        }
        if (position === 'right' && !this._isRightAxisVisible()) {
            return 0;
        }
        if (this._paneWidgets.length === 0) {
            return 0;
        }
        // we don't need to worry about exactly pane widget here
        // because all pane widgets have the same width of price axis widget
        // see _adjustSizeImpl
        var priceAxisWidget = position === 'left'
            ? this._paneWidgets[0].leftPriceAxisWidget()
            : this._paneWidgets[0].rightPriceAxisWidget();
        return ensureNotNull(priceAxisWidget).getWidth();
    };
    // eslint-disable-next-line complexity
    ChartWidget.prototype._adjustSizeImpl = function () {
        var totalStretch = 0;
        var leftPriceAxisWidth = 0;
        var rightPriceAxisWidth = 0;
        for (var _i = 0, _a = this._paneWidgets; _i < _a.length; _i++) {
            var paneWidget = _a[_i];
            if (this._isLeftAxisVisible()) {
                leftPriceAxisWidth = Math.max(leftPriceAxisWidth, ensureNotNull(paneWidget.leftPriceAxisWidget()).optimalWidth());
            }
            if (this._isRightAxisVisible()) {
                rightPriceAxisWidth = Math.max(rightPriceAxisWidth, ensureNotNull(paneWidget.rightPriceAxisWidget()).optimalWidth());
            }
            totalStretch += paneWidget.stretchFactor();
        }
        var width = this._width;
        var height = this._height;
        var paneWidth = Math.max(width - leftPriceAxisWidth - rightPriceAxisWidth, 0);
        // const separatorCount = this._paneSeparators.length;
        // const separatorHeight = SEPARATOR_HEIGHT;
        var separatorsHeight = 0; // separatorHeight * separatorCount;
        var timeAxisVisible = this._options.timeScale.visible;
        var timeAxisHeight = timeAxisVisible ? this._timeAxisWidget.optimalHeight() : 0;
        // TODO: Fix it better
        // on Hi-DPI CSS size * Device Pixel Ratio should be integer to avoid smoothing
        if (timeAxisHeight % 2) {
            timeAxisHeight += 1;
        }
        var otherWidgetHeight = separatorsHeight + timeAxisHeight;
        var totalPaneHeight = height < otherWidgetHeight ? 0 : height - otherWidgetHeight;
        var stretchPixels = totalPaneHeight / totalStretch;
        var accumulatedHeight = 0;
        for (var paneIndex = 0; paneIndex < this._paneWidgets.length; ++paneIndex) {
            var paneWidget = this._paneWidgets[paneIndex];
            paneWidget.setState(this._model.panes()[paneIndex]);
            var paneHeight = 0;
            var calculatePaneHeight = 0;
            if (paneIndex === this._paneWidgets.length - 1) {
                calculatePaneHeight = totalPaneHeight - accumulatedHeight;
            }
            else {
                calculatePaneHeight = Math.round(paneWidget.stretchFactor() * stretchPixels);
            }
            paneHeight = Math.max(calculatePaneHeight, 2);
            accumulatedHeight += paneHeight;
            paneWidget.setSize(new Size(paneWidth, paneHeight));
            if (this._isLeftAxisVisible()) {
                paneWidget.setPriceAxisSize(leftPriceAxisWidth, 'left');
            }
            if (this._isRightAxisVisible()) {
                paneWidget.setPriceAxisSize(rightPriceAxisWidth, 'right');
            }
            if (paneWidget.state()) {
                this._model.setPaneHeight(paneWidget.state(), paneHeight);
            }
        }
        this._timeAxisWidget.setSizes(new Size(timeAxisVisible ? paneWidth : 0, timeAxisHeight), timeAxisVisible ? leftPriceAxisWidth : 0, timeAxisVisible ? rightPriceAxisWidth : 0);
        this._model.setWidth(paneWidth);
        if (this._leftPriceAxisWidth !== leftPriceAxisWidth) {
            this._leftPriceAxisWidth = leftPriceAxisWidth;
        }
        if (this._rightPriceAxisWidth !== rightPriceAxisWidth) {
            this._rightPriceAxisWidth = rightPriceAxisWidth;
        }
    };
    ChartWidget.prototype._onMousewheel = function (event) {
        var deltaX = event.deltaX / 100;
        var deltaY = -(event.deltaY / 100);
        if ((deltaX === 0 || !this._options.handleScroll.mouseWheel) &&
            (deltaY === 0 || !this._options.handleScale.mouseWheel)) {
            return;
        }
        if (event.cancelable) {
            event.preventDefault();
        }
        switch (event.deltaMode) {
            case event.DOM_DELTA_PAGE:
                // one screen at time scroll mode
                deltaX *= 120;
                deltaY *= 120;
                break;
            case event.DOM_DELTA_LINE:
                // one line at time scroll mode
                deltaX *= 32;
                deltaY *= 32;
                break;
        }
        if (deltaY !== 0 && this._options.handleScale.mouseWheel) {
            var zoomScale = Math.sign(deltaY) * Math.min(1, Math.abs(deltaY));
            var scrollPosition = event.clientX - this._element.getBoundingClientRect().left;
            this.model().zoomTime(scrollPosition, zoomScale);
        }
        if (deltaX !== 0 && this._options.handleScroll.mouseWheel) {
            this.model().scrollChart(deltaX * -80); // 80 is a made up coefficient, and minus is for the "natural" scroll
        }
    };
    ChartWidget.prototype._drawImpl = function (invalidateMask) {
        var _a;
        var invalidationType = invalidateMask.fullInvalidation();
        // actions for full invalidation ONLY (not shared with light)
        if (invalidationType === 3 /* InvalidationLevel.Full */) {
            this._updateGui();
        }
        // light or full invalidate actions
        if (invalidationType === 3 /* InvalidationLevel.Full */ ||
            invalidationType === 2 /* InvalidationLevel.Light */) {
            this._applyMomentaryAutoScale(invalidateMask);
            this._applyTimeScaleInvalidations(invalidateMask);
            this._timeAxisWidget.update();
            this._paneWidgets.forEach(function (pane) {
                pane.updatePriceAxisWidgets();
            });
            // In the case a full invalidation has been postponed during the draw, reapply
            // the timescale invalidations. A full invalidation would mean there is a change
            // in the timescale width (caused by price scale changes) that needs to be drawn
            // right away to avoid flickering.
            if (((_a = this._invalidateMask) === null || _a === void 0 ? void 0 : _a.fullInvalidation()) === 3 /* InvalidationLevel.Full */) {
                this._invalidateMask.merge(invalidateMask);
                this._updateGui();
                this._applyMomentaryAutoScale(this._invalidateMask);
                this._applyTimeScaleInvalidations(this._invalidateMask);
                invalidateMask = this._invalidateMask;
                this._invalidateMask = null;
            }
        }
        this.paint(invalidateMask);
    };
    ChartWidget.prototype._applyTimeScaleInvalidations = function (invalidateMask) {
        var timeScaleInvalidations = invalidateMask.timeScaleInvalidations();
        for (var _i = 0, timeScaleInvalidations_1 = timeScaleInvalidations; _i < timeScaleInvalidations_1.length; _i++) {
            var tsInvalidation = timeScaleInvalidations_1[_i];
            this._applyTimeScaleInvalidation(tsInvalidation);
        }
    };
    ChartWidget.prototype._applyMomentaryAutoScale = function (invalidateMask) {
        var panes = this._model.panes();
        for (var i = 0; i < panes.length; i++) {
            if (invalidateMask.invalidateForPane(i).autoScale) {
                panes[i].momentaryAutoScale();
            }
        }
    };
    ChartWidget.prototype._applyTimeScaleInvalidation = function (invalidation) {
        var timeScale = this._model.timeScale();
        switch (invalidation.type) {
            case 0 /* TimeScaleInvalidationType.FitContent */:
                timeScale.fitContent();
                break;
            case 1 /* TimeScaleInvalidationType.ApplyRange */:
                timeScale.setLogicalRange(invalidation.value);
                break;
            case 2 /* TimeScaleInvalidationType.ApplyBarSpacing */:
                timeScale.setBarSpacing(invalidation.value);
                break;
            case 3 /* TimeScaleInvalidationType.ApplyRightOffset */:
                timeScale.setRightOffset(invalidation.value);
                break;
            case 4 /* TimeScaleInvalidationType.Reset */:
                timeScale.restoreDefault();
                break;
        }
    };
    ChartWidget.prototype._invalidateHandler = function (invalidateMask) {
        var _this = this;
        if (this._invalidateMask !== null) {
            this._invalidateMask.merge(invalidateMask);
        }
        else {
            this._invalidateMask = invalidateMask;
        }
        if (!this._drawPlanned) {
            this._drawPlanned = true;
            this._drawRafId = window.requestAnimationFrame(function () {
                _this._drawPlanned = false;
                _this._drawRafId = 0;
                if (_this._invalidateMask !== null) {
                    var mask = _this._invalidateMask;
                    _this._invalidateMask = null;
                    _this._drawImpl(mask);
                }
            });
        }
    };
    ChartWidget.prototype._updateGui = function () {
        this._syncGuiWithModel();
    };
    // private _destroySeparator(separator: PaneSeparator): void {
    // 	this._tableElement.removeChild(separator.getElement());
    // 	separator.destroy();
    // }
    ChartWidget.prototype._syncGuiWithModel = function () {
        var panes = this._model.panes();
        var targetPaneWidgetsCount = panes.length;
        var actualPaneWidgetsCount = this._paneWidgets.length;
        // Remove (if needed) pane widgets and separators
        for (var i = targetPaneWidgetsCount; i < actualPaneWidgetsCount; i++) {
            var paneWidget = ensureDefined(this._paneWidgets.pop());
            this._tableElement.removeChild(paneWidget.getElement());
            paneWidget.clicked().unsubscribeAll(this);
            paneWidget.destroy();
            // const paneSeparator = this._paneSeparators.pop();
            // if (paneSeparator !== undefined) {
            // 	this._destroySeparator(paneSeparator);
            // }
        }
        // Create (if needed) new pane widgets and separators
        for (var i = actualPaneWidgetsCount; i < targetPaneWidgetsCount; i++) {
            var paneWidget = new PaneWidget(this, panes[i]);
            paneWidget.clicked().subscribe(this._onPaneWidgetClicked.bind(this), this);
            this._paneWidgets.push(paneWidget);
            // create and insert separator
            // if (i > 1) {
            // 	const paneSeparator = new PaneSeparator(this, i - 1, i, true);
            // 	this._paneSeparators.push(paneSeparator);
            // 	this._tableElement.insertBefore(paneSeparator.getElement(), this._timeAxisWidget.getElement());
            // }
            // insert paneWidget
            this._tableElement.insertBefore(paneWidget.getElement(), this._timeAxisWidget.getElement());
        }
        for (var i = 0; i < targetPaneWidgetsCount; i++) {
            var state = panes[i];
            var paneWidget = this._paneWidgets[i];
            if (paneWidget.state() !== state) {
                paneWidget.setState(state);
            }
            else {
                paneWidget.updatePriceAxisWidgetsStates();
            }
        }
        this._updateTimeAxisVisibility();
        this._adjustSizeImpl();
    };
    ChartWidget.prototype._getMouseEventParamsImpl = function (index, point) {
        var seriesPrices = new Map();
        if (index !== null) {
            var serieses = this._model.serieses();
            serieses.forEach(function (s) {
                // TODO: replace with search left
                var prices = s.dataAt(index);
                if (prices !== null) {
                    seriesPrices.set(s, prices);
                }
            });
        }
        var clientTime;
        if (index !== null) {
            var timePoint = this._model.timeScale().indexToTime(index);
            if (timePoint !== null) {
                clientTime = timePoint;
            }
        }
        var hoveredSource = this.model().hoveredSource();
        var hoveredSeries = hoveredSource !== null && hoveredSource.source instanceof Series
            ? hoveredSource.source
            : undefined;
        var hoveredObject = hoveredSource !== null && hoveredSource.object !== undefined
            ? hoveredSource.object.externalId
            : undefined;
        return {
            time: clientTime,
            point: point || undefined,
            hoveredSeries: hoveredSeries,
            seriesPrices: seriesPrices,
            hoveredObject: hoveredObject,
        };
    };
    ChartWidget.prototype._getCustomPriceLineDraggedEventParamsImpl = function (customPriceLine, fromPriceString) {
        return {
            customPriceLine: customPriceLine,
            fromPriceString: fromPriceString,
        };
    };
    ChartWidget.prototype._onPaneWidgetClicked = function (time, point) {
        var _this = this;
        this._clicked.fire(function () { return _this._getMouseEventParamsImpl(time, point); });
    };
    ChartWidget.prototype._onPaneWidgetCrosshairMoved = function (time, point) {
        var _this = this;
        this._crosshairMoved.fire(function () { return _this._getMouseEventParamsImpl(time, point); });
    };
    ChartWidget.prototype._onCustomPriceLineDragged = function (customPriceLine, fromPriceString) {
        var _this = this;
        this._customPriceLineDragged.fire(function () { return _this._getCustomPriceLineDraggedEventParamsImpl(customPriceLine, fromPriceString); });
    };
    ChartWidget.prototype._updateTimeAxisVisibility = function () {
        var display = this._options.timeScale.visible ? '' : 'none';
        this._timeAxisWidget.getElement().style.display = display;
    };
    ChartWidget.prototype._isLeftAxisVisible = function () {
        return this._paneWidgets[0].state().leftPriceScale().options().visible;
    };
    ChartWidget.prototype._isRightAxisVisible = function () {
        return this._paneWidgets[0].state().rightPriceScale().options().visible;
    };
    return ChartWidget;
}());
function disableSelection(element) {
    element.style.userSelect = 'none';
    // eslint-disable-next-line deprecation/deprecation
    element.style.webkitUserSelect = 'none';
    // eslint-disable-next-line @typescript-eslint/no-explicit-any,@typescript-eslint/no-unsafe-member-access
    element.style.msUserSelect = 'none';
    // eslint-disable-next-line @typescript-eslint/no-explicit-any,@typescript-eslint/no-unsafe-member-access
    element.style.MozUserSelect = 'none';
    // eslint-disable-next-line @typescript-eslint/no-explicit-any,@typescript-eslint/no-unsafe-member-access
    element.style.webkitTapHighlightColor = 'transparent';
}

/// <reference types="_build-time-constants" />
function warn(msg) {
    {
        // eslint-disable-next-line no-console
        console.warn(msg);
    }
}

function getLineBasedSeriesPlotRow(time, index, item) {
    var val = item.value;
    return { index: index, time: time, value: [val, val, val, val] };
}
function getColoredLineBasedSeriesPlotRow(time, index, item) {
    var val = item.value;
    var res = { index: index, time: time, value: [val, val, val, val] };
    // 'color' here is public property (from API) so we can use `in` here safely
    // eslint-disable-next-line no-restricted-syntax
    if ('color' in item && item.color !== undefined) {
        res.color = item.color;
    }
    return res;
}
function getBarSeriesPlotRow(time, index, item) {
    var res = { index: index, time: time, value: [item.open, item.high, item.low, item.close] };
    // 'color' here is public property (from API) so we can use `in` here safely
    // eslint-disable-next-line no-restricted-syntax
    if ('color' in item && item.color !== undefined) {
        res.color = item.color;
    }
    return res;
}
function getCandlestickSeriesPlotRow(time, index, item) {
    var res = { index: index, time: time, value: [item.open, item.high, item.low, item.close] };
    // 'color' here is public property (from API) so we can use `in` here safely
    // eslint-disable-next-line no-restricted-syntax
    if ('color' in item && item.color !== undefined) {
        res.color = item.color;
    }
    // 'borderColor' here is public property (from API) so we can use `in` here safely
    // eslint-disable-next-line no-restricted-syntax
    if ('borderColor' in item && item.borderColor !== undefined) {
        res.borderColor = item.borderColor;
    }
    // 'wickColor' here is public property (from API) so we can use `in` here safely
    // eslint-disable-next-line no-restricted-syntax
    if ('wickColor' in item && item.wickColor !== undefined) {
        res.wickColor = item.wickColor;
    }
    return res;
}
function isSeriesPlotRow(row) {
    return row.value !== undefined;
}
function wrapWhitespaceData(createPlotRowFn) {
    return function (time, index, bar) {
        if (isWhitespaceData(bar)) {
            return { time: time, index: index };
        }
        return createPlotRowFn(time, index, bar);
    };
}
var seriesPlotRowFnMap = {
    Candlestick: wrapWhitespaceData(getCandlestickSeriesPlotRow),
    Bar: wrapWhitespaceData(getBarSeriesPlotRow),
    Area: wrapWhitespaceData(getLineBasedSeriesPlotRow),
    Baseline: wrapWhitespaceData(getLineBasedSeriesPlotRow),
    Histogram: wrapWhitespaceData(getColoredLineBasedSeriesPlotRow),
    Line: wrapWhitespaceData(getColoredLineBasedSeriesPlotRow),
};
function getSeriesPlotRowCreator(seriesType) {
    return seriesPlotRowFnMap[seriesType];
}

function hours(count) {
    return count * 60 * 60 * 1000;
}
function minutes(count) {
    return count * 60 * 1000;
}
function seconds(count) {
    return count * 1000;
}
var intradayWeightDivisors = [
    { divisor: seconds(1), weight: 10 /* TickMarkWeight.Second */ },
    { divisor: minutes(1), weight: 20 /* TickMarkWeight.Minute1 */ },
    { divisor: minutes(5), weight: 21 /* TickMarkWeight.Minute5 */ },
    { divisor: minutes(30), weight: 22 /* TickMarkWeight.Minute30 */ },
    { divisor: hours(1), weight: 30 /* TickMarkWeight.Hour1 */ },
    { divisor: hours(3), weight: 31 /* TickMarkWeight.Hour3 */ },
    { divisor: hours(6), weight: 32 /* TickMarkWeight.Hour6 */ },
    { divisor: hours(12), weight: 33 /* TickMarkWeight.Hour12 */ },
];
function weightByTime(currentDate, prevDate) {
    if (currentDate.getUTCFullYear() !== prevDate.getUTCFullYear()) {
        return 70 /* TickMarkWeight.Year */;
    }
    else if (currentDate.getUTCMonth() !== prevDate.getUTCMonth()) {
        return 60 /* TickMarkWeight.Month */;
    }
    else if (currentDate.getUTCDate() !== prevDate.getUTCDate()) {
        return 50 /* TickMarkWeight.Day */;
    }
    for (var i = intradayWeightDivisors.length - 1; i >= 0; --i) {
        if (Math.floor(prevDate.getTime() / intradayWeightDivisors[i].divisor) !== Math.floor(currentDate.getTime() / intradayWeightDivisors[i].divisor)) {
            return intradayWeightDivisors[i].weight;
        }
    }
    return 0 /* TickMarkWeight.LessThanSecond */;
}
function fillWeightsForPoints(sortedTimePoints, startIndex) {
    if (startIndex === void 0) { startIndex = 0; }
    if (sortedTimePoints.length === 0) {
        return;
    }
    var prevTime = startIndex === 0 ? null : sortedTimePoints[startIndex - 1].time.timestamp;
    var prevDate = prevTime !== null ? new Date(prevTime * 1000) : null;
    var totalTimeDiff = 0;
    for (var index = startIndex; index < sortedTimePoints.length; ++index) {
        var currentPoint = sortedTimePoints[index];
        var currentDate = new Date(currentPoint.time.timestamp * 1000);
        if (prevDate !== null) {
            currentPoint.timeWeight = weightByTime(currentDate, prevDate);
        }
        totalTimeDiff += currentPoint.time.timestamp - (prevTime || currentPoint.time.timestamp);
        prevTime = currentPoint.time.timestamp;
        prevDate = currentDate;
    }
    if (startIndex === 0 && sortedTimePoints.length > 1) {
        // let's guess a weight for the first point
        // let's say the previous point was average time back in the history
        var averageTimeDiff = Math.ceil(totalTimeDiff / (sortedTimePoints.length - 1));
        var approxPrevDate = new Date((sortedTimePoints[0].time.timestamp - averageTimeDiff) * 1000);
        sortedTimePoints[0].timeWeight = weightByTime(new Date(sortedTimePoints[0].time.timestamp * 1000), approxPrevDate);
    }
}

/// <reference types="_build-time-constants" />
function businessDayConverter(time) {
    if (!isBusinessDay(time)) {
        throw new Error('time must be of type BusinessDay');
    }
    var date = new Date(Date.UTC(time.year, time.month - 1, time.day, 0, 0, 0, 0));
    return {
        timestamp: Math.round(date.getTime() / 1000),
        businessDay: time,
    };
}
function timestampConverter(time) {
    if (!isUTCTimestamp(time)) {
        throw new Error('time must be of type isUTCTimestamp');
    }
    return {
        timestamp: time,
    };
}
function selectTimeConverter(data) {
    if (data.length === 0) {
        return null;
    }
    if (isBusinessDay(data[0].time)) {
        return businessDayConverter;
    }
    return timestampConverter;
}
function convertTime(time) {
    if (isUTCTimestamp(time)) {
        return timestampConverter(time);
    }
    if (!isBusinessDay(time)) {
        return businessDayConverter(stringToBusinessDay(time));
    }
    return businessDayConverter(time);
}
var validDateRegex = /^\d\d\d\d-\d\d-\d\d$/;
function stringToBusinessDay(value) {
    {
        // in some browsers (I look at your Chrome) the Date constructor may accept invalid date string
        // but parses them in "implementation specific" way
        // for example 2019-1-1 isn't the same as 2019-01-01 (for Chrome both are "valid" date strings)
        // see https://bugs.chromium.org/p/chromium/issues/detail?id=968939
        // so, we need to be sure that date has valid format to avoid strange behavior and hours of debugging
        // but let's do this in development build only because of perf
        if (!validDateRegex.test(value)) {
            throw new Error("Invalid date string=".concat(value, ", expected format=yyyy-mm-dd"));
        }
    }
    var d = new Date(value);
    if (isNaN(d.getTime())) {
        throw new Error("Invalid date string=".concat(value, ", expected format=yyyy-mm-dd"));
    }
    return {
        day: d.getUTCDate(),
        month: d.getUTCMonth() + 1,
        year: d.getUTCFullYear(),
    };
}
function convertStringToBusinessDay(value) {
    if (isString(value.time)) {
        value.time = stringToBusinessDay(value.time);
    }
}
function convertStringsToBusinessDays(data) {
    return data.forEach(convertStringToBusinessDay);
}
function createEmptyTimePointData(timePoint) {
    return { index: 0, mapping: new Map(), timePoint: timePoint };
}
function seriesRowsFirsAndLastTime(seriesRows) {
    if (seriesRows === undefined || seriesRows.length === 0) {
        return undefined;
    }
    return {
        firstTime: seriesRows[0].time.timestamp,
        lastTime: seriesRows[seriesRows.length - 1].time.timestamp,
    };
}
function seriesUpdateInfo(seriesRows, prevSeriesRows) {
    var firstAndLastTime = seriesRowsFirsAndLastTime(seriesRows);
    var prevFirstAndLastTime = seriesRowsFirsAndLastTime(prevSeriesRows);
    if (firstAndLastTime !== undefined && prevFirstAndLastTime !== undefined) {
        return {
            lastBarUpdatedOrNewBarsAddedToTheRight: firstAndLastTime.lastTime >= prevFirstAndLastTime.lastTime &&
                firstAndLastTime.firstTime >= prevFirstAndLastTime.firstTime,
        };
    }
    return undefined;
}
var DataLayer = /** @class */ (function () {
    function DataLayer() {
        // note that _pointDataByTimePoint and _seriesRowsBySeries shares THE SAME objects in their values between each other
        // it's just different kind of maps to make usages/perf better
        this._pointDataByTimePoint = new Map();
        this._seriesRowsBySeries = new Map();
        this._seriesLastTimePoint = new Map();
        // this is kind of "dest" values (in opposite to "source" ones) - we don't need to modify it manually, the only by calling _updateTimeScalePoints or updateSeriesData methods
        this._sortedTimePoints = [];
    }
    DataLayer.prototype.destroy = function () {
        this._pointDataByTimePoint.clear();
        this._seriesRowsBySeries.clear();
        this._seriesLastTimePoint.clear();
        this._sortedTimePoints = [];
    };
    DataLayer.prototype.setSeriesData = function (series, data) {
        var _this = this;
        var needCleanupPoints = this._pointDataByTimePoint.size !== 0;
        var isTimeScaleAffected = false;
        // save previous series rows data before it's replaced inside this._setRowsToSeries
        var prevSeriesRows = this._seriesRowsBySeries.get(series);
        if (prevSeriesRows !== undefined) {
            if (this._seriesRowsBySeries.size === 1) {
                needCleanupPoints = false;
                isTimeScaleAffected = true;
                // perf optimization - if there is only 1 series, then we can just clear and fill everything from scratch
                this._pointDataByTimePoint.clear();
            }
            else {
                // perf optimization - actually we have to use this._pointDataByTimePoint for going through here
                // but as soon as this._sortedTimePoints is just a different form of _pointDataByTimePoint we can use it as well
                for (var _i = 0, _a = this._sortedTimePoints; _i < _a.length; _i++) {
                    var point = _a[_i];
                    if (point.pointData.mapping.delete(series)) {
                        isTimeScaleAffected = true;
                    }
                }
            }
        }
        var seriesRows = [];
        if (data.length !== 0) {
            convertStringsToBusinessDays(data);
            var timeConverter_1 = ensureNotNull(selectTimeConverter(data));
            var createPlotRow_1 = getSeriesPlotRowCreator(series.seriesType());
            seriesRows = data.map(function (item) {
                var time = timeConverter_1(item.time);
                var timePointData = _this._pointDataByTimePoint.get(time.timestamp);
                if (timePointData === undefined) {
                    // the indexes will be sync later
                    timePointData = createEmptyTimePointData(time);
                    _this._pointDataByTimePoint.set(time.timestamp, timePointData);
                    isTimeScaleAffected = true;
                }
                var row = createPlotRow_1(time, timePointData.index, item);
                timePointData.mapping.set(series, row);
                return row;
            });
        }
        if (needCleanupPoints) {
            // we deleted the old data from mapping and added the new ones
            // so there might be empty points now, let's remove them first
            this._cleanupPointsData();
        }
        this._setRowsToSeries(series, seriesRows);
        var firstChangedPointIndex = -1;
        if (isTimeScaleAffected) {
            // then generate the time scale points
            // timeWeight will be updates in _updateTimeScalePoints later
            var newTimeScalePoints_1 = [];
            this._pointDataByTimePoint.forEach(function (pointData) {
                newTimeScalePoints_1.push({ timeWeight: 0, time: pointData.timePoint, pointData: pointData });
            });
            newTimeScalePoints_1.sort(function (t1, t2) { return t1.time.timestamp - t2.time.timestamp; });
            firstChangedPointIndex = this._replaceTimeScalePoints(newTimeScalePoints_1);
        }
        return this._getUpdateResponse(series, firstChangedPointIndex, seriesUpdateInfo(this._seriesRowsBySeries.get(series), prevSeriesRows));
    };
    DataLayer.prototype.removeSeries = function (series) {
        return this.setSeriesData(series, []);
    };
    DataLayer.prototype.updateSeriesData = function (series, data) {
        convertStringToBusinessDay(data);
        var time = ensureNotNull(selectTimeConverter([data]))(data.time);
        var lastSeriesTime = this._seriesLastTimePoint.get(series);
        if (lastSeriesTime !== undefined && time.timestamp < lastSeriesTime.timestamp) {
            throw new Error("Cannot update oldest data, last time=".concat(lastSeriesTime.timestamp, ", new time=").concat(time.timestamp));
        }
        var pointDataAtTime = this._pointDataByTimePoint.get(time.timestamp);
        // if no point data found for the new data item
        // that means that we need to update scale
        var affectsTimeScale = pointDataAtTime === undefined;
        if (pointDataAtTime === undefined) {
            // the indexes will be sync later
            pointDataAtTime = createEmptyTimePointData(time);
            this._pointDataByTimePoint.set(time.timestamp, pointDataAtTime);
        }
        var createPlotRow = getSeriesPlotRowCreator(series.seriesType());
        var plotRow = createPlotRow(time, pointDataAtTime.index, data);
        pointDataAtTime.mapping.set(series, plotRow);
        this._updateLastSeriesRow(series, plotRow);
        var info = { lastBarUpdatedOrNewBarsAddedToTheRight: isSeriesPlotRow(plotRow) };
        // if point already exist on the time scale - we don't need to make a full update and just make an incremental one
        if (!affectsTimeScale) {
            return this._getUpdateResponse(series, -1, info);
        }
        var newPoint = { timeWeight: 0, time: pointDataAtTime.timePoint, pointData: pointDataAtTime };
        var insertIndex = lowerbound(this._sortedTimePoints, newPoint.time.timestamp, function (a, b) { return a.time.timestamp < b; });
        // yes, I know that this array is readonly and this change is intended to make it performative
        // we marked _sortedTimePoints array as readonly to avoid modifying this array anywhere else
        // but this place is exceptional case due performance reasons, sorry
        this._sortedTimePoints.splice(insertIndex, 0, newPoint);
        for (var index = insertIndex; index < this._sortedTimePoints.length; ++index) {
            assignIndexToPointData(this._sortedTimePoints[index].pointData, index);
        }
        fillWeightsForPoints(this._sortedTimePoints, insertIndex);
        return this._getUpdateResponse(series, insertIndex, info);
    };
    DataLayer.prototype._updateLastSeriesRow = function (series, plotRow) {
        var seriesData = this._seriesRowsBySeries.get(series);
        if (seriesData === undefined) {
            seriesData = [];
            this._seriesRowsBySeries.set(series, seriesData);
        }
        var lastSeriesRow = seriesData.length !== 0 ? seriesData[seriesData.length - 1] : null;
        if (lastSeriesRow === null || plotRow.time.timestamp > lastSeriesRow.time.timestamp) {
            if (isSeriesPlotRow(plotRow)) {
                seriesData.push(plotRow);
            }
        }
        else {
            if (isSeriesPlotRow(plotRow)) {
                seriesData[seriesData.length - 1] = plotRow;
            }
            else {
                seriesData.splice(-1, 1);
            }
        }
        this._seriesLastTimePoint.set(series, plotRow.time);
    };
    DataLayer.prototype._setRowsToSeries = function (series, seriesRows) {
        if (seriesRows.length !== 0) {
            this._seriesRowsBySeries.set(series, seriesRows.filter(isSeriesPlotRow));
            this._seriesLastTimePoint.set(series, seriesRows[seriesRows.length - 1].time);
        }
        else {
            this._seriesRowsBySeries.delete(series);
            this._seriesLastTimePoint.delete(series);
        }
    };
    DataLayer.prototype._cleanupPointsData = function () {
        // let's treat all current points as "potentially removed"
        // we could create an array with actually potentially removed points
        // but most likely this array will be similar to _sortedTimePoints so let's avoid using additional memory
        // note that we can use _sortedTimePoints here since a point might be removed only it was here previously
        for (var _i = 0, _a = this._sortedTimePoints; _i < _a.length; _i++) {
            var point = _a[_i];
            if (point.pointData.mapping.size === 0) {
                this._pointDataByTimePoint.delete(point.time.timestamp);
            }
        }
    };
    /**
     * Sets new time scale and make indexes valid for all series
     *
     * @returns The index of the first changed point or `-1` if there is no change.
     */
    DataLayer.prototype._replaceTimeScalePoints = function (newTimePoints) {
        var firstChangedPointIndex = -1;
        // search the first different point and "syncing" time weight by the way
        for (var index = 0; index < this._sortedTimePoints.length && index < newTimePoints.length; ++index) {
            var oldPoint = this._sortedTimePoints[index];
            var newPoint = newTimePoints[index];
            if (oldPoint.time.timestamp !== newPoint.time.timestamp) {
                firstChangedPointIndex = index;
                break;
            }
            // re-assign point's time weight for points if time is the same (and all prior times was the same)
            newPoint.timeWeight = oldPoint.timeWeight;
            assignIndexToPointData(newPoint.pointData, index);
        }
        if (firstChangedPointIndex === -1 && this._sortedTimePoints.length !== newTimePoints.length) {
            // the common part of the prev and the new points are the same
            // so the first changed point is the next after the common part
            firstChangedPointIndex = Math.min(this._sortedTimePoints.length, newTimePoints.length);
        }
        if (firstChangedPointIndex === -1) {
            // if no time scale changed, then do nothing
            return -1;
        }
        // if time scale points are changed that means that we need to make full update to all series (with clearing points)
        // but first we need to synchronize indexes and re-fill time weights
        for (var index = firstChangedPointIndex; index < newTimePoints.length; ++index) {
            assignIndexToPointData(newTimePoints[index].pointData, index);
        }
        // re-fill time weights for point after the first changed one
        fillWeightsForPoints(newTimePoints, firstChangedPointIndex);
        this._sortedTimePoints = newTimePoints;
        return firstChangedPointIndex;
    };
    DataLayer.prototype._getBaseIndex = function () {
        if (this._seriesRowsBySeries.size === 0) {
            // if we have no data then 'reset' the base index to null
            return null;
        }
        var baseIndex = 0;
        this._seriesRowsBySeries.forEach(function (data) {
            if (data.length !== 0) {
                baseIndex = Math.max(baseIndex, data[data.length - 1].index);
            }
        });
        return baseIndex;
    };
    DataLayer.prototype._getUpdateResponse = function (updatedSeries, firstChangedPointIndex, info) {
        var dataUpdateResponse = {
            series: new Map(),
            timeScale: {
                baseIndex: this._getBaseIndex(),
            },
        };
        if (firstChangedPointIndex !== -1) {
            // TODO: it's possible to make perf improvements by checking what series has data after firstChangedPointIndex
            // but let's skip for now
            this._seriesRowsBySeries.forEach(function (data, s) {
                dataUpdateResponse.series.set(s, {
                    data: data,
                    info: s === updatedSeries ? info : undefined,
                });
            });
            // if the series data was set to [] it will have already been removed from _seriesRowBySeries
            // meaning the forEach above won't add the series to the data update response
            // so we handle that case here
            if (!this._seriesRowsBySeries.has(updatedSeries)) {
                dataUpdateResponse.series.set(updatedSeries, { data: [], info: info });
            }
            dataUpdateResponse.timeScale.points = this._sortedTimePoints;
            dataUpdateResponse.timeScale.firstChangedPointIndex = firstChangedPointIndex;
        }
        else {
            var seriesData = this._seriesRowsBySeries.get(updatedSeries);
            // if no seriesData found that means that we just removed the series
            dataUpdateResponse.series.set(updatedSeries, { data: seriesData || [], info: info });
        }
        return dataUpdateResponse;
    };
    return DataLayer;
}());
function assignIndexToPointData(pointData, index) {
    // first, nevertheless update index of point data ("make it valid")
    pointData.index = index;
    // and then we need to sync indexes for all series
    pointData.mapping.forEach(function (seriesRow) {
        seriesRow.index = index;
    });
}

function checkPriceLineOptions(options) {
    assert(typeof options.price === 'number', "the type of 'price' price line's property must be a number, got '".concat(typeof options.price, "'"));
}
function checkItemsAreOrdered(data, allowDuplicates) {
    if (allowDuplicates === void 0) { allowDuplicates = false; }
    if (data.length === 0) {
        return;
    }
    var prevTime = convertTime(data[0].time).timestamp;
    for (var i = 1; i < data.length; ++i) {
        var currentTime = convertTime(data[i].time).timestamp;
        var checkResult = allowDuplicates ? prevTime <= currentTime : prevTime < currentTime;
        assert(checkResult, "data must be asc ordered by time, index=".concat(i, ", time=").concat(currentTime, ", prev time=").concat(prevTime));
        prevTime = currentTime;
    }
}
function checkSeriesValuesType(type, data) {
    data.forEach(getChecker(type));
}
function getChecker(type) {
    switch (type) {
        case 'Bar':
        case 'Candlestick':
            return checkBarItem.bind(null, type);
        case 'Area':
        case 'Baseline':
        case 'Line':
        case 'Histogram':
            return checkLineItem.bind(null, type);
    }
}
function checkBarItem(type, barItem) {
    if (!isFulfilledData(barItem)) {
        return;
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/no-unsafe-member-access
    var barData = barItem; // Type assertion for bar data
    assert(typeof barData.open === 'number', "".concat(type, " series item data value of open must be a number, got=").concat(typeof barData.open, ", value=").concat(barData.open));
    assert(typeof barData.high === 'number', "".concat(type, " series item data value of high must be a number, got=").concat(typeof barData.high, ", value=").concat(barData.high));
    assert(typeof barData.low === 'number', "".concat(type, " series item data value of low must be a number, got=").concat(typeof barData.low, ", value=").concat(barData.low));
    assert(typeof barData.close === 'number', "".concat(type, " series item data value of close must be a number, got=").concat(typeof barData.close, ", value=").concat(barData.close));
}
function checkLineItem(type, lineItem) {
    if (!isFulfilledData(lineItem)) {
        return;
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/no-unsafe-member-access
    var lineData = lineItem; // Type assertion for line data
    assert(typeof lineData.value === 'number' || lineData.value === null, "".concat(type, " series item data value must be a number, got=").concat(typeof lineData.value, ", value=").concat(lineData.value));
}

var priceLineOptionsDefaults = {
    color: '#FF0000',
    price: 0,
    lineStyle: 2 /* LineStyle.Dashed */,
    lineWidth: 1,
    lineVisible: true,
    axisLabelVisible: true,
    title: '',
    draggable: false,
};

var PriceLine = /** @class */ (function () {
    function PriceLine(priceLine) {
        this._priceLine = priceLine;
    }
    PriceLine.prototype.applyOptions = function (options) {
        this._priceLine.applyOptions(options);
    };
    PriceLine.prototype.options = function () {
        return this._priceLine.options();
    };
    PriceLine.prototype.priceLine = function () {
        return this._priceLine;
    };
    return PriceLine;
}());

function migrateOptions(options) {
    // eslint-disable-next-line deprecation/deprecation
    var overlay = options.overlay, res = __rest(options, ["overlay"]);
    if (overlay) {
        res.priceScaleId = '';
    }
    return res;
}
var SeriesApi = /** @class */ (function () {
    function SeriesApi(series, dataUpdatesConsumer, priceScaleApiProvider) {
        this._series = series;
        this._dataUpdatesConsumer = dataUpdatesConsumer;
        this._priceScaleApiProvider = priceScaleApiProvider;
    }
    SeriesApi.prototype.priceFormatter = function () {
        return this._series.formatter();
    };
    SeriesApi.prototype.priceToCoordinate = function (price) {
        var firstValue = this._series.firstValue();
        if (firstValue === null) {
            return null;
        }
        return this._series.priceScale().priceToCoordinate(price, firstValue.value);
    };
    SeriesApi.prototype.coordinateToPrice = function (coordinate) {
        var firstValue = this._series.firstValue();
        if (firstValue === null) {
            return null;
        }
        return this._series.priceScale().coordinateToPrice(coordinate, firstValue.value);
    };
    // eslint-disable-next-line complexity
    SeriesApi.prototype.barsInLogicalRange = function (range) {
        if (range === null) {
            return null;
        }
        // we use TimeScaleVisibleRange here to convert LogicalRange to strict range properly
        var correctedRange = new TimeScaleVisibleRange(new RangeImpl(range.from, range.to)).strictRange();
        var bars = this._series.bars();
        if (bars.isEmpty()) {
            return null;
        }
        var dataFirstBarInRange = bars.search(correctedRange.left(), 1 /* PlotRowSearchMode.NearestRight */);
        var dataLastBarInRange = bars.search(correctedRange.right(), -1 /* PlotRowSearchMode.NearestLeft */);
        var dataFirstIndex = ensureNotNull(bars.firstIndex());
        var dataLastIndex = ensureNotNull(bars.lastIndex());
        // this means that we request data in the data gap
        // e.g. let's say we have series with data [0..10, 30..60]
        // and we request bars info in range [15, 25]
        // thus, dataFirstBarInRange will be with index 30 and dataLastBarInRange with 10
        if (dataFirstBarInRange !== null && dataLastBarInRange !== null && dataFirstBarInRange.index > dataLastBarInRange.index) {
            return {
                barsBefore: range.from - dataFirstIndex,
                barsAfter: dataLastIndex - range.to,
            };
        }
        var barsBefore = (dataFirstBarInRange === null || dataFirstBarInRange.index === dataFirstIndex)
            ? range.from - dataFirstIndex
            : dataFirstBarInRange.index - dataFirstIndex;
        var barsAfter = (dataLastBarInRange === null || dataLastBarInRange.index === dataLastIndex)
            ? dataLastIndex - range.to
            : dataLastIndex - dataLastBarInRange.index;
        var result = { barsBefore: barsBefore, barsAfter: barsAfter };
        // actually they can't exist separately
        if (dataFirstBarInRange !== null && dataLastBarInRange !== null) {
            result.from = dataFirstBarInRange.time.businessDay || dataFirstBarInRange.time.timestamp;
            result.to = dataLastBarInRange.time.businessDay || dataLastBarInRange.time.timestamp;
        }
        return result;
    };
    SeriesApi.prototype.setData = function (data) {
        checkItemsAreOrdered(data);
        checkSeriesValuesType(this._series.seriesType(), data);
        this._dataUpdatesConsumer.applyNewData(this._series, data);
    };
    SeriesApi.prototype.update = function (bar) {
        checkSeriesValuesType(this._series.seriesType(), [bar]);
        this._dataUpdatesConsumer.updateData(this._series, bar);
    };
    SeriesApi.prototype.setMarkers = function (data) {
        checkItemsAreOrdered(data, true);
        var convertedMarkers = data.map(function (marker) { return (__assign(__assign({}, marker), { time: convertTime(marker.time) })); });
        this._series.setMarkers(convertedMarkers);
    };
    SeriesApi.prototype.applyOptions = function (options) {
        var migratedOptions = migrateOptions(options);
        this._series.applyOptions(migratedOptions);
    };
    SeriesApi.prototype.options = function () {
        return clone(this._series.options());
    };
    SeriesApi.prototype.priceScale = function () {
        return this._priceScaleApiProvider.priceScale(this._series.priceScale().id());
    };
    SeriesApi.prototype.createPriceLine = function (options) {
        checkPriceLineOptions(options);
        var strictOptions = merge(clone(priceLineOptionsDefaults), options);
        var priceLine = this._series.createPriceLine(strictOptions);
        return new PriceLine(priceLine);
    };
    SeriesApi.prototype.removePriceLine = function (line) {
        this._series.removePriceLine(line.priceLine());
    };
    SeriesApi.prototype.seriesType = function () {
        return this._series.seriesType();
    };
    return SeriesApi;
}());

var CandlestickSeriesApi = /** @class */ (function (_super) {
    __extends(CandlestickSeriesApi, _super);
    function CandlestickSeriesApi() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CandlestickSeriesApi.prototype.applyOptions = function (options) {
        fillUpDownCandlesticksColors(options);
        _super.prototype.applyOptions.call(this, options);
    };
    return CandlestickSeriesApi;
}(SeriesApi));

var crosshairOptionsDefaults = {
    vertLine: {
        color: '#758696',
        width: 1,
        style: 3 /* LineStyle.LargeDashed */,
        visible: true,
        labelVisible: true,
        labelBackgroundColor: '#4c525e',
    },
    horzLine: {
        color: '#758696',
        width: 1,
        style: 3 /* LineStyle.LargeDashed */,
        visible: true,
        labelVisible: true,
        labelBackgroundColor: '#4c525e',
    },
    mode: 1 /* CrosshairMode.Magnet */,
};

var gridOptionsDefaults = {
    vertLines: {
        color: '#D6DCDE',
        style: 0 /* LineStyle.Solid */,
        visible: true,
    },
    horzLines: {
        color: '#D6DCDE',
        style: 0 /* LineStyle.Solid */,
        visible: true,
    },
};

var layoutOptionsDefaults = {
    background: {
        type: "solid" /* ColorType.Solid */,
        color: '#FFFFFF',
    },
    textColor: '#191919',
    fontSize: 11,
    fontFamily: defaultFontFamily,
};

var priceScaleOptionsDefaults = {
    autoScale: true,
    mode: 0 /* PriceScaleMode.Normal */,
    invertScale: false,
    alignLabels: true,
    borderVisible: true,
    borderColor: '#2B2B43',
    entireTextOnly: false,
    visible: false,
    drawTicks: true,
    scaleMargins: {
        bottom: 0.1,
        top: 0.2,
    },
    width: 0
};

var timeScaleOptionsDefaults = {
    rightOffset: 0,
    barSpacing: 6,
    minBarSpacing: 0.5,
    fixLeftEdge: false,
    fixRightEdge: false,
    lockVisibleTimeRangeOnResize: false,
    rightBarStaysOnScroll: false,
    borderVisible: true,
    borderColor: '#2B2B43',
    visible: true,
    timeVisible: false,
    secondsVisible: true,
    shiftVisibleRangeOnNewBar: true,
};

var watermarkOptionsDefaults = {
    color: 'rgba(0, 0, 0, 0)',
    visible: false,
    fontSize: 48,
    fontFamily: defaultFontFamily,
    fontStyle: '',
    text: '',
    horzAlign: 'center',
    vertAlign: 'center',
};

var chartOptionsDefaults = {
    width: 0,
    height: 0,
    layout: layoutOptionsDefaults,
    crosshair: crosshairOptionsDefaults,
    grid: gridOptionsDefaults,
    overlayPriceScales: __assign({}, priceScaleOptionsDefaults),
    leftPriceScale: __assign(__assign({}, priceScaleOptionsDefaults), { visible: false }),
    rightPriceScale: __assign(__assign({}, priceScaleOptionsDefaults), { visible: true }),
    timeScale: timeScaleOptionsDefaults,
    watermark: watermarkOptionsDefaults,
    localization: {
        locale: isRunningOnClientSide ? navigator.language : '',
        dateFormat: 'dd MMM \'yy',
    },
    handleScroll: {
        mouseWheel: true,
        pressedMouseMove: true,
        horzTouchDrag: true,
        vertTouchDrag: true,
    },
    handleScale: {
        axisPressedMouseMove: {
            time: true,
            price: true,
        },
        axisDoubleClickReset: true,
        mouseWheel: true,
        pinch: true,
    },
    kineticScroll: {
        mouse: false,
        touch: true,
    },
    trackingMode: {
        exitMode: 1 /* TrackingModeExitMode.OnNextTap */,
    },
};

var candlestickStyleDefaults = {
    upColor: '#26a69a',
    downColor: '#ef5350',
    wickVisible: true,
    borderVisible: true,
    borderColor: '#378658',
    borderUpColor: '#26a69a',
    borderDownColor: '#ef5350',
    wickColor: '#737375',
    wickUpColor: '#26a69a',
    wickDownColor: '#ef5350',
};
var barStyleDefaults = {
    upColor: '#26a69a',
    downColor: '#ef5350',
    openVisible: true,
    thinBars: true,
};
var lineStyleDefaults = {
    color: '#2196f3',
    lineStyle: 0 /* LineStyle.Solid */,
    lineWidth: 3,
    lineType: 0 /* LineType.Simple */,
    crosshairMarkerVisible: true,
    crosshairMarkerRadius: 4,
    crosshairMarkerBorderColor: '',
    crosshairMarkerBackgroundColor: '',
    lastPriceAnimation: 0 /* LastPriceAnimationMode.Disabled */,
};
var areaStyleDefaults = {
    topColor: 'rgba( 46, 220, 135, 0.4)',
    bottomColor: 'rgba( 40, 221, 100, 0)',
    lineColor: '#33D778',
    lineStyle: 0 /* LineStyle.Solid */,
    lineWidth: 3,
    lineType: 0 /* LineType.Simple */,
    crosshairMarkerVisible: true,
    crosshairMarkerRadius: 4,
    crosshairMarkerBorderColor: '',
    crosshairMarkerBackgroundColor: '',
    lastPriceAnimation: 0 /* LastPriceAnimationMode.Disabled */,
};
var baselineStyleDefaults = {
    baseValue: {
        type: 'price',
        price: 0,
    },
    topFillColor1: 'rgba(38, 166, 154, 0.28)',
    topFillColor2: 'rgba(38, 166, 154, 0.05)',
    topLineColor: 'rgba(38, 166, 154, 1)',
    bottomFillColor1: 'rgba(239, 83, 80, 0.05)',
    bottomFillColor2: 'rgba(239, 83, 80, 0.28)',
    bottomLineColor: 'rgba(239, 83, 80, 1)',
    lineWidth: 3,
    lineStyle: 0 /* LineStyle.Solid */,
    crosshairMarkerVisible: true,
    crosshairMarkerRadius: 4,
    crosshairMarkerBorderColor: '',
    crosshairMarkerBackgroundColor: '',
    lastPriceAnimation: 0 /* LastPriceAnimationMode.Disabled */,
};
var histogramStyleDefaults = {
    color: '#26a69a',
    base: 0,
};
var seriesOptionsDefaults = {
    title: '',
    visible: true,
    lastValueVisible: true,
    priceLineVisible: true,
    priceLineSource: 0 /* PriceLineSource.LastBar */,
    priceLineWidth: 1,
    priceLineColor: '',
    priceLineStyle: 2 /* LineStyle.Dashed */,
    baseLineVisible: true,
    baseLineWidth: 1,
    baseLineColor: '#B2B5BE',
    baseLineStyle: 0 /* LineStyle.Solid */,
    priceFormat: {
        type: 'price',
        precision: 2,
        minMove: 0.01,
    },
};

var PriceScaleApi = /** @class */ (function () {
    function PriceScaleApi(chartWidget, priceScaleId) {
        this._chartWidget = chartWidget;
        this._priceScaleId = priceScaleId;
    }
    PriceScaleApi.prototype.applyOptions = function (options) {
        this._chartWidget.model().applyPriceScaleOptions(this._priceScaleId, options);
    };
    PriceScaleApi.prototype.options = function () {
        return this._priceScale().options();
    };
    PriceScaleApi.prototype.width = function () {
        if (!isDefaultPriceScale(this._priceScaleId)) {
            return 0;
        }
        return this._chartWidget.getPriceAxisWidth(this._priceScaleId === "left" /* DefaultPriceScaleId.Left */ ? 'left' : 'right');
    };
    PriceScaleApi.prototype.formatPrice = function (price, firstValue) {
        if (firstValue === void 0) { firstValue = 0; }
        return this._priceScale().formatPrice(price, firstValue);
    };
    PriceScaleApi.prototype._priceScale = function () {
        return ensureNotNull(this._chartWidget.model().findPriceScale(this._priceScaleId)).priceScale;
    };
    return PriceScaleApi;
}());

var Constants;
(function (Constants) {
    Constants[Constants["AnimationDurationMs"] = 1000] = "AnimationDurationMs";
})(Constants || (Constants = {}));
var TimeScaleApi = /** @class */ (function () {
    function TimeScaleApi(model, timeAxisWidget) {
        this._timeRangeChanged = new Delegate();
        this._logicalRangeChanged = new Delegate();
        this._sizeChanged = new Delegate();
        this._model = model;
        this._timeScale = model.timeScale();
        this._timeAxisWidget = timeAxisWidget;
        this._timeScale.visibleBarsChanged().subscribe(this._onVisibleBarsChanged.bind(this));
        this._timeScale.logicalRangeChanged().subscribe(this._onVisibleLogicalRangeChanged.bind(this));
        this._timeAxisWidget.sizeChanged().subscribe(this._onSizeChanged.bind(this));
    }
    TimeScaleApi.prototype.destroy = function () {
        this._timeScale.visibleBarsChanged().unsubscribeAll(this);
        this._timeScale.logicalRangeChanged().unsubscribeAll(this);
        this._timeAxisWidget.sizeChanged().unsubscribeAll(this);
        this._timeRangeChanged.destroy();
        this._logicalRangeChanged.destroy();
        this._sizeChanged.destroy();
    };
    TimeScaleApi.prototype.scrollPosition = function () {
        return this._timeScale.rightOffset();
    };
    TimeScaleApi.prototype.scrollToPosition = function (position, animated) {
        if (!animated) {
            this._model.setRightOffset(position);
            return;
        }
        this._timeScale.scrollToOffsetAnimated(position, 1000 /* Constants.AnimationDurationMs */);
    };
    TimeScaleApi.prototype.scrollToRealTime = function () {
        this._timeScale.scrollToRealTime();
    };
    TimeScaleApi.prototype.getVisibleRange = function () {
        var _a, _b;
        var timeRange = this._timeScale.visibleTimeRange();
        if (timeRange === null) {
            return null;
        }
        return {
            from: (_a = timeRange.from.businessDay) !== null && _a !== void 0 ? _a : timeRange.from.timestamp,
            to: (_b = timeRange.to.businessDay) !== null && _b !== void 0 ? _b : timeRange.to.timestamp,
        };
    };
    TimeScaleApi.prototype.setVisibleRange = function (range) {
        var convertedRange = {
            from: convertTime(range.from),
            to: convertTime(range.to),
        };
        var logicalRange = this._timeScale.logicalRangeForTimeRange(convertedRange);
        this._model.setTargetLogicalRange(logicalRange);
    };
    TimeScaleApi.prototype.getVisibleLogicalRange = function () {
        var logicalRange = this._timeScale.visibleLogicalRange();
        if (logicalRange === null) {
            return null;
        }
        return {
            from: logicalRange.left(),
            to: logicalRange.right(),
        };
    };
    TimeScaleApi.prototype.setVisibleLogicalRange = function (range) {
        assert(range.from <= range.to, 'The from index cannot be after the to index.');
        this._model.setTargetLogicalRange(range);
    };
    TimeScaleApi.prototype.resetTimeScale = function () {
        this._model.resetTimeScale();
    };
    TimeScaleApi.prototype.fitContent = function () {
        this._model.fitContent();
    };
    TimeScaleApi.prototype.logicalToCoordinate = function (logical) {
        var timeScale = this._model.timeScale();
        if (timeScale.isEmpty()) {
            return null;
        }
        else {
            return timeScale.indexToCoordinate(logical);
        }
    };
    TimeScaleApi.prototype.coordinateToLogical = function (x) {
        if (this._timeScale.isEmpty()) {
            return null;
        }
        else {
            return this._timeScale.coordinateToIndex(x);
        }
    };
    TimeScaleApi.prototype.timeToCoordinate = function (time) {
        var timePoint = convertTime(time);
        var timePointIndex = this._timeScale.timeToIndex(timePoint, false);
        if (timePointIndex === null) {
            return null;
        }
        return this._timeScale.indexToCoordinate(timePointIndex);
    };
    TimeScaleApi.prototype.coordinateToTime = function (x) {
        var _a;
        var timeScale = this._model.timeScale();
        var timePointIndex = timeScale.coordinateToIndex(x);
        var timePoint = timeScale.indexToTime(timePointIndex);
        if (timePoint === null) {
            return null;
        }
        return (_a = timePoint.businessDay) !== null && _a !== void 0 ? _a : timePoint.timestamp;
    };
    TimeScaleApi.prototype.width = function () {
        return this._timeAxisWidget.getSize().w;
    };
    TimeScaleApi.prototype.height = function () {
        return this._timeAxisWidget.getSize().h;
    };
    TimeScaleApi.prototype.subscribeVisibleTimeRangeChange = function (handler) {
        this._timeRangeChanged.subscribe(handler);
    };
    TimeScaleApi.prototype.unsubscribeVisibleTimeRangeChange = function (handler) {
        this._timeRangeChanged.unsubscribe(handler);
    };
    TimeScaleApi.prototype.subscribeVisibleLogicalRangeChange = function (handler) {
        this._logicalRangeChanged.subscribe(handler);
    };
    TimeScaleApi.prototype.unsubscribeVisibleLogicalRangeChange = function (handler) {
        this._logicalRangeChanged.unsubscribe(handler);
    };
    TimeScaleApi.prototype.subscribeSizeChange = function (handler) {
        this._sizeChanged.subscribe(handler);
    };
    TimeScaleApi.prototype.unsubscribeSizeChange = function (handler) {
        this._sizeChanged.unsubscribe(handler);
    };
    TimeScaleApi.prototype.applyOptions = function (options) {
        this._timeScale.applyOptions(options);
    };
    TimeScaleApi.prototype.options = function () {
        return clone(this._timeScale.options());
    };
    TimeScaleApi.prototype._onVisibleBarsChanged = function () {
        if (this._timeRangeChanged.hasListeners()) {
            this._timeRangeChanged.fire(this.getVisibleRange());
        }
    };
    TimeScaleApi.prototype._onVisibleLogicalRangeChanged = function () {
        if (this._logicalRangeChanged.hasListeners()) {
            this._logicalRangeChanged.fire(this.getVisibleLogicalRange());
        }
    };
    TimeScaleApi.prototype._onSizeChanged = function (size) {
        this._sizeChanged.fire(size.w, size.h);
    };
    return TimeScaleApi;
}());

function patchPriceFormat(priceFormat) {
    if (priceFormat === undefined || priceFormat.type === 'custom') {
        return;
    }
    var priceFormatBuiltIn = priceFormat;
    if (priceFormatBuiltIn.minMove !== undefined && priceFormatBuiltIn.precision === undefined) {
        priceFormatBuiltIn.precision = precisionByMinMove(priceFormatBuiltIn.minMove);
    }
}
function migrateHandleScaleScrollOptions(options) {
    if (isBoolean(options.handleScale)) {
        var handleScale = options.handleScale;
        options.handleScale = {
            axisDoubleClickReset: handleScale,
            axisPressedMouseMove: {
                time: handleScale,
                price: handleScale,
            },
            mouseWheel: handleScale,
            pinch: handleScale,
        };
    }
    else if (options.handleScale !== undefined && isBoolean(options.handleScale.axisPressedMouseMove)) {
        var axisPressedMouseMove = options.handleScale.axisPressedMouseMove;
        options.handleScale.axisPressedMouseMove = {
            time: axisPressedMouseMove,
            price: axisPressedMouseMove,
        };
    }
    var handleScroll = options.handleScroll;
    if (isBoolean(handleScroll)) {
        options.handleScroll = {
            horzTouchDrag: handleScroll,
            vertTouchDrag: handleScroll,
            mouseWheel: handleScroll,
            pressedMouseMove: handleScroll,
        };
    }
}
function migratePriceScaleOptions(options) {
    /* eslint-disable deprecation/deprecation */
    if (options.priceScale) {
        warn('"priceScale" option has been deprecated, use "leftPriceScale", "rightPriceScale" and "overlayPriceScales" instead');
        options.leftPriceScale = options.leftPriceScale || {};
        options.rightPriceScale = options.rightPriceScale || {};
        var position = options.priceScale.position;
        delete options.priceScale.position;
        options.leftPriceScale = merge(options.leftPriceScale, options.priceScale);
        options.rightPriceScale = merge(options.rightPriceScale, options.priceScale);
        if (position === 'left') {
            options.leftPriceScale.visible = true;
            options.rightPriceScale.visible = false;
        }
        if (position === 'right') {
            options.leftPriceScale.visible = false;
            options.rightPriceScale.visible = true;
        }
        if (position === 'none') {
            options.leftPriceScale.visible = false;
            options.rightPriceScale.visible = false;
        }
        // copy defaults for overlays
        options.overlayPriceScales = options.overlayPriceScales || {};
        if (options.priceScale.invertScale !== undefined) {
            options.overlayPriceScales.invertScale = options.priceScale.invertScale;
        }
        // do not migrate mode for backward compatibility
        if (options.priceScale.scaleMargins !== undefined) {
            options.overlayPriceScales.scaleMargins = options.priceScale.scaleMargins;
        }
    }
    /* eslint-enable deprecation/deprecation */
}
function migrateLayoutOptions(options) {
    /* eslint-disable deprecation/deprecation */
    if (!options.layout) {
        return;
    }
    if (options.layout.backgroundColor && !options.layout.background) {
        options.layout.background = { type: "solid" /* ColorType.Solid */, color: options.layout.backgroundColor };
    }
    /* eslint-enable deprecation/deprecation */
}
function toInternalOptions(options) {
    migrateHandleScaleScrollOptions(options);
    migratePriceScaleOptions(options);
    migrateLayoutOptions(options);
    return options;
}
var ChartApi = /** @class */ (function () {
    function ChartApi(container, options) {
        var _this = this;
        this._dataLayer = new DataLayer();
        this._seriesMap = new Map();
        this._seriesMapReversed = new Map();
        this._clickedDelegate = new Delegate();
        this._crosshairMovedDelegate = new Delegate();
        this._customPriceLineDraggedDelegate = new Delegate();
        var internalOptions = (options === undefined) ?
            clone(chartOptionsDefaults) :
            merge(clone(chartOptionsDefaults), toInternalOptions(options));
        this._chartWidget = new ChartWidget(container, internalOptions);
        this._chartWidget.clicked().subscribe(function (paramSupplier) {
            if (_this._clickedDelegate.hasListeners()) {
                _this._clickedDelegate.fire(_this._convertMouseParams(paramSupplier()));
            }
        }, this);
        this._chartWidget.crosshairMoved().subscribe(function (paramSupplier) {
            if (_this._crosshairMovedDelegate.hasListeners()) {
                _this._crosshairMovedDelegate.fire(_this._convertMouseParams(paramSupplier()));
            }
        }, this);
        this._chartWidget.customPriceLineDragged().subscribe(function (paramSupplier) {
            if (_this._customPriceLineDraggedDelegate.hasListeners()) {
                _this._customPriceLineDraggedDelegate.fire(_this._convertCustomPriceLineDraggedParams(paramSupplier()));
            }
        }, this);
        var model = this._chartWidget.model();
        this._timeScaleApi = new TimeScaleApi(model, this._chartWidget.timeAxisWidget());
    }
    ChartApi.prototype.remove = function () {
        this._chartWidget.clicked().unsubscribeAll(this);
        this._chartWidget.crosshairMoved().unsubscribeAll(this);
        this._chartWidget.customPriceLineDragged().unsubscribeAll(this);
        this._timeScaleApi.destroy();
        this._chartWidget.destroy();
        this._seriesMap.clear();
        this._seriesMapReversed.clear();
        this._clickedDelegate.destroy();
        this._crosshairMovedDelegate.destroy();
        this._customPriceLineDraggedDelegate.destroy();
        this._dataLayer.destroy();
    };
    ChartApi.prototype.resize = function (width, height, forceRepaint) {
        this._chartWidget.resize(width, height, forceRepaint);
    };
    ChartApi.prototype.addAreaSeries = function (options) {
        if (options === void 0) { options = {}; }
        options = migrateOptions(options);
        patchPriceFormat(options.priceFormat);
        var strictOptions = merge(clone(seriesOptionsDefaults), areaStyleDefaults, options);
        var series = this._chartWidget.model().createSeries('Area', strictOptions);
        var res = new SeriesApi(series, this, this);
        this._seriesMap.set(res, series);
        this._seriesMapReversed.set(series, res);
        return res;
    };
    ChartApi.prototype.addBaselineSeries = function (options) {
        if (options === void 0) { options = {}; }
        options = migrateOptions(options);
        patchPriceFormat(options.priceFormat);
        // to avoid assigning fields to defaults we have to clone them
        var strictOptions = merge(clone(seriesOptionsDefaults), clone(baselineStyleDefaults), options);
        var series = this._chartWidget.model().createSeries('Baseline', strictOptions);
        var res = new SeriesApi(series, this, this);
        this._seriesMap.set(res, series);
        this._seriesMapReversed.set(series, res);
        return res;
    };
    ChartApi.prototype.addBarSeries = function (options) {
        if (options === void 0) { options = {}; }
        options = migrateOptions(options);
        patchPriceFormat(options.priceFormat);
        var strictOptions = merge(clone(seriesOptionsDefaults), barStyleDefaults, options);
        var series = this._chartWidget.model().createSeries('Bar', strictOptions);
        var res = new SeriesApi(series, this, this);
        this._seriesMap.set(res, series);
        this._seriesMapReversed.set(series, res);
        return res;
    };
    ChartApi.prototype.addCandlestickSeries = function (options) {
        if (options === void 0) { options = {}; }
        options = migrateOptions(options);
        fillUpDownCandlesticksColors(options);
        patchPriceFormat(options.priceFormat);
        var strictOptions = merge(clone(seriesOptionsDefaults), candlestickStyleDefaults, options);
        var series = this._chartWidget.model().createSeries('Candlestick', strictOptions);
        var res = new CandlestickSeriesApi(series, this, this);
        this._seriesMap.set(res, series);
        this._seriesMapReversed.set(series, res);
        return res;
    };
    ChartApi.prototype.addHistogramSeries = function (options) {
        if (options === void 0) { options = {}; }
        options = migrateOptions(options);
        patchPriceFormat(options.priceFormat);
        var strictOptions = merge(clone(seriesOptionsDefaults), histogramStyleDefaults, options);
        var series = this._chartWidget.model().createSeries('Histogram', strictOptions);
        var res = new SeriesApi(series, this, this);
        this._seriesMap.set(res, series);
        this._seriesMapReversed.set(series, res);
        return res;
    };
    ChartApi.prototype.addLineSeries = function (options) {
        if (options === void 0) { options = {}; }
        options = migrateOptions(options);
        patchPriceFormat(options.priceFormat);
        var strictOptions = merge(clone(seriesOptionsDefaults), lineStyleDefaults, options);
        var series = this._chartWidget.model().createSeries('Line', strictOptions);
        var res = new SeriesApi(series, this, this);
        this._seriesMap.set(res, series);
        this._seriesMapReversed.set(series, res);
        return res;
    };
    ChartApi.prototype.removeSeries = function (seriesApi) {
        var series = ensureDefined(this._seriesMap.get(seriesApi));
        var update = this._dataLayer.removeSeries(series);
        var model = this._chartWidget.model();
        model.removeSeries(series);
        this._sendUpdateToChart(update);
        this._seriesMap.delete(seriesApi);
        this._seriesMapReversed.delete(series);
    };
    ChartApi.prototype.applyNewData = function (series, data) {
        this._sendUpdateToChart(this._dataLayer.setSeriesData(series, data));
    };
    ChartApi.prototype.updateData = function (series, data) {
        this._sendUpdateToChart(this._dataLayer.updateSeriesData(series, data));
    };
    ChartApi.prototype.subscribeClick = function (handler) {
        this._clickedDelegate.subscribe(handler);
    };
    ChartApi.prototype.unsubscribeClick = function (handler) {
        this._clickedDelegate.unsubscribe(handler);
    };
    ChartApi.prototype.moveCrosshair = function (point) {
        if (!point)
            return;
        var paneWidgets = this._chartWidget.paneWidgets();
        var event = {
            localX: point.x,
            localY: point.y,
        };
        paneWidgets[0].mouseMoveEvent(event);
    };
    ChartApi.prototype.subscribeCrosshairMove = function (handler) {
        this._crosshairMovedDelegate.subscribe(handler);
    };
    ChartApi.prototype.unsubscribeCrosshairMove = function (handler) {
        this._crosshairMovedDelegate.unsubscribe(handler);
    };
    ChartApi.prototype.subscribeCustomPriceLineDragged = function (handler) {
        this._customPriceLineDraggedDelegate.subscribe(handler);
    };
    ChartApi.prototype.unsubscribeCustomPriceLineDragged = function (handler) {
        this._customPriceLineDraggedDelegate.unsubscribe(handler);
    };
    ChartApi.prototype.priceScale = function (priceScaleId) {
        if (priceScaleId === undefined) {
            warn('Using ChartApi.priceScale() method without arguments has been deprecated, pass valid price scale id instead');
            priceScaleId = this._chartWidget.model().defaultVisiblePriceScaleId();
        }
        return new PriceScaleApi(this._chartWidget, priceScaleId);
    };
    ChartApi.prototype.timeScale = function () {
        return this._timeScaleApi;
    };
    ChartApi.prototype.applyOptions = function (options) {
        this._chartWidget.applyOptions(toInternalOptions(options));
    };
    ChartApi.prototype.options = function () {
        return this._chartWidget.options();
    };
    ChartApi.prototype.takeScreenshot = function () {
        return this._chartWidget.takeScreenshot();
    };
    ChartApi.prototype._sendUpdateToChart = function (update) {
        var model = this._chartWidget.model();
        model.updateTimeScale(update.timeScale.baseIndex, update.timeScale.points, update.timeScale.firstChangedPointIndex);
        update.series.forEach(function (value, series) { return series.setData(value.data, value.info); });
        model.recalculateAllPanes();
    };
    ChartApi.prototype._mapSeriesToApi = function (series) {
        return ensureDefined(this._seriesMapReversed.get(series));
    };
    ChartApi.prototype._convertMouseParams = function (param) {
        var _this = this;
        var seriesPrices = new Map();
        param.seriesPrices.forEach(function (price, series) {
            seriesPrices.set(_this._mapSeriesToApi(series), price);
        });
        var hoveredSeries = param.hoveredSeries === undefined ? undefined : this._mapSeriesToApi(param.hoveredSeries);
        return {
            time: param.time && (param.time.businessDay || param.time.timestamp),
            point: param.point,
            hoveredSeries: hoveredSeries,
            hoveredMarkerId: param.hoveredObject,
            seriesPrices: seriesPrices,
        };
    };
    ChartApi.prototype._convertCustomPriceLineDraggedParams = function (param) {
        return {
            customPriceLine: param.customPriceLine,
            fromPriceString: param.fromPriceString,
        };
    };
    return ChartApi;
}());

/**
 * This function is the main entry point of the Lightweight Charting Library.
 *
 * @param container - ID of HTML element or element itself
 * @param options - Any subset of options to be applied at start.
 * @returns An interface to the created chart
 */
function createChart(container, options) {
    var htmlElement;
    if (isString(container)) {
        var element = document.getElementById(container);
        assert(element !== null, "Cannot find element in DOM with id=".concat(container));
        htmlElement = element;
    }
    else {
        htmlElement = container;
    }
    return new ChartApi(htmlElement, options);
}

/// <reference types="_build-time-constants" />
/**
 * Returns the current version as a string. For example `'3.3.0'`.
 */
function version() {
    return "3.8.0-dev+202507121752";
}

export { ColorType, CrosshairMode, LastPriceAnimationMode as LasPriceAnimationMode, LastPriceAnimationMode, LineStyle, LineType, PriceFormatter, PriceLineSource, PriceScaleMode, TickMarkType, TrackingModeExitMode, createChart, isBusinessDay, isUTCTimestamp, version };
