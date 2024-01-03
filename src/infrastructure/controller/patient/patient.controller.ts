import {
  Put,
  Get,
  Req,
  Post,
  Body,
  Param,
  Delete,
  Controller,
} from '@nestjs/common';
import { Roles } from '../../../utils/roles/roles';
import { Role } from '../../../utils/roles/role.enum';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { PatientDeleteService } from '../../../application/services/patient/patientDelete.service';
import { PatientUpdateService } from '../../../application/services/patient/patientUpdate.service';
import { PatientGetAllService } from '../../../application/services/patient/patientGetAll.service';
import { PatientCreateService } from '../../../application/services/patient/patientCreate.service';
import { PatientFindByIdService } from '../../../application/services/patient/patientFindById.service';
import { PatientRequestDto } from '../../../application/dtos/patients/request/patient/patientRequest.dto';
import { PatientResponseDto } from '../../../application/dtos/patients/response/patient/patientResponse.dto';

@ApiTags('Patient')
@Controller('patient')
export class PatientController {
  constructor(
    private readonly patientCreateService: PatientCreateService,
    private readonly patientDeleteService: PatientDeleteService,
    private readonly patientUpdateService: PatientUpdateService,
    private readonly patientGetAllService: PatientGetAllService,
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
   * @param _id
   * @returns
   */
  @ApiBearerAuth('token')
  @Put('/update/:_id')
  @Roles(Role.ADMIN || Role.PACIENTE)
  async update(
    @Body() request: PatientRequestDto,
    @Param('_id') _id: string,
  ): Promise<PatientResponseDto> {
    return this.patientUpdateService.update(request, _id);
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
    return this.patientGetAllService.getAll();
  }

  /**
   * delete patient
   * @param _id
   * @returns
   */
  @ApiBearerAuth('token')
  @Delete('/delete/:_id')
  @Roles(Role.ADMIN)
  async delete(@Param('_id') _id: string): Promise<boolean> {
    return this.patientDeleteService.delete(_id);
  }
}
