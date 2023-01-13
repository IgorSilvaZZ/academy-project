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

  async create(academy: Academy): Promise<Academy> {
    this.gyms.push(academy);

    return academy;
  }

  async createPlan(id: string, plan: Plan): Promise<Plan | null> {
    const academy = this.gyms.find((academy) => academy._id === id);

    academy?.plans.push(plan);

    return plan;
  }
}
