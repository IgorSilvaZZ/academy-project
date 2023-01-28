/* eslint-disable prettier/prettier */

import { NotFoundException } from '@nestjs/common';
import { Injectable } from '@nestjs/common/decorators';

import { Academy } from '../../entities/Academy';
import { Description } from '../../entities/Description';
import { TelephoneNumber } from '../../entities/TelephoneNumber';

import { AcademyRepository } from '../../repositories/AcademyRepository';

interface IUpdateAcademyRequest {
  idAcademy: string;
  academy: {
    name?: string;
    address?: string;
    city?: string;
    email?: string;
    daysOfWeek?: string;
    description?: string;
    telephoneNumber?: string;
    closingTime?: string;
    latitude?: number;
    longitude?: number;
    neighborhood?: string;
    number?: string;
    openingTime?: string;
    postalCode?: string;
  };
}

interface IUpdateAcademyResponse {
  academy: Academy;
}

@Injectable()
export class UpdateAcademyUseCase {
  constructor(private readonly academyRepository: AcademyRepository) {}

  async execute({
    idAcademy,
    academy,
  }: IUpdateAcademyRequest): Promise<IUpdateAcademyResponse> {
    const academyExists = await this.academyRepository.findById(idAcademy);

    if (!academyExists) {
      throw new NotFoundException('Academy not found!');
    }

    const academyPropsUpdated = Object.assign(academyExists, {
      ...academy,
      description: academy.description
        ? new Description(academy.description)
        : academyExists.description,
      telephoneNumber: academy.telephoneNumber
        ? new TelephoneNumber(academy.telephoneNumber)
        : academyExists.telephoneNumber,
    });

    const academyUpdated = await this.academyRepository.updateAcademy(
      idAcademy,
      academyPropsUpdated,
    );

    return {
      academy: academyUpdated,
    };
  }
}
