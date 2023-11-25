import { Public } from '../../../utils';
import { ApiTags } from '@nestjs/swagger';
import { Controller, Post, Body, Delete, Param, Get } from '@nestjs/common';
import { SpecialtyService } from '../../../application/specialty/specialty.service';
import { SpecialtyRequestDto } from '../../../domain/collections/specialty/dto/request/specialtiesRequest.dto';
import { SpecialtyResponseDto } from '../../../domain/collections/specialty/dto/response/specialtiesResponse.dto';

@ApiTags('Specialty')
@Controller('Specialty')
export class SpecialtyController {
  constructor(private readonly specialtyService: SpecialtyService) {}

  /**
   * create specialty
   * @param request
   * @returns
   */
  @Public()
  @Post('/create')
  async create(
    @Body() request: SpecialtyRequestDto,
  ): Promise<SpecialtyResponseDto> {
    return this.specialtyService.create(request);
  }

  /**
   * getAll specialty
   * @returns
   */
  @Public()
  @Get('/GetAll')
  async getAll(): Promise<SpecialtyResponseDto[]> {
    return this.specialtyService.getAll();
  }

  /**
   * delete specialty
   * @param _id
   * @returns
   */
  @Public()
  @Delete('/Delete/:_id')
  async delete(@Param('_id') _id: string): Promise<SpecialtyResponseDto> {
    return await this.specialtyService.delete(_id);
  }
}
