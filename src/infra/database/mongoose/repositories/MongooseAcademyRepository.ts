/* eslint-disable prettier/prettier */

import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Document } from 'mongoose';

import { Academy } from '../../../../app/entities/Academy';
import { AcademyRepository } from '../../../../app/repositories/AcademyRepository';

interface IAcademyDocument extends Academy, Document {}
@Injectable()
export class MongooseAcademyRepository implements AcademyRepository {
  constructor(
    @InjectModel('academy') private academyModel: Model<IAcademyDocument>,
  ) {}

  async findByEmail(email: string): Promise<Academy | null | undefined> {
    const academy = await this.academyModel.findOne({ email });

    return academy;
  }

  async create(academy: Academy): Promise<Academy> {
    const newAcademy = new this.academyModel(academy);

    await newAcademy.save();

    return newAcademy;
  }
}
