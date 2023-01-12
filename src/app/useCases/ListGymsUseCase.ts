/* eslint-disable prettier/prettier */

import { Academy } from '../entities/Academy';
import { AcademyRepository } from '../repositories/AcademyRepository';

export class ListGymsUseCase {
  constructor(private readonly academyRepository: AcademyRepository) {}

  async execute(): Promise<Academy[]> {
    const gyms = await this.academyRepository.listGyms();

    return gyms;
  }
}
