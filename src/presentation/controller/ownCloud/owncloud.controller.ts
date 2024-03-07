import {
  Body,
  Controller,
  Param,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { Express } from 'express';
import { Public } from '../../../utils';
import { ApiBody, ApiConsumes, ApiTags } from '@nestjs/swagger';
import { FileInterceptor } from '@nestjs/platform-express';
import { DocumentUploadService } from '../../../application/services/document/document.service';
import { DocumentRequestDto } from '../../../domain/entities/document/dto/request/documentRequest.dto';

@ApiTags('files')
@Controller('files')
export class FileController {
  constructor(private readonly documentUpload: DocumentUploadService) {}

  /**
   * Upload file
   * @param file
   * @returns
   */
  @Public()
  @Post('upload')
  @ApiConsumes('multipart/form-data')
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        file: {
          type: 'string',
          format: 'binary',
        },
        key: {
          type: 'string',
        },
      },
    },
  })
  @UseInterceptors(FileInterceptor('file'))
  async uploadFile(
    @UploadedFile('file')
    file: any,
    @Body('key') key?: string,
  ): Promise<string> {
    return await this.documentUpload.upload(file?.buffer, key);
  }
}
