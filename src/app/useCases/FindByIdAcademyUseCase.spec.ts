/* eslint-disable prettier/prettier */

import { NotFoundException } from '@nestjs/common/exceptions';

import { makeAcademy } from '../../../test/factories/academy-factory';
import { AcademyRepositoryInMemory } from '../../../test/repositories/AcademyRepositoryInMemory';
import { FindByIdAcademyUseCase } from './FindByIdAcademyUseCase';

let academyRepository: AcademyRepositoryInMemory;
let findByGymUseCase: FindByIdAcademyUseCase;

describe('List Academy', () => {
  beforeEach(() => {
    academyRepository = new AcademyRepositoryInMemory();
    findByGymUseCase = new FindByIdAcademyUseCase(academyRepository);
  });

  it('Should be able filter academy for id', async () => {
    const { _id } = await academyRepository.create(
      makeAcademy({ name: 'Academia XMaX' }),
    );

    const academy = await findByGymUseCase.execute(String(_id));

    expect(academy?._id).toEqual(String(_id));
    expect(academy).toEqual(expect.objectContaining({ name: 'Academia XMaX' }));
  });

  it('Should be able null academy if id not exists', async () => {
    expect(() => {
      return findByGymUseCase.execute('idTestAcademy');
    }).rejects.toThrow(NotFoundException);
  });
});
