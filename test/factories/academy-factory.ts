/* eslint-disable prettier/prettier */

import { Academy, IAcademyProps } from '../../src/app/entities/Academy';
import { Description } from '../../src/app/entities/Description';
import { TelephoneNumber } from '../../src/app/entities/TelephoneNumber';
import { makePlanAcademy } from './plan-factory';

type OverrideAcademyProps = Partial<IAcademyProps>;

export const makeAcademy = (
  overrideAcademy: OverrideAcademyProps = {}
): Academy => {
  return new Academy({
    name: 'Academia Plus',
    description: new Description(
      'Academia Plus é perfeita parar quem quiser entrar em forma e ter uma saude renovada! Vem conferir'
    ),
    telephoneNumber: new TelephoneNumber('(11)9889-90909'),
    address: 'Rua Teste da Silva',
    city: 'São Paulo',
    number: '123',
    postalCode: '08043120',
    neighborhood: 'Bairro Teste',
    latitude: 4.0375,
    longitude: 82.8439,
    plans: [makePlanAcademy()],
    daysOfWeek: ['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'],
    openingTime: '06:00:00',
    closingTime: '21:00:00',
    ...overrideAcademy,
  });
};
