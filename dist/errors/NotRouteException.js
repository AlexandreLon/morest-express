"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotRouteException = void 0;
class NotRouteException extends Error {
    constructor(str) {
        super(str);
    }
}
exports.NotRouteException = NotRouteException;
