import { Body, Injectable, ConflictException } from '@nestjs/common';
import { RolRepository } from '../../../infrastructure/repository/rol/rol.repository';
import { IRolCreateService } from '../../../domain/interfaces/service/rol/create/IRolCreateService';
import { RolResponseDto } from '../../../domain/dtos/rol/response/rolResponse.dto';
import { RolRequestDto } from '../../../domain/dtos/rol/request/rolRequest.dto';

@Injectable()
export class RolCreateService implements IRolCreateService {
  constructor(private readonly rolRepository: RolRepository) {}

  /**
   * create rol
   * @param request
   */
  async create(@Body() request: RolRequestDto): Promise<RolResponseDto> {
    try {
      const searchRole = await this.rolRepository.findOne(request.name);
      if (searchRole) throw new ConflictException('This role already exists');
      return await this.rolRepository.create(request);
    } catch (error) {
      throw error;
    }
  }
}
