import { ApiProperty } from '@nestjs/swagger';

/**
 * Class DoctorResponseDto
 */
export class DoctorResponseDto {
  @ApiProperty()
  name: string;

  @ApiProperty()
  specialty: string;
}
