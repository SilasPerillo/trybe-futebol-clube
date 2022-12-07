import { Router } from 'express';
import LoginRouter from './Login.router';
import TeamsRouter from './Teams.router';
import MatchesRouter from './Matches.router';
import LeaderboardRouter from './Leaderboard.router';

const router = Router();

router.use('/login', LoginRouter);
router.use('/teams', TeamsRouter);
router.use('/matches', MatchesRouter);
router.use('/leaderboard', LeaderboardRouter);

export default router;
