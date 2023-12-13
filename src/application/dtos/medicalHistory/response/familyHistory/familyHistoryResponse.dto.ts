import { ApiProperty } from '@nestjs/swagger';

/**
 * Class FamilyHistoryResponseDto
 */
export class FamilyHistoryResponseDto {
  @ApiProperty()
  Depression: boolean;

  @ApiProperty()
  Asthma: boolean;

  @ApiProperty()
  Arthritis: boolean;

  @ApiProperty()
  Tuberculosis: boolean;

  @ApiProperty()
  Diabetes: boolean;

  @ApiProperty()
  Cancer: boolean;

  @ApiProperty()
  heartProblems: boolean;
}
