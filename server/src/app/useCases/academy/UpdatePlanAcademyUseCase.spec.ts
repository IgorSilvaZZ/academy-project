/* eslint-disable prettier/prettier */

import { AcademyRepositoryInMemory } from '../../../../test/repositories/AcademyRepositoryInMemory';
import { UpdatePlanAcademyUseCase } from './UpdatePlanAcademyUseCase';

import { makeAcademy } from '../../../../test/factories/academy-factory';

describe('Update Plan Academy', () => {
  it('Should be able update a plan academy ', async () => {
    const academyRepository = new AcademyRepositoryInMemory();
    const updatePlanAcademyUseCase = new UpdatePlanAcademyUseCase(
      academyRepository,
    );

    const academy = await academyRepository.create(
      makeAcademy({ name: 'Academia Stars' }),
    );

    const idAcademy = String(academy._id);
    const idPlan = String(academy.plans[0].planId);

    const { plan: planUpdated } = await updatePlanAcademyUseCase.execute({
      idAcademy,
      idPlan,
      name: 'Plano de assinatura da academia Stars',
    });

    const planForAcademy = await academyRepository.findByIdPlanAcademy(
      idAcademy,
      idPlan,
    );

    expect(planUpdated.name).toEqual(planForAcademy?.name);
  });
});
