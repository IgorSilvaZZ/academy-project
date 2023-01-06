/* eslint-disable prettier/prettier */

import { Injectable } from '@nestjs/common/decorators';

import { Academy } from '../entities/Academy';
import { Description } from '../entities/Description';
import { Plan } from '../entities/Plan';
import { TelephoneNumber } from '../entities/TelephoneNumber';
import { AcademyRepository } from '../repositories/AcademyRepository';

export interface CreateAcademyRequest {
  name: string;
  address: string;
  city: string;
  email: string;
  daysOfWeek: string;
  description: string;
  telephoneNumber: string;
  closingTime: string;
  latitude: number;
  longitude: number;
  neighborhood: string;
  number: string;
  openingTime: string;
  password: string;
  plans: [
    {
      name: string;
      description: string;
      value: number;
    },
  ];
  postalCode: string;
}

export interface CreateAcademyResponse {
  academy: Academy;
}

@Injectable()
export class CreateAcademyUseCase {
  constructor(private readonly academyRepository: AcademyRepository) {}

  async execute({
    name,
    address,
    city,
    email,
    daysOfWeek,
    description,
    telephoneNumber,
    closingTime,
    latitude,
    longitude,
    neighborhood,
    number,
    openingTime,
    password,
    plans,
    postalCode,
  }: CreateAcademyRequest): Promise<CreateAcademyResponse> {
    const academyExists = await this.academyRepository.findByEmail(email);

    if (academyExists) {
      throw new Error('Academy already exists!');
    }

    const createdPlans = plans.map(
      (plan) =>
        new Plan({
          name: plan.name,
          description: new Description(plan.description),
          value: plan.value,
        }),
    );

    const academy = new Academy({
      name,
      address,
      city,
      email,
      daysOfWeek,
      description: new Description(description),
      telephoneNumber: new TelephoneNumber(telephoneNumber),
      closingTime,
      latitude,
      longitude,
      neighborhood,
      number,
      openingTime,
      password,
      plans: createdPlans,
      postalCode,
    });

    await this.academyRepository.create(academy);

    return {
      academy,
    };
  }
}
