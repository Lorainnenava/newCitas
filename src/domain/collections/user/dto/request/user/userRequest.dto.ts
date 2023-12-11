import { ApiProperty } from '@nestjs/swagger';
import {
  IsInt,
  Length,
  IsEmail,
  IsObject,
  IsString,
  IsOptional,
  IsNotEmpty,
  IsBoolean,
} from 'class-validator';
import { DocumentInfoRequestDto } from '../document/documentInfoRequest.dto';

/**
 * Class UserRequestDto
 */
export class UserRequestDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  firstName: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  @IsOptional()
  secondName: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  firstLastName: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  @IsOptional()
  secondLastName: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsObject()
  documentInfo: DocumentInfoRequestDto;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  dateOfBirth: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  gender: string;

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
  @IsOptional()
  token?: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  role?: string;

  @ApiProperty()
  @IsBoolean()
  @IsOptional()
  state?: boolean;
}
