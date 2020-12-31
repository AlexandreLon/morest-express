import { MiddlewareModel, Request, Response, NextFunction } from 'morest-express';
export default class HelloMiddleware extends MiddlewareModel {
    run(req: Request, res: Response, next: NextFunction): void;
}
