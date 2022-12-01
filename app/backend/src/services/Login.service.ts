import ValidatePassword from '../utils/validatePassword';
import Users from '../database/models/Users';
import { ILogin } from '../interfaces/user.interface';
import { badRequest, notFound, ok, unauthorized } from '../utils/httpHelpers';
import Token from '../utils/jwtToken';

export default class LoginService {
  static async loginUser(body: ILogin) {
    const { email, password } = body;
    if (!email || !password) return badRequest('All fields must be filled');

    const payload = await Users.findOne({ where: { email } });

    if (!payload) return unauthorized('Incorrect email or password');

    const passValidation = await ValidatePassword
      .isEqual(password as string, payload.password as string);

    if (!passValidation) return unauthorized('Incorrect email or password');

    const token = Token.createToken(email);

    return ok({ token });
  }

  static async validateUser(authorization: string) {
    if (!authorization) return unauthorized('Token is required');

    const { email } = Token.validateToken(authorization);
    if (!email) return unauthorized('Invalid token');

    const result = await Users.findOne({ where: { email } });

    if (!result) {
      return notFound('User not found');
    }
    return ok({ role: result.role });
  }
}
