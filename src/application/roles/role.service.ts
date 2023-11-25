import { BadRequestException, Injectable, Body, Param } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { IRolesApplication } from '../../domain/inferface/roles/IRolesApplication';
import { Roles } from '../../domain/collections/roles/schema/roles.entity';
import { RolesResponseDto } from '../../domain/collections/roles/dto/response/rolesResponse.dto';
import { RolesRequestDto } from '../../domain/collections/roles/dto/request/rolesRequest.dto';

/**
 * RoleService
 */
@Injectable()
export class RolesService implements IRolesApplication {
  constructor(
    @InjectModel(Roles.name) private readonly roleModel: Model<Roles>,
  ) {}

  /**
   * create role
   * @param request
   */
  async create(@Body() request: RolesRequestDto): Promise<RolesResponseDto> {
    try {
      const searchRole = await this.roleModel.findOne({
        name: request.name,
      });
      if (searchRole) throw new BadRequestException('This role already exists');
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
        throw new BadRequestException('This specialty does not exist');
      return deleteRole;
    } catch (error) {
      throw error;
    }
  }
}
