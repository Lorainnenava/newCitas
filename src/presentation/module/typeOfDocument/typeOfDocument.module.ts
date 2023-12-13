import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import {
  TypeOfDocument,
  typeOfDocumentSchema,
} from '../../../domain/entities/typeOfDocument/typeOfDocument.entity';
import { TypeOfDocumentService } from '../../../application/services/typeOfDocument/typeOfDocument.service';
import { TypeOfDocumentController } from '../../../infrastructure/controller/typeOfDocument/typeOfDocument.controller';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: TypeOfDocument.name, schema: typeOfDocumentSchema },
    ]),
  ],
  providers: [TypeOfDocumentService],
  exports: [TypeOfDocumentService],
  controllers: [TypeOfDocumentController],
})
export class TypeOfDocumentModule {}
