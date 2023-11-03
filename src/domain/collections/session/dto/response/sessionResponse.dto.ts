import { ApiProperty } from '@nestjs/swagger';
import { Document, Types } from 'mongoose';

/**
 * class SessionDto
 */
export class SessionResponseDto extends Document {
  @ApiProperty()
  email: string;

  @ApiProperty()
  password: string;

  @ApiProperty()
  token: string;

  @ApiProperty()
  role: string;

  @ApiProperty({ type: String })
  _idUser: Types.ObjectId;
}
