/* eslint-disable prettier/prettier */

import { Injectable } from '@nestjs/common/decorators';
import { BadRequestException } from '@nestjs/common/exceptions';
import { randomUUID } from 'crypto';

import { Academy } from '../entities/Academy';
import { Description } from '../entities/Description';
import { Plan } from '../entities/Plan';
import { TelephoneNumber } from '../entities/TelephoneNumber';
import { IAcademy } from '../interfaces/ICreateAcademyRequest';
import { AcademyRepository } from '../repositories/AcademyRepository';

export interface CreateAcademyResponse {
  academy: Academy;
}

@Injectable()
export class CreateAcademyUseCase {
  constructor(private readonly academyRepository: AcademyRepository) {}

  async execute(request: IAcademy): Promise<CreateAcademyResponse> {
    const academyExists = await this.academyRepository.findByEmail(
      request.email,
    );

    if (academyExists) {
      throw new BadRequestException('Academy already exists!');
    }

    const plans = request.plans.map(
      (plan) =>
        new Plan({
          id: randomUUID(),
          name: plan.name,
          description: new Description(plan.description),
          value: plan.value,
        }),
    );

    const academyDomain = new Academy({
      name: request.name,
      email: request.email,
      password: request.password,
      description: new Description(request.description),
      telephoneNumber: new TelephoneNumber(request.telephoneNumber),
      address: request.address,
      city: request.city,
      number: request.number,
      postalCode: request.postalCode,
      neighborhood: request.neighborhood,
      latitude: request.latitude,
      longitude: request.longitude,
      plans,
      daysOfWeek: request.daysOfWeek,
      openingTime: request.openingTime,
      closingTime: request.closingTime,
    });

    const academy = await this.academyRepository.create(academyDomain);

    return {
      academy,
    };
  }
}
