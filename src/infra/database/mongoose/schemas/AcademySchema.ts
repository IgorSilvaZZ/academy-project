/* eslint-disable prettier/prettier */

import mongoose from 'mongoose';

export const AcademySchema = new mongoose.Schema(
  {
    name: String,
    description: String,
    email: String,
    password: String,
    telephoneNumber: String,
    address: String,
    city: String,
    number: String,
    postalCode: String,
    neighborhood: String,
    latitude: Number,
    longitude: Number,
    plans: [
      {
        name: String,
        description: String,
        value: Number,
      },
    ],
    daysOfWeek: String,
    openingTime: String,
    closingTime: String,
  },
  { timestamps: true, collection: 'gyms' },
);
