import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Injectable, Param, NotFoundException } from '@nestjs/common';
import { TypeOfDocument } from '../../../domain/entities/typeOfDocument/typeOfDocument.entity';
import { TypeOfDocumentRequestDto } from '../../dtos/typeOfDocument/request/typeOfDocumentRequest.dto';
import { TypeOfDocumentResponseDto } from '../../dtos/typeOfDocument/response/typeOfDocumentResponsedto';
import { ITypeOfDocumentApplication } from '../../../domain/interfaces/service/typeOfDocument/ITypeOfDocumentApplication';

/**
 * TypeOfDocumentService
 */
@Injectable()
export class TypeOfDocumentService implements ITypeOfDocumentApplication {
  constructor(
    @InjectModel(TypeOfDocument.name)
    private readonly typeOfDocumentModel: Model<TypeOfDocument>,
  ) {}

  /**
   * method create
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
      throw error;
    }
  }

  /**
   * getAll typeOfDocument
   * @returns
   */
  async getAll(): Promise<TypeOfDocumentResponseDto[]> {
    try {
      return await this.typeOfDocumentModel.find();
    } catch (error) {
      throw error;
    }
  }

  /**
   * method delete
   * @param _id
   * @returns
   */
  async delete(@Param('_id') _id: string): Promise<TypeOfDocumentResponseDto> {
    try {
      const deleteTypeOfDocument =
        await this.typeOfDocumentModel.findByIdAndDelete({ _id });
      if (deleteTypeOfDocument === null)
        throw new NotFoundException('This typeOfDocument does not exist');
      return deleteTypeOfDocument;
    } catch (error) {
      throw error;
    }
  }
}
