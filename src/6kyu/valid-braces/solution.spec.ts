import {validBraces} from './solution';
import {assert} from 'chai';

describe('solution', () => {
  it('should handle basic tests', () => {
    assert.strictEqual(validBraces('()'), true);
    assert.strictEqual(validBraces('[(])'), false);
  });

  it('should fail incomplete data', () => {
    assert.strictEqual(validBraces('({}['), false);
  });
});
