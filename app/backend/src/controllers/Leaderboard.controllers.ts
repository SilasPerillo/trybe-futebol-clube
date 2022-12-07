import { Request, Response } from 'express';
import { LeaderboardService } from '../services';

export default class LeaderboardController {
  static async findLeaderboardHome(_req: Request, res: Response) {
    const { statusCode, message } = await LeaderboardService
      .findLeaderboard('home');

    return res.status(statusCode).json(message);
  }

  static async findLeaderboardAway(_req: Request, res: Response) {
    const { statusCode, message } = await LeaderboardService
      .findLeaderboard('away');

    return res.status(statusCode).json(message);
  }
}
