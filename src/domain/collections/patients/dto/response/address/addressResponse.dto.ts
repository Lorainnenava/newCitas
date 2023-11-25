import { ApiProperty } from '@nestjs/swagger';

/**
 * Class AddressResponseDto
 */
export class AddressResponseDto {
  @ApiProperty()
  address: string;

  @ApiProperty()
  placeOfResidence: string;
}
