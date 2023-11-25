import { ApiProperty } from '@nestjs/swagger';
import {
  IsEmail,
  IsNotEmpty,
  IsObject,
  IsString,
  Length,
} from 'class-validator';
import { UserRequestDto } from '../../../user/dto/request/user/userRequest.dto';

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
