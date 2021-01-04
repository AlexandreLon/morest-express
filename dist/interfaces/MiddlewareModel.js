"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class MiddlewareModel {
    constructor(params) {
        this._params = params;
    }
    get params() {
        return this._params;
    }
}
exports.default = MiddlewareModel;
