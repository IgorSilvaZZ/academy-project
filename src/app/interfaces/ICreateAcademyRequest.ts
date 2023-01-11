/* eslint-disable prettier/prettier */

export interface ICreateAcademyRequest {
  name: string;
  address: string;
  city: string;
  email: string;
  daysOfWeek: string;
  description: string;
  telephoneNumber: string;
  closingTime: string;
  latitude: number;
  longitude: number;
  neighborhood: string;
  number: string;
  openingTime: string;
  password: string;
  plans: [
    {
      name: string;
      description: string;
      value: number;
    },
  ];
  postalCode: string;
}
