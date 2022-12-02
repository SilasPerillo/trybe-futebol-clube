import { Request, Response } from 'express';
import { TeamsService } from '../services';

class TeamsController {
  static async findAll(_req: Request, res: Response) {
    const { statusCode, message } = await TeamsService.findAll();

    return res.status(statusCode).json(message);
  }

  static async findById(req: Request, res: Response) {
    const { id } = req.params;
    const { statusCode, message } = await TeamsService.findById(Number(id));

    return res.status(statusCode).json(message);
  }
}

export default TeamsController;
