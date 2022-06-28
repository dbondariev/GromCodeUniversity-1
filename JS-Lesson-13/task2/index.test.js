import getSum, { getOddNumbers, getSquaredArray } from './calculator.js';

it('Should get only odd numbers', () => {
    expect(getOddNumbers([1, 2, 3, 4])).toEqual([1, 3]);
});

it('Should get Square of numbers', () => {
    expect(getSquaredArray([1, 2, 3, 4])).toEqual([1, 4, 9, 16]);
});

it('Should get sum of numbers', () => {
    expect(getSum(5, 8)).toEqual(13);
});