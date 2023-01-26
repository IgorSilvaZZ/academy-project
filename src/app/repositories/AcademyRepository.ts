/* eslint-disable prettier/prettier */

import { Academy } from '../entities/Academy';
import { Plan } from '../entities/Plan';

export abstract class AcademyRepository {
  abstract findByEmail(email: string): Promise<Academy | null>;
  abstract listGyms(): Promise<Academy[]>;
  abstract findById(id: string): Promise<Academy | null>;
  abstract findByIdPlanAcademy(
    idAcademy: string,
    idPlan: string,
  ): Promise<Plan | null>;
  abstract create(academy: Academy): Promise<Academy>;
  abstract createPlan(id: string, plan: Plan): Promise<Plan | null>;
  abstract updatePlanAcademy(
    idAcademy: string,
    planUpdated: Plan,
  ): Promise<Plan>;
  abstract updateAcademy(idAcademy: string, academy: Academy): Promise<Academy>;

  abstract deletePlanAcademy(idAcademy: string, idPlan: string): Promise<void>;
}
