import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { APP_GUARD, APP_PIPE } from '@nestjs/core';
import { RolesGuard } from './utils/roles/roles.guard';
import { ValidationPipe } from './utils/validation/validation.pipe';
import { UserModule } from './presentation/module/user/user.module';
import { RolModule } from './presentation/module/rol/rol.module';
import { SignInModule } from './presentation/module/signIn/signIn.module';
import { DoctorModule } from './presentation/module/doctor/doctor.module';
import { PatientModule } from './presentation/module/patient/patient.module';
import { ModuleModule } from './presentation/module/module/module.module';
import { SessionModule } from './presentation/module/session/session.module';
import { InvoiceModule } from './presentation/module/invoice/invoice.module';
import { SpecialtyModule } from './presentation/module/specialty/specialty.module';
import { PermissionModule } from './presentation/module/permission/permission.module';
import { WelcomeEmailModule } from './presentation/module/welcomeEmail/welcomeEmail.module';
import { MedicalReportModule } from './presentation/module/medicalReport/medicalReport.module';
import { TypeOfDocumentModule } from './presentation/module/typeOfDocument/typeOfDocument.module';
import { MedicalHistoryModule } from './presentation/module/medicalHistory/medicalHistory.module';
import { ConfirmationEmailModule } from './presentation/module/confirmationEmail/confirmationEmail.module';
import { MedicalAppointmentModule } from './presentation/module/medicalAppointment/medicalAppointment.module';
import { ConfirmationMedicalAppointmentModule } from './presentation/module/confirmationMedicalAppointment/confirmationMedicalAppointment.module';

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
    RolModule,
    ModuleModule,
    WelcomeEmailModule,
    ConfirmationEmailModule,
    ConfirmationMedicalAppointmentModule,
    PermissionModule,
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
