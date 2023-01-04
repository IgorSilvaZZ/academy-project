/* eslint-disable prettier/prettier */

import {
  IsNotEmpty,
  Length,
  IsEmail,
  IsArray,
  MinLength,
} from 'class-validator';

import { Plan } from 'src/app/entities/Plan';

export class CreateAcademyDTO {
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  @Length(10, 300)
  description: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  password: string;

  @IsNotEmpty()
  telephoneNumber: string;

  @IsNotEmpty()
  address: string;

  @IsNotEmpty()
  city: string;

  @IsNotEmpty()
  number: string;

  @IsNotEmpty()
  postalCode: string;

  @IsNotEmpty()
  neighborhood: string;

  @IsNotEmpty()
  latitude: number;

  @IsNotEmpty()
  longitude: number;

  @IsArray()
  @MinLength(1)
  plans: Plan[];

  @IsArray()
  @MinLength(5)
  daysOfWeek: string[];

  @IsNotEmpty()
  openingTime: string;

  @IsNotEmpty()
  closingTime: string;
}
