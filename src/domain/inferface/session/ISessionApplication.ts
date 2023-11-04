import { Types } from 'mongoose';
import { SessionRequestDto } from '../../collections/session/dto/request/sessionRequest.dto';
import { SessionResponseDto } from '../../collections/session/dto/response/sessionResponse.dto';

export interface ISessionApplication {
  /**
   * method create
   * @param data
   */
  create(data: SessionRequestDto): Promise<object>;

  /**
   * method delete
   * @param id
   */
  delete?(id: string): Promise<SessionResponseDto>;

  /**
   * method findOne
   * @param id
   */
  findOne(id: Types.ObjectId): Promise<SessionResponseDto>;
}
