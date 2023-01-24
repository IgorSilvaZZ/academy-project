/* eslint-disable prettier/prettier */

import { MongooseModule } from '@nestjs/mongoose';
import { Module } from '@nestjs/common';

import { AcademyController } from './controllers/academy.controller';
import { AcademySchema } from '../database/mongoose/schemas/AcademySchema';
import { CreateAcademyUseCase } from '../../app/useCases/academy/CreateAcademyUseCase';
import { AcademyRepository } from '../../../src/app/repositories/AcademyRepository';
import { MongooseAcademyRepository } from '../database/mongoose/repositories/MongooseAcademyRepository';
import { ListGymsUseCase } from '../../app/useCases/academy/ListGymsUseCase';
import { FindByIdAcademyUseCase } from '../../app/useCases/academy/FindByIdAcademyUseCase';
import { CreatePlanAcademyUseCase } from '../../app/useCases/academy/CreatePlanAcademyUseCase';
import { DeletePlanAcademyUseCase } from '../../app/useCases/academy/DeletePlanAcademyUseCase';
import { ListPlanAcademyUseCase } from '../../app/useCases/academy/ListPlanAcademyUseCase';
import { UpdatePlanAcademyUseCase } from '../../app/useCases/academy/UpdatePlanAcademyUseCase';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'academy', schema: AcademySchema }]),
  ],
  controllers: [AcademyController],
  providers: [
    { provide: AcademyRepository, useClass: MongooseAcademyRepository },
    CreateAcademyUseCase,
    ListGymsUseCase,
    FindByIdAcademyUseCase,
    ListPlanAcademyUseCase,
    CreatePlanAcademyUseCase,
    DeletePlanAcademyUseCase,
    UpdatePlanAcademyUseCase,
  ],
})
export class HttpModule {}
