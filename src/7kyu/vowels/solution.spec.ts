import solution = require('./solution');
import {assert} from 'chai';

describe('getCount', () => {
  it('should pass a sample test', () => {
    assert.strictEqual(solution.Kata.getCount('abracadabra'), 5);
  });
});
