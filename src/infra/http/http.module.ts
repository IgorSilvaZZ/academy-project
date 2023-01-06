/* eslint-disable prettier/prettier */

import { Module } from '@nestjs/common';
import { CreateAcademyUseCase } from '../../../src/app/useCases/CreateAcademyUseCase';
import { DatabaseModule } from '../database/database.module';

import { AcademyController } from './controllers/academy.controller';

@Module({
  imports: [DatabaseModule],
  controllers: [AcademyController],
  providers: [CreateAcademyUseCase],
})
export class HttpModule {}
