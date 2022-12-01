import { Request, Response } from 'express';

class TeamsController {
  static async findAll(req: Request, res: Response) {
    const { body } = req;
    // const { statusCode, message } = await LoginService.loginUser(body);

    return res.status(200).json(body);
  }
}

export default TeamsController;
