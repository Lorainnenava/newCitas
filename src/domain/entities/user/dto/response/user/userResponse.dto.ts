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
  email: string;

  @ApiProperty()
  documentInfo: DocumentInfoResponseDto;

  @ApiProperty()
  password: string;

  @ApiProperty()
  token: string;

  @ApiProperty()
  role: string;

  @ApiProperty()
  state: boolean;
}
