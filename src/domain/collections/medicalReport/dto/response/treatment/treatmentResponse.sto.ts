import { ApiProperty } from '@nestjs/swagger';

/**
 * class TreatmentResponsetDto
 */
export class TreatmentResponsetDto {
  @ApiProperty()
  medicine: string;

  @ApiProperty()
  description: string;
}
