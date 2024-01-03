import { Public } from '../../../utils';
import { ApiTags } from '@nestjs/swagger';
import { Controller, Post, Body, Delete, Param, Get } from '@nestjs/common';
import { SpecialtyRequestDto } from '../../../application/dtos/specialty/request/specialtiesRequest.dto';
import { SpecialtyGetAllService } from './../../../application/services/specialty/specialtyGetAll.service';
import { SpecialtyDeleteService } from './../../../application/services/specialty/specialtyDelete.service';
import { SpecialtyCreateService } from './../../../application/services/specialty/specialtyCreate.service';
import { SpecialtyResponseDto } from '../../../application/dtos/specialty/response/specialtiesResponse.dto';

@ApiTags('Specialty')
@Controller('specialty')
export class SpecialtyController {
  constructor(
    private readonly specialtyCreateService: SpecialtyCreateService,
    private readonly specialtyDeleteService: SpecialtyDeleteService,
    private readonly specialtyGetAllService: SpecialtyGetAllService,
  ) {}

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
    return this.specialtyCreateService.create(request);
  }

  /**
   * getAll specialty
   * @returns
   */
  @Public()
  @Get('/getAll')
  async getAll(): Promise<SpecialtyResponseDto[]> {
    return this.specialtyGetAllService.getAll();
  }

  /**
   * delete specialty
   * @param _id
   * @returns
   */
  @Public()
  @Delete('/delete/:_id')
  async delete(@Param('_id') _id: string): Promise<SpecialtyResponseDto> {
    return await this.specialtyDeleteService.delete(_id);
  }
}
