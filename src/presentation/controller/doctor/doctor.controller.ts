import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { DoctorCreateService } from 'src/services/doctor/create/doctorCreate.service';
import { DoctorDeleteService } from 'src/services/doctor/delete/doctorDelete.service';
import { DoctorFindOneService } from 'src/services/doctor/findOne/doctorFindOne.service';
import { DoctorsGetAllService } from 'src/services/doctor/getAll/doctorsGetAll.service';
import { DoctorUpdateService } from 'src/services/doctor/update/doctorUpdate.service';
import { Public } from 'src/shared/guards';
import { DoctorRequestDto } from '../../../domain/entities/doctor/dto/request/doctorRequest.dto';
import { DoctorResponseDto } from '../../../domain/entities/doctor/dto/response/doctorResponse.dto';

@ApiTags('Doctor')
@Controller('doctor')
export class DoctorController {
  constructor(
    private readonly doctorCreateService: DoctorCreateService,
    private readonly doctorDeleteService: DoctorDeleteService,
    private readonly doctorsGetAllService: DoctorsGetAllService,
    private readonly doctorUpdateService: DoctorUpdateService,
    private readonly doctorFindOneService: DoctorFindOneService,
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
    return this.doctorsGetAllService.getAll();
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
    return this.doctorFindOneService.findOne(documentNumber);
  }

  /**
   * update doctor
   * @returns
   */
  @Public()
  // @ApiBearerAuth('token')
  @Put('/update/:_id')
  // @Roles(Role.ADMIN)
  async update(
    @Param('_id') _id: string,
    @Body() request: DoctorRequestDto,
  ): Promise<DoctorResponseDto> {
    return this.doctorUpdateService.update(_id, request);
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
