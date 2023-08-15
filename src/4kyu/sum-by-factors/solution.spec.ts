import {sumOfDivided} from './solution';
import {assert, config} from 'chai';

config.truncateThreshold = 0;

function testing(lst: number[], expected: number[][]) {
  assert.deepEqual(sumOfDivided(lst), expected);
}

describe('Fixed Tests first', () => {
  it('Basic tests', () => {
    testing(
      [12, 15],
      [
        [2, 12],
        [3, 27],
        [5, 15],
      ]
    );
    testing(
      [15, 21, 24, 30, 45],
      [
        [2, 54],
        [3, 135],
        [5, 90],
        [7, 21],
      ]
    );
    testing(
      [15, 30, -45],
      [
        [2, 30],
        [3, 0],
        [5, 0],
      ]
    );
  });
});
