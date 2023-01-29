/* eslint-disable prettier/prettier */

import { IsNotEmpty } from 'class-validator';

export class CreatePlanDTO {
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  description: string;

  @IsNotEmpty()
  value: number;
}
