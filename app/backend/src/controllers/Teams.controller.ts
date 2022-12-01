import { Request, Response } from 'express';
import { TeamsService } from '../services';

class TeamsController {
  static async findAll(req: Request, res: Response) {
    const { statusCode, message } = await TeamsService.findAll();

    return res.status(statusCode).json(message);
  }
}

export default TeamsController;
