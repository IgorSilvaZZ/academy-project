/* eslint-disable prettier/prettier */

import { Module } from '@nestjs/common';
import { CreateAcademyUseCase } from 'src/app/useCases/CreateAcademyUseCase';

import { AcademyController } from './controllers/academy.controller';

@Module({
  controllers: [AcademyController],
  providers: [CreateAcademyUseCase],
  imports: [],
})
export class HttpModule {}
