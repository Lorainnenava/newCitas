import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Modules } from '../../../domain/entities/modules/module.entity';
import { IModuleRepository } from '../../../domain/interfaces/repository/modules/IModules.repository';
import { ModuleRequestDto } from '../../../application/dtos/modules/request/modules/moduleRequest.dto';
import { ModuleResponseDto } from '../../../application/dtos/modules/response/modules/moduleResponse.dto';

@Injectable()
export class ModuleRepository implements IModuleRepository {
  constructor(
    @InjectModel(Modules.name) private readonly moduleModel: Model<Modules>,
  ) {}

  /**
   * create
   * @param request
   * @returns
   */
  async create(request: ModuleRequestDto): Promise<ModuleResponseDto> {
    try {
      return (await new this.moduleModel(request).save()).toObject();
    } catch (error) {
      throw new Error(error);
    }
  }

  /**
   * getAll
   * @returns
   */
  async getAll(): Promise<ModuleResponseDto[]> {
    try {
      return this.moduleModel.find();
    } catch (error) {
      throw new Error(error);
    }
  }

  /**
   * findOne
   * @returns
   */
  async findOne(name: string): Promise<ModuleResponseDto> {
    try {
      return this.moduleModel.findOne({ name });
    } catch (error) {
      throw new Error(error);
    }
  }

  /**
   * update
   * @param request
   * @param _id
   * @returns
   */
  async update(
    request: ModuleRequestDto,
    _id: string,
  ): Promise<ModuleResponseDto> {
    try {
      return this.moduleModel.findByIdAndUpdate(_id, request, {
        new: true,
      });
    } catch (error) {
      throw new Error(error);
    }
  }
}
