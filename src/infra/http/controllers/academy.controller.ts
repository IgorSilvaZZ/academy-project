/* eslint-disable prettier/prettier */

import { Body, Controller, Post } from '@nestjs/common';

import { CreateAcademyUseCase } from '../../../app/useCases/CreateAcademyUseCase';
import { CreateAcademyDTO } from '../dtos/CreateAcademyDTO';
import { AcademyViewModel } from '../view-models/AcademyViewModel';

@Controller('/gyms')
export class AcademyController {
  constructor(private readonly createAcademyUseCase: CreateAcademyUseCase) {}

  @Post('/')
  async createGym(@Body() academyDTO: CreateAcademyDTO) {
    const { academy } = await this.createAcademyUseCase.execute(academyDTO);

    return {
      academy: AcademyViewModel.toHttp(academy),
    };
  }
}
