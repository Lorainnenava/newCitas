import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

/**
 * Class MedicalInformationResponseDto
 */
export class MedicalInformationResponseDto {
  @ApiProperty()
  allergies: string;

  @ApiProperty()
  surgeries: string;

  @ApiProperty()
  bloodType: string;

  @ApiProperty()
  illnesses: string;

  @ApiProperty()
  @IsOptional()
  observations?: string;
}
