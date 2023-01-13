/* eslint-disable prettier/prettier */

import { AcademyRepositoryInMemory } from '../../../test/repositories/AcademyRepositoryInMemory';
import { CreatePlanAcademyUseCase } from './CreatePlanAcademyUseCase';
import { makeAcademy } from '../../../test/factories/academy-factory';

let academyRepository: AcademyRepositoryInMemory;
let createPlanAcademyPlanUseCase: CreatePlanAcademyUseCase;

describe('Create Plans a Academy', () => {
  beforeEach(() => {
    academyRepository = new AcademyRepositoryInMemory();
    createPlanAcademyPlanUseCase = new CreatePlanAcademyUseCase(
      academyRepository,
    );
  });

  it('Should be able create a new plan for academy', async () => {
    const academy = await academyRepository.create(
      makeAcademy({ name: 'Academia Pro Max' }),
    );

    const newPlan = {
      name: 'New Plan',
      value: 170,
      description: 'Description new Plan for academy test with jest',
    };

    const { plan } = await createPlanAcademyPlanUseCase.execute({
      id: String(academy._id),
      plan: newPlan,
    });

    expect(academy.plans).toHaveLength(2);
    expect(academy.plans).toEqual(
      expect.arrayContaining([expect.objectContaining(plan)]),
    );
  });
});
