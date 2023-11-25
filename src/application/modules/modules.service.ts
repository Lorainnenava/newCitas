import { BadRequestException, Injectable, Param, Body } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
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
        throw new BadRequestException('This module already exists');
      return await new this.moduleModel(request).save();
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
