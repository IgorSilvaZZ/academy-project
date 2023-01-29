/* eslint-disable prettier/prettier */

import { Plan } from './Plan';

import { makePlanAcademy } from '../../../test/factories/plan-factory';
import { Description } from './Description';

describe('Plans Academy', () => {
  const plansAcademyMemory: Plan[] = [];

  it('Should be able to create a academy plan', () => {
    const plan = makePlanAcademy();

    expect(plan).toBeTruthy();
  });

  it('Should be able to create two academy plans', () => {
    const planOne = makePlanAcademy({
      value: 150,
    });

    plansAcademyMemory.push(planOne);

    const planTwo = makePlanAcademy({
      value: 200,
    });

    plansAcademyMemory.push(planTwo);

    expect(plansAcademyMemory).toHaveLength(2);
    expect(plansAcademyMemory).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ value: 150 }),
        expect.objectContaining({ value: 200 }),
      ])
    );
  });

  it('Should not be able to create a academy plan with less than 10 characters', () => {
    expect(() =>
      makePlanAcademy({
        description: new Description('test!'),
      })
    ).toThrow();
  });

  it('Should not be able to create a academy plan with more than 300 characters', () => {
    expect(() => {
      makePlanAcademy({
        description: new Description('Plan test'.repeat(300)),
      });
    }).toThrow();
  });
});
