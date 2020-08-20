import { Request, Response } from 'express';
import { CrudController } from '../CrudController';

export class UserController extends CrudController {
    
    public displayMap(req: Request<import("express-serve-static-core").ParamsDictionary, any, any, import("qs").ParsedQs>, res: Response<any>): void {
        res.render('mapView.html');
    }
}
