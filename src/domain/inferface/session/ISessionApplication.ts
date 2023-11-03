import { Types } from 'mongoose';
import { SessionRequestDto } from 'src/domain/collections/session/dto/request/sessionRequest.dto';
import { SessionResponseDto } from 'src/domain/collections/session/dto/response/sessionResponse.dto';

export interface ISessionApplication {
  create(data: SessionRequestDto): Promise<object>;

  delete?(id: string): Promise<SessionResponseDto>;

  findOne(id: Types.ObjectId): Promise<SessionResponseDto>;
}
