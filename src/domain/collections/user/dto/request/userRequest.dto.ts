import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString, IsInt, Length } from 'class-validator';

/**
 * Class UserRequestDto
 */
export class UserRequestDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  name: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  _idtypeOfDocument: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsInt()
  identification?: number;

  @ApiProperty()
  @IsNotEmpty()
  @IsInt()
  mobileNumber: number;

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
  role: string;
}
