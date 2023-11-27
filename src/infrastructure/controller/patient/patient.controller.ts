import { Request } from 'express';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
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
import { PatientService } from '../../../application/patient/patient.service';
import { PatientRequestDto } from '../../../domain/collections/patients/dto/request/patient/patientRequest.dto';
import { PatientResponseDto } from '../../../domain/collections/patients/dto/response/patient/patientResponse.dto';
import { RequestUser } from '../../../utils/types';

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
  async create(
    @Body() requestPatient: PatientRequestDto,
    @Req() request: Request,
  ): Promise<PatientResponseDto> {
    const user = request['user'] as RequestUser;
    return this.patientDocumentService.create(requestPatient, user);
  }

  /**
   * update patient
   * @param request
   * @param _id
   * @returns
   */
  @ApiBearerAuth('token')
  @Put('/update/:_id')
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
  async findById(@Param('_id') _id: string): Promise<PatientResponseDto> {
    return this.patientDocumentService.findById(_id);
  }

  /**
   * getAll patient
   * @returns
   */
  @ApiBearerAuth('token')
  @Get('/getAll')
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
  async delete(@Param('_id') _id: string): Promise<boolean> {
    return this.patientDocumentService.delete(_id);
  }
}
