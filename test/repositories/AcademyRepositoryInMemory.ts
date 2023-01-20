/* eslint-disable prettier/prettier */

import { Plan } from 'src/app/entities/Plan';
import { Academy } from '../../src/app/entities/Academy';
import { AcademyRepository } from '../../src/app/repositories/AcademyRepository';

export class AcademyRepositoryInMemory implements AcademyRepository {
  public gyms: Academy[] = [];

  async listGyms(): Promise<Academy[]> {
    return this.gyms;
  }

  async findByEmail(email: string): Promise<Academy | null> {
    const academy = this.gyms.find((academy) => academy.email === email);

    if (!academy) {
      return null;
    }

    return academy;
  }

  async findById(id: string): Promise<Academy | null> {
    const academy = this.gyms.find((academy) => academy._id === id);

    if (!academy) {
      return null;
    }

    return academy;
  }

  async findByIdPlanAcademy(
    idAcademy: string,
    idPlan: string,
  ): Promise<Plan | null> {
    const academy = this.gyms.find((academy) => academy._id === idAcademy);

    const plan = academy?.plans.find((plan) => plan.planId === idPlan);

    if (!plan) {
      return null;
    }

    return plan;
  }

  async create(academy: Academy): Promise<Academy> {
    this.gyms.push(academy);

    return academy;
  }

  async createPlan(id: string, plan: Plan): Promise<Plan | null> {
    const academy = this.gyms.find((academy) => academy._id === id);

    academy?.plans.push(plan);

    return plan;
  }

  async updatePlanAcademy(idAcademy: string, planUpdated: Plan): Promise<Plan> {
    const academyIndex = this.gyms.findIndex(
      (academy) => academy._id === idAcademy,
    );

    const planIndex = this.gyms[academyIndex].plans.findIndex(
      (plan) => plan.planId === planUpdated.planId,
    );

    this.gyms[academyIndex].plans[planIndex].name = planUpdated.name;
    this.gyms[academyIndex].plans[planIndex].description =
      planUpdated.description;
    this.gyms[academyIndex].plans[planIndex].value = planUpdated.value;

    const plan = this.gyms[academyIndex].plans[planIndex];

    return plan;
  }

  async deletePlanAcademy(idAcademy: string, idPlan: string): Promise<void> {
    const academyIndex = this.gyms.findIndex(
      (academy) => academy._id === idAcademy,
    );

    const planIndex = this.gyms[academyIndex].plans.findIndex(
      (plan) => plan.planId === idPlan,
    );

    this.gyms[academyIndex].plans.splice(planIndex, 1);
  }
}
