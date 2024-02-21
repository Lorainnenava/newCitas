import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Permission } from '../../../domain/entities/permission/permission.entity';
import { IPermissionRepository } from '../../../domain/interfaces/repository/permission/IPermission.repository';
import { PermissionRequestDto } from '../../../domain/entities/permission/dto/request/permissionRequest.dto';
import { PermissionResponseDto } from '../../../domain/entities/permission/dto/response/permissionResponse.dto';

@Injectable()
export class PermissionRepository implements IPermissionRepository {
  constructor(
    @InjectModel(Permission.name)
    private readonly permissionModel: Model<Permission>,
  ) {}

  /**
   * create permissions
   * @param request
   * @returns
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
   * getByRole permissions
   * @param request
   * @returns
   */
  async getByRole(role: string): Promise<PermissionResponseDto[]> {
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
    request: PermissionRequestDto,
  ): Promise<PermissionResponseDto[]> {
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
