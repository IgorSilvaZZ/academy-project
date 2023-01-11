/* eslint-disable prettier/prettier */

import { Injectable } from '@nestjs/common/decorators';

import { Academy } from '../entities/Academy';
import { Description } from '../entities/Description';
import { Plan } from '../entities/Plan';
import { TelephoneNumber } from '../entities/TelephoneNumber';
import { ICreateAcademyRequest } from '../interfaces/ICreateAcademyRequest';
import { AcademyRepository } from '../repositories/AcademyRepository';

export interface CreateAcademyResponse {
  academy: Academy;
}

@Injectable()
export class CreateAcademyUseCase {
  constructor(private readonly academyRepository: AcademyRepository) {}

  async execute(
    request: ICreateAcademyRequest,
  ): Promise<CreateAcademyResponse> {
    const academyExists = await this.academyRepository.findByEmail(
      request.email,
    );

    if (academyExists) {
      throw new Error('Academy already exists!');
    }

    const createdPlans = request.plans.map(
      (plan) =>
        new Plan({
          name: plan.name,
          description: new Description(plan.description),
          value: plan.value,
        }),
    );

    const academy = new Academy({
      ...request,
      description: new Description(request.description),
      telephoneNumber: new TelephoneNumber(request.telephoneNumber),
      plans: createdPlans,
    });

    await this.academyRepository.create(academy);

    return {
      academy,
    };
  }
}
