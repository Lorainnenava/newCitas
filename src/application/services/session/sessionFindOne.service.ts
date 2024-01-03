import { Injectable } from '@nestjs/common';
import { SessionResponseDto } from '../../dtos/session/response/sessionResponse.dto';
import { SessionRepository } from '../../../infrastructure/repository/session/session.repository';
import { ISessionFindOneService } from '../../../domain/interfaces/service/session/findOne/ISessionFindOneService';

@Injectable()
export class SessionFindOneService implements ISessionFindOneService {
  constructor(private readonly sessionRepository: SessionRepository) {}

  /**
   * Search session
   * @param email
   * @returns
   */
  async findOne(email: string): Promise<SessionResponseDto | object> {
    try {
      return await this.sessionRepository.findOne(email);
    } catch (error) {
      throw error;
    }
  }
}
