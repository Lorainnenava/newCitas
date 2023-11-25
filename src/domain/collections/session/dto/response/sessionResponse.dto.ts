import { Document, Types } from 'mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { UserResponseDto } from '../../../user/dto/response/user/userResponse.dto';

/**
 * Class SessionResponseDto
 */
export class SessionResponseDto extends Document {
  @ApiProperty({ type: String })
  _id?: Types.ObjectId;

  @ApiProperty()
  email: string;

  @ApiProperty()
  password: string;

  @ApiProperty()
  token: string;

  @ApiProperty()
  userInfo: UserResponseDto;
}
