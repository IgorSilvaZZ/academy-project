/* eslint-disable prettier/prettier */

import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { Academy } from '../../../../app/entities/Academy';
import { AcademyRepository } from '../../../../app/repositories/AcademyRepository';
import { AcademySchema } from '../schemas/AcademySchema';

@Injectable()
export class MongooseAcademyRepository implements AcademyRepository {
  constructor(
    @InjectModel('academy') private academyModel: Model<typeof AcademySchema>,
  ) {}

  findByEmail(email: string): Promise<Academy | null | undefined> {
    throw new Error('Method not implemented.');
  }
  create(academy: Academy): Promise<Academy> {
    throw new Error('Method not implemented.');
  }
}
