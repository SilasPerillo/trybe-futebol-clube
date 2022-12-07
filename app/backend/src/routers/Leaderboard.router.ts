import { Router } from 'express';
import { LeaderboardController } from '../controllers';

const LeaderboardRouter = Router();

LeaderboardRouter.get('/home', (req, res) => LeaderboardController.findLeaderboardHome(req, res));
LeaderboardRouter.get('/away', (req, res) => LeaderboardController.findLeaderboardAway(req, res));

export default LeaderboardRouter;
