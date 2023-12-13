import { ApiProperty } from '@nestjs/swagger';

/**
 * Class DocumentInfoResponseDto
 */
export class DocumentInfoResponseDto {
  @ApiProperty()
  typeDocument: string;

  @ApiProperty()
  documentNumber: number;
}
