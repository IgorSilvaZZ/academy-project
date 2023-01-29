/* eslint-disable prettier/prettier */

import { IsOptional } from 'class-validator';

export class UpdatePlanDTO {
  @IsOptional()
  name: string;

  @IsOptional()
  description: string;

  @IsOptional()
  value: number;
}
