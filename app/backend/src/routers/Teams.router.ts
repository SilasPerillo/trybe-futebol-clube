import { Router } from 'express';
import { TeamsController } from '../controllers';

const TeamsRouter = Router();

TeamsRouter.get('/', (req, res) => TeamsController.findAll(req, res));

export default TeamsRouter;
