"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const morest_express_1 = require("morest-express");
class HelloMiddleware extends morest_express_1.MiddlewareModel {
    run(req, res, next) {
        next();
    }
}
exports.default = HelloMiddleware;
