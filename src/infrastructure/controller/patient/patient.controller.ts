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
import { PatientService } from '../../../application/patient/patient.service';
import { PatientRequestDto } from '../../../domain/collections/patients/dto/request/patient/patientRequest.dto';
import { PatientResponseDto } from '../../../domain/collections/patients/dto/response/patient/patientResponse.dto';

@ApiTags('Patient')
@Controller('patient')
export class PatientController {
  constructor(private readonly patientDocumentService: PatientService) {}

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
    return this.patientDocumentService.create(requestPatient);
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
    return this.patientDocumentService.update(request, _id);
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
    return this.patientDocumentService.findById(_id);
  }

  /**
   * getAll patient
   * @returns
   */
  @ApiBearerAuth('token')
  @Get('/getAll')
  @Roles(Role.ADMIN)
  async getAll(): Promise<PatientResponseDto[]> {
    return this.patientDocumentService.getAll();
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
    return this.patientDocumentService.delete(_id);
  }
}
