import { IsOptional } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { AddressResponseDto } from '../address/addressResponse.dto';
import { DocumentInfoResponseDto } from '../../../user/response/document/documentInfoResponse.dto';
import { Types } from 'mongoose';

/**
 * Class PatientResponseDto
 */
export class PatientResponseDto {
  @ApiProperty()
  _id?: Types.ObjectId;

  @ApiProperty()
  firstName: string;

  @ApiProperty()
  @IsOptional()
  secondName: string;

  @ApiProperty()
  firstLastName: string;

  @ApiProperty()
  @IsOptional()
  secondLastName: string;

  @ApiProperty()
  dateOfBirth: string;

  @ApiProperty()
  @IsOptional()
  placeOfBirth: string;

  @ApiProperty()
  gender: string;

  @ApiProperty()
  age: number;

  @ApiProperty()
  documentInfo: DocumentInfoResponseDto;

  @ApiProperty()
  email: string;

  @ApiProperty()
  mobileNumber: number;

  @ApiProperty()
  @IsOptional()
  address: AddressResponseDto;

  @ApiProperty()
  regimen: string;

  @ApiProperty()
  state: boolean;
}
