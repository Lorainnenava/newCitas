import {
  IsInt,
  IsObject,
  IsString,
  IsBoolean,
  IsNotEmpty,
  IsOptional,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { DocumentInfoRequestDto } from '../../../user/request/document/documentInfoRequest.dto';

export class PatientInformationRequestDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  firstName: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  @IsNotEmpty()
  secondName: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  firstLastName: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  @IsNotEmpty()
  secondLastName: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  gender: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  email: string;

  @ApiProperty()
  @IsInt()
  @IsNotEmpty()
  age: number;

  @ApiProperty()
  @IsNotEmpty()
  @IsObject()
  documentInfo: DocumentInfoRequestDto;

  @ApiProperty()
  @IsBoolean()
  @IsOptional()
  state: boolean;
}
