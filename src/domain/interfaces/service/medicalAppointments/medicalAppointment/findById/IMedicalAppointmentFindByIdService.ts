export interface IMedicalAppointmentFindByIdService {
  /**
   * findById medicalAppointment
   * @param _id
   */
  findById(_id: string): Promise<object>;
}
