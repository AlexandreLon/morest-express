import {GetMapping, PutMapping, PostMapping, DeleteMapping, RouteMapping} from './decorators/Route'
import {Controller} from './decorators/Controller'
import {app, router} from './engine/global'
import {showAllRoutes} from './utils/showAll'
import express from 'express';
import { MiddlewareController, MiddlewareRoute } from './decorators/Middleware';
import MiddlewareModel from './interfaces/MiddlewareModel';

interface Options {
    port: string|number,
    callback?: () => void,
}

interface IMiddlewareModel {
    new (): MiddlewareModel;
}

class Morest {

    app = app

    set(name: string, value: any) {
        this.app.set(name, value)
    }

    use(handle: any|IMiddlewareModel) {
        try {
            const MiddlewareModel = handle as IMiddlewareModel;
            app.use((req, res, next) => {
                return new MiddlewareModel().run(req, res, next)
            })
        } catch(e) {
            const h = handle as NextFunction;
            app.use(h)
        }
    }

    run(options?: Options|string|number, callback?: () => void) {
        let port = 8080;
        let cb = () => {}
        if(typeof(options) === 'string') {
            port = parseInt(options)
            if(callback != undefined && callback != null) cb = callback
        } else if(typeof(options) === 'number') {
            port = options
            if(callback != undefined && callback != null) cb = callback
        } else if(typeof(options.port) === 'string') {
            port = parseInt(options.port)
            if(options.callback != undefined && options.callback != null) cb = callback
        } else {
            port = options.port
            if(options.callback != undefined && options.callback != null) cb = callback
        }
        this.app.use(router)
        this.app.listen(port, cb)
    }

    showAllRoutes() {
        return showAllRoutes()
    }
}

type Request = express.Request;
type Response = express.Response;
type NextFunction = express.NextFunction;

export {GetMapping, PutMapping, PostMapping, DeleteMapping, RouteMapping, Controller, Request, Response, NextFunction, MiddlewareRoute, MiddlewareController, MiddlewareModel}
export default Morest;