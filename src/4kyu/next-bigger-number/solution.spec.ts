import {assert} from 'chai';

import {nextBigger} from './solution';

describe('Basic tests', () => {
  test.each([
    [12, 21],
    [1234, 1243],
    [513, 531],
    [2017, 2071],
    [414, 441],
    [144, 414],
    [2, -1],
    [4321, -1],
    [64321, -1],
  ])('Small number %p returns %p', (input, expected) => {
    assert.strictEqual(nextBigger(input), expected);
  });

  it('Bigger numbers', () => {
    assert.strictEqual(nextBigger(123456789), 123456798);
    assert.strictEqual(nextBigger(1234567890), 1234567908);
    assert.strictEqual(nextBigger(9876543210), -1);
    assert.strictEqual(nextBigger(9999999999), -1);
    assert.strictEqual(nextBigger(59884848459853), 59884848483559);
  });
});
