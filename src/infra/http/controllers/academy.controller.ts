/* eslint-disable prettier/prettier */

import { Controller } from '@nestjs/common';
import { CreateAcademyUseCase } from 'src/app/useCases/CreateAcademyUseCase';

@Controller()
export class AcademyController {
  constructor(private readonly createAcademyUseCase: CreateAcademyUseCase) {}

  

}
