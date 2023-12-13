import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Invoice } from '../../../domain/entities/invoice/invoice.entity';
import { Injectable, Param, Body, NotFoundException } from '@nestjs/common';
import { InvoiceRequestDto } from '../../dtos/invoice/request/invoice/invoiceRequest.dto';
import { InvoiceResponseDto } from '../../dtos/invoice/response/invoice/invoiceResponse.dto';
import { IInvoicesApplication } from '../../../domain/interfaces/service/invoices/IInvoicesApplication';

/**
 * InvoiceService
 */
@Injectable()
export class InvoiceService implements IInvoicesApplication {
  constructor(
    @InjectModel(Invoice.name) private readonly invoiceModel: Model<Invoice>,
  ) { }

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
   * findById invoice
   * @param _id
   * @returns
   */
  async findById(@Param('_id') _id: string): Promise<InvoiceResponseDto> {
    try {
      const searchInvoice = await this.invoiceModel.findById(_id);
      if (searchInvoice === null) {
        throw new NotFoundException('This invoice does not exist');
      }
      return searchInvoice
    } catch (error) {
      throw error;
    }
  }

  /**
   * findOne invoice
   * @param code
   * @returns
   */
  async findOne(code: number): Promise<InvoiceResponseDto> {
    try {
      return await this.invoiceModel.findOne({ code });
    } catch (error) {
      throw error;
    }
  }

  /**
   * delete invoice
   * @param _id
   * @returns
   */
  async delete(@Param('_id') _id: string): Promise<InvoiceResponseDto> {
    try {
      const deleteInvoices = await this.invoiceModel.findByIdAndDelete(_id);
      if (deleteInvoices === null)
        throw new NotFoundException('This invoice does not exist');
      return deleteInvoices;
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
