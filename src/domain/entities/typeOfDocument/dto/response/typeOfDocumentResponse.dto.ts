import { ApiProperty } from '@nestjs/swagger';

/**
 * Class TypeOfDocumentResponseDto
 */
export class TypeOfDocumentResponseDto {
  @ApiProperty()
  typeOfDocument: string;
}
