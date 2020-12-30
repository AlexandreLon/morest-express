"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotControllerException = void 0;
class NotControllerException extends Error {
    constructor(str) {
        super(str);
    }
}
exports.NotControllerException = NotControllerException;
