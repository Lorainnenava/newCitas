import { Public } from '../../../utils';
import { ApiTags } from '@nestjs/swagger';
import { DoctorService } from '../../../application/doctor/doctor.service';
import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { DoctorRequestDto } from '../../../domain/collections/doctors/dto/request/doctorRequest.dto';
import { DoctorResponseDto } from '../../../domain/collections/doctors/dto/response/doctorResponse.dto';

@ApiTags('Doctor')
@Controller('Doctor')
export class DoctorController {
  constructor(private readonly doctorService: DoctorService) {}

  /**
   * create
   * @param request
   * @returns
   */
  @Public()
  @Post('/create')
  async create(@Body() request: DoctorRequestDto): Promise<DoctorResponseDto> {
    return this.doctorService.create(request);
  }

  /**
   * getAll doctors
   * @returns
   */
  @Public()
  @Get('/GetAll')
  async getAll(): Promise<DoctorResponseDto[]> {
    return this.doctorService.getAll();
  }

  /**
   * delete doctor
   * @param _id
   * @returns
   */
  @Public()
  @Delete('/Delete/:_id')
  async delete(@Param('_id') _id: string): Promise<DoctorResponseDto> {
    return this.doctorService.delete(_id);
  }
}
