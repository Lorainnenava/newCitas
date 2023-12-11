import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { APP_GUARD, APP_PIPE } from '@nestjs/core';
import { RolesGuard } from './utils/roles/roles.guard';
import { Module, ValidationPipe } from '@nestjs/common';
import { UserModule } from './infrastructure/module/user/user.module';
import { RolesModule } from './infrastructure/module/roles/roles.module';
import { SignInModule } from './infrastructure/module/signIn/signIn.module';
import { DoctorModule } from './infrastructure/module/doctor/doctor.module';
import { PatientModule } from './infrastructure/module/patient/patient.module';
import { ModulesModule } from './infrastructure/module/modules/modules.module';
import { SessionModule } from './infrastructure/module/session/session.module';
import { InvoiceModule } from './infrastructure/module/invoices/invoices.module';
import { ScheduleModule } from './infrastructure/module/schedule/schedule.module';
import { SpecialtyModule } from './infrastructure/module/specialty/specialty.module';
import { WelcomeEmailModule } from './infrastructure/module/welcomeEmail/welcomeEmail.module';
import { MedicalReportModule } from './infrastructure/module/medicalReport/medicalReport.module';
import { TypeOfDocumentModule } from './infrastructure/module/typeOfDocument/typeOfDocument.module';
import { MedicalHistoryModule } from './infrastructure/module/medicalHistory/medicalHistory.module';
import { ConfirmationEmailModule } from './infrastructure/module/confirmationEmail/confirmationEmail.module';
import { MedicalAppointmentModule } from './infrastructure/module/medicalAppointment/medicalAppointment.module';
import { ConfirmationMedicalAppointmentModule } from './infrastructure/module/confirmationMedicalAppointment/confirmationMedicalAppointment.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
    MongooseModule.forRoot(`${process.env.MONGODB_URI}`), // connection dataBase
    UserModule,
    DoctorModule,
    SessionModule,
    SignInModule,
    PatientModule,
    TypeOfDocumentModule,
    SpecialtyModule,
    InvoiceModule,
    MedicalAppointmentModule,
    MedicalHistoryModule,
    MedicalReportModule,
    ScheduleModule,
    RolesModule,
    ModulesModule,
    WelcomeEmailModule,
    ConfirmationEmailModule,
    ConfirmationMedicalAppointmentModule,
  ],
  controllers: [],
  providers: [
    {
      provide: APP_PIPE,
      useClass: ValidationPipe,
    },
    {
      provide: APP_GUARD,
      useClass: RolesGuard,
    },
  ],
})
export class AppModule {}
