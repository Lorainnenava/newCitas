import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Rol } from '../../../domain/entities/rol/rol.entity';
import { IRolRepository } from '../../../domain/interfaces/repository/rol/IRol.repository';
import { RolResponseDto } from '../../../domain/dtos/rol/response/rolResponse.dto';
import { RolRequestDto } from '../../../domain/dtos/rol/request/rolRequest.dto';

@Injectable()
export class RolRepository implements IRolRepository {
  constructor(@InjectModel(Rol.name) private readonly roleModel: Model<Rol>) {}

  /**
   * create rol
   * @param request
   */
  async create(request: RolRequestDto): Promise<RolResponseDto> {
    try {
      return await new this.roleModel(request).save();
    } catch (error) {
      throw new Error(error);
    }
  }

  /**
   * findOne rol
   * @returns
   */
  async findOne(name: string): Promise<RolResponseDto> {
    try {
      return await this.roleModel.findOne({ name });
    } catch (error) {
      throw new Error(error);
    }
  }

  /**
   * getAll roles
   * @returns
   */
  async getAll(): Promise<RolResponseDto[]> {
    try {
      return await this.roleModel.find();
    } catch (error) {
      throw new Error(error);
    }
  }

  /**
   * delete rol
   * @param _id
   * @returns
   */
  async delete(_id: string): Promise<RolResponseDto> {
    try {
      return await this.roleModel.findByIdAndDelete({ _id });
    } catch (error) {
      throw new Error(error);
    }
  }
}
