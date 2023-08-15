import {assert} from 'chai';

import {generateChatRoomNames} from './solution';

describe('Generate Chat Room Names', () => {
  it("Should return a user's forename if only one user exists", () => {
    const names = ['Joe Bloggs'];
    const expectedResult = ['Joe'];
    assert.deepEqual(generateChatRoomNames(names), expectedResult);
  });

  it('Should return names in Title Case', () => {
    const names = ['JOE Bloggs'];
    const expectedResult = ['Joe'];
    assert.deepEqual(generateChatRoomNames(names), expectedResult);
  });

  it("Should return user's forenames if they are all unique", () => {
    const names = ['Joe Bloggs', 'John Smith'];
    const expectedResult = ['Joe', 'John'];
    assert.deepEqual(generateChatRoomNames(names), expectedResult);
  });

  it("Should return user's forenames if they are all unique in alphabetical order", () => {
    const names = ['Joe Bloggs', 'John Smith', 'Jane Doe'];
    const expectedResult = ['Jane', 'Joe', 'John'];
    assert.deepEqual(generateChatRoomNames(names), expectedResult);
  });

  it("Should return user's initials if their is a forename collision", () => {
    const names = ['Joe Bloggs', 'John Smith', 'Jane Doe', 'Jane Bloggs'];
    const expectedResult = ['Jane B', 'Jane D', 'Joe', 'John'];
    assert.deepEqual(generateChatRoomNames(names), expectedResult);
  });

  it("Should return user's full names if there is a first and initials collision", () => {
    const names = [
      'Joe Bloggs',
      'John Smith',
      'Jane Doe',
      'Jane Bloggs',
      'John Scott',
    ];
    const expectedResult = [
      'Jane B',
      'Jane D',
      'Joe',
      'John Scott',
      'John Smith',
    ];
    assert.deepEqual(generateChatRoomNames(names), expectedResult);
  });
});
