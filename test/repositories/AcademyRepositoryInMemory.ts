/* eslint-disable prettier/prettier */

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

  async create(academy: Academy): Promise<Academy> {
    this.gyms.push(academy);

    return academy;
  }
}
