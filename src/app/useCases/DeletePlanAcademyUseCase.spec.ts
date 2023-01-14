/* eslint-disable prettier/prettier */

import { makePlanAcademy } from '../../../test/factories/plan-factory';
import { makeAcademy } from '../../../test/factories/academy-factory';

import { AcademyRepositoryInMemory } from '../../../test/repositories/AcademyRepositoryInMemory';
import { DeletePlanAcademyUseCase } from './DeletePlanAcademyUseCase';

let academyRepository: AcademyRepositoryInMemory;
let deletePlanAcademyUseCase: DeletePlanAcademyUseCase;

describe('Delete Plan Academy', () => {
  beforeEach(() => {
    academyRepository = new AcademyRepositoryInMemory();
    deletePlanAcademyUseCase = new DeletePlanAcademyUseCase(academyRepository);
  });

  it('Should be able delete a plan academy', async () => {
    const { _id: idAcademy } = await academyRepository.create(
      makeAcademy({ name: 'Academia XMaX' }),
    );

    const newPlan = await academyRepository.createPlan(
      String(idAcademy),
      makePlanAcademy({
        name: 'New plan academy XMaX',
      }),
    );

    await deletePlanAcademyUseCase.execute(
      String(idAcademy),
      String(newPlan?.planId),
    );

    const academy = await academyRepository.findById(String(idAcademy));

    expect(academy?.plans).toHaveLength(1);
  });

  it('Should not be able plan not exists', async () => {
    const { _id: idAcademy } = await academyRepository.create(
      makeAcademy({ name: 'Academia Muse' }),
    );

    await academyRepository.createPlan(
      String(idAcademy),
      makePlanAcademy({
        name: 'New plan academy Muse',
      }),
    );

    expect(() => {
      return deletePlanAcademyUseCase.execute(
        String(idAcademy),
        'idPlanNotFound',
      );
    }).rejects.toThrow();
  });
});
