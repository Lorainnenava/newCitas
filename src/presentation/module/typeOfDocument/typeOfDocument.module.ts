import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import {
  TypeOfDocument,
  typeOfDocumentSchema,
} from '../../../domain/entities/typeOfDocument/typeOfDocument.entity';
import { TypeOfDocumentRepository } from '../../../infrastructure/repository/typeOfDocument/typeOfDocument.repository';
import { TypeOfDocumentCreateService } from '../../../application/services/typeOfDocument/typeOfDocumentCreate.service';
import { TypeOfDocumentDeleteService } from '../../../application/services/typeOfDocument/typeOfDocumentDelete.service';
import { TypeOfDocumentsGetAllService } from '../../../application/services/typeOfDocument/typeOfDocumentGetAll.service';
import { TypeOfDocumentController } from '../../controller/typeOfDocument/typeOfDocument.controller';

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
    TypeOfDocumentsGetAllService,
  ],
  exports: [
    TypeOfDocumentCreateService,
    TypeOfDocumentDeleteService,
    TypeOfDocumentsGetAllService,
  ],
  controllers: [TypeOfDocumentController],
})
export class TypeOfDocumentModule {}
