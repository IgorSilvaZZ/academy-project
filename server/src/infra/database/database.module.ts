/* eslint-disable prettier/prettier */

import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

// Provide do Prisma Service diz, que toda vez que eu precisar do AcademyRepository eu vou devolver a classe PrismaAcademyRepository
@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb://admin:senha@localhost:27017/academyproject?authSource=admin&directConnection=true',
    ),
  ],
})
export class DatabaseModule {}
