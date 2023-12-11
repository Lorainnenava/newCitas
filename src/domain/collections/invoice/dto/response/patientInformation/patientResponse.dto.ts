import { IsOptional } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { DocumentInfoResponseDto } from '../../../../user/dto/response/document/documentInfoResponse.dto';

export class PatientInformationResponseDto {
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
  gender: string;

  @ApiProperty()
  email: string;

  @ApiProperty()
  age: number;

  @ApiProperty()
  documentInfo: DocumentInfoResponseDto;

  @ApiProperty()
  state: boolean;
}
