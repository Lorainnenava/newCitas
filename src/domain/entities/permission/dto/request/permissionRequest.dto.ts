import { ApiProperty } from '@nestjs/swagger';
import { IsArray, IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { ModuleRequestDto } from '../../../module/dto/request/module/moduleRequest.dto';

export class PermissionRequestDto {
  @ApiProperty()
  @IsString()
  @IsOptional()
  _id: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  role: string;

  @ApiProperty({ type: [ModuleRequestDto] })
  @IsArray()
  @IsNotEmpty()
  modules: ModuleRequestDto;
}
