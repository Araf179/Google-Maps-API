import { Request, Response } from 'express';

export abstract class CrudController {
    public abstract displayMap(req: Request, res: Response): void;
}
