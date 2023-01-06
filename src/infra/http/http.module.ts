/* eslint-disable prettier/prettier */

import { MongooseModule } from '@nestjs/mongoose';
import { Module } from '@nestjs/common';

import { AcademyController } from './controllers/academy.controller';
import { AcademySchema } from '../database/mongoose/schemas/AcademySchema';
import { CreateAcademyUseCase } from '../../../src/app/useCases/CreateAcademyUseCase';
import { AcademyRepository } from '../../../src/app/repositories/AcademyRepository';
import { MongooseAcademyRepository } from '../database/mongoose/repositories/MongooseAcademyRepository';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'academy', schema: AcademySchema }]),
  ],
  controllers: [AcademyController],
  providers: [
    { provide: AcademyRepository, useClass: MongooseAcademyRepository },
    CreateAcademyUseCase,
  ],
})
export class HttpModule {}
