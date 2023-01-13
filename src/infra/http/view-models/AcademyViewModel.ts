/* eslint-disable prettier/prettier */

import { Academy } from '../../../app/entities/Academy';

export class AcademyViewModel {
  static toHttp(academy: Academy) {
    const plans = academy.plans.map((plan) => ({
      id: plan.id,
      name: plan.name,
      description: plan.description.value,
      value: plan.value,
    }));

    return {
      _id: academy._id,
      name: academy.name,
      email: academy.email,
      password: academy.password,
      description: academy.description.value,
      telephoneNumber: academy.telephoneNumber.value,
      address: academy.address,
      city: academy.city,
      number: academy.number,
      postalCode: academy.postalCode,
      neighborhood: academy.neighborhood,
      latitude: academy.latitude,
      longitude: academy.longitude,
      plans,
      daysOfWeek: academy.daysOfWeek,
      openingTime: academy.openingTime,
      closingTime: academy.closingTime,
    };
  }
}
