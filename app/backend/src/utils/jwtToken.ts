import * as jwt from 'jsonwebtoken';

export default class Token {
  static createToken(email: string) {
    const code = process.env.JWT_SECRET || 'jwt_secret';
    return jwt.sign({ email }, code, { expiresIn: '15d' });
  }
}
