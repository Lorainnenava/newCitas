import { ApiProperty } from '@nestjs/swagger';
import { DocumentInfoResponseDto } from '../../../user/dto/response/document/documentInfoResponse.dto';

/**
 * Class DoctorResponseDto
 */
export class DoctorResponseDto {
  @ApiProperty()
  name: string;

  @ApiProperty()
  documentInfo: DocumentInfoResponseDto;

  @ApiProperty()
  specialty: string;
}
