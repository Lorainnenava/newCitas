import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString, Length } from 'class-validator';
import { Types } from 'mongoose';

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
  token?: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  role: string;

  @ApiProperty({ type: String })
  @IsNotEmpty()
  @IsString()
  _idUser: Types.ObjectId;
}
