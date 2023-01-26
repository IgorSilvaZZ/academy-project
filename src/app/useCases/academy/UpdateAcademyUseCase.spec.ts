/* eslint-disable prettier/prettier */

import { AcademyRepositoryInMemory } from '../../../../test/repositories/AcademyRepositoryInMemory';
import { UpdateAcademyUseCase } from './UpdateAcademyUseCase';

import { makeAcademy } from '../../../../test/factories/academy-factory';

describe('Update Academy', () => {
  it('Should be able update a academy', async () => {
    const academyRepository = new AcademyRepositoryInMemory();
    const updateAcademyUseCase = new UpdateAcademyUseCase(academyRepository);

    const newAcademy = await academyRepository.create(
      makeAcademy({ name: 'Academia Novos Hábitos' }),
    );

    const idAcademy = String(newAcademy._id);

    const { academy } = await updateAcademyUseCase.execute({
      idAcademy,
      academy: {
        name: 'Academia Nova Saude',
      },
    });

    const academyExists = await academyRepository.findById(idAcademy);

    console.log('name: ', academy.name);

    expect(academy.name).toEqual(academyExists?.name);
    expect(newAcademy.description).toEqual(academyExists?.description);
  });
});
