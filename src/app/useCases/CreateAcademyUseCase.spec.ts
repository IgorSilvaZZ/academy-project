/* eslint-disable prettier/prettier */

import { AcademyRepositoryInMemory } from '../../../test/repositories/AcademyRepositoryInMemory';
import { CreateAcademyUseCase } from './CreateAcademyUseCase';
import { makeAcademyRequest } from '../../../test/factories/academy-request-factory';

let academyRepositoryInMemory: AcademyRepositoryInMemory;
let createAcademyUseCase: CreateAcademyUseCase;

describe('Create Academy', () => {
  beforeEach(() => {
    academyRepositoryInMemory = new AcademyRepositoryInMemory();
    createAcademyUseCase = new CreateAcademyUseCase(academyRepositoryInMemory);
  });

  it('Should be able create a new academy', async () => {
    const { academy } = await createAcademyUseCase.execute(
      makeAcademyRequest({ name: 'Academy Plus One' }),
    );

    expect(academyRepositoryInMemory.gyms).toHaveLength(1);
    expect(academyRepositoryInMemory.gyms[0]).toEqual(academy);
  });

  it('Should not be able create Academy with email already exists', async () => {
    await createAcademyUseCase.execute(
      makeAcademyRequest({ name: 'Academy Plus One' }),
    );

    expect(() => {
      return createAcademyUseCase.execute(
        makeAcademyRequest({ name: 'Academy Plus Two' }),
      );
    }).rejects.toThrow();
  });
});
