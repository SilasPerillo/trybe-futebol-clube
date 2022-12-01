import { Router } from 'express';
import LoginRouter from './Login.router';
import TeamsRouter from './Teams.router';
import MatchesRouter from './Matches.router';

const router = Router();

router.use('/login', LoginRouter);
router.use('/teams', TeamsRouter);
router.use('/matches', MatchesRouter);

export default router;
