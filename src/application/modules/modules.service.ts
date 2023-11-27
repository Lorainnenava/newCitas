import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Body, Param, Injectable, ConflictException } from '@nestjs/common';
import { IModuleApplication } from '../../domain/inferface/modules/IModulesApplication';
import { ModuleRequestDto } from '../../domain/collections/modules/dto/request/modules/moduleRequest.dto';
import { ModuleResponseDto } from '../../domain/collections/modules/dto/response/modules/moduleResponse.dto';
import { Modules } from '../../domain/collections/modules/schema/module.entity';

/**
 * ModuleService
 */
@Injectable()
export class ModuleService implements IModuleApplication {
  constructor(
    @InjectModel(Modules.name) private readonly moduleModel: Model<Modules>,
  ) {}

  /**
   * create module
   * @param request
   */
  async create(@Body() request: ModuleRequestDto): Promise<object> {
    try {
      const searchModule = await this.moduleModel.findOne({
        name: request.name,
      });
      if (searchModule)
        throw new ConflictException('This module already exists');
      return await new this.moduleModel({
        ...request,
        name: request.name.toLocaleUpperCase(),
      }).save();
    } catch (error) {
      throw error;
    }
  }

  /**
   * getAll module
   * @returns
   */
  async getAll(): Promise<ModuleResponseDto[]> {
    try {
      return await this.moduleModel.find();
    } catch (error) {
      throw error;
    }
  }

  /**
   * update module
   * @param _id
   * @returns
   */
  async update(
    @Body() request: ModuleRequestDto,
    @Param('_id') _id: string,
  ): Promise<ModuleResponseDto> {
    try {
      return await this.moduleModel.findByIdAndUpdate(_id, request, {
        new: true,
      });
    } catch (error) {
      throw error;
    }
  }
}
