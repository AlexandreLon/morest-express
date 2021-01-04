"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateMiddleware = void 0;
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
function generateModel(middlewareName) {
    return `
import {MiddlewareModel, Request, Response, NextFunction} from 'morest-express'

export default class ${middlewareName} extends MiddlewareModel {
​    run(req: Request, res: Response, next: NextFunction) {
        next()
    }
}`;
}
function generateMiddleware(name, folder) {
    const splitted = name.split('.');
    const end = splitted.pop();
    const middlewareName = ((str) => str.charAt(0).toUpperCase() + str.slice(1) + 'Middleware')(end);
    const pathArray = splitted;
    const pathname = pathArray.join('/');
    const model = generateModel(middlewareName);
    const src = folder === undefined ? '/middlewares/' : '/' + folder + '/middlewares/';
    const directory = path_1.default.join(process.cwd(), src + pathname);
    const file = ((dir) => {
        if (dir.substr(dir.length - 1) != '/')
            return dir + '/';
        else
            return dir;
    })(directory) + middlewareName + '.ts';
    fs_1.default.mkdirSync(directory, { recursive: true });
    fs_1.default.writeFileSync(file, model);
}
exports.generateMiddleware = generateMiddleware;
