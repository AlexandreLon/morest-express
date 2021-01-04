import express from 'express';
export default abstract class MiddlewareModel {
    private _params;
    constructor(params?: any);
    get params(): any;
    abstract run(req: express.Request, res: express.Response, next: express.NextFunction): any;
}
