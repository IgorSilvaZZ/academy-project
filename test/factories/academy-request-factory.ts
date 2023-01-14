/* eslint-disable prettier/prettier */

import { randomUUID } from 'crypto';
import { IAcademy } from '../../src/app/interfaces/ICreateAcademyRequest';
import { CreateAcademyDTO } from '../../src/infra/http/dtos/CreateAcademyDTO';

type OverrideAcademyProps = Partial<CreateAcademyDTO>;

export const makeAcademyRequest = (
  overrideAcademy: OverrideAcademyProps = {},
): IAcademy => {
  return {
    name: 'Academia Plus',
    email: 'academia@test.com',
    password: '123',
    description:
      'Academia Plus é perfeita parar quem quiser entrar em forma e ter uma saude renovada! Vem conferir',
    telephoneNumber: '(11)9889-90909',
    address: 'Rua Teste da Silva',
    city: 'São Paulo',
    number: '123',
    postalCode: '08043120',
    neighborhood: 'Bairro Teste',
    latitude: 4.0375,
    longitude: 82.8439,
    plans: [
      {
        planId: randomUUID(),
        name: 'Basic Plan',
        description:
          'Descrição para um novo plano que estará disponivel para os alunos',
        value: 100,
      },
    ],
    daysOfWeek: 'Segunda, Terça, Quarta, Quinta, Sexta, Sábado',
    openingTime: '06:00:00',
    closingTime: '21:00:00',
    ...overrideAcademy,
  };
};
