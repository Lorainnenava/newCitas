import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsObject, IsString } from 'class-validator';
import { DocumentInfoRequestDto } from '../../../../user/dto/request/document/documentInfoRequest.dto';

/**
 * Class userInfoRequestDto
 */
export class userInfoRequestDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  name: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsObject()
  documentInfo: DocumentInfoRequestDto;
}
