import { ApiProperty } from '@nestjs/swagger';
import { Document, Types } from 'mongoose';

/**
 * class UserResponseDto
 */
export class UserResponseDto extends Document {
  @ApiProperty({ type: String })
  _id?: Types.ObjectId;

  @ApiProperty()
  name: string;

  @ApiProperty()
  _idtypeOfDocument: string;

  @ApiProperty()
  identification?: number;

  @ApiProperty()
  mobileNumber: number;

  @ApiProperty()
  email: string;

  @ApiProperty()
  password: string;

  @ApiProperty()
  role: string;
}
