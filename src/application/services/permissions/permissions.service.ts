import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { PermissionsRequestDto } from '../../dtos/permissions/request/permissionsRequest.dto';
import { PermissionsResponseDto } from '../../dtos/permissions/response/permissionsResponse.dto';
import { IPermissionsApplication } from '../../../domain/interfaces/service/permissions/IPermissionsApplication';

@Injectable()
export class PermissionService implements IPermissionsApplication {
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
   * getAllByRole permissions
   * @param request
   * @returns
   */
  async getAllByRole(role: string): Promise<PermissionsResponseDto[]> {
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
