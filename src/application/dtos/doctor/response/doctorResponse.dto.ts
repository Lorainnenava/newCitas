import { ApiProperty } from '@nestjs/swagger';
import { DocumentInfoResponseDto } from '../../user/response/document/documentInfoResponse.dto';

/**
 * Class DoctorResponseDto
 */
export class DoctorResponseDto {
  @ApiProperty()
  firstName: string;

  @ApiProperty()
  secondName: string;

  @ApiProperty()
  firstLastName: string;

  @ApiProperty()
  secondLastName: string;

  @ApiProperty()
  documentInfo: DocumentInfoResponseDto;

  @ApiProperty()
  specialty: string;
}
