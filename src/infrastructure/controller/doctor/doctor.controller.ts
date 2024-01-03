import { Roles } from '../../../utils/roles/roles';
import { Role } from '../../../utils/roles/role.enum';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import {
  Get,
  Put,
  Body,
  Post,
  Param,
  Delete,
  Controller,
} from '@nestjs/common';
import { DoctorRequestDto } from '../../../application/dtos/doctor/request/doctorRequest.dto';
import { DoctorCreateService } from '../../../application/services/doctor/doctorCreate.service';
import { DoctorDeleteService } from '../../../application/services/doctor/doctorDelete.service';
import { DoctorGetAllService } from '../../../application/services/doctor/doctorGetAll.service';
import { DoctorUpdateService } from '../../../application/services/doctor/doctorUpdate.service';
import { DoctorResponseDto } from '../../../application/dtos/doctor/response/doctorResponse.dto';
import { DoctorFindOneService } from '../../../application/services/doctor/doctorFindOne.service';

@ApiTags('Doctor')
@Controller('doctor')
export class DoctorController {
  constructor(
    private readonly doctorCreateService: DoctorCreateService,
    private readonly doctorDeleteService: DoctorDeleteService,
    private readonly DoctorGetAllService: DoctorGetAllService,
    private readonly DoctorUpdateService: DoctorUpdateService,
    private readonly DoctorFindOneService: DoctorFindOneService,
  ) {}

  /**
   * create
   * @param request
   * @returns
   */
  @ApiBearerAuth('token')
  @Post('/create')
  @Roles(Role.ADMIN)
  async create(@Body() request: DoctorRequestDto): Promise<DoctorResponseDto> {
    return this.doctorCreateService.create(request);
  }

  /**
   * getAll doctors
   * @returns
   */
  @ApiBearerAuth('token')
  @Get('/getAll')
  @Roles(Role.ADMIN)
  async getAll(): Promise<DoctorResponseDto[]> {
    return this.DoctorGetAllService.getAll();
  }

  /**
   * findOne doctor
   * @returns
   */
  @ApiBearerAuth('token')
  @Post('/:documentNumber')
  @Roles(Role.ADMIN)
  async findOne(
    @Param('documentNumber') documentNumber: number,
  ): Promise<DoctorResponseDto> {
    return this.DoctorFindOneService.findOne(documentNumber);
  }

  /**
   * update doctor
   * @returns
   */
  @ApiBearerAuth('token')
  @Put('/update/:_id')
  @Roles(Role.ADMIN)
  async update(
    @Body() request: DoctorRequestDto,
    @Param('_id') _id: string,
  ): Promise<DoctorResponseDto> {
    return this.DoctorUpdateService.update(request, _id);
  }

  /**
   * delete doctor
   * @param _id
   * @returns
   */
  @ApiBearerAuth('token')
  @Delete('/delete/:_id')
  @Roles(Role.ADMIN)
  async delete(@Param('_id') _id: string): Promise<DoctorResponseDto> {
    return this.doctorDeleteService.delete(_id);
  }
}
