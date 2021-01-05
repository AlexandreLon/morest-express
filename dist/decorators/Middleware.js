"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MiddlewareRoute = exports.MiddlewareController = void 0;
const global_1 = require("../engine/global");
const NotControllerException_1 = require("../errors/NotControllerException");
function use(middlewareModel, path) {
    if (middlewareModel == null)
        return;
    // middlewares.push({path, callback: (req, res, next) => {
    // 	middlewareModel.run(req, res, next);
    // }});
}
function MiddlewareRoute(MiddlewareModelClass, params) {
    return function (Class, attribute) {
        if (global_1.routes[Class.constructor.name] == undefined)
            throw new NotControllerException_1.NotControllerException("This method is not a route and you can't add middleware");
        const curr = global_1.routes[Class.constructor.name].filter((e) => e.name === attribute);
        if (curr.length === 0)
            throw new NotControllerException_1.NotControllerException("This method is not a route and you can't add middleware");
        curr[0].middleware = new MiddlewareModelClass(params);
    };
}
exports.MiddlewareRoute = MiddlewareRoute;
function MiddlewareController(MiddlewareModelClass, params) {
    return function (Constructor) {
        if (global_1.bases[Constructor.name] != null)
            use(new MiddlewareModelClass(params), global_1.bases[Constructor.name]);
        else
            throw new NotControllerException_1.NotControllerException("This class is not a controller and you can't add middleware");
    };
}
exports.MiddlewareController = MiddlewareController;
