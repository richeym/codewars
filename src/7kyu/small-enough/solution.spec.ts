import {assert} from 'chai';

import {smallEnough} from './solution';

describe('Small enough? - Beginner', () => {
  it('Fixed tests', () => {
    assert.strictEqual(smallEnough([66, 101], 200), true);
    assert.strictEqual(
      smallEnough([78, 117, 110, 99, 104, 117, 107, 115], 100),
      false
    );
    assert.strictEqual(smallEnough([101, 45, 75, 105, 99, 107], 107), true);
    assert.strictEqual(
      smallEnough([80, 117, 115, 104, 45, 85, 112, 115], 120),
      true
    );
    assert.strictEqual(smallEnough([1, 1, 1, 1, 1, 2], 1), false);
    assert.strictEqual(smallEnough([78, 33, 22, 44, 88, 9, 6], 87), false);
    assert.strictEqual(smallEnough([1, 2, 3, 4, 5, 6, 7, 8, 9], 10), true);
    assert.strictEqual(
      smallEnough([12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12], 12),
      true
    );
  });
});
