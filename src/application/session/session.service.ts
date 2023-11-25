import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { NotFoundException, Body, Injectable } from '@nestjs/common';
import { Session } from '../../domain/collections/session/schema/session.entity';
import { ISessionApplication } from '../../domain/inferface/session/ISessionApplication';
import { SessionRequestDto } from '../../domain/collections/session/dto/request/sessionRequest.dto';
import { SessionResponseDto } from '../../domain/collections/session/dto/response/sessionResponse.dto';

/**
 * SessionService
 */
@Injectable()
export class SessionService implements ISessionApplication {
  constructor(
    @InjectModel(Session.name)
    private readonly sessionModel: Model<Session>,
  ) {}

  /**
   * Create session
   * @param request
   * @returns
   */
  async create(@Body() request: SessionRequestDto): Promise<object> {
    try {
      return await new this.sessionModel(request).save();
    } catch (error) {
      throw error;
    }
  }

  /**
   * Delete session
   * @param token
   * @returns
   */
  async delete(token: string): Promise<SessionResponseDto> {
    try {
      const deleteSession = await this.sessionModel.findOneAndRemove({
        token,
      });
      if (deleteSession === null)
        throw new NotFoundException('This sesion does not exist');
      return deleteSession.toObject();
    } catch (error) {
      throw error;
    }
  }

  /**
   * Search session
   * @param email
   * @returns
   */
  async findOne(email: string): Promise<SessionResponseDto> {
    try {
      return await this.sessionModel.findOne({ email });
    } catch (error) {
      throw error;
    }
  }

  /**
   * findSession
   * @param email
   * @returns
   */
  async findSession(email: string): Promise<SessionResponseDto | object> {
    try {
      if (email) {
        const findSession = await this.sessionModel.findOne({ email });
        if (findSession === null)
          throw new NotFoundException('This sesion does not exist');
        return findSession.toObject();
      }
      return { msg: 'You must provide an email' };
    } catch (error) {
      throw error;
    }
  }
}
