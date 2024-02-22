import { Injectable, ConflictException } from '@nestjs/common';
import { RolRepository } from '../../../../infrastructure/repository/rol/rol.repository';
import { RolRequestDto } from '../../../../domain/entities/rol/dto/request/rolRequest.dto';
import { RolResponseDto } from '../../../../domain/entities/rol/dto/response/rolResponse.dto';
import { IRolCreateService } from '../../../../domain/interfaces/service/rol/create/IRolCreateService';

@Injectable()
export class RolCreateService implements IRolCreateService {
  constructor(private readonly rolRepository: RolRepository) {}

  /**
   * create rol
   * @param request
   */
  async create(request: RolRequestDto): Promise<RolResponseDto> {
    try {
      const searchRole = await this.rolRepository.findOne({
        name: request.name,
      });
      if (searchRole) throw new ConflictException('This role already exists');
      return await this.rolRepository.create(request);
    } catch (error) {
      throw error;
    }
  }
}
