/* eslint-disable prettier/prettier */

import { Body, Controller, Get, Param, Post } from '@nestjs/common';

import { CreateAcademyDTO } from '../dtos/CreateAcademyDTO';
import { CreatePlanDTO } from '../dtos/CreatePlanDTO';
import { AcademyViewModel } from '../view-models/AcademyViewModel';
import { PlanViewModel } from '../view-models/PlanViewModel';

import { FindByIdAcademyUseCase } from '../../../app/useCases/FindByIdAcademyUseCase';
import { ListGymsUseCase } from '../../../app/useCases/ListGymsUseCase';
import { CreateAcademyUseCase } from '../../../app/useCases/CreateAcademyUseCase';
import { CreatePlanAcademyUseCase } from '../../../app/useCases/CreatePlanAcademyUseCase';

@Controller('/gyms')
export class AcademyController {
  constructor(
    private readonly createAcademyUseCase: CreateAcademyUseCase,
    private readonly listGymsUseCase: ListGymsUseCase,
    private readonly findByIdAcademyUseCase: FindByIdAcademyUseCase,
    private readonly createPlanUseCase: CreatePlanAcademyUseCase,
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

  @Post('/:id/plan')
  async createPlanAcademy(
    @Param('id') id: string,
    @Body() createPlanDTO: CreatePlanDTO,
  ) {
    const { plan } = await this.createPlanUseCase.execute({
      id,
      plan: createPlanDTO,
    });

    return PlanViewModel.toHttp(plan);
  }
}
