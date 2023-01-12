/* eslint-disable prettier/prettier */

import { Academy } from '../entities/Academy';

export abstract class AcademyRepository {
  abstract findByEmail(email: string): Promise<Academy | null>;
  abstract create(academy: Academy): Promise<Academy>;
  abstract listGyms(): Promise<Academy[]>;
}
