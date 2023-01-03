/* eslint-disable prettier/prettier */

import { Academy } from '../../src/app/entities/Academy';
import { AcademyRepository } from '../../src/app/repositories/AcademyRepository';

export class AcademyRepositoryInMemory implements AcademyRepository {
  public gyms: Academy[] = [];

  async findByEmail(email: string): Promise<Academy | undefined> {
    return this.gyms.find(academy => academy.email === email);
  }

  async create(academy: Academy): Promise<Academy> {
  
    this.gyms.push(academy);

    return academy;
  }
}
