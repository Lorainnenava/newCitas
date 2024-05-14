import { ApiProperty } from '@nestjs/swagger';
import { Types } from 'mongoose';
import { DocumentInfoResponseDto } from '../../../user/dto/response/document/documentInfoResponse.dto';

/**
 * Class DoctorResponseDto
 */
export class DoctorResponseDto {
  @ApiProperty({ type: String })
  _id?: Types.ObjectId;

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
  email: string;

  @ApiProperty()
  specialty: string;
}
