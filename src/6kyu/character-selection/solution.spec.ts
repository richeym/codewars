import {streetFighterSelection} from './solution';
import * as chai from 'chai';
chai.config.truncateThreshold = 0;

type Move = 'down' | 'up' | 'right' | 'left';

const fighters: string[][] = [
  ['Ryu', 'E.Honda', 'Blanka', 'Guile', 'Balrog', 'Vega'],
  ['Ken', 'Chun Li', 'Zangief', 'Dhalsim', 'Sagat', 'M.Bison'],
];
const opts: Move[] = ['up', 'down', 'right', 'left'];
let moves: Move[] = [];

describe('Testing...', () => {
  it('should work with few moves', () => {
    moves = ['up', 'left', 'right', 'left', 'left'];
    chai.assert.deepEqual(streetFighterSelection(fighters, [0, 0], moves), [
      'Ryu',
      'Vega',
      'Ryu',
      'Vega',
      'Balrog',
    ]);
  });

  it('should work with no selection cursor moves', () => {
    moves = [];
    chai.assert.deepEqual(streetFighterSelection(fighters, [0, 0], moves), []);
  });

  it('should work when always moving left', () => {
    moves = ['left', 'left', 'left', 'left', 'left', 'left', 'left', 'left'];
    chai.assert.deepEqual(streetFighterSelection(fighters, [0, 0], moves), [
      'Vega',
      'Balrog',
      'Guile',
      'Blanka',
      'E.Honda',
      'Ryu',
      'Vega',
      'Balrog',
    ]);
  });

  it('should work when always moving right', () => {
    moves = [
      'right',
      'right',
      'right',
      'right',
      'right',
      'right',
      'right',
      'right',
    ];
    chai.assert.deepEqual(streetFighterSelection(fighters, [0, 0], moves), [
      'E.Honda',
      'Blanka',
      'Guile',
      'Balrog',
      'Vega',
      'Ryu',
      'E.Honda',
      'Blanka',
    ]);
  });

  it('should use all 4 directions clockwise twice', () => {
    moves = ['up', 'left', 'down', 'right', 'up', 'left', 'down', 'right'];
    chai.assert.deepEqual(streetFighterSelection(fighters, [0, 0], moves), [
      'Ryu',
      'Vega',
      'M.Bison',
      'Ken',
      'Ryu',
      'Vega',
      'M.Bison',
      'Ken',
    ]);
  });

  it('should work when always moving down', () => {
    moves = ['down', 'down', 'down', 'down'];
    chai.assert.deepEqual(streetFighterSelection(fighters, [0, 0], moves), [
      'Ken',
      'Ken',
      'Ken',
      'Ken',
    ]);
  });

  it('should work when always moving up', () => {
    moves = ['up', 'up', 'up', 'up'];
    chai.assert.deepEqual(streetFighterSelection(fighters, [0, 0], moves), [
      'Ryu',
      'Ryu',
      'Ryu',
      'Ryu',
    ]);
  });
});
