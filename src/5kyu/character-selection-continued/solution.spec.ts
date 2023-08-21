import {superStreetFighterSelection} from './solution';
import {assert} from 'chai';

const copy = (x: any[][]) => x.map(y => y.slice());

const fighters = [
  ['', 'Ryu', 'E.Honda', 'Blanka', 'Guile', ''],
  ['Balrog', 'Ken', 'Chun Li', 'Zangief', 'Dhalsim', 'Sagat'],
  ['Vega', 'T.Hawk', 'Fei Long', 'Deejay', 'Cammy', 'M.Bison'],
];
const opts = ['up', 'down', 'right', 'left'];

describe('Character selection', () => {
  it('should work with no selection cursor moves', () => {
    const moves: string[] = [];
    const position: [number, number] = [0, 0];
    const solution: string[] = [];
    assert.deepEqual(
      superStreetFighterSelection(copy(fighters), position, moves),
      solution
    );
  });

  it('should stop on empty spaces vertically', () => {
    const moves = ['up'];
    const position: [number, number] = [1, 0];
    const solution = ['Balrog'];
    assert.deepEqual(
      superStreetFighterSelection(copy(fighters), position, moves),
      solution
    );
  });

  it('should stop on empty spaces vertically', () => {
    const moves = ['up', 'up', 'up', 'up'];
    const position: [number, number] = [1, 0];
    const solution = ['Balrog', 'Balrog', 'Balrog', 'Balrog'];
    assert.deepEqual(
      superStreetFighterSelection(copy(fighters), position, moves),
      solution
    );
  });

  it('should stop vertically', () => {
    const moves = ['down', 'down', 'down', 'down'];
    const position: [number, number] = [1, 0];
    const solution = ['Vega', 'Vega', 'Vega', 'Vega'];
    assert.deepEqual(
      superStreetFighterSelection(copy(fighters), position, moves),
      solution
    );
  });

  it('should stop on empty spaces vertically', () => {
    const moves = ['up', 'up', 'up', 'up'];
    const position: [number, number] = [1, 5];
    const solution = ['Sagat', 'Sagat', 'Sagat', 'Sagat'];
    assert.deepEqual(
      superStreetFighterSelection(copy(fighters), position, moves),
      solution
    );
  });

  it('should stop vertically', () => {
    const moves = ['down', 'down', 'down', 'down'];
    const position: [number, number] = [1, 5];
    const solution = ['M.Bison', 'M.Bison', 'M.Bison', 'M.Bison'];
    assert.deepEqual(
      superStreetFighterSelection(copy(fighters), position, moves),
      solution
    );
  });

  it('should rotate horizontally', () => {
    const moves = [
      'left',
      'left',
      'left',
      'left',
      'left',
      'left',
      'left',
      'left',
    ];
    const position: [number, number] = [0, 2];
    const solution = [
      'Ryu',
      'Guile',
      'Blanka',
      'E.Honda',
      'Ryu',
      'Guile',
      'Blanka',
      'E.Honda',
    ];
    assert.deepEqual(
      superStreetFighterSelection(copy(fighters), position, moves),
      solution
    );
  });

  it('should rotate horizontally', () => {
    const moves = [
      'left',
      'left',
      'left',
      'left',
      'left',
      'left',
      'left',
      'left',
    ];
    const position: [number, number] = [1, 3];
    const solution = [
      'Chun Li',
      'Ken',
      'Balrog',
      'Sagat',
      'Dhalsim',
      'Zangief',
      'Chun Li',
      'Ken',
    ];
    assert.deepEqual(
      superStreetFighterSelection(copy(fighters), position, moves),
      solution
    );
  });

  it('should rotate horizontally with empty spaces', () => {
    const moves = [
      'right',
      'right',
      'right',
      'right',
      'right',
      'right',
      'right',
      'right',
    ];
    const position: [number, number] = [0, 2];
    const solution = [
      'Blanka',
      'Guile',
      'Ryu',
      'E.Honda',
      'Blanka',
      'Guile',
      'Ryu',
      'E.Honda',
    ];
    assert.deepEqual(
      superStreetFighterSelection(copy(fighters), position, moves),
      solution
    );
  });

  it('should rotate on all rows', () => {
    const moves = [
      'right',
      'right',
      'right',
      'right',
      'right',
      'right',
      'down',
      'left',
      'left',
      'left',
      'left',
      'left',
      'left',
      'left',
      'left',
      'left',
      'left',
      'left',
      'left',
      'down',
      'right',
      'right',
      'right',
      'right',
      'right',
      'right',
      'right',
      'right',
      'right',
      'right',
      'right',
      'right',
    ];
    const position: [number, number] = [0, 2];
    const solution = [
      'Blanka',
      'Guile',
      'Ryu',
      'E.Honda',
      'Blanka',
      'Guile',
      'Dhalsim',
      'Zangief',
      'Chun Li',
      'Ken',
      'Balrog',
      'Sagat',
      'Dhalsim',
      'Zangief',
      'Chun Li',
      'Ken',
      'Balrog',
      'Sagat',
      'Dhalsim',
      'Cammy',
      'M.Bison',
      'Vega',
      'T.Hawk',
      'Fei Long',
      'Deejay',
      'Cammy',
      'M.Bison',
      'Vega',
      'T.Hawk',
      'Fei Long',
      'Deejay',
      'Cammy',
    ];
    assert.deepEqual(
      superStreetFighterSelection(copy(fighters), position, moves),
      solution
    );
  });

  // DO NOT CHANGE THIS VARIABLE!
  // LIST WITH HOLES AND DUPLICATES
  const fighters3 = [
    ['', 'Ryu', 'E.Honda', 'Cammy', 'Blanka', 'Guile', '', 'Chun Li'],
    ['Balrog', 'Ken', 'Chun Li', '', 'M.Bison', 'Zangief', 'Dhalsim', 'Sagat'],
    ['Vega', '', 'Fei Long', 'Balrog', 'Deejay', 'Cammy', '', 'T.Hawk'],
  ];

  it('should rotate on all rows', () => {
    const moves = [
      'right',
      'right',
      'right',
      'right',
      'right',
      'right',
      'down',
      'left',
      'left',
      'left',
      'left',
      'left',
      'left',
      'left',
      'left',
      'left',
      'left',
      'left',
      'left',
      'down',
      'right',
      'right',
      'right',
      'right',
      'right',
      'right',
      'right',
      'right',
      'right',
      'right',
      'right',
      'right',
    ];
    const position: [number, number] = [0, 2];
    const solution = [
      'Cammy',
      'Blanka',
      'Guile',
      'Chun Li',
      'Ryu',
      'E.Honda',
      'Chun Li',
      'Ken',
      'Balrog',
      'Sagat',
      'Dhalsim',
      'Zangief',
      'M.Bison',
      'Chun Li',
      'Ken',
      'Balrog',
      'Sagat',
      'Dhalsim',
      'Zangief',
      'Cammy',
      'T.Hawk',
      'Vega',
      'Fei Long',
      'Balrog',
      'Deejay',
      'Cammy',
      'T.Hawk',
      'Vega',
      'Fei Long',
      'Balrog',
      'Deejay',
      'Cammy',
    ];
    assert.deepEqual(
      superStreetFighterSelection(copy(fighters3), position, moves),
      solution
    );
  });

  it('should work', () => {
    const moves = [
      'down',
      'right',
      'right',
      'right',
      'down',
      'left',
      'left',
      'down',
      'right',
      'right',
      'right',
      'up',
    ];
    const position: [number, number] = [0, 3];
    const solution = [
      'Cammy',
      'Blanka',
      'Guile',
      'Chun Li',
      'Sagat',
      'Dhalsim',
      'Zangief',
      'Cammy',
      'T.Hawk',
      'Vega',
      'Fei Long',
      'Chun Li',
    ];
    assert.deepEqual(
      superStreetFighterSelection(copy(fighters3), position, moves),
      solution
    );
  });

  // DO NOT CHANGE THIS VARIABLE!
  const fighters4 = [
    ['', 'Ryu', 'E.Honda', 'Cammy'],
    ['Balrog', 'Ken', 'Chun Li', ''],
    ['Vega', '', 'Fei Long', 'Balrog'],
    ['Blanka', 'Guile', '', 'Chun Li'],
    ['M.Bison', 'Zangief', 'Dhalsim', 'Sagat'],
    ['Deejay', 'Cammy', '', 'T.Hawk'],
  ];

  it('should work with longer grid', () => {
    const moves = [
      'left',
      'left',
      'down',
      'right',
      'right',
      'right',
      'right',
      'down',
      'left',
      'left',
      'left',
      'left',
      'down',
      'right',
      'right',
      'down',
      'right',
      'right',
      'right',
      'down',
      'left',
      'left',
      'left',
      'down',
      'left',
      'left',
      'left',
    ];
    const position: [number, number] = [0, 3];
    const solution = [
      'E.Honda',
      'Ryu',
      'Ken',
      'Chun Li',
      'Balrog',
      'Ken',
      'Chun Li',
      'Fei Long',
      'Vega',
      'Balrog',
      'Fei Long',
      'Vega',
      'Blanka',
      'Guile',
      'Chun Li',
      'Sagat',
      'M.Bison',
      'Zangief',
      'Dhalsim',
      'Dhalsim',
      'Zangief',
      'M.Bison',
      'Sagat',
      'T.Hawk',
      'Cammy',
      'Deejay',
      'T.Hawk',
    ];
    assert.deepEqual(
      superStreetFighterSelection(copy(fighters4), position, moves),
      solution
    );
  });

  it('should work with odd initial position', () => {
    const moves = [
      'left',
      'left',
      'down',
      'right',
      'right',
      'right',
      'right',
      'down',
      'left',
      'left',
      'left',
      'left',
      'up',
      'right',
      'right',
      'up',
      'right',
      'right',
      'right',
    ];
    const position: [number, number] = [3, 3];
    const solution = [
      'Guile',
      'Blanka',
      'M.Bison',
      'Zangief',
      'Dhalsim',
      'Sagat',
      'M.Bison',
      'Deejay',
      'T.Hawk',
      'Cammy',
      'Deejay',
      'T.Hawk',
      'Sagat',
      'M.Bison',
      'Zangief',
      'Guile',
      'Chun Li',
      'Blanka',
      'Guile',
    ];
    assert.deepEqual(
      superStreetFighterSelection(copy(fighters4), position, moves),
      solution
    );
  });
});
