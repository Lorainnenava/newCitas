import { FilterQuery, Model, UpdateQuery } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Body, Injectable } from '@nestjs/common';
import { Session } from '../../../domain/entities/session/session.entity';
import { SessionRequestDto } from '../../../domain/entities/session/dto/request/session/sessionRequest.dto';
import { SessionResponseDto } from '../../../domain/entities/session/dto/response/sessionResponse.dto';
import { ISessionRepository } from 'src/domain/interfaces/infrastructure/session/ISession.repository';

@Injectable()
export class SessionRepository implements ISessionRepository {
  constructor(
    @InjectModel(Session.name)
    private readonly sessionModel: Model<Session>,
  ) {}

  /**
   * Creates a new entity in the database.
   * @param request - The data for the new entity.
   * @returns A promise that resolves to the created entity.
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
   * Finds and retrieves a single entity from the database.
   * @param options - Optional filter query parameters.
   * @returns A promise that resolves to the found entity.
   */
  async findOne(
    options?: FilterQuery<SessionRequestDto>,
  ): Promise<SessionResponseDto> {
    try {
      return await this.sessionModel.findOne(options);
    } catch (error) {
      throw new Error(error);
    }
  }

  /**
   * Deletes an entity from the database.
   * @param options - The criteria to identify the entity to be deleted.
   * @returns A promise that resolves to the deleted entity.
   */
  async delete(
    options: FilterQuery<SessionRequestDto>,
  ): Promise<SessionResponseDto> {
    try {
      return await this.sessionModel.findOneAndRemove(options);
    } catch (error) {
      throw new Error(error);
    }
  }

  /**
   * Deletes an entity from the database.
   * @param options - The criteria to identify the entity to be deleted.
   * @returns A promise that resolves to the deleted entity.
   */
  async update(
    option: FilterQuery<SessionRequestDto>,
    request: UpdateQuery<SessionRequestDto>,
  ): Promise<SessionResponseDto> {
    try {
      return await this.sessionModel.findByIdAndUpdate(option, request, {
        new: true,
      });
    } catch (error) {
      throw new Error(error);
    }
  }
}
