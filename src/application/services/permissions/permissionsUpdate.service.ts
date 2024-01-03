import { Injectable } from '@nestjs/common';
import { PermissionsRequestDto } from '../../dtos/permissions/request/permissionsRequest.dto';
import { PermissionsResponseDto } from '../../dtos/permissions/response/permissionsResponse.dto';
import { PermissionRepository } from '../../../infrastructure/repository/permissions/permissions.repository';
import { IPermissionsUpdateService } from '../../../domain/interfaces/service/permissions/update/IPermissionsUpdateService';

@Injectable()
export class PermissionUpdateService implements IPermissionsUpdateService {
  constructor(private readonly permissionRepository: PermissionRepository) {}

  /**
   * update permissions
   * @param request
   * @returns
   */
  async update(
    request: PermissionsRequestDto,
  ): Promise<PermissionsResponseDto[]> {
    try {
      return await this.permissionRepository.update(request);
    } catch (error) {
      throw error;
    }
  }
}
