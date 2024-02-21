import { ApiProperty } from '@nestjs/swagger';
import { PatientInformationResponseDto } from '../../../invoice/dto/response/patientInformation/patientResponse.dto';

export class MedicalRequestResponseDto {
  @ApiProperty()
  informationPatient?: PatientInformationResponseDto;

  @ApiProperty()
  specialty: string;
}
