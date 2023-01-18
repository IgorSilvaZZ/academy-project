/* eslint-disable prettier/prettier */

import { makePlanAcademy } from '../../../../test/factories/plan-factory';
import { makeAcademy } from '../../../../test/factories/academy-factory';
import { AcademyRepositoryInMemory } from '../../../../test/repositories/AcademyRepositoryInMemory';
import { ListPlanAcademyUseCase } from './ListPlanAcademyUseCase';

let academyRepository: AcademyRepositoryInMemory;
let listPlanAcademyUseCase: ListPlanAcademyUseCase;

describe('List Plan a Academy', () => {
  beforeEach(() => {
    academyRepository = new AcademyRepositoryInMemory();
    listPlanAcademyUseCase = new ListPlanAcademyUseCase(academyRepository);
  });

  it('List a plan academy', async () => {
    const { _id: idAcademy } = await academyRepository.create(
      makeAcademy({ name: 'Academy One', email: 'test1@email.com' }),
    );

    const newPlan = await academyRepository.createPlan(
      String(idAcademy),
      makePlanAcademy({
        name: 'New plan Academy One',
      }),
    );

    const { plan } = await listPlanAcademyUseCase.execute(
      String(idAcademy),
      String(newPlan?.planId),
    );

    expect(plan).toEqual(
      expect.objectContaining({ name: 'New plan Academy One' }),
    );
  });
});
