import {expect} from 'chai';

import {narcissistic} from './solution';

describe('Basic tests', () => {
  it('Basic test should work', () => {
    expect(narcissistic(7)).to.equal(true, '7 is narcissistic');
    expect(narcissistic(153)).to.equal(true, '153 is narcissistic');
    expect(narcissistic(1634)).to.equal(true, '1634 is narcissistic');
  });

  // eslint-disable-next-line no-restricted-properties
  it('should pass complex tests', () => {
    expect(narcissistic(8208)).to.equal(true, '8208 is narcissistic');
  });
});
