import { assert } from '../helpers/assertions';

import { PriceLineOptions } from '../model/price-line-options';
import { VerticalLineOptions } from '../model/vertical-line-options';
import { SeriesMarker } from '../model/series-markers';
import { SeriesType } from '../model/series-options';

import { isFulfilledData, SeriesDataItemTypeMap, Time } from './data-consumer';
import { convertTime } from './data-layer';

export function checkPriceLineOptions(options: PriceLineOptions): void {
	if (process.env.NODE_ENV === 'production') {
		return;
	}

	assert(typeof options.price === 'number', `the type of 'price' price line's property must be a number, got '${typeof options.price}'`);
}

export function checkVerticalLineOptions(options: VerticalLineOptions): void {
	if (process.env.NODE_ENV === 'production') {
		return;
	}

	assert(options.time !== undefined && options.time !== null, 'time must be provided for vertical line');
}

export function checkItemsAreOrdered(data: readonly (SeriesMarker<Time> | SeriesDataItemTypeMap[SeriesType])[], allowDuplicates: boolean = false): void {
	if (process.env.NODE_ENV === 'production') {
		return;
	}

	if (data.length === 0) {
		return;
	}

	let prevTime = convertTime(data[0].time).timestamp;
	for (let i = 1; i < data.length; ++i) {
		const currentTime = convertTime(data[i].time).timestamp;
		const checkResult = allowDuplicates ? prevTime <= currentTime : prevTime < currentTime;
		assert(checkResult, `data must be asc ordered by time, index=${i}, time=${currentTime}, prev time=${prevTime}`);
		prevTime = currentTime;
	}
}

export function checkSeriesValuesType(type: SeriesType, data: readonly SeriesDataItemTypeMap[SeriesType][]): void {
	if (process.env.NODE_ENV === 'production') {
		return;
	}

	data.forEach(getChecker(type));
}

type Checker = (item: SeriesDataItemTypeMap[SeriesType]) => void;

function getChecker(type: SeriesType): Checker {
	switch (type) {
		case 'Bar':
		case 'Candlestick':
			return checkBarItem.bind(null, type);

		case 'Area':
		case 'Baseline':
		case 'Line':
		case 'Histogram':
			return checkLineItem.bind(null, type);

		case 'Shape':
			return checkShapeItem;
	}
}

function checkBarItem(type: 'Bar' | 'Candlestick', barItem: SeriesDataItemTypeMap[typeof type]): void {
	if (!isFulfilledData(barItem)) {
		return;
	}

	// eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/no-unsafe-member-access
	const barData = barItem as any; // Type assertion for bar data
	assert(
		typeof barData.open === 'number',
		`${type} series item data value of open must be a number, got=${typeof barData.open}, value=${barData.open}`
	);
	assert(
		typeof barData.high === 'number',
		`${type} series item data value of high must be a number, got=${typeof barData.high}, value=${barData.high}`
	);
	assert(
		typeof barData.low === 'number',
		`${type} series item data value of low must be a number, got=${typeof barData.low}, value=${barData.low}`
	);
	assert(
		typeof barData.close === 'number',
		`${type} series item data value of close must be a number, got=${typeof barData.close}, value=${barData.close}`
	);
}

function checkLineItem(type: 'Area' | 'Baseline' | 'Line' | 'Histogram', lineItem: SeriesDataItemTypeMap[typeof type]): void {
	if (!isFulfilledData(lineItem)) {
		return;
	}

	// eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/no-unsafe-member-access
	const lineData = lineItem as any; // Type assertion for line data
	assert(
		typeof lineData.value === 'number' || lineData.value === null,
		`${type} series item data value must be a number, got=${typeof lineData.value}, value=${lineData.value}`);
}

function checkShapeItem(shapeItem: SeriesDataItemTypeMap['Shape']): void {
	if (!isFulfilledData(shapeItem)) {
		return;
	}

	// eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/no-unsafe-member-access
	const shapeData = shapeItem as any;
	assert(
		typeof shapeData.value === 'number' || shapeData.value === null,
		`Shape series item data value must be a number, got=${typeof shapeData.value}, value=${shapeData.value}`
	);
	if (shapeData.size !== undefined) {
		assert(
			typeof shapeData.size === 'number',
			`Shape series item data size must be a number, got=${typeof shapeData.size}, value=${shapeData.size}`
		);
	}
}
