import { Request, Response } from 'morest-express';
export default class ProfileController {
    index(req: Request, res: Response): void;
    show(req: Request, res: Response): void;
    create(req: Request, res: Response): void;
    store(req: Request, res: Response): void;
    edit(req: Request, res: Response): void;
    update(req: Request, res: Response): void;
    remove(req: Request, res: Response): void;
}
