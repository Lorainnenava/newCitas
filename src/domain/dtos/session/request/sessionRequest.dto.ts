import { ApiProperty } from '@nestjs/swagger';
import {
  Length,
  IsEmail,
  IsObject,
  IsString,
  IsNotEmpty,
} from 'class-validator';
import { UserRequestDto } from '../../user/request/user/userRequest.dto';

/**
 * Class SessionRequestDto
 */
export class SessionRequestDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  @Length(0, 10)
  password: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  token: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsObject()
  userInfo: UserRequestDto;
}
