/* eslint-disable prettier/prettier */

import { IsOptional } from 'class-validator';

export class UpdateAcademyDTO {
  @IsOptional()
  name: string;

  @IsOptional()
  address: string;

  @IsOptional()
  city: string;

  @IsOptional()
  email: string;

  @IsOptional()
  daysOfWeek: string;

  @IsOptional()
  description: string;

  @IsOptional()
  telephoneNumber: string;

  @IsOptional()
  closingTime: string;

  @IsOptional()
  latitude: number;

  @IsOptional()
  longitude: number;

  @IsOptional()
  neighborhood: string;

  @IsOptional()
  number: string;

  @IsOptional()
  openingTime: string;

  @IsOptional()
  postalCode: string;
}
