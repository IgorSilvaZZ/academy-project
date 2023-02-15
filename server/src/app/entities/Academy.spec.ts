/* eslint-disable prettier/prettier */

import { makeAcademy } from '../../../test/factories/academy-factory';

describe('Create Academy', () => {
  it('Should be able create a Academy', () => {
    const academy = makeAcademy();

    expect(academy).toBeTruthy();
  });
});
