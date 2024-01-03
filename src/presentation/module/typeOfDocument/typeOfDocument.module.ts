import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import {
  TypeOfDocument,
  typeOfDocumentSchema,
} from '../../../domain/entities/typeOfDocument/typeOfDocument.entity';
import { TypeOfDocumentRepository } from '../../../infrastructure/repository/typeOfDocument/typeOfDocument.repository';
import { TypeOfDocumentController } from '../../../infrastructure/controller/typeOfDocument/typeOfDocument.controller';
import { TypeOfDocumentCreateService } from '../../../application/services/typeOfDocument/typeOfDocumentCreate.service';
import { TypeOfDocumentDeleteService } from '../../../application/services/typeOfDocument/typeOfDocumentDelete.service';
import { TypeOfDocumentGetAllService } from '../../../application/services/typeOfDocument/typeOfDocumentGetAll.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: TypeOfDocument.name, schema: typeOfDocumentSchema },
    ]),
  ],
  providers: [
    TypeOfDocumentRepository,
    TypeOfDocumentCreateService,
    TypeOfDocumentDeleteService,
    TypeOfDocumentGetAllService,
  ],
  exports: [
    TypeOfDocumentCreateService,
    TypeOfDocumentDeleteService,
    TypeOfDocumentGetAllService,
  ],
  controllers: [TypeOfDocumentController],
})
export class TypeOfDocumentModule {}
