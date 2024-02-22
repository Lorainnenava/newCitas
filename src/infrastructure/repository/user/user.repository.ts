import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { FilterQuery, Model, UpdateQuery } from 'mongoose';
import { User } from '../../../domain/entities/user/user.entity';
import { IUserRepository } from '../../../domain/interfaces/repository/user/IUser.repository';
import { UserRequestDto } from '../../../domain/entities/user/dto/request/user/userRequest.dto';
import { UserResponseDto } from '../../../domain/entities/user/dto/response/user/userResponse.dto';

@Injectable()
export class UserRepository implements IUserRepository {
  constructor(
    @InjectModel(User.name)
    private readonly userModel: Model<User>,
  ) {}

  /**
   * Creates a new entity in the database.
   * @param request - The data for the new entity.
   * @returns A promise that resolves to the created entity.
   */
  async create(request: UserRequestDto): Promise<UserResponseDto> {
    try {
      return await new this.userModel(request).save();
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
    options?: FilterQuery<UserRequestDto>,
  ): Promise<UserResponseDto> {
    try {
      return await this.userModel.findOne(options);
    } catch (error) {
      throw new Error(error);
    }
  }

  /**
   * Retrieves all entities from the database.
   * @param options - Optional filter query parameters.
   * @returns A promise that resolves to an array of entities.
   */
  async getAll(
    options?: FilterQuery<UserRequestDto>,
  ): Promise<UserResponseDto[]> {
    try {
      return await this.userModel.find(options);
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
    option: FilterQuery<UserRequestDto>,
    request: UpdateQuery<UserRequestDto>,
  ): Promise<UserResponseDto> {
    try {
      return await this.userModel.findByIdAndUpdate(option, request, {
        new: true,
      });
    } catch (error) {
      throw new Error(error);
    }
  }
}
