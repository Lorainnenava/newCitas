import { ApiProperty } from '@nestjs/swagger';
import { PatientInformationResponseDto } from '../../invoice/response/patientInformation/patientResponse.dto';

export class MedicalRequestResponseDto {
  @ApiProperty()
  informationPatient?: PatientInformationResponseDto;

  @ApiProperty()
  specialty: string;
}
