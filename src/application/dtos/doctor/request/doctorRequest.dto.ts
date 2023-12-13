import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsObject, IsOptional, IsString } from 'class-validator';
import { DocumentInfoRequestDto } from '../../user/request/document/documentInfoRequest.dto';

/**
 * Class DoctorRequestDto
 */
export class DoctorRequestDto {
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
  @IsNotEmpty()
  @IsString()
  specialty: string;
}
