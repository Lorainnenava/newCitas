import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Roles } from '../../../domain/entities/roles/roles.entity';
import { RolesRequestDto } from '../../../application/dtos/roles/request/rolesRequest.dto';
import { RolesResponseDto } from '../../../application/dtos/roles/response/rolesResponse.dto';
import { IRolesRepository } from '../../../domain/interfaces/repository/roles/IRoles.repository';

@Injectable()
export class RolesRepository implements IRolesRepository {
  constructor(
    @InjectModel(Roles.name) private readonly roleModel: Model<Roles>,
  ) {}

  /**
   * create role
   * @param request
   */
  async create(request: RolesRequestDto): Promise<RolesResponseDto> {
    try {
      return await new this.roleModel(request).save();
    } catch (error) {
      throw new Error(error);
    }
  }

  /**
   * findOne role
   * @returns
   */
  async findOne(name: string): Promise<RolesResponseDto> {
    try {
      return await this.roleModel.findOne({ name });
    } catch (error) {
      throw new Error(error);
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
      throw new Error(error);
    }
  }

  /**
   * delete role
   * @param _id
   * @returns
   */
  async delete(_id: string): Promise<RolesResponseDto> {
    try {
      return await this.roleModel.findByIdAndDelete({ _id });
    } catch (error) {
      throw new Error(error);
    }
  }
}
