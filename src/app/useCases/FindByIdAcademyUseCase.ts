/* eslint-disable prettier/prettier */

import { Injectable } from '@nestjs/common';
import { NotFoundException } from '@nestjs/common/exceptions';

import { Academy } from '../entities/Academy';
import { AcademyRepository } from '../repositories/AcademyRepository';

@Injectable()
export class FindByIdAcademyUseCase {
  constructor(private readonly academyRepository: AcademyRepository) {}

  async execute(id: string): Promise<Academy> {
    const academy = await this.academyRepository.findById(id);

    if (!academy) {
      throw new NotFoundException('Academy not found!');
    }

    return academy;
  }
}
