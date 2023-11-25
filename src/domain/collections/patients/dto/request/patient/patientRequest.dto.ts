import { ApiProperty } from '@nestjs/swagger';
import {
  IsInt,
  IsString,
  IsObject,
  IsBoolean,
  IsNotEmpty,
  IsOptional,
  IsDateString,
} from 'class-validator';
import { DocumentInfoRequestDto } from '../../../../user/dto/request/document/documentInfoRequest.dto';
import { AddressRequestDto } from '../address/addressRequest.dto';

/**
 * Class PatientRequestDto
 */
export class PatientRequestDto {
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
  firstSurname: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  @IsNotEmpty()
  secondSurname?: string;

  @ApiProperty()
  @IsDateString()
  @IsNotEmpty()
  dateOfBirth: Date;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  placeOfBirth: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  gender: string;

  @ApiProperty()
  @IsInt()
  @IsNotEmpty()
  age: number;

  @ApiProperty()
  @IsNotEmpty()
  @IsObject()
  documentInfo: DocumentInfoRequestDto;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  email: string;

  @ApiProperty()
  @IsInt()
  @IsNotEmpty()
  phoneNumber: number;

  @ApiProperty()
  @IsString()
  @IsObject()
  address: AddressRequestDto;

  @ApiProperty()
  @IsBoolean()
  state: boolean;
}
