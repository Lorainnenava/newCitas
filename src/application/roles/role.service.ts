import {
  Body,
  Param,
  Injectable,
  ConflictException,
  NotFoundException,
} from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Roles } from '../../domain/collections/roles/schema/roles.entity';
import { IRolesApplication } from '../../domain/inferface/roles/IRolesApplication';
import { RolesRequestDto } from '../../domain/collections/roles/dto/request/rolesRequest.dto';
import { RolesResponseDto } from '../../domain/collections/roles/dto/response/rolesResponse.dto';

/**
 * RoleService
 */
@Injectable()
export class RolesService implements IRolesApplication {
  constructor(
    @InjectModel(Roles.name) private readonly roleModel: Model<Roles>,
  ) { }

  /**
   * create role
   * @param request
   */
  async create(@Body() request: RolesRequestDto): Promise<RolesResponseDto> {
    try {
      const searchRole = await this.roleModel.findOne({
        name: request.name,
      });
      if (searchRole) throw new ConflictException('This role already exists');
      return await new this.roleModel(request).save();
    } catch (error) {
      throw error;
    }
  }

  /**
   * getAll role
   * @returns
   */
  async getAll(): Promise<RolesResponseDto[]> {
    try {
      return await this.roleModel.find();
    } catch (error) {
      throw error;
    }
  }

  /**
   * delete role
   * @param _id
   * @returns
   */
  async delete(@Param('_id') _id: string): Promise<RolesResponseDto> {
    try {
      const deleteRole = await this.roleModel.findByIdAndDelete({ _id });
      if (deleteRole === null)
        throw new NotFoundException('This specialty does not exist');
      return deleteRole;
    } catch (error) {
      throw error;
    }
  }
}
