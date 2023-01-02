/* eslint-disable prettier/prettier */

import { Description } from '../../src/app/entities/Description';
import { IPlanProps, Plan } from '../../src/app/entities/Plan';

type OverridePlanProps = Partial<IPlanProps>;

export const makePlanAcademy = (
  overridePlanProps: OverridePlanProps = {}
): Plan => {
  return new Plan({
    name: 'Basic Plan',
    description: new Description(
      'Descrição para um novo plano que estará disponivel para os alunos'
    ),
    value: 100,
    ...overridePlanProps,
  });
};
