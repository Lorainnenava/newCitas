import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Modules } from '../../../domain/entities/module/module.entity';
import { IModuleRepository } from '../../../domain/interfaces/repository/module/IModule.repository';
import { ModuleRequestDto } from '../../../domain/entities/module/dto/request/module/moduleRequest.dto';
import { ModuleResponseDto } from '../../../domain/entities/module/dto/response/module/moduleResponse.dto';

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
   * @returns
   */
  async update(request: ModuleRequestDto): Promise<ModuleResponseDto> {
    try {
      return this.moduleModel.findByIdAndUpdate(request._id, request, {
        new: true,
      });
    } catch (error) {
      throw new Error(error);
    }
  }
}
