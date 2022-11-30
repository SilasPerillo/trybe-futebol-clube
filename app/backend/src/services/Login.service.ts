import ValidatePassword from '../utils/validatePassword';
import Users from '../database/models/Users';
// import { IResponse } from '../interfaces/utils.interface';
import { ILogin } from '../interfaces/user.interface';
import { badRequest, ok, unauthorized } from '../utils/httpHelpers';
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
}
