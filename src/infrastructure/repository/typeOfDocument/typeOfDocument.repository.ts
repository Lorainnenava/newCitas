import { FilterQuery, Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Injectable } from '@nestjs/common';
import { TypeOfDocument } from '../../../domain/entities/typeOfDocument/typeOfDocument.entity';
import { TypeOfDocumentRequestDto } from '../../../domain/entities/typeOfDocument/dto/request/typeOfDocumentRequest.dto';
import { TypeOfDocumentResponseDto } from '../../../domain/entities/typeOfDocument/dto/response/typeOfDocumentResponse.dto';
import { ITypeOfDocumentRepository } from 'src/domain/interfaces/infrastructure/typeOfDocument/ITypeOfDocument.repository';

@Injectable()
export class TypeOfDocumentRepository implements ITypeOfDocumentRepository {
  constructor(
    @InjectModel(TypeOfDocument.name)
    private readonly typeOfDocumentModel: Model<TypeOfDocument>,
  ) {}

  /**
   * Creates a new entity in the database.
   * @param request - The data for the new entity.
   * @returns A promise that resolves to the created entity.
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
   * Retrieves all entities from the database.
   * @param options - Optional filter query parameters.
   * @returns A promise that resolves to an array of entities.
   */
  async getAll(
    options?: FilterQuery<TypeOfDocumentRequestDto>,
  ): Promise<TypeOfDocumentResponseDto[]> {
    try {
      return await this.typeOfDocumentModel.find(options);
    } catch (error) {
      throw new Error(error);
    }
  }

  /**
   * Deletes an entity from the database.
   * @param options - The criteria to identify the entity to be deleted.
   * @returns A promise that resolves to the deleted entity.
   */
  async delete(
    options: FilterQuery<TypeOfDocumentRequestDto>,
  ): Promise<TypeOfDocumentResponseDto> {
    try {
      return await this.typeOfDocumentModel.findByIdAndDelete(options);
    } catch (error) {
      throw new Error(error);
    }
  }
}
