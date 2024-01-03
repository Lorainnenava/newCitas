/**
 * IMedicalHistoryFindByIdService
 */
export interface IMedicalHistoryFindByIdService {
  /**
   * findById medicalHistory
   * @param request
   * @param _id
   */

  findById(_id: string): Promise<object>;
}
