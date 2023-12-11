import { Document, Types } from 'mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { PatientInformationResponseDto } from '../patientInformation/patientResponse.dto';

/**
 * class InvoiceResponseDto
 */
export class InvoiceResponseDto extends Document {
  @ApiProperty()
  code: number;

  @ApiProperty()
  description: string;

  @ApiProperty()
  patientInformation: PatientInformationResponseDto;

  @ApiProperty({ type: String })
  _idMedicalAppointment: Types.ObjectId;

  @ApiProperty()
  date: string;

  @ApiProperty()
  cost: Number;

  @ApiProperty()
  paid?: boolean;

  @ApiProperty()
  state: boolean;
}
