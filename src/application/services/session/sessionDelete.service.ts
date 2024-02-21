import { NotFoundException, Injectable } from '@nestjs/common';
import { SessionRepository } from '../../../infrastructure/repository/session/session.repository';
import { ISessionDeleteService } from '../../../domain/interfaces/service/session/delete/ISessionDeleteService';
import { SessionResponseDto } from '../../../domain/entities/session/dto/response/sessionResponse.dto';

@Injectable()
export class SessionDeleteService implements ISessionDeleteService {
  constructor(private readonly sessionRepository: SessionRepository) {}

  /**
   * Delete session
   * @param token
   * @returns
   */
  async delete(token: string): Promise<SessionResponseDto> {
    try {
      const deleteSession = await this.sessionRepository.delete(token);
      if (deleteSession === null)
        throw new NotFoundException('This sesion does not exist');
      return deleteSession;
    } catch (error) {
      throw error;
    }
  }
}
