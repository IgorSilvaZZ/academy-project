/* eslint-disable prettier/prettier */

import { makeAcademy } from '../../../test/factories/academy-factory';
import { AcademyRepositoryInMemory } from '../../../test/repositories/AcademyRepositoryInMemory';
import { ListGymsUseCase } from './ListGymsUseCase';

describe('List all Gyms', () => {
  it('Should be list all gyms', async () => {
    const academyRepositoryInMemory = new AcademyRepositoryInMemory();
    const listGymsUseCase = new ListGymsUseCase(academyRepositoryInMemory);

    await academyRepositoryInMemory.create(
      makeAcademy({ name: 'Academy One', email: 'test1@email.com' }),
    );

    await academyRepositoryInMemory.create(
      makeAcademy({ name: 'Academy Two', email: 'test2@email.com' }),
    );

    await academyRepositoryInMemory.create(
      makeAcademy({ name: 'Academy Three', email: 'test3@email.com' }),
    );

    const gyms = await listGymsUseCase.execute();

    expect(gyms).toHaveLength(3);
    expect(gyms).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ email: 'test3@email.com' }),
        expect.objectContaining({ name: 'Academy Two' }),
      ]),
    );
  });
});
