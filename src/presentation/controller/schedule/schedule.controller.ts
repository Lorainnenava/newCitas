import { Request } from 'express';
import { Roles } from '../../../utils/roles/roles';
import { RequestUser } from '../../../utils/types';
import { Role } from '../../../utils/roles/role.enum';
import { Controller, Post, Req } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { ScheduleByDayService } from '../../../application/services/medicalAppointment/schedule/getByDay/scheduleByDay.service';
import { ScheduleByAppointmentHistoryService } from '../../../application/services/medicalAppointment/schedule/getHistory/scheduleByHistory.service';
import { ScheduleByFutureAppointmentsService } from '../../../application/services/medicalAppointment/schedule/getByFuture/scheduleByFuture.service';
import { ScheduleByCancelledAppointmentsService } from '../../../application/services/medicalAppointment/schedule/getByCancelled/scheduleCancelled.service';
import { MedicalAppointmentResponseDto } from '../../../domain/entities/medicalAppointment/dto/response/medicalAppointment/medicalAppointmentResponse.dto';

@ApiTags('Schedule')
@Controller('schedule')
export class ScheduleController {
  constructor(
    private readonly scheduleByDayService: ScheduleByDayService,
    private readonly scheduleByFutureAppointmentsService: ScheduleByFutureAppointmentsService,
    private readonly scheduleByAppointmentHistoryService: ScheduleByAppointmentHistoryService,
    private readonly scheduleByCancelledAppointmentsService: ScheduleByCancelledAppointmentsService,
  ) {}

  /**
   * filterByDay
   * @param request
   * @returns
   */
  @ApiBearerAuth('token')
  @Post('/filterByDay')
  @Roles(Role.DOCTOR)
  async filterByDay(
    @Req() request: Request,
  ): Promise<MedicalAppointmentResponseDto[]> {
    const user = request['user'] as RequestUser;
    return this.scheduleByDayService.filterByDay(user);
  }

  /**
   * futureAppointments
   * @returns
   */
  @ApiBearerAuth('token')
  @Post('/futureAppointments')
  @Roles(Role.DOCTOR)
  async futureAppointments(
    @Req() request: Request,
  ): Promise<MedicalAppointmentResponseDto[]> {
    const user = request['user'] as RequestUser;
    return this.scheduleByFutureAppointmentsService.getFutureAppointments(user);
  }

  /**
   * cancelledAppointments
   * @param _id
   * @returns
   */
  @ApiBearerAuth('token')
  @Post('/cancelledAppointments')
  @Roles(Role.DOCTOR)
  async cancelledAppointments(
    @Req() request: Request,
  ): Promise<MedicalAppointmentResponseDto[]> {
    const user = request['user'] as RequestUser;
    return this.scheduleByCancelledAppointmentsService.getCancelledAppointments(
      user,
    );
  }

  /**
   * appointmentHistory
   * @param _id
   * @returns
   */
  @ApiBearerAuth('token')
  @Post('/appointmentHistory')
  @Roles(Role.DOCTOR)
  async appointmentHistory(
    @Req() request: Request,
  ): Promise<MedicalAppointmentResponseDto[]> {
    const user = request['user'] as RequestUser;
    return this.scheduleByAppointmentHistoryService.getAppointmentHistory(user);
  }
}
