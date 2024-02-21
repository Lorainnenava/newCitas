import { FilterQuery, Model, UpdateQuery } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Invoice } from '../../../domain/entities/invoice/invoice.entity';
import { IInvoiceRepository } from '../../../domain/interfaces/repository/invoice/IInvoice.repository';
import { InvoiceRequestDto } from '../../../domain/entities/invoice/dto/request/invoice/invoiceRequest.dto';
import { InvoiceResponseDto } from '../../../domain/entities/invoice/dto/response/invoice/invoiceResponse.dto';

@Injectable()
export class InvoiceRepository implements IInvoiceRepository {
  constructor(
    @InjectModel(Invoice.name) private readonly invoiceModel: Model<Invoice>,
  ) {}

  /**
   * Creates a new entity in the database.
   * @param request - The data for the new entity.
   * @returns A promise that resolves to the created entity.
   */
  async create(request: InvoiceRequestDto): Promise<InvoiceResponseDto> {
    try {
      return await new this.invoiceModel(request).save();
    } catch (error) {}
  }

  /**
   * Retrieves all entities from the database.
   * @param options - Optional filter query parameters.
   * @returns A promise that resolves to an array of entities.
   */
  async getAll(
    options?: FilterQuery<InvoiceRequestDto>,
  ): Promise<InvoiceResponseDto[]> {
    try {
      return this.invoiceModel.find(options);
    } catch (error) {
      throw new Error(error);
    }
  }

  /**
   * Finds and retrieves a single entity from the database.
   * @param options - Optional filter query parameters.
   * @returns A promise that resolves to the found entity.
   */
  async findOne(
    options?: FilterQuery<InvoiceRequestDto>,
  ): Promise<InvoiceResponseDto> {
    try {
      return this.invoiceModel.findOne(options);
    } catch (error) {
      throw new Error(error);
    }
  }

  /**
   * Updates an existing entity in the database.
   * @param options - The criteria to identify the entity to be updated.
   * @param request - The updated data for the entity.
   * @returns A promise that resolves to the updated entity.
   */
  async update(
    option: FilterQuery<InvoiceRequestDto>,
    request: UpdateQuery<InvoiceRequestDto>,
  ): Promise<InvoiceResponseDto> {
    try {
      return await this.invoiceModel.findByIdAndUpdate(option, request, {
        new: true,
      });
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
    options?: FilterQuery<InvoiceRequestDto>,
  ): Promise<InvoiceResponseDto> {
    try {
      return await this.invoiceModel.findByIdAndDelete(options);
    } catch (error) {
      throw new Error(error);
    }
  }
}
