import { Injectable } from '@nestjs/common';
import { PermissionRepository } from '../../../infrastructure/repository/permission/permission.repository';
import { IPermissionsCreateService } from '../../../domain/interfaces/service/permission/create/IPermissionsCreateService';
import { PermissionRequestDto } from '../../../domain/dtos/permission/request/permissionRequest.dto';
import { PermissionResponseDto } from '../../../domain/dtos/permission/response/permissionResponse.dto';

@Injectable()
export class PermissionsCreateService implements IPermissionsCreateService {
  constructor(private readonly permissionRepository: PermissionRepository) {}

  /**
   * create permissions
   * @param request
   * @returns
   */
  async create(
    request: PermissionRequestDto,
  ): Promise<PermissionResponseDto[]> {
    try {
      return await this.permissionRepository.create(request);
    } catch (error) {
      throw error;
    }
  }
}
