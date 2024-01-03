import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Permissions } from '../../../domain/entities/permissions/permissions.entity';
import { PermissionsRequestDto } from '../../../application/dtos/permissions/request/permissionsRequest.dto';
import { PermissionsResponseDto } from '../../../application/dtos/permissions/response/permissionsResponse.dto';
import { IPermissionsRepository } from '../../../domain/interfaces/repository/permissions/IPermissions.repository';

@Injectable()
export class PermissionRepository implements IPermissionsRepository {
  constructor(
    @InjectModel(Permissions.name)
    private readonly permissionModel: Model<Permissions>,
  ) {}

  /**
   * create permissions
   * @param request
   * @returns
   */
  async create(
    request: PermissionsRequestDto,
  ): Promise<PermissionsResponseDto[]> {
    try {
      return (await new this.permissionModel(request).save()).toObject();
    } catch (error) {
      throw error;
    }
  }

  /**
   * getByRole permissions
   * @param request
   * @returns
   */
  async getByRole(role: string): Promise<PermissionsResponseDto[]> {
    try {
      return await this.permissionModel.find({ role });
    } catch (error) {
      throw error;
    }
  }

  /**
   * update permissions
   * @param request
   * @returns
   */
  async update(
    request: PermissionsRequestDto,
  ): Promise<PermissionsResponseDto[]> {
    try {
      return await this.permissionModel.findByIdAndUpdate(
        request.role,
        request,
        {
          new: true,
        },
      );
    } catch (error) {
      throw error;
    }
  }
}
