import * as bcrypt from 'bcrypt';
import { SetMetadata } from '@nestjs/common';

/**
 * EncryptPassword
 * @param password
 */
export const encryptPassword = async (password: string): Promise<string> => {
  const saltRounds = 10;
  const salt = await bcrypt.genSalt(saltRounds);
  const hashedPassword = await bcrypt.hash(password, salt);
  return hashedPassword;
};

/**
 * ComparePassword
 * @param password
 * @param passwordReceived
 */
export const comparePassword = async (
  password: string,
  passwordReceived: string,
): Promise<boolean> => {
  return await bcrypt.compare(password, passwordReceived);
};

/**
 * Build a public route
 */
export const IS_PUBLIC_KEY = 'isPublic';
export const Public = () => SetMetadata(IS_PUBLIC_KEY, true);
