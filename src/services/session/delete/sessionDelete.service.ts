import { NotFoundException, Injectable, Inject } from '@nestjs/common';
import { SessionResponseDto } from 'src/domain/entities/session/dto/response/sessionResponse.dto';
import { ISessionRepository } from 'src/domain/interfaces/infrastructure/session/ISession.repository';
import { ISessionDeleteService } from 'src/domain/interfaces/services/session/delete/ISessionDeleteService';

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
        throw new NotFoundException('This session does not exist');
      return deleteSession;
    } catch (error) {
      throw error;
    }
  }
}
