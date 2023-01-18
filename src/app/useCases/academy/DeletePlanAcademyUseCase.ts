/* eslint-disable prettier/prettier */

import { Injectable } from '@nestjs/common';
import { NotFoundException } from '@nestjs/common/exceptions';

import { AcademyRepository } from '../../repositories/AcademyRepository';

@Injectable()
export class DeletePlanAcademyUseCase {
  constructor(private readonly academyRepository: AcademyRepository) {}

  async execute(idAcademy: string, idPlan: string): Promise<void> {
    const academy = await this.academyRepository.findById(idAcademy);

    if (!academy) {
      throw new NotFoundException('Academy not found!');
    }

    const plan = await this.academyRepository.findByIdPlanAcademy(
      idAcademy,
      idPlan,
    );

    if (!plan) {
      throw new NotFoundException('Plan not found!');
    }

    await this.academyRepository.deletePlanAcademy(idAcademy, idPlan);
  }
}
