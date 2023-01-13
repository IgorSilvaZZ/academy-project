/* eslint-disable prettier/prettier */

import { Description } from 'src/app/entities/Description';
import { Plan } from 'src/app/entities/Plan';
import { TelephoneNumber } from 'src/app/entities/TelephoneNumber';
import { Academy } from '../../../../app/entities/Academy';
import { IAcademyDocument } from '../repositories/MongooseAcademyRepository';

export class MoongoseAcademyMapper {
  static toMoongose(academy: Academy) {
    const plans = academy.plans.map((plan) => ({
      id: String(plan.id),
      name: plan.name,
      description: plan.description.value,
      value: plan.value,
    }));

    return {
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

  static toDomain(academyDocument: IAcademyDocument): Academy {
    const plans = academyDocument.plans.map(
      (plan) =>
        new Plan({
          id: String(plan.id),
          name: plan.name,
          description: new Description(plan.description),
          value: plan.value,
        }),
    );

    return new Academy({
      _id: academyDocument._id,
      name: academyDocument.name,
      email: academyDocument.email,
      password: academyDocument.password,
      description: new Description(academyDocument.description),
      telephoneNumber: new TelephoneNumber(academyDocument.telephoneNumber),
      address: academyDocument.address,
      city: academyDocument.city,
      number: academyDocument.number,
      postalCode: academyDocument.postalCode,
      neighborhood: academyDocument.neighborhood,
      latitude: academyDocument.latitude,
      longitude: academyDocument.longitude,
      plans,
      daysOfWeek: academyDocument.daysOfWeek,
      openingTime: academyDocument.openingTime,
      closingTime: academyDocument.closingTime,
    });
  }
}
