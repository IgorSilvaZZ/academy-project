/* eslint-disable prettier/prettier */

import { Plan } from '../../../app/entities/Plan';

export class PlanViewModel {
  static toHttp(plan: Plan) {
    return {
      planId: plan.planId,
      name: plan.name,
      description: plan.description.value,
      value: plan.value,
    };
  }
}
