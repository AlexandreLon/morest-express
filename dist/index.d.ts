import { GetMapping, PutMapping, PostMapping, DeleteMapping, RouteMapping } from './decorators/Route';
import { Controller } from './decorators/Controller';
import express from 'express';
import { MiddlewareController, MiddlewareRoute } from './decorators/Middleware';
import MiddlewareModel from './interfaces/MiddlewareModel';
interface Options {
    port: string | number;
    callback?: () => void;
}
declare class Morest {
    app: import("express-serve-static-core").Express;
    set(name: string, value: any): void;
    run(options?: Options | string | number, callback?: () => void): void;
    showAllRoutes(): string[];
}
declare type Request = express.Request;
declare type Response = express.Response;
export { GetMapping, PutMapping, PostMapping, DeleteMapping, RouteMapping, Controller, Request, Response, MiddlewareRoute, MiddlewareController, MiddlewareModel };
export default Morest;
