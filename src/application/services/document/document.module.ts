import { Module } from '@nestjs/common';
import { DocumentUploadService } from './document.service';

/**
 * Module for importing document services.
 */
@Module({
  providers: [DocumentUploadService],
  exports: [DocumentUploadService],
})
export class DocumentApplicationModule {}
