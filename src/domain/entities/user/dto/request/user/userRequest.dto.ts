import { ApiProperty } from '@nestjs/swagger';
import {
  IsBoolean,
  IsEmail,
  IsNotEmpty,
  IsObject,
  IsOptional,
  IsString,
  Length,
} from 'class-validator';
import { DocumentInfoRequestDto } from '../document/documentInfoRequest.dto';

/**
 * Class UserRequestDto
 */
export class UserRequestDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsObject()
  documentInfo: DocumentInfoRequestDto;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  @Length(0, 10)
  @IsOptional()
  password?: string;

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
