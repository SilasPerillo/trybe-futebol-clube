import { Request, Response } from 'express';
import { unauthorized } from '../utils/httpHelpers';
import { MatchesService } from '../services';
import Token from '../utils/jwtToken';

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
    const { authorization } = req.headers;
    const { body } = req;

    const validateToken = Token.validateToken(authorization as string);

    if (validateToken.message) {
      const { statusCode, message } = unauthorized('Invalid token');

      return res.status(statusCode).json(message);
    }

    const { statusCode, message } = await MatchesService.insertMatches(body);

    return res.status(statusCode).json(message);
  }

  static async updateMatchesStatus(req: Request, res: Response) {
    const { id } = req.params;

    const { statusCode, message } = await MatchesService.updateMatchesStatus(id);

    return res.status(statusCode).json(message);
  }
}

export default MatchesController;
