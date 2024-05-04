import { Inject, Injectable } from '@nestjs/common';
import { PermissionRequestDto } from '../../../../domain/entities/permission/dto/request/permissionRequest.dto';
import { PermissionResponseDto } from '../../../../domain/entities/permission/dto/response/permissionResponse.dto';
import { IPermissionRepository } from '../../../../domain/interfaces/repository/permission/IPermission.repository';
import { IPermissionsCreateService } from '../../../../domain/interfaces/service/permission/create/IPermissionsCreateService';

@Injectable()
export class PermissionsCreateService implements IPermissionsCreateService {
  constructor(
    @Inject('PermissionRepository')
    private readonly _permissionRepository: IPermissionRepository,
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
      return await this._permissionRepository.create(request);
    } catch (error) {
      throw error;
    }
  }
}
