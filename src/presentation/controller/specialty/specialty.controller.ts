import { Public } from '../../../utils';
import { ApiTags } from '@nestjs/swagger';
import { Controller, Post, Body, Delete, Param, Get } from '@nestjs/common';
import { SpecialtiesGetAllService } from '../../../application/services/specialty/specialtiesGetAll.service';
import { SpecialtyDeleteService } from './../../../application/services/specialty/specialtyDelete.service';
import { SpecialtyCreateService } from './../../../application/services/specialty/specialtyCreate.service';
import { SpecialtyRequestDto } from '../../../domain/dtos/specialty/request/specialtyRequest.dto';
import { SpecialtyResponseDto } from '../../../domain/dtos/specialty/response/specialtyResponse.dto';

@ApiTags('Specialty')
@Controller('specialty')
export class SpecialtyController {
  constructor(
    private readonly specialtyCreateService: SpecialtyCreateService,
    private readonly specialtyDeleteService: SpecialtyDeleteService,
    private readonly specialtiesGetAllService: SpecialtiesGetAllService,
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
   * getAll specialties
   * @returns
   */
  @Public()
  @Get('/getAll')
  async getAll(): Promise<SpecialtyResponseDto[]> {
    return this.specialtiesGetAllService.getAll();
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
