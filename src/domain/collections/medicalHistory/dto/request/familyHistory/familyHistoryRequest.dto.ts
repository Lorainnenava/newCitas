import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsBoolean } from 'class-validator';

/**
 * Class FamilyHistoryRequestDto
 */
export class FamilyHistoryRequestDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsBoolean()
  Depression: boolean;

  @ApiProperty()
  @IsNotEmpty()
  @IsBoolean()
  Asthma: boolean;

  @ApiProperty()
  @IsNotEmpty()
  @IsBoolean()
  Arthritis: boolean;

  @ApiProperty()
  @IsNotEmpty()
  @IsBoolean()
  Tuberculosis: boolean;

  @ApiProperty()
  @IsNotEmpty()
  @IsBoolean()
  Diabetes: boolean;

  @ApiProperty()
  @IsNotEmpty()
  @IsBoolean()
  Cancer: boolean;

  @ApiProperty()
  @IsNotEmpty()
  @IsBoolean()
  heartProblems: boolean;
}
