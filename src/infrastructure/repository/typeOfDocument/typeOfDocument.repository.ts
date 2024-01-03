import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Injectable, Param } from '@nestjs/common';
import { TypeOfDocument } from '../../../domain/entities/typeOfDocument/typeOfDocument.entity';
import { TypeOfDocumentRequestDto } from '../../../application/dtos/typeOfDocument/request/typeOfDocumentRequest.dto';
import { TypeOfDocumentResponseDto } from '../../../application/dtos/typeOfDocument/response/typeOfDocumentResponsedto';
import { ITypeOfDocumentRepository } from '../../../domain/interfaces/repository/typeOfDocument/ITypeOfDocument.repository';

@Injectable()
export class TypeOfDocumentRepository implements ITypeOfDocumentRepository {
  constructor(
    @InjectModel(TypeOfDocument.name)
    private readonly typeOfDocumentModel: Model<TypeOfDocument>,
  ) {}

  /**
   * create
   * @param request
   */
  async create(
    request: TypeOfDocumentRequestDto,
  ): Promise<TypeOfDocumentResponseDto> {
    try {
      return await new this.typeOfDocumentModel({
        typeOfDocument: request.typeOfDocument.toLocaleUpperCase(),
      }).save();
    } catch (error) {
      throw new Error(error);
    }
  }

  /**
   * getAll
   * @returns
   */
  async getAll(): Promise<TypeOfDocumentResponseDto[]> {
    try {
      return await this.typeOfDocumentModel.find();
    } catch (error) {
      throw new Error(error);
    }
  }

  /**
   * delete
   * @param _id
   * @returns
   */
  async delete(@Param('_id') _id: string): Promise<TypeOfDocumentResponseDto> {
    try {
      return await this.typeOfDocumentModel.findByIdAndDelete({ _id });
    } catch (error) {
      throw new Error(error);
    }
  }
}
