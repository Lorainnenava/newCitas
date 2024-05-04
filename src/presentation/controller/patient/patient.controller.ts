import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put
} from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { Role } from 'src/shared/guards/roles/role.enum';
import { Roles } from 'src/shared/guards/roles/roles';
import { PatientCreateService } from '../../../application/services/patient/create/patientCreate.service';
import { PatientDeleteService } from '../../../application/services/patient/delete/patientDelete.service';
import { PatientFindByIdService } from '../../../application/services/patient/findById/patientFindById.service';
import { PatientsGetAllService } from '../../../application/services/patient/getAll/patientsGetAll.service';
import { PatientUpdateService } from '../../../application/services/patient/update/patientUpdate.service';
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
  @Roles(Role.ADMIN)
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
  @Roles(Role.ADMIN || Role.PACIENTE)
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
  @Roles(Role.ADMIN || Role.PACIENTE)
  async findById(@Param('_id') _id: string): Promise<PatientResponseDto> {
    return this.patientFindByIdService.findById(_id);
  }

  /**
   * getAll patient
   * @returns
   */
  @ApiBearerAuth('token')
  @Get('/getAll')
  @Roles(Role.ADMIN)
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
  @Roles(Role.ADMIN)
  async delete(@Param('_id') _id: string): Promise<PatientResponseDto> {
    return this.patientDeleteService.delete(_id);
  }
}
