import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsNotEmpty, IsOptional, IsString } from 'class-validator';

/**
 * Class MedicalInformationRequestDto
 */
export class MedicalInformationRequestDto {
  @ApiProperty()
  @IsBoolean()
  @IsNotEmpty()
  allergies: boolean;

  @ApiProperty()
  @IsBoolean()
  @IsNotEmpty()
  surgeries: boolean;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  @IsOptional()
  infoSurgeries?: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  bloodType: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  illnesses: string;

  @ApiProperty()
  @IsBoolean()
  @IsNotEmpty()
  takeMedication: boolean;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  @IsOptional()
  infoTakeMedication?: string;

  @ApiProperty()
  @IsBoolean()
  @IsNotEmpty()
  useDrugs: boolean;

  @ApiProperty()
  @IsBoolean()
  @IsNotEmpty()
  useTobacco: boolean;

  @ApiProperty()
  @IsString()
  @IsOptional()
  observations?: string;
}
