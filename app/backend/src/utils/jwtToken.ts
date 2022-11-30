import * as jwt from 'jsonwebtoken';

const code = process.env.JWT_SECRET || 'jwt_secret';
export default class Token {
  static createToken(email: string) {
    return jwt.sign({ email }, code, { expiresIn: '15d' });
  }

  static validateToken(token: string): jwt.JwtPayload {
    try {
      const result = jwt.verify(token, code);
      return result as jwt.JwtPayload;
    } catch (_err) {
      return { message: 'Incorrect token' };
    }
  }
}
