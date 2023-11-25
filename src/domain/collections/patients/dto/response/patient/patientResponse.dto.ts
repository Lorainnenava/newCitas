import { ApiProperty } from '@nestjs/swagger';
import { DocumentInfoResponseDto } from '../../../../user/dto/response/document/documentInfoResponse.dto';
import { IsOptional } from 'class-validator';
import { AddressResponseDto } from '../address/addressResponse.dto';

/**
 * Class PatientResponseDto
 */
export class PatientResponseDto {
  @ApiProperty()
  firstName: string;

  @ApiProperty()
  @IsOptional()
  secondName?: string;

  @ApiProperty()
  firstSurname: string;

  @ApiProperty()
  @IsOptional()
  secondSurname?: string;

  @ApiProperty()
  dateOfBirth: Date;

  @ApiProperty()
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
  phoneNumber: number;

  @ApiProperty()
  address: AddressResponseDto;

  @ApiProperty()
  state: boolean;
}
