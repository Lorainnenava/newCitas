import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Body, Injectable } from '@nestjs/common';
import { Session } from '../../../domain/entities/session/session.entity';
import { SessionRequestDto } from '../../../application/dtos/session/request/sessionRequest.dto';
import { SessionResponseDto } from '../../../application/dtos/session/response/sessionResponse.dto';
import { ISessionRepository } from '../../../domain/interfaces/repository/session/ISession.repository';

@Injectable()
export class SessionRepository implements ISessionRepository {
  constructor(
    @InjectModel(Session.name)
    private readonly sessionModel: Model<Session>,
  ) {}

  /**
   * Create session
   * @param request
   * @returns
   */
  async create(
    @Body() request: SessionRequestDto,
  ): Promise<SessionResponseDto> {
    try {
      return (await new this.sessionModel(request).save()).toObject();
    } catch (error) {
      throw new Error(error);
    }
  }

  /**
   * Delete session
   * @param token
   * @returns
   */
  async delete(token: string): Promise<SessionResponseDto> {
    try {
      return await this.sessionModel.findOneAndRemove({
        token,
      });
    } catch (error) {
      throw new Error(error);
    }
  }

  /**
   * Search session
   * @param email
   * @returns
   */
  async findOne(email: string): Promise<SessionResponseDto | object> {
    try {
      return await this.sessionModel.findOne({ email });
    } catch (error) {
      throw new Error(error);
    }
  }
}
