/* eslint-disable prettier/prettier */

import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({ timestamps: true, collection: 'gyms' })
export class AcademyCollection {
  @Prop()
  name: string;

  @Prop()
  description: string;

  @Prop()
  email: string;

  @Prop()
  password: string;

  @Prop()
  telephoneNumber: string;

  @Prop()
  address: string;

  @Prop()
  city: string;

  @Prop()
  number: string;

  @Prop()
  postalCode: string;

  @Prop()
  neighborhood: string;

  @Prop()
  latitude: number;

  @Prop()
  longitude: number;

  @Prop()
  plans: [
    {
      _id: string;
      name: string;
      description: string;
      value: number;
    },
  ];

  @Prop()
  daysOfWeek: string;

  @Prop()
  openingTime: string;

  @Prop()
  closingTime: string;
}

export const AcademySchema = SchemaFactory.createForClass(AcademyCollection);
