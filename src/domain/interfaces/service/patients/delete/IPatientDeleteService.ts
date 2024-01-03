export interface IPatientDeleteService {
  /**
   * delete patient
   * @param _id
   */
  delete(_id: string): Promise<boolean>;
}
