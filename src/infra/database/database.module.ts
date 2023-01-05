/* eslint-disable prettier/prettier */

import { Module } from '@nestjs/common';
import { AcademyRepository } from '../../../src/app/repositories/AcademyRepository';
import { PrismaService } from './prisma/prisma.service';
import { PrismaAcademyRepository } from './prisma/repositories/PrismaAcademyRepository';

// Provide do Prisma Service diz, que toda vez que eu precisar do AcademyRepository eu vou devolver a classe PrismaAcademyRepository
@Module({
  providers: [
    PrismaService,
    {
      provide: AcademyRepository,
      useClass: PrismaAcademyRepository,
    },
  ],
  exports: [AcademyRepository],
})
export class DatabaseModule {}
