import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsObject, IsString } from 'class-validator';
import { PatientInformationRequestDto } from '../../invoice/request/patientInformation/patientInformationRequest.dto';

export class MedicalRequestRequestDto {
  @ApiProperty()
  @IsObject()
  @IsNotEmpty()
  informationPatient?: PatientInformationRequestDto;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  specialty: string;
}
