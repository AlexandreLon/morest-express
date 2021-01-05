"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MiddlewareModel = exports.MiddlewareController = exports.MiddlewareRoute = exports.Controller = exports.RouteMapping = exports.DeleteMapping = exports.PostMapping = exports.PutMapping = exports.GetMapping = void 0;
const Route_1 = require("./decorators/Route");
Object.defineProperty(exports, "GetMapping", { enumerable: true, get: function () { return Route_1.GetMapping; } });
Object.defineProperty(exports, "PutMapping", { enumerable: true, get: function () { return Route_1.PutMapping; } });
Object.defineProperty(exports, "PostMapping", { enumerable: true, get: function () { return Route_1.PostMapping; } });
Object.defineProperty(exports, "DeleteMapping", { enumerable: true, get: function () { return Route_1.DeleteMapping; } });
Object.defineProperty(exports, "RouteMapping", { enumerable: true, get: function () { return Route_1.RouteMapping; } });
const Controller_1 = require("./decorators/Controller");
Object.defineProperty(exports, "Controller", { enumerable: true, get: function () { return Controller_1.Controller; } });
const global_1 = require("./engine/global");
const showAll_1 = require("./utils/showAll");
const express_1 = __importDefault(require("express"));
const Middleware_1 = require("./decorators/Middleware");
Object.defineProperty(exports, "MiddlewareController", { enumerable: true, get: function () { return Middleware_1.MiddlewareController; } });
Object.defineProperty(exports, "MiddlewareRoute", { enumerable: true, get: function () { return Middleware_1.MiddlewareRoute; } });
const MiddlewareModel_1 = __importDefault(require("./interfaces/MiddlewareModel"));
exports.MiddlewareModel = MiddlewareModel_1.default;
class Morest {
    constructor(app) {
        if (app) {
            this._app = app;
        }
        else {
            this._app = express_1.default();
        }
    }
    get app() {
        return this._app;
    }
    set(name, value) {
        this.app.set(name, value);
    }
    use(handle) {
        const h = handle;
        this.app.use(h);
    }
    useMiddleware(handle) {
        const MiddlewareModel = handle;
        this.app.use((req, res, next) => {
            new MiddlewareModel().run(req, res, next);
        });
    }
    run(options, callback) {
        let port = 8080;
        let cb = () => { };
        if (typeof (options) === 'string') {
            port = parseInt(options);
            if (callback != undefined && callback != null)
                cb = callback;
        }
        else if (typeof (options) === 'number') {
            port = options;
            if (callback != undefined && callback != null)
                cb = callback;
        }
        else if (typeof (options.port) === 'string') {
            port = parseInt(options.port);
            if (options.callback != undefined && options.callback != null)
                cb = callback;
        }
        else {
            port = options.port;
            if (options.callback != undefined && options.callback != null)
                cb = callback;
        }
        this.app.use(global_1.router);
        global_1.middlewares.forEach(e => {
            this.app.use(e.path, e.callback);
        });
        this.app.listen(port, cb);
    }
    showAllRoutes() {
        return showAll_1.showAllRoutes();
    }
}
exports.default = Morest;
