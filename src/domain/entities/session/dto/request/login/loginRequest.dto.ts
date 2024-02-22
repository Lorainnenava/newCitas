import { ApiProperty } from '@nestjs/swagger';
import { Length, IsEmail, IsString, IsNotEmpty } from 'class-validator';

/**
 * Class LoginRequestDto
 */
export class LoginRequestDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  @Length(0, 10)
  password: string;
}
