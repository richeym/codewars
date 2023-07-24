import {assert, config} from 'chai';
import {makeLooper} from './solution';
config.truncateThreshold = 0;

describe('Sample Tests', () => {
  const abc = makeLooper('abc');
  it('Should cycle through the given string', () => {
    assert.strictEqual(abc(), 'a', 'Step 1');
    assert.strictEqual(abc(), 'b', 'Step 2');
    assert.strictEqual(abc(), 'c', 'Step 3');
  });
  it('Should return to its initial cycle once it reaches the end', () => {
    assert.strictEqual(abc(), 'a', 'Step 4');
    assert.strictEqual(abc(), 'b', 'Step 5');
    assert.strictEqual(abc(), 'c', 'Step 6');
  });
});
