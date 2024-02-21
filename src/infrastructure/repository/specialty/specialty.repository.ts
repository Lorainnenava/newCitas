import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Specialty } from '../../../domain/entities/specialty/specialty.entity';
import { ISpecialtyRepository } from '../../../domain/interfaces/repository/specialty/ISpecialty.repository';
import { SpecialtyRequestDto } from '../../../domain/entities/specialty/dto/request/specialtyRequest.dto';
import { SpecialtyResponseDto } from '../../../domain/entities/specialty/dto/response/specialtyResponse.dto';

@Injectable()
export class SpecialtyRepository implements ISpecialtyRepository {
  constructor(
    @InjectModel(Specialty.name)
    private readonly specialtyModel: Model<Specialty>,
  ) {}

  /**
   * create specialty
   * @param request
   */
  async create(request: SpecialtyRequestDto): Promise<SpecialtyResponseDto> {
    try {
      return new this.specialtyModel({
        name: request.name.toLocaleUpperCase(),
      }).save();
    } catch (error) {
      throw new Error(error);
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
      throw new Error(error);
    }
  }

  /**
   * delete specialty
   * @param _id
   * @returns
   */
  async delete(_id: string): Promise<SpecialtyResponseDto> {
    try {
      return await this.specialtyModel.findByIdAndDelete({
        _id,
      });
    } catch (error) {
      throw new Error(error);
    }
  }
}
