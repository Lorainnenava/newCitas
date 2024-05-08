import { FilterQuery, Model, UpdateQuery } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Permission } from '../../../domain/entities/permission/permission.entity';
import { PermissionRequestDto } from '../../../domain/entities/permission/dto/request/permissionRequest.dto';
import { PermissionResponseDto } from '../../../domain/entities/permission/dto/response/permissionResponse.dto';
import { IPermissionRepository } from 'src/domain/interfaces/infrastructure/permission/IPermission.repository';

@Injectable()
export class PermissionRepository implements IPermissionRepository {
  constructor(
    @InjectModel(Permission.name)
    private readonly permissionModel: Model<Permission>,
  ) {}

  /**
   * Creates a new entity in the database.
   * @param request - The data for the new entity.
   * @returns A promise that resolves to the created entity.
   */
  async create(
    request: PermissionRequestDto,
  ): Promise<PermissionResponseDto[]> {
    try {
      return (await new this.permissionModel(request).save()).toObject();
    } catch (error) {
      throw error;
    }
  }

  /**
   * Retrieves all entities from the database.
   * @param options - Optional filter query parameters.
   * @returns A promise that resolves to an array of entities.
   */
  async getAll(
    options?: FilterQuery<PermissionRequestDto>,
  ): Promise<PermissionResponseDto[]> {
    try {
      return await this.permissionModel.find(options);
    } catch (error) {
      throw error;
    }
  }

  /**
   * Updates an existing entity in the database.
   * @param options - The criteria to identify the entity to be updated.
   * @param request - The updated data for the entity.
   * @returns A promise that resolves to the updated entity.
   */
  async update(
    option: FilterQuery<PermissionRequestDto>,
    request: UpdateQuery<PermissionRequestDto>,
  ): Promise<PermissionResponseDto[]> {
    try {
      return await this.permissionModel.findByIdAndUpdate(option, request, {
        new: true,
      });
    } catch (error) {
      throw error;
    }
  }
}
