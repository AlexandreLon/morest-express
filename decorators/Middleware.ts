import express from 'express';
import { app, bases, routes } from '../engine/global';
import { NotControllerException } from '../errors/NotControllerException';
import MiddlewareModel from '../interfaces/MiddlewareModel';

interface IMiddlewareModel {
    new (): MiddlewareModel;
}

function use(middlewareModel: MiddlewareModel, path: string) {
    if(middlewareModel == null) return;
    app.use(path, (req, res, next) => middlewareModel.run(req, res, next))
}

function MiddlewareRoute(MiddlewareModelClass: IMiddlewareModel) {
    return function (Class: any, attribute: string) {
        if(routes[Class.constructor.name] == undefined)
            throw new NotControllerException("This method is not a route and you can't add middleware")
        const curr = routes[Class.constructor.name].filter(e => e.name === attribute)
        if(curr.length === 0) throw new NotControllerException("This method is not a route and you can't add middleware")
        curr[0].middleware = new MiddlewareModelClass()
    }
}

function MiddlewareController(MiddlewareModelClass: IMiddlewareModel) {
    return function (Constructor: any) {
        if(bases[Constructor.name] != null)
            use(new MiddlewareModelClass(), bases[Constructor.name])
        else 
            throw new NotControllerException("This class is not a controller and you can't add middleware")
	};
}

export {MiddlewareController, MiddlewareRoute}