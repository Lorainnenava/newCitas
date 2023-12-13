import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

/**
 * Class TypeOfDocumentRequest
 */
export class TypeOfDocumentRequestDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  typeOfDocument: string;
}
