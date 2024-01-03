export interface IMedicalAppointmentDeleteService {
  /**
   * delete medicalAppointment
   * @param _id
   */
  delete(_id: string): Promise<object>;
}
