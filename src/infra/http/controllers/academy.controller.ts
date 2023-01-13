/* eslint-disable prettier/prettier */

import { Body, Controller, Get, Param, Post } from '@nestjs/common';

import { CreateAcademyDTO } from '../dtos/CreateAcademyDTO';
import { AcademyViewModel } from '../view-models/AcademyViewModel';

import { FindByIdAcademyUseCase } from '../../../app/useCases/FindByIdAcademyUseCase';
import { ListGymsUseCase } from '../../../app/useCases/ListGymsUseCase';
import { CreateAcademyUseCase } from '../../../app/useCases/CreateAcademyUseCase';

@Controller('/gyms')
export class AcademyController {
  constructor(
    private readonly createAcademyUseCase: CreateAcademyUseCase,
    private readonly listGymsUseCase: ListGymsUseCase,
    private readonly findByIdAcademyUseCase: FindByIdAcademyUseCase,
  ) {}

  @Post('/')
  async createGym(@Body() academyDTO: CreateAcademyDTO) {
    const { academy } = await this.createAcademyUseCase.execute(academyDTO);

    return {
      academy: AcademyViewModel.toHttp(academy),
    };
  }

  @Get('/')
  async listGyms() {
    const gyms = await this.listGymsUseCase.execute();

    return gyms.map(AcademyViewModel.toHttp);
  }

  @Get('/:id')
  async findByIdAcademy(@Param('id') id: string) {
    const academy = await this.findByIdAcademyUseCase.execute(id);

    return AcademyViewModel.toHttp(academy);
  }
}
