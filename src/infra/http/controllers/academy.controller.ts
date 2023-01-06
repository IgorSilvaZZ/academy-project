/* eslint-disable prettier/prettier */

import { Body, Controller, Post } from '@nestjs/common';

import {
  CreateAcademyResponse,
  CreateAcademyUseCase,
} from '../../../app/useCases/CreateAcademyUseCase';
import { CreateAcademyDTO } from '../dtos/CreateAcademyDTO';

@Controller('/gyms')
export class AcademyController {
  constructor(private readonly createAcademyUseCase: CreateAcademyUseCase) {}

  @Post('/')
  async createGym(
    @Body() academyDTO: CreateAcademyDTO,
  ): Promise<CreateAcademyResponse> {
    const academy = await this.createAcademyUseCase.execute(academyDTO);

    return academy;
  }
}
