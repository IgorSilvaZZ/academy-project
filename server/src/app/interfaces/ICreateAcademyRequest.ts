/* eslint-disable prettier/prettier */

export interface IAcademy {
  name: string;
  address: string;
  city: string;
  state: string;
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
      planId: string;
      name: string;
      description: string;
      value: number;
    },
  ];
  postalCode: string;
}
