import { ApiProperty } from '@nestjs/swagger';
import { Length, IsEmail, IsString, IsNotEmpty } from 'class-validator';

/**
 * Class SignInRequestDto
 */
export class SignInRequestDto {
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
