import { ApiProperty } from '@nestjs/swagger';
import {
  IsInt,
  Length,
  IsEmail,
  IsObject,
  IsString,
  IsOptional,
  IsNotEmpty,
} from 'class-validator';
import { DocumentInfoRequestDto } from '../document/documentInfoRequest.dto';

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
  @IsObject()
  documentInfo: DocumentInfoRequestDto;

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
  @IsString()
  @IsOptional()
  role?: string;
}
