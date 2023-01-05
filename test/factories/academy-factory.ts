/* eslint-disable prettier/prettier */

import { Plan } from '../../src/app/entities/Plan';
import { Academy } from '../../src/app/entities/Academy';
import { Description } from '../../src/app/entities/Description';
import { TelephoneNumber } from '../../src/app/entities/TelephoneNumber';
import { IAcademyProps } from '../../src/app/interfaces/IAcademyProps';

type OverrideAcademyProps = Partial<IAcademyProps>;

export const makeAcademy = (
  overrideAcademy: OverrideAcademyProps = {},
): Academy => {
  return new Academy({
    name: 'Academia Plus',
    email: 'academia@test.com',
    password: '123',
    description: new Description(
      'Academia Plus é perfeita parar quem quiser entrar em forma e ter uma saude renovada! Vem conferir',
    ),
    telephoneNumber: new TelephoneNumber('(11)9889-90909'),
    address: 'Rua Teste da Silva',
    city: 'São Paulo',
    number: '123',
    postalCode: '08043120',
    neighborhood: 'Bairro Teste',
    latitude: 4.0375,
    longitude: 82.8439,
    plans: [
      new Plan({
        name: 'Basic Plan',
        description: new Description(
          'Descrição para um novo plano que estará disponivel para os alunos',
        ),
        value: 100,
      }),
    ],
    daysOfWeek: 'Segunda, Terça, Quarta, Quinta, Sexta, Sábado',
    openingTime: '06:00:00',
    closingTime: '21:00:00',
    ...overrideAcademy,
  });
};
