import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Invoice } from '../../../domain/entities/invoice/invoice.entity';
import { IInvoiceRepository } from '../../../domain/interfaces/repository/invoice/IInvoice.repository';
import { InvoiceRequestDto } from '../../../domain/dtos/invoice/request/invoice/invoiceRequest.dto';
import { InvoiceResponseDto } from '../../../domain/dtos/invoice/response/invoice/invoiceResponse.dto';

@Injectable()
export class InvoiceRepository implements IInvoiceRepository {
  constructor(
    @InjectModel(Invoice.name) private readonly invoiceModel: Model<Invoice>,
  ) {}

  /**
   * create invoice
   * @param request
   * @returns
   */
  async create(request: InvoiceRequestDto): Promise<InvoiceResponseDto> {
    try {
      return await new this.invoiceModel(request).save();
    } catch (error) {}
  }

  /**
   * getAll invoices
   * @returns
   */
  async getAll(): Promise<InvoiceResponseDto[]> {
    try {
      return this.invoiceModel.find();
    } catch (error) {
      throw new Error(error);
    }
  }

  /**
   * findById invoice
   * @param _id
   * @returns
   */
  async findById(_id: string): Promise<InvoiceResponseDto> {
    try {
      return this.invoiceModel.findById(_id);
    } catch (error) {
      throw new Error(error);
    }
  }

  /**
   * findOne invoice
   * @param code
   * @returns
   */
  async findOne(code: number): Promise<InvoiceResponseDto> {
    try {
      return this.invoiceModel.findOne({ code });
    } catch (error) {
      throw new Error(error);
    }
  }

  /**
   * update invoice
   * @param request
   * @returns
   */
  async update(request: InvoiceRequestDto): Promise<InvoiceResponseDto> {
    try {
      return await this.invoiceModel.findByIdAndUpdate(request._id, request, {
        new: true,
      });
    } catch (error) {
      throw new Error(error);
    }
  }

  /**
   * delete invoice
   * @param _id
   * @returns
   */
  async delete(_id: string): Promise<InvoiceResponseDto> {
    try {
      return await this.invoiceModel.findByIdAndDelete(_id);
    } catch (error) {
      throw new Error(error);
    }
  }
}
