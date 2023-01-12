/* eslint-disable prettier/prettier */

import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Document } from 'mongoose';

import { IAcademy } from '../../../../app/interfaces/ICreateAcademyRequest';
import { Academy } from '../../../../app/entities/Academy';
import { AcademyRepository } from '../../../../app/repositories/AcademyRepository';
import { MoongoseAcademyMapper } from '../mappers/MoongoseAcademyMapper';

export interface IAcademyDocument extends IAcademy, Document {}
@Injectable()
export class MongooseAcademyRepository implements AcademyRepository {
  constructor(
    @InjectModel('academy') private academyModel: Model<IAcademyDocument>,
  ) {}

  async findByEmail(email: string): Promise<Academy | null> {
    const academy = await this.academyModel.findOne({ email }).exec();

    if (!academy) {
      return null;
    }

    return MoongoseAcademyMapper.toDomain(academy);
  }

  async create(academy: Academy): Promise<Academy> {
    const academyMoongose = MoongoseAcademyMapper.toMoongose(academy);

    const newAcademy = new this.academyModel(academyMoongose);

    await newAcademy.save();

    return academy;
  }
}
