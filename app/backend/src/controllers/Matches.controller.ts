import { Request, Response } from 'express';
import { MatchesService } from '../services';

class MatchesController {
  static async findMatches(req: Request, res: Response) {
    const { inProgress } = req.query;

    if (inProgress) {
      const { statusCode, message } = await MatchesService.getMatchesProgress(inProgress as string);
      return res.status(statusCode).json(message);
    }

    const { statusCode, message } = await MatchesService.findAll();

    return res.status(statusCode).json(message);
  }

  static async insertMatches(req: Request, res: Response) {
    const { body } = req;

    const { statusCode, message } = await MatchesService.insertMatches(body);

    return res.status(statusCode).json(message);
  }
}

export default MatchesController;
