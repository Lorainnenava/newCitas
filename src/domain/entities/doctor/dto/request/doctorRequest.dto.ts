import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsObject, IsOptional, IsString } from 'class-validator';
import { Types } from 'mongoose';
import { DocumentInfoRequestDto } from '../../../user/dto/request/document/documentInfoRequest.dto';

/**
 * Class DoctorRequestDto
 */
export class DoctorRequestDto {
  @ApiProperty({ type: String })
  _id?: Types.ObjectId;

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
