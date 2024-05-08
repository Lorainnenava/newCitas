import { Inject, Injectable } from '@nestjs/common';
import { PermissionRequestDto } from 'src/domain/entities/permission/dto/request/permissionRequest.dto';
import { PermissionResponseDto } from 'src/domain/entities/permission/dto/response/permissionResponse.dto';
import { IPermissionRepository } from 'src/domain/interfaces/infrastructure/permission/IPermission.repository';
import { IPermissionsUpdateService } from 'src/domain/interfaces/services/permission/update/IPermissionsUpdateService';

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
