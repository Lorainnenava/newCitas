import { UpdateWriteOpResult } from 'mongoose';
import { NotFoundException } from '@nestjs/common';

export interface IUserDeleteTokenService {
  /**
   * method deleteToken
   */
  deleteToken(token: string): Promise<NotFoundException | UpdateWriteOpResult>;
}
