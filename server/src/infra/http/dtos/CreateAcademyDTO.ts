/* eslint-disable prettier/prettier */

import {
  IsNotEmpty,
  Length,
  IsEmail,
  IsArray,
  ArrayMinSize,
} from 'class-validator';

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
  state: string;

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
  plans: [
    {
      planId: string;
      name: string;
      description: string;
      value: number;
    },
  ];

  @IsNotEmpty()
  daysOfWeek: string;

  @IsNotEmpty()
  openingTime: string;

  @IsNotEmpty()
  closingTime: string;
}
