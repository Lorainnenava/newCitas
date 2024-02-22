import { Injectable } from '@nestjs/common';
import { PermissionRepository } from '../../../../infrastructure/repository/permission/permission.repository';
import { PermissionRequestDto } from '../../../../domain/entities/permission/dto/request/permissionRequest.dto';
import { PermissionResponseDto } from '../../../../domain/entities/permission/dto/response/permissionResponse.dto';
import { IPermissionsUpdateService } from '../../../../domain/interfaces/service/permission/update/IPermissionsUpdateService';

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
      return await this.permissionRepository.update(
        { _id: request._id },
        request,
      );
    } catch (error) {
      throw error;
    }
  }
}
