import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { Body, Injectable } from '@nestjs/common';
import { ISessionApplication } from '../../domain/inferface/session/ISessionApplication';
import { Session } from '../../domain/collections/session/schema/session.entity';
import { SessionRequestDto } from '../../domain/collections/session/dto/request/sessionRequest.dto';
import { SessionResponseDto } from '../../domain/collections/session/dto/response/sessionResponse.dto';

@Injectable()
export class SessionService implements ISessionApplication {
  constructor(
    @InjectModel(Session.name)
    private readonly sessionModel: Model<Session>,
  ) {}

  /**
   * Create session
   * @param data
   * @param idUser
   * @returns
   */
  async create(@Body() data: SessionRequestDto): Promise<object> {
    return await new this.sessionModel({
      email: data.email,
      password: data.password,
      token: data.token,
      role: data.role,
      _idUser: data._idUser,
    }).save();
  }

  /**
   * Delete session
   * @param id
   * @returns
   */
  async delete(id: string): Promise<SessionResponseDto> {
    return await this.sessionModel.findByIdAndRemove({ _idUser: id });
  }

  /**
   * Search session
   * @param id
   * @returns
   */
  async findOne(id: Types.ObjectId): Promise<SessionResponseDto> {
    return await this.sessionModel.findOne({ _idUser: id });
  }
}
