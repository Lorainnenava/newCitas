import { ApiProperty } from '@nestjs/swagger';
import { ModuleResponseDto } from '../../../module/dto/response/module/moduleResponse.dto';

export class PermissionResponseDto {
  @ApiProperty()
  role: string;

  @ApiProperty()
  modules: ModuleResponseDto;
}
