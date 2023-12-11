import { Document, Types } from 'mongoose';
import { IsOptional } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { DocumentInfoResponseDto } from '../document/documentInfoResponse.dto';

/**
 * Class UserResponseDto
 */
export class UserResponseDto extends Document {
  @ApiProperty({ type: String })
  _id: Types.ObjectId;

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
  documentInfo: DocumentInfoResponseDto;

  @ApiProperty()
  dateOfBirth: string;

  @ApiProperty()
  gender: string;

  @ApiProperty()
  mobileNumber: number;

  @ApiProperty()
  email: string;

  @ApiProperty()
  password: string;

  @ApiProperty()
  token: string;

  @ApiProperty()
  role: string;

  @ApiProperty()
  state: boolean;
}
