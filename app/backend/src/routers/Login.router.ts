import { Router } from 'express';
import { LoginController } from '../controllers';

const LoginRouter = Router();

LoginRouter.post('/', (req, res) => LoginController.loginUser(req, res));
LoginRouter.get('/validate', (req, res) => LoginController.validateUser(req, res));

export default LoginRouter;
