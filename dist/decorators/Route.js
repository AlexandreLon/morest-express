"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PatchMapping = exports.DeleteMapping = exports.PostMapping = exports.PutMapping = exports.GetMapping = exports.RouteMapping = void 0;
const global_1 = require("../engine/global");
function RouteMapping(method, path = '/') {
    return function (Class, attribute) {
        if (global_1.routes[Class.constructor.name] == undefined) {
            global_1.routes[Class.constructor.name] = [];
        }
        global_1.routes[Class.constructor.name].push({
            name: attribute,
            path: path,
            method: method,
            callback: (req, res) => {
                Class[attribute](req, res);
            }
        });
    };
}
exports.RouteMapping = RouteMapping;
function GetMapping(path = '/') {
    return RouteMapping('get', path);
}
exports.GetMapping = GetMapping;
function PostMapping(path = '/') {
    return RouteMapping('post', path);
}
exports.PostMapping = PostMapping;
function PutMapping(path = '/') {
    return RouteMapping('put', path);
}
exports.PutMapping = PutMapping;
function PatchMapping(path = '/') {
    return RouteMapping('patch', path);
}
exports.PatchMapping = PatchMapping;
function DeleteMapping(path = '/') {
    return RouteMapping('delete', path);
}
exports.DeleteMapping = DeleteMapping;
