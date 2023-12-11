import { HydratedDocument } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { PatientRequestDto } from '../../patients/dto/request/patient/patientRequest.dto';
import { PatientInformationRequestDto } from '../../invoice/dto/request/patientInformation/patientInformationRequest.dto';

export type medicalRequestDocument = HydratedDocument<MedicalRequest>;

/**
 * Schema MedicalRequest
 */
@Schema({ timestamps: true, collection: 'medicalRequests' })
export class MedicalRequest {
    /**
     * patientInfo
     */
    @Prop({ type: PatientRequestDto })
    informationPatient?: PatientInformationRequestDto;

    /**
     * specialty
     */
    @Prop({ type: String })
    specialty: string
}

export const MedicalRequestSchema = SchemaFactory.createForClass(MedicalRequest);
