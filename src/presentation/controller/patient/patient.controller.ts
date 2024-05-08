import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { PatientCreateService } from 'src/services/patient/create/patientCreate.service';
import { PatientDeleteService } from 'src/services/patient/delete/patientDelete.service';
import { PatientFindByIdService } from 'src/services/patient/findById/patientFindById.service';
import { PatientsGetAllService } from 'src/services/patient/getAll/patientsGetAll.service';
import { PatientUpdateService } from 'src/services/patient/update/patientUpdate.service';
import { PatientRequestDto } from '../../../domain/entities/patient/dto/request/patient/patientRequest.dto';
import { PatientResponseDto } from '../../../domain/entities/patient/dto/response/patient/patientResponse.dto';

@ApiTags('Patient')
@Controller('patient')
export class PatientController {
  constructor(
    private readonly patientCreateService: PatientCreateService,
    private readonly patientDeleteService: PatientDeleteService,
    private readonly patientUpdateService: PatientUpdateService,
    private readonly patientsGetAllService: PatientsGetAllService,
    private readonly patientFindByIdService: PatientFindByIdService,
  ) {}

  /**
   * create patient
   * @param request
   * @returns
   */
  @ApiBearerAuth('token')
  @Post('/create')
  async create(
    @Body() requestPatient: PatientRequestDto,
  ): Promise<PatientResponseDto> {
    return this.patientCreateService.create(requestPatient);
  }

  /**
   * update patient
   * @param request
   * @returns
   */
  @ApiBearerAuth('token')
  @Put('/update')
  async update(
    @Body() request: PatientRequestDto,
  ): Promise<PatientResponseDto> {
    return this.patientUpdateService.update(request);
  }

  /**
   * findById patient
   * @param _id
   * @returns
   */
  @ApiBearerAuth('token')
  @Post('/:_id')
  async findById(@Param('_id') _id: string): Promise<PatientResponseDto> {
    return this.patientFindByIdService.findById(_id);
  }

  /**
   * getAll patient
   * @returns
   */
  @ApiBearerAuth('token')
  @Get('/getAll')
  async getAll(): Promise<PatientResponseDto[]> {
    return this.patientsGetAllService.getAll();
  }

  /**
   * delete patient
   * @param _id
   * @returns
   */
  @ApiBearerAuth('token')
  @Delete('/delete/:_id')
  async delete(@Param('_id') _id: string): Promise<PatientResponseDto> {
    return this.patientDeleteService.delete(_id);
  }
}
