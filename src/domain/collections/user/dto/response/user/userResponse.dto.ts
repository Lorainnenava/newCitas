import { ApiProperty } from '@nestjs/swagger';
import { Document, Types } from 'mongoose';
import { DocumentInfoResponseDto } from '../document/documentInfoResponse.dto';

/**
 * Class UserResponseDto
 */
export class UserResponseDto extends Document {
  @ApiProperty({ type: String })
  _id: Types.ObjectId;

  @ApiProperty()
  name: string;

  @ApiProperty()
  documentInfo: DocumentInfoResponseDto;

  @ApiProperty()
  mobileNumber: number;

  @ApiProperty()
  email: string;

  @ApiProperty()
  password: string;

  @ApiProperty()
  role: string;
}
