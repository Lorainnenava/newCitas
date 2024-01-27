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
import { Public } from '../../../utils';
import { DoctorCreateService } from '../../../application/services/doctor/doctorCreate.service';
import { DoctorDeleteService } from '../../../application/services/doctor/doctorDelete.service';
import { DoctorsGetAllService } from '../../../application/services/doctor/doctorsGetAll.service';
import { DoctorUpdateService } from '../../../application/services/doctor/doctorUpdate.service';
import { DoctorFindOneService } from '../../../application/services/doctor/doctorFindOne.service';
import { DoctorRequestDto } from '../../../domain/dtos/doctor/request/doctorRequest.dto';
import { DoctorResponseDto } from '../../../domain/dtos/doctor/response/doctorResponse.dto';

@ApiTags('Doctor')
@Controller('doctor')
export class DoctorController {
  constructor(
    private readonly doctorCreateService: DoctorCreateService,
    private readonly doctorDeleteService: DoctorDeleteService,
    private readonly DoctorsGetAllService: DoctorsGetAllService,
    private readonly DoctorUpdateService: DoctorUpdateService,
    private readonly DoctorFindOneService: DoctorFindOneService,
  ) {}

  /**
   * create
   * @param request
   * @returns
   */
  @Public()
  // @ApiBearerAuth('token')
  @Post('/create')
  async create(@Body() request: DoctorRequestDto): Promise<DoctorResponseDto> {
    return this.doctorCreateService.create(request);
  }

  /**
   * getAll doctors
   * @returns
   */
  @Public()
  @Get('/getAll')
  // @Roles(Role.ADMIN)
  async getAll(): Promise<DoctorResponseDto[]> {
    return this.DoctorsGetAllService.getAll();
  }

  /**
   * findOne doctor
   * @returns
   */
  @Public()
  @Post('/:documentNumber')
  async findOne(
    @Param('documentNumber') documentNumber: number,
  ): Promise<DoctorResponseDto> {
    return this.DoctorFindOneService.findOne(documentNumber);
  }

  /**
   * update doctor
   * @returns
   */
  @Public()
  // @ApiBearerAuth('token')
  @Put('/update')
  // @Roles(Role.ADMIN)
  async update(@Body() request: DoctorRequestDto): Promise<DoctorResponseDto> {
    return this.DoctorUpdateService.update(request);
  }

  /**
   * delete doctor
   * @param _id
   * @returns
   */
  @Public()
  @Delete('/delete/:_id')
  async delete(@Param('_id') _id: string): Promise<DoctorResponseDto> {
    return this.doctorDeleteService.delete(_id);
  }
}
