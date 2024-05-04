import { NotFoundException, Injectable, Inject } from '@nestjs/common';
import { SessionResponseDto } from '../../../../domain/entities/session/dto/response/sessionResponse.dto';
import { ISessionRepository } from '../../../../domain/interfaces/repository/session/ISession.repository';
import { ISessionDeleteService } from '../../../../domain/interfaces/service/session/delete/ISessionDeleteService';

@Injectable()
export class SessionDeleteService implements ISessionDeleteService {
  constructor(
    @Inject('SessionRepository')
    private readonly _sessionRepository: ISessionRepository,
  ) {}

  /**
   * Delete session
   * @param token
   * @returns
   */
  async delete(token: string): Promise<SessionResponseDto> {
    try {
      const deleteSession = await this._sessionRepository.delete({ token });
      if (deleteSession === null)
        throw new NotFoundException('This sesion does not exist');
      return deleteSession;
    } catch (error) {
      throw error;
    }
  }
}
