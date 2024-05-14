import {
  IsInt,
  IsString,
  IsObject,
  IsBoolean,
  IsNotEmpty,
  IsOptional,
  IsDateString,
  IsEmail,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { AddressRequestDto } from '../address/addressRequest.dto';
import { Types } from 'mongoose';
import { DocumentInfoRequestDto } from '../../../../user/dto/request/document/documentInfoRequest.dto';

/**
 * Class PatientRequestDto
 */
export class PatientRequestDto {
  @ApiProperty()
  _id?: Types.ObjectId;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  firstName: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  @IsNotEmpty()
  secondName?: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  firstLastName: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  @IsNotEmpty()
  secondLastName?: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsObject()
  documentInfo: DocumentInfoRequestDto;

  @ApiProperty()
  @IsDateString()
  @IsNotEmpty()
  dateOfBirth: Date;

  @ApiProperty()
  @IsString()
  @IsOptional()
  @IsNotEmpty()
  placeOfBirth?: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  @IsOptional()
  gender: string;

  @ApiProperty()
  @IsInt()
  @IsNotEmpty()
  age: number;

  @ApiProperty()
  @IsInt()
  @IsNotEmpty()
  @IsOptional()
  mobileNumber: number;

  @ApiProperty()
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsObject()
  @IsOptional()
  address?: AddressRequestDto;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  @IsOptional()
  regimen: string;

  @ApiProperty()
  @IsBoolean()
  @IsOptional()
  state?: boolean;
}
