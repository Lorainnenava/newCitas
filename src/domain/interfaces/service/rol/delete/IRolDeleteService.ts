import { RolResponseDto } from '../../../../entities/rol/dto/response/rolResponse.dto';

export interface IRolDeleteService {
  /**
   * delete rol
   * @param _id
   */
  delete(_id: string): Promise<RolResponseDto>;
}
