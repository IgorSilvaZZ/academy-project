/* eslint-disable prettier/prettier */

import { Injectable } from '@nestjs/common';

import { Academy } from 'src/app/entities/Academy';
import { AcademyRepository } from 'src/app/repositories/AcademyRepository';
import { PrismaService } from '../prisma.service';

@Injectable()
export class PrismaAcademyRepository implements AcademyRepository {
  constructor(private prismaService: PrismaService) {}

  findByEmail(email: string): Promise<Academy | undefined> {
    throw new Error('Method not implemented.');
  }
  create(academy: Academy): Promise<Academy> {
    throw new Error('Method not implemented.');
  }
}
