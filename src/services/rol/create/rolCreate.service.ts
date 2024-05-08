import { Injectable, ConflictException, Inject } from '@nestjs/common';
import { RolRequestDto } from 'src/domain/entities/rol/dto/request/rolRequest.dto';
import { RolResponseDto } from 'src/domain/entities/rol/dto/response/rolResponse.dto';
import { IRolRepository } from 'src/domain/interfaces/infrastructure/rol/IRol.repository';
import { IRolCreateService } from 'src/domain/interfaces/services/rol/create/IRolCreateService';

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
