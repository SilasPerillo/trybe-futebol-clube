import * as bcrypt from 'bcryptjs';

export default class ValidatePassword {
  static isEqual(password: string, hashPassword: string) {
    return bcrypt.compare(password, hashPassword);
  }
}
