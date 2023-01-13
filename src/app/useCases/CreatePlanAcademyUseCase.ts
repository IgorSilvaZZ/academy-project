/* eslint-disable prettier/prettier */

import { Injectable } from '@nestjs/common';

import { NotFoundException } from '@nestjs/common/exceptions';

import { Plan } from '../entities/Plan';
import { Description } from '../entities/Description';
import { AcademyRepository } from '../repositories/AcademyRepository';

interface ICreatePlanRequest {
  id: string;
  plan: {
    name: string;
    description: string;
    value: number;
  };
}

interface PlanResponse {
  plan: Plan;
}

@Injectable()
export class CreatePlanAcademyUseCase {
  constructor(private readonly academyRepository: AcademyRepository) {}

  async execute(request: ICreatePlanRequest): Promise<PlanResponse> {
    const { id, plan } = request;

    const newPlanDomain = new Plan({
      name: plan.name,
      description: new Description(plan.description),
      value: plan.value,
    });

    const newPlan = await this.academyRepository.createPlan(id, newPlanDomain);

    if (!newPlan) {
      throw new NotFoundException('Academy not found!');
    }

    return {
      plan: newPlan,
    };
  }
}
