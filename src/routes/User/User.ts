import express, { Request, Response } from 'express';
import { userController } from '../../controllers';

export const router = express.Router({
    strict: true
});

router.get('/renderMap', (req: Request, res: Response) => {
    userController.displayMap(req, res);
});