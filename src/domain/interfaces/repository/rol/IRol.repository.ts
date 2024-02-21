import { RolRequestDto } from '../../../entities/rol/dto/request/rolRequest.dto';
import { RolResponseDto } from '../../../entities/rol/dto/response/rolResponse.dto';

export interface IRolRepository {
  /**
   * create rol
   * @param request
   */
  create(request: RolRequestDto): Promise<RolResponseDto>;

  /**
   * findOne rol
   */
  findOne(name: string): Promise<RolResponseDto>;

  /**
   * getAll roles
   */
  getAll(): Promise<RolResponseDto[]>;

  /**
   * delete rol
   * @param _id
   */
  delete(_id: string): Promise<RolResponseDto>;
}
