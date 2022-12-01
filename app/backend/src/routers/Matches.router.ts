import { Router } from 'express';
import { MatchesController } from '../controllers';

const MatchesRouter = Router();

MatchesRouter.get('/', (req, res) => MatchesController.findMatches(req, res));
MatchesRouter.post('/', (req, res) => MatchesController.insertMatches(req, res));

export default MatchesRouter;
