import { Injectable } from '@nestjs/common';
import { PermissionRepository } from '../../../infrastructure/repository/permission/permission.repository';
import { IPermissionsUpdateService } from '../../../domain/interfaces/service/permission/update/IPermissionsUpdateService';
import { PermissionRequestDto } from '../../../domain/dtos/permission/request/permissionRequest.dto';
import { PermissionResponseDto } from '../../../domain/dtos/permission/response/permissionResponse.dto';

@Injectable()
export class PermissionsUpdateService implements IPermissionsUpdateService {
  constructor(private readonly permissionRepository: PermissionRepository) {}

  /**
   * update permissions
   * @param request
   * @returns
   */
  async update(
    request: PermissionRequestDto,
  ): Promise<PermissionResponseDto[]> {
    try {
      return await this.permissionRepository.update(request);
    } catch (error) {
      throw error;
    }
  }
}
