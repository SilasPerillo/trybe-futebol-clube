import { Router } from 'express';
import LoginRouter from './Login.router';

const router = Router();

router.use('/login', LoginRouter);

export default router;
