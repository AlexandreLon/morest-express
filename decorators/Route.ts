import express from 'express';

import {routes} from '../engine/global'

function RouteMapping(method: string, path: string = '/') {
	return function (Class: any, attribute: string) {
        if(routes[Class.constructor.name] == undefined) {
            routes[Class.constructor.name] = []
        }
        routes[Class.constructor.name].push({
			name: attribute,
            path: path,
			method: method,
            callback: (req: express.Request, res: express.Response) => {
                Class[attribute](req, res)
            }
        })
	};
}

function GetMapping(path: string = '/') {
	return RouteMapping('get', path);
}

function PostMapping(path: string = '/') {
	return RouteMapping('post', path);
}

function PutMapping(path: string = '/') {
	return RouteMapping('put', path);
}

function PatchMapping(path: string = '/') {
	return RouteMapping('patch', path);
}

function DeleteMapping(path: string = '/') {
	return RouteMapping('delete', path);
}

export { RouteMapping, GetMapping, PutMapping, PostMapping, DeleteMapping, PatchMapping };
