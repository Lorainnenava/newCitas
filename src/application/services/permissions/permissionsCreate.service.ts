import { Injectable } from '@nestjs/common';
import { PermissionsRequestDto } from '../../dtos/permissions/request/permissionsRequest.dto';
import { PermissionsResponseDto } from '../../dtos/permissions/response/permissionsResponse.dto';
import { PermissionRepository } from '../../../infrastructure/repository/permissions/permissions.repository';
import { IPermissionsCreateService } from '../../../domain/interfaces/service/permissions/create/IPermissionsCreateService';

@Injectable()
export class PermissionCreateService implements IPermissionsCreateService {
  constructor(private readonly permissionRepository: PermissionRepository) {}

  /**
   * create permissions
   * @param request
   * @returns
   */
  async create(
    request: PermissionsRequestDto,
  ): Promise<PermissionsResponseDto[]> {
    try {
      return await this.permissionRepository.create(request);
    } catch (error) {
      throw error;
    }
  }
}
