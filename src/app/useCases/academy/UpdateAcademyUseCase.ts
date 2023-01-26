/* eslint-disable prettier/prettier */

import { NotFoundException } from '@nestjs/common';

import { AcademyRepository } from '../../repositories/AcademyRepository';
import { Academy } from '../../entities/Academy';
import { Description } from 'src/app/entities/Description';
import { TelephoneNumber } from 'src/app/entities/TelephoneNumber';

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

    const academyPropsUpdated = Object.assign(academyExists, academy);

    const academyUpdated = await this.academyRepository.updateAcademy(
      idAcademy,
      academyPropsUpdated,
    );

    return {
      academy: academyUpdated,
    };
  }
}
