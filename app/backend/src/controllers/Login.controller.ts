import { Request, Response } from 'express';
import { LoginService } from '../services';

export default class LoginController {
  static async loginUser(req: Request, res: Response) {
    const { body } = req;
    const { statusCode, message } = await LoginService.loginUser(body);

    return res.status(statusCode).json(message);
  }

  static async validateUser(req: Request, res: Response) {
    const { authorization } = req.headers;

    const { statusCode, message } = await LoginService.validateUser(authorization as string);
    return res.status(statusCode).json(message);
  }
  // eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQGFkbWluLmNvbSIsImlhdCI6MTY2OTgzOTAyNiwiZXhwIjoxNjcxMTM1MDI2fQ.I2PTqiywP7ghgNCdxClOo2rN1AqJ6yGUAEu7ghABQFU
}
