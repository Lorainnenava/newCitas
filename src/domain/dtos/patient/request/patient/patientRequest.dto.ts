import {
  IsInt,
  IsString,
  IsObject,
  IsBoolean,
  IsNotEmpty,
  IsOptional,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { AddressRequestDto } from '../address/addressRequest.dto';
import { DocumentInfoRequestDto } from '../../../user/request/document/documentInfoRequest.dto';
import { Types } from 'mongoose';

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
  @IsString()
  @IsNotEmpty()
  dateOfBirth: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  @IsNotEmpty()
  placeOfBirth?: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  gender: string;

  @ApiProperty()
  @IsInt()
  @IsNotEmpty()
  age: number;

  @ApiProperty()
  @IsInt()
  @IsNotEmpty()
  mobileNumber: number;

  @ApiProperty()
  @IsString()
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
  regimen: string;

  @ApiProperty()
  @IsBoolean()
  @IsOptional()
  state?: boolean;
}
