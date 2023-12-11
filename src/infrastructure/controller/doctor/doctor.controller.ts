import { Roles } from '../../../utils/roles/roles';
import { Role } from '../../../utils/roles/role.enum';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { DoctorService } from '../../../application/doctor/doctor.service';
import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { DoctorRequestDto } from '../../../domain/collections/doctors/dto/request/doctorRequest.dto';
import { DoctorResponseDto } from '../../../domain/collections/doctors/dto/response/doctorResponse.dto';

@ApiTags('Doctor')
@Controller('Doctor')
export class DoctorController {
  constructor(private readonly doctorService: DoctorService) { }

  /**
   * create
   * @param request
   * @returns
   */
  @ApiBearerAuth('token')
  @Post('/create')
  @Roles(Role.ADMIN)
  async create(@Body() request: DoctorRequestDto): Promise<DoctorResponseDto> {
    return this.doctorService.create(request);
  }

  /**
   * getAll doctors
   * @returns
   */
  @ApiBearerAuth('token')
  @Get('/GetAll')
  @Roles(Role.ADMIN)
  async getAll(): Promise<DoctorResponseDto[]> {
    return this.doctorService.getAll();
  }

  /**
   * findOne doctors
   * @returns
   */
  @ApiBearerAuth('token')
  @Post('/FindOne/:documentNumber')
  @Roles(Role.ADMIN)
  async findOne(@Param('documentNumber') documentNumber: number): Promise<DoctorResponseDto> {
    return this.doctorService.findOne(documentNumber);
  }

  /**
   * delete doctor
   * @param _id
   * @returns
   */
  @ApiBearerAuth('token')
  @Delete('/Delete/:_id')
  @Roles(Role.ADMIN)
  async delete(@Param('_id') _id: string): Promise<DoctorResponseDto> {
    return this.doctorService.delete(_id);
  }
}
