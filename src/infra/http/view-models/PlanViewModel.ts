/* eslint-disable prettier/prettier */

import { Plan } from '../../../app/entities/Plan';

export class PlanViewModel {
  static toHttp(plan: Plan) {
    return {
      id: plan.id,
      name: plan.name,
      description: plan.description.value,
      value: plan.value,
    };
  }
}
