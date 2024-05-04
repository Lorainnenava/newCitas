import { Injectable, ConflictException, Inject } from '@nestjs/common';
import { RolRequestDto } from '../../../../domain/entities/rol/dto/request/rolRequest.dto';
import { RolResponseDto } from '../../../../domain/entities/rol/dto/response/rolResponse.dto';
import { IRolRepository } from '../../../../domain/interfaces/repository/rol/IRol.repository';
import { IRolCreateService } from '../../../../domain/interfaces/service/rol/create/IRolCreateService';

@Injectable()
export class RolCreateService implements IRolCreateService {
  constructor(
    @Inject('RolRepository') private readonly _rolRepository: IRolRepository,
  ) {}

  /**
   * create rol
   * @param request
   */
  async create(request: RolRequestDto): Promise<RolResponseDto> {
    try {
      const searchRole = await this._rolRepository.findOne({
        name: request.name,
      });
      if (searchRole) throw new ConflictException('This role already exists');
      return await this._rolRepository.create(request);
    } catch (error) {
      throw error;
    }
  }
}
