/* eslint-disable prettier/prettier */

import { Injectable } from '@nestjs/common/decorators';
import { NotFoundException } from '@nestjs/common/exceptions';

import { Plan } from '../../entities/Plan';
import { AcademyRepository } from '../../repositories/AcademyRepository';

export interface ListPlanAcademyResponse {
  plan: Plan;
}
@Injectable()
export class ListPlanAcademyUseCase {
  constructor(private readonly academyRepository: AcademyRepository) {}

  async execute(
    idAcademy: string,
    idPlan: string,
  ): Promise<ListPlanAcademyResponse> {
    const plan = await this.academyRepository.findByIdPlanAcademy(
      idAcademy,
      idPlan,
    );

    if (!plan) {
      throw new NotFoundException('Plan not found!');
    }

    return {
      plan,
    };
  }
}
