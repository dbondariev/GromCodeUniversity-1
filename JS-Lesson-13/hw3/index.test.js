import { reverseArray, getAdults, withdraw } from './unit-test';

it('Should return null', () => {
    expect(reverseArray(Array.isArray([1, 2, 3]))).not.toEqual(true);
});

it('Should return reverse array', () => {
    expect(reverseArray([1, 2, 3, 4, 5, 6])).toEqual([6, 5, 4, 3, 2, 1]);
});

it('Should return array did not change', () => {
    const arr = [1, 2, 3, 4, 5, 6];
    expect(reverseArray(arr)).not.toEqual(arr);
});

it('Should return people aged 18+', () => {
    expect(getAdults({ 'John Doe': 19, Tom: 17, Bob: 18 })).toEqual({ 'John Doe': 19, Bob: 18 });
});
