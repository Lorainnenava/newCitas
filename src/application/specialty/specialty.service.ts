import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { BadRequestException, Injectable, Param, Body } from '@nestjs/common';
import { Specialty } from '../../domain/collections/specialty/schema/specialties.entity';
import { ISpecialtyApplication } from '../../domain/inferface/specialty/ISpecialtyApplication';
import { SpecialtyRequestDto } from '../../domain/collections/specialty/dto/request/specialtiesRequest.dto';
import { SpecialtyResponseDto } from '../../domain/collections/specialty/dto/response/specialtiesResponse.dto';

@Injectable()
export class SpecialtyService implements ISpecialtyApplication {
  constructor(
    @InjectModel(Specialty.name)
    private readonly specialtyModel: Model<Specialty>,
  ) {}

  /**
   * create specialty
   * @param request
   */
  async create(
    @Body() request: SpecialtyRequestDto,
  ): Promise<SpecialtyResponseDto> {
    try {
      return new this.specialtyModel(request).save();
    } catch (error) {
      throw error;
    }
  }

  /**
   * getAll specialty
   * @returns
   */
  async getAll(): Promise<SpecialtyResponseDto[]> {
    try {
      return this.specialtyModel.find();
    } catch (error) {
      throw error;
    }
  }

  /**
   * delete specialty
   * @param _id
   * @returns
   */
  async delete(@Param('_id') _id: string): Promise<SpecialtyResponseDto> {
    try {
      const deleteSpecialty = await this.specialtyModel.findByIdAndDelete({
        _id,
      });
      if (deleteSpecialty === null)
        throw new BadRequestException('This specialty does not exist');
      return deleteSpecialty;
    } catch (error) {
      throw error;
    }
  }
}
