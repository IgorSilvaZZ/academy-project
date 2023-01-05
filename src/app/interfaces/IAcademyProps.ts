/* eslint-disable prettier/prettier */

import { Description } from '../entities/Description';
import { Plan } from '../entities/Plan';
import { TelephoneNumber } from '../entities/TelephoneNumber';

export interface IAcademyProps {
  name: string;
  description: Description;
  email: string;
  password: string;
  telephoneNumber: TelephoneNumber;
  address: string;
  city: string;
  number: string;
  postalCode: string;
  neighborhood: string;
  latitude: number;
  longitude: number;
  plans: Plan[];
  daysOfWeek: string;
  openingTime: string;
  closingTime: string;
  createdAt?: Date;
  updatedAt?: Date;
}
