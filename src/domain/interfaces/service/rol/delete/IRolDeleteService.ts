import { RolResponseDto } from '../../../../dtos/rol/response/rolResponse.dto';

export interface IRolDeleteService {
  /**
   * delete rol
   * @param _id
   */
  delete(_id: string): Promise<RolResponseDto>;
}
