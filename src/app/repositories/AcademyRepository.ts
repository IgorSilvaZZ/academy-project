/* eslint-disable prettier/prettier */

import { Academy } from '../entities/Academy';
import { Plan } from '../entities/Plan';

export abstract class AcademyRepository {
  abstract findByEmail(email: string): Promise<Academy | null>;
  abstract create(academy: Academy): Promise<Academy>;
  abstract listGyms(): Promise<Academy[]>;
  abstract findById(id: string): Promise<Academy | null>;
  abstract createPlan(id: string, plan: Plan): Promise<Plan>;
}
