import { ApiProperty } from '@nestjs/swagger';
import { PatientResponseDto } from '../../../patients/dto/response/patient/patientResponse.dto';

/**
 * class InvoiceResponseDto
 */
export class InvoiceResponseDto {
  @ApiProperty()
  code: number;

  @ApiProperty()
  hospital: string;

  @ApiProperty()
  patientInformation: PatientResponseDto;

  @ApiProperty()
  date: Date;

  @ApiProperty()
  cost: Number;

  @ApiProperty()
  state: boolean;
}
