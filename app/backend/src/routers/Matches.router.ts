import { Router } from 'express';
import { MatchesController } from '../controllers';

const MatchesRouter = Router();

MatchesRouter.get('/', (req, res) => MatchesController.findAll(req, res));

export default MatchesRouter;
