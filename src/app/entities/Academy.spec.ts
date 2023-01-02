/* eslint-disable prettier/prettier */

import { makeAcademy } from '../../../test/factories/academy-factory';

describe('Create Academy', () => {
  it('Should be able create a Academy', () => {
    const academy = makeAcademy();

    expect(academy).toBeTruthy();
  });

  it('Should not be able with plans empty', () => {
    expect(() => {
      makeAcademy({
        plans: []
      })
    }).toThrow();
  })
});
