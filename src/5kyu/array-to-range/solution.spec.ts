// See https://www.chaijs.com for how to use Chai.
import {assert} from 'chai';
import {toRange, toArray} from './solution';

type ToRangeTheory = [number[], string];
type ToArrayTheory = [string, number[]];

describe('converting an array to a range', () => {
  it('should convert single number collection', () => {
    assert.equal(toRange([3]), '3');
  });

  it('should convert single collection', () => {
    assert.equal(toRange([3, 4]), '3_4');
    assert.equal(toRange([3, 4, 5]), '3_5');
  });

  it("should convert [3,4,5,6,9] to '3_6,9'", () => {
    assert.equal(toRange([3, 4, 5, 6, 9]), '3_6,9');
  });

  it('should sort ranges', () => {
    assert.equal(toRange([9, 3, 4, 5, 6]), '3_6,9');
  });

  const testData: ToRangeTheory[] = [
    [[3, 7, 9], '3,7,9'],
    [[3, 5, 6, 7, 9], '3,5_7,9'],
    [[3, 10, 11, 12], '3,10_12'],
    [[3, 4, 11, 12, 15, 17, 18], '3_4,11_12,15,17_18'],
  ];

  it.each(testData)('passes exploratory tests for %p', (input, expected) => {
    assert.equal(toRange(input), expected);
  });
});

describe('converting a range back to an array', () => {
  it("should convert '3_6,9' to [3,4,5,6,9]", () => {
    const result = toArray('3_6,9');
    assert.deepEqual(result, [3, 4, 5, 6, 9]);
  });

  const testData: ToArrayTheory[] = [
    ['3,7,9', [3, 7, 9]],
    ['3,5_7,9', [3, 5, 6, 7, 9]],
    ['3,10_12', [3, 10, 11, 12]],
    ['3_4,11_12,15,17_18', [3, 4, 11, 12, 15, 17, 18]],
  ];

  it.each(testData)('passes exploratory tests for %p', (input, expected) => {
    assert.deepEqual(toArray(input), expected);
  });
});
