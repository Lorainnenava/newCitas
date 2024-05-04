import { Inject, Injectable } from '@nestjs/common';
import { PermissionRequestDto } from '../../../../domain/entities/permission/dto/request/permissionRequest.dto';
import { PermissionResponseDto } from '../../../../domain/entities/permission/dto/response/permissionResponse.dto';
import { IPermissionRepository } from '../../../../domain/interfaces/repository/permission/IPermission.repository';
import { IPermissionsUpdateService } from '../../../../domain/interfaces/service/permission/update/IPermissionsUpdateService';

@Injectable()
export class PermissionsUpdateService implements IPermissionsUpdateService {
  constructor(
    @Inject('PermissionRepository')
    private readonly _permissionRepository: IPermissionRepository,
  ) {}

  /**
   * update permissions
   * @param request
   * @returns
   */
  async update(
    request: PermissionRequestDto,
  ): Promise<PermissionResponseDto[]> {
    try {
      return await this._permissionRepository.update(
        { _id: request._id },
        request,
      );
    } catch (error) {
      throw error;
    }
  }
}
