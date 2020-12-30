"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Controller = void 0;
const express_1 = __importDefault(require("express"));
const global_1 = require("../engine/global");
function Controller(base = '/') {
    return function (Constructor) {
        const routeList = global_1.routes[Constructor.name];
        const localRouter = express_1.default.Router();
        for (const route of routeList) {
            let callback = route.callback;
            if (route.middleware !== null && route.middleware !== undefined) {
                callback = (req, res) => {
                    route.middleware.run(req, res, () => {
                        route.callback(req, res);
                    });
                };
            }
            switch (route.method) {
                case 'get':
                    localRouter.get(route.path, callback);
                    break;
                case 'put':
                    localRouter.put(route.path, callback);
                    break;
                case 'post':
                    localRouter.post(route.path, callback);
                    break;
                case 'delete':
                    localRouter.delete(route.path, callback);
                    break;
            }
        }
        global_1.bases[Constructor.name] = base;
        global_1.router.use(base, localRouter);
    };
}
exports.Controller = Controller;
