import { Router } from 'express';
import LoginRouter from './Login.router';
import TeamsRouter from './Teams.router';

const router = Router();

router.use('/login', LoginRouter);
router.use('/teams', TeamsRouter);

export default router;
