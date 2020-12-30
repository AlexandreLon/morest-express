import express from 'express';
export default interface MiddlewareModel {
    run(req: express.Request, res: express.Response, next: express.NextFunction): any;
}
