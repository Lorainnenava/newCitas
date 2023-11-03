import * as bcrypt from 'bcrypt';

/**
 * encryptPassword
 * @param password
 */
export const encryptPassword = async (password: string): Promise<string> => {
  const saltRounds = 10;
  const salt = await bcrypt.genSalt(saltRounds);
  const hashedPassword = await bcrypt.hash(password, salt);
  return hashedPassword;
};

/**
 * comparePassword
 * @param password
 * @param passwordReceived
 */
export const comparePassword = async (
  password: string,
  passwordReceived: string,
): Promise<boolean> => {
  return await bcrypt.compare(password, passwordReceived);
};
