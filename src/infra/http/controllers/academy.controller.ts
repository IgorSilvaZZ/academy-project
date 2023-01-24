/* eslint-disable prettier/prettier */

import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Delete,
  Put,
} from '@nestjs/common';

import { CreateAcademyDTO } from '../dtos/CreateAcademyDTO';
import { CreatePlanDTO } from '../dtos/CreatePlanDTO';
import { UpdatePlanDTO } from '../dtos/UpdatePlanDTO';
import { AcademyViewModel } from '../view-models/AcademyViewModel';
import { PlanViewModel } from '../view-models/PlanViewModel';

import { FindByIdAcademyUseCase } from '../../../app/useCases/academy/FindByIdAcademyUseCase';
import { ListGymsUseCase } from '../../../app/useCases/academy/ListGymsUseCase';
import { CreateAcademyUseCase } from '../../../app/useCases/academy/CreateAcademyUseCase';
import { CreatePlanAcademyUseCase } from '../../../app/useCases/academy/CreatePlanAcademyUseCase';
import { DeletePlanAcademyUseCase } from '../../../app/useCases/academy/DeletePlanAcademyUseCase';
import { ListPlanAcademyUseCase } from '../../../app/useCases/academy/ListPlanAcademyUseCase';
import { UpdatePlanAcademyUseCase } from '../../../app/useCases/academy/UpdatePlanAcademyUseCase';
import { useParams } from 'react-router-dom';

@Controller('/gyms')
export class AcademyController {
  constructor(
    private readonly createAcademyUseCase: CreateAcademyUseCase,
    private readonly listGymsUseCase: ListGymsUseCase,
    private readonly findByIdAcademyUseCase: FindByIdAcademyUseCase,
    private readonly listPlanAcademyUseCase: ListPlanAcademyUseCase,
    private readonly createPlanUseCase: CreatePlanAcademyUseCase,
    private readonly deletePlanAcademyUseCase: DeletePlanAcademyUseCase,
    private readonly updatePlanAcademyUseCase: UpdatePlanAcademyUseCase,
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

  @Get('/:idAcademy/plan/:idPlan')
  async findByIdPlanAcademy(@Param() params: string[]) {
    const idAcademy = params['idAcademy'];
    const idPlan = params['idPlan'];

    const { plan } = await this.listPlanAcademyUseCase.execute(
      idAcademy,
      idPlan,
    );

    return PlanViewModel.toHttp(plan);
  }

  @Put('/:idAcademy/plan/:idPlan')
  async updatePlanAcademy(
    @Param() params: string[],
    @Body() updatePlanDTO: UpdatePlanDTO,
  ) {
    const idAcademy = params['idAcademy'];
    const idPlan = params['idPlan'];

    const request = {
      idAcademy,
      idPlan,
      ...updatePlanDTO,
    };

    const { plan } = await this.updatePlanAcademyUseCase.execute(request);

    return PlanViewModel.toHttp(plan);
  }

  @Delete('/:idAcademy/plan/:idPlan')
  async deletePlanAcademy(@Param() params: string[]) {
    const idAcademy = params['idAcademy'];
    const idPlan = params['idPlan'];

    await this.deletePlanAcademyUseCase.execute(idAcademy, idPlan);
  }
}
