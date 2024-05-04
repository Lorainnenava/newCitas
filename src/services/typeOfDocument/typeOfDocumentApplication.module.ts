import { Module } from '@nestjs/common';
import { TypeOfDocumentCreateService } from './create/typeOfDocumentCreate.service';
import { TypeOfDocumentsGetAllService } from './getAll/typeOfDocumentGetAll.service';

/**
 * Module for importing typeOfDocument services.
 */
@Module({
  providers: [TypeOfDocumentCreateService, TypeOfDocumentsGetAllService],
  exports: [TypeOfDocumentCreateService, TypeOfDocumentsGetAllService],
})
export class TypeOfDocumentApplicationModule {}
