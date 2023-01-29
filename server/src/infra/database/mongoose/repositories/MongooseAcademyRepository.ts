/* eslint-disable prettier/prettier */

import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Document } from 'mongoose';

import { IAcademy } from '../../../../app/interfaces/ICreateAcademyRequest';

import { MoongoseAcademyMapper } from '../mappers/MoongoseAcademyMapper';
import { MoongosePlanMapper } from '../mappers/MoongosePlanMapper';
import { AcademyRepository } from '../../../../app/repositories/AcademyRepository';

import { Plan } from '../../../../app/entities/Plan';
import { Academy } from '../../../../app/entities/Academy';
import { Description } from '../../../../app/entities/Description';

export interface IAcademyDocument extends IAcademy, Document {}
@Injectable()
export class MongooseAcademyRepository implements AcademyRepository {
  constructor(
    @InjectModel('academy') private academyModel: Model<IAcademyDocument>,
  ) {}

  async listGyms(): Promise<Academy[]> {
    const gyms = await this.academyModel.find().exec();

    return gyms.map(MoongoseAcademyMapper.toDomain);
  }

  async findByEmail(email: string): Promise<Academy | null> {
    const academy = await this.academyModel.findOne({ email }).exec();

    if (!academy) {
      return null;
    }

    return MoongoseAcademyMapper.toDomain(academy);
  }

  async findById(id: string): Promise<Academy | null> {
    const academy = await this.academyModel.findOne({ _id: id }).exec();

    if (!academy) {
      return null;
    }

    return MoongoseAcademyMapper.toDomain(academy);
  }

  async findByIdPlanAcademy(
    idAcademy: string,
    idPlan: string,
  ): Promise<Plan | null> {
    const academy = await this.academyModel.findOne({ _id: idAcademy }).exec();

    const plan = academy?.plans.find((plan) => plan.planId === idPlan);

    if (!plan) {
      return null;
    }

    return new Plan({
      planId: plan.planId,
      name: plan.name,
      description: new Description(plan.description),
      value: plan.value,
    });
  }

  async create(academy: Academy): Promise<Academy> {
    const academyMoongose = MoongoseAcademyMapper.toMoongose(academy);

    const newAcademy = new this.academyModel(academyMoongose);

    await newAcademy.save();

    return academy;
  }

  async createPlan(id: string, plan: Plan): Promise<Plan | null> {
    const academy = await this.academyModel.findOne({ _id: id }).exec();

    const planMoongose = MoongosePlanMapper.toMoongose(plan);

    if (!academy) {
      return null;
    }

    academy?.plans.push(planMoongose);

    await this.academyModel
      .findOneAndUpdate({ _id: id }, { $set: academy })
      .exec();

    return plan;
  }

  async updatePlanAcademy(idAcademy: string, planUpdated: Plan): Promise<Plan> {
    const planMoongose = MoongosePlanMapper.toMoongose(planUpdated);

    await this.academyModel
      .updateOne(
        { _id: idAcademy, 'plans.planId': planUpdated.planId },
        {
          $set: {
            'plans.$.name': planMoongose.name,
            'plans.$.description': planMoongose.name,
            'plans.$.value': planMoongose.value,
          },
        },
      )
      .exec();

    return planUpdated;
  }

  async updateAcademy(idAcademy: string, academy: Academy): Promise<Academy> {
    const academyMongoose = MoongoseAcademyMapper.toMoongose(academy);

    const updatedAcademy = await this.academyModel
      .findOneAndUpdate(
        { _id: idAcademy },
        {
          $set: academyMongoose,
        },
        { new: true },
      )
      .exec();

    return MoongoseAcademyMapper.toDomain(updatedAcademy as IAcademyDocument);
  }

  async deletePlanAcademy(idAcademy: string, idPlan: string): Promise<void> {
    await this.academyModel
      .findOneAndUpdate(
        { _id: idAcademy },
        { $pull: { plans: { planId: idPlan } } },
      )
      .exec();
  }
}
