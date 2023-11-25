import { ApiProperty } from '@nestjs/swagger';
import { DocumentInfoRequestDto } from '../../../../user/dto/request/document/documentInfoRequest.dto';

/**
 * Class userInfoResponseDto
 */
export class userInfoResponseDto {
  @ApiProperty()
  name: string;

  @ApiProperty()
  documentInfo: DocumentInfoRequestDto;
}
