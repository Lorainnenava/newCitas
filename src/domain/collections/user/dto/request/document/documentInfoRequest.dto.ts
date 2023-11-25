import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, IsInt } from 'class-validator';

/**
 * Class DocumentInfoRequestDto
 */
export class DocumentInfoRequestDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  typeDocument: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsInt()
  documentNumber: number;
}
