import * as bcrypt from 'bcrypt';
import { Injectable } from '@nestjs/common';

@Injectable()
export class PasswordService {
  /**
   *EncryptPassword
   * @param password
   * @returns
   */
  async encryptPassword(password: string): Promise<string> {
    const saltRounds = 10;
    const salt = await bcrypt.genSalt(saltRounds);
    const hashedPassword = await bcrypt.hash(password, salt);
    return hashedPassword;
  }

  /**
   * ComparePassword
   * @param password
   * @param passwordReceived
   * @returns
   */
  async comparePassword(
    password: string,
    passwordReceived: string,
  ): Promise<boolean> {
    return await bcrypt.compare(password, passwordReceived);
  }
}
