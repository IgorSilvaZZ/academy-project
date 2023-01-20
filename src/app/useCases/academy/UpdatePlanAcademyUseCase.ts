/* eslint-disable prettier/prettier */

import { AcademyRepository } from '../../repositories/AcademyRepository';
import { Plan } from '../../entities/Plan';
import { NotFoundException } from '@nestjs/common';
import { Description } from '../../entities/Description';

interface IUpdatePlanRequest {
  idAcademy: string;
  idPlan: string;
  name?: string;
  description?: string;
  value?: number;
}

interface IPlanUpdateResponse {
  plan: Plan;
}

export class UpdatePlanAcademyUseCase {
  constructor(private academyRepository: AcademyRepository) {}

  async execute(request: IUpdatePlanRequest): Promise<IPlanUpdateResponse> {
    const { idAcademy, idPlan, name, description, value } = request;

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

    const namePlan = name ? name : plan.name;

    const descriptionPlan = description
      ? new Description(description)
      : plan.description;

    const valuePlan = value ? value : plan.value;

    const planDataUpdated = new Plan({
      ...plan,
      planId: plan.planId,
      name: namePlan,
      description: descriptionPlan,
      value: valuePlan,
    });

    // Garantindo que já tem aquele plano e academia cadastrados
    const planUpdated = await this.academyRepository.updatePlanAcademy(
      idAcademy,
      planDataUpdated,
    );

    return {
      plan: planUpdated,
    };
  }
}
