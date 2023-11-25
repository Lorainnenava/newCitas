import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

/**
 * class TreatmentRequestDto
 */
export class TreatmentRequestDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  medicine: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  description: string;
}
