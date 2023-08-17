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
    testing(
      [107, 158, 204, 100, 118, 123, 126, 110, 116, 100],
      [
        [2, 1032],
        [3, 453],
        [5, 310],
        [7, 126],
        [11, 110],
        [17, 204],
        [29, 116],
        [41, 123],
        [59, 118],
        [79, 158],
        [107, 107],
      ]
    );
  });
});
