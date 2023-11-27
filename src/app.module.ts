import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { APP_PIPE, APP_FILTER } from '@nestjs/core';
import { ValidationPipe } from './utils/validation/validation.pipe';
import { HttpExceptionFilter } from './utils/filters/http-exception.filter';
import { UserModule } from './infrastructure/module/user/user.module';
import { SignInModule } from './infrastructure/module/signIn/signIn.module';
import { DoctorModule } from './infrastructure/module/doctor/doctor.module';
import { PatientModule } from './infrastructure/module/patient/patient.module';
import { SessionModule } from './infrastructure/module/session/session.module';
import { SpecialtyModule } from './infrastructure/module/specialty/specialty.module';
import { TypeOfDocumentModule } from './infrastructure/module/typeOfDocument/typeOfDocument.module';
import { MedicalAppointmentModule } from './infrastructure/module/medicalAppointment/medicalAppointment.module';
import { MedicalHistoryModule } from './infrastructure/module/medicalHistory/medicalHistory.module';
import { RolesModule } from './infrastructure/module/roles/roles.module';
import { InvoiceModule } from './infrastructure/module/invoices/invoices.module';
import { MedicalReportModule } from './infrastructure/module/medicalReport/medicalReport.module';
import { ModulesModule } from './infrastructure/module/modules/modules.module';
import { ScheduleModule } from './infrastructure/module/schedule/schedule.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
    MongooseModule.forRoot(`${process.env.MONGODB_URI}`), // connection dataBase
    UserModule,
    SessionModule,
    SignInModule,
    PatientModule,
    TypeOfDocumentModule,
    DoctorModule,
    SpecialtyModule,
    MedicalAppointmentModule,
    MedicalHistoryModule,
    MedicalReportModule,
    ScheduleModule,
    RolesModule,
    ModulesModule,
    InvoiceModule,
  ],
  controllers: [],
  providers: [
    {
      provide: APP_PIPE,
      useClass: ValidationPipe,
    },
    {
      provide: APP_FILTER,
      useClass: HttpExceptionFilter,
    },
  ],
})
export class AppModule {}
