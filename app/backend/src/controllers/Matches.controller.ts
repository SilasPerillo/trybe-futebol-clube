import { Request, Response } from 'express';
import { MatchesService } from '../services';

class MatchesController {
  static async findAll(_req: Request, res: Response) {
    const { statusCode, message } = await MatchesService.findAll();

    return res.status(statusCode).json(message);
  }
}

export default MatchesController;
