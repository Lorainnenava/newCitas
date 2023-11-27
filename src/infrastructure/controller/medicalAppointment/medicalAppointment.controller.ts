import { Request } from 'express';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import {
  Req,
  Get,
  Put,
  Body,
  Post,
  Param,
  Delete,
  Controller,
} from '@nestjs/common';
import { MedicalAppointmentService } from '../../../application/medicalAppointment/medicalAppointment/medicalAppointment.service';
import { MedicalAppointmentRequestDto } from '../../../domain/collections/medicalAppointments/dto/request/medicalAppointment/medicalAppointmentRequest.dto';
import { MedicalAppointmentResponseDto } from '../../../domain/collections/medicalAppointments/dto/response/medicalAppointment/medicalAppointmentResponse.dto';
import { RequestUser } from '../../../utils/types';

@ApiTags('MedicalAppointment')
@Controller('medicalAppointment')
export class MedicalAppointmentController {
  constructor(
    private readonly medicalAppointmentService: MedicalAppointmentService,
  ) {}

  /**
   * create medicalAppointment
   * @param requestMedicalAppointment
   * @param request
   * @returns
   */
  @ApiBearerAuth('token')
  @Post('/create')
  async create(
    @Body() requestMedicalAppointment: MedicalAppointmentRequestDto,
    @Req() request: Request,
  ): Promise<object> {
    const user = request['user'] as RequestUser;
    return this.medicalAppointmentService.create(
      requestMedicalAppointment,
      user,
    );
  }

  /**
   * getAll medicalAppointment
   * @returns
   */
  @ApiBearerAuth('token')
  @Get('/getAll')
  async getAll(): Promise<MedicalAppointmentResponseDto[]> {
    return this.medicalAppointmentService.getAll();
  }

  /**
   * getAllById medicalAppointment
   * @param request
   * @returns
   */
  @ApiBearerAuth('token')
  @Get('/getAllById/:_id')
  async getAllById(
    @Req() request: Request,
  ): Promise<MedicalAppointmentResponseDto[]> {
    const user = request['user'] as RequestUser;
    return this.medicalAppointmentService.getAllById(user);
  }

  /**
   * update medicalAppointment
   * @param request
   * @param _id
   * @returns
   */
  @ApiBearerAuth('token')
  @Put('/update/:_id')
  async update(
    @Body() request: MedicalAppointmentRequestDto,
    @Param('_id') _id: string,
  ): Promise<MedicalAppointmentResponseDto> {
    return this.medicalAppointmentService.update(request, _id);
  }

  /**
   * delete medicalAppointment
   * @param _id
   * @returns
   */
  @ApiBearerAuth('token')
  @Delete('/delete/:_id')
  async delete(@Param('_id') _id: string): Promise<object> {
    return this.medicalAppointmentService.delete(_id);
  }
}
