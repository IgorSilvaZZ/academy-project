/* eslint-disable prettier/prettier */

import { Injectable } from '@nestjs/common/decorators';
import { Academy } from '../entities/Academy';
import { AcademyRepository } from '../repositories/AcademyRepository';

type CreateAcademyRequest = Academy;

interface CreateAcademyResponse {
  academy: Academy;
}

@Injectable()
export class CreateAcademyUseCase {
  constructor(private readonly academyRepository: AcademyRepository) {}

  async execute(data: CreateAcademyRequest): Promise<CreateAcademyResponse> {
    const academyExists = await this.academyRepository.findByEmail(data.email);

    if (academyExists) {
      throw new Error('Academy already exists!');
    }

    const academy = await this.academyRepository.create(data);

    return {
      academy,
    };
  }
}
