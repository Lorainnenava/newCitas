import { Injectable, Param, Body } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { IInvoicesApplication } from '../../domain/inferface/invoices/IInvoicesApplication';
import { Invoice } from '../../domain/collections/invoice/schema/invoice.entity';
import { InvoiceRequestDto } from '../../domain/collections/invoice/dto/request/invoiceRequest.dto';
import { InvoiceResponseDto } from '../../domain/collections/invoice/dto/response/invoiceResponse.dto';

/**
 * InvoiceService
 */
@Injectable()
export class InvoiceService implements IInvoicesApplication {
  constructor(
    @InjectModel(Invoice.name) private readonly invoiceModel: Model<Invoice>,
  ) {}

  /**
   * create Invoice
   * @param request
   */
  async create(
    @Body() request: InvoiceRequestDto,
  ): Promise<InvoiceResponseDto> {
    try {
      return await new this.invoiceModel(request).save();
    } catch (error) {
      throw error;
    }
  }

  /**
   * getAll invoices
   * @returns
   */
  async getAll(): Promise<InvoiceResponseDto[]> {
    try {
      return await this.invoiceModel.find();
    } catch (error) {
      throw error;
    }
  }

  /**
   * update invoices
   * @param _id
   * @returns
   */
  async update(
    @Body() request: InvoiceRequestDto,
    @Param('_id') _id: string,
  ): Promise<InvoiceResponseDto> {
    try {
      return await this.invoiceModel.findByIdAndUpdate(_id, request, {
        new: true,
      });
    } catch (error) {
      throw error;
    }
  }
}
