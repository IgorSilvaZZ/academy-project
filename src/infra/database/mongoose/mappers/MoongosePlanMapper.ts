/* eslint-disable prettier/prettier */

import { Plan } from 'src/app/entities/Plan';

export class MoongosePlanMapper {
  static toMoongose(plan: Plan) {
    return {
      _id: String(plan._id),
      name: plan.name,
      description: plan.description.value,
      value: plan.value,
    };
  }
}
