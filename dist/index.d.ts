import { GetMapping, PutMapping, PostMapping, DeleteMapping, RouteMapping } from './decorators/Route';
import { Controller } from './decorators/Controller';
import express from 'express';
import { MiddlewareController, MiddlewareRoute } from './decorators/Middleware';
import MiddlewareModel from './interfaces/MiddlewareModel';
interface Options {
    port: string | number;
    callback?: () => void;
}
interface IMiddlewareModel {
    new (): MiddlewareModel;
}
declare class Morest {
    _app: express.Application;
    constructor(app?: express.Application);
    get app(): express.Application;
    set(name: string, value: any): void;
    use(handle: any): void;
    useMiddleware(handle: IMiddlewareModel): void;
    run(options?: Options | string | number, callback?: () => void): void;
    showAllRoutes(): string[];
}
declare type Request = express.Request;
declare type Response = express.Response;
declare type NextFunction = express.NextFunction;
export { GetMapping, PutMapping, PostMapping, DeleteMapping, RouteMapping, Controller, Request, Response, NextFunction, MiddlewareRoute, MiddlewareController, MiddlewareModel };
export default Morest;
