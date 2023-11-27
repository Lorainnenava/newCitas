import { Request } from 'express';
import { RequestUser } from '../../../utils/types';
import { Controller, Post, Req } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { ScheduleService } from '../../../application/medicalAppointment/schedule/schedule.service';
import { MedicalAppointmentResponseDto } from '../../../domain/collections/medicalAppointments/dto/response/medicalAppointment/medicalAppointmentResponse.dto';

@ApiTags('Schedule')
@Controller('Schedule')
export class ScheduleController {
  constructor(private readonly scheduleService: ScheduleService) {}

  /**
   * create
   * @param request
   * @returns
   */
  @ApiBearerAuth('token')
  @Post('/filterByDay')
  async filterByDay(
    @Req() request: Request,
  ): Promise<MedicalAppointmentResponseDto[]> {
    const user = request['user'] as RequestUser;
    return this.scheduleService.filterByDay(user);
  }

  /**
   * futureAppointments
   * @returns
   */
  @ApiBearerAuth('token')
  @Post('/futureAppointments')
  async futureAppointments(
    @Req() request: Request,
  ): Promise<MedicalAppointmentResponseDto[]> {
    const user = request['user'] as RequestUser;
    return this.scheduleService.futureAppointments(user);
  }

  /**
   * cancelledAppointments
   * @param _id
   * @returns
   */
  @ApiBearerAuth('token')
  @Post('/cancelledAppointments')
  async cancelledAppointments(
    @Req() request: Request,
  ): Promise<MedicalAppointmentResponseDto[]> {
    const user = request['user'] as RequestUser;
    return this.scheduleService.cancelledAppointments(user);
  }

  /**
   * appointmentHistory
   * @param _id
   * @returns
   */
  @ApiBearerAuth('token')
  @Post('/appointmentHistory')
  async appointmentHistory(
    @Req() request: Request,
  ): Promise<MedicalAppointmentResponseDto[]> {
    const user = request['user'] as RequestUser;
    return this.scheduleService.appointmentHistory(user);
  }
}
