import { MongooseModule } from '@nestjs/mongoose';
import { Module } from '@nestjs/common';
import {
  TypeOfDocument,
  typeOfDocumentSchema,
} from '../../../domain/collections/typeOfDocument/schemas/typeOfDocument.entity';
import { TypeOfDocumentService } from '../../../application/typeOfDocument/typeOfDocument.service';
import { TypeOfDocumentController } from '../../controller/typeOfDocument/typeOfDocument.controller';

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
