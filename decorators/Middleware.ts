import express from 'express';
import { middlewares, bases, routes } from '../engine/global';
import { NotControllerException } from '../errors/NotControllerException';
import MiddlewareModel from '../interfaces/MiddlewareModel';

interface IMiddlewareModel {
	new (params?: any): MiddlewareModel;
}

function use(middlewareModel: MiddlewareModel, path: string) {
	if (middlewareModel == null) return;

	// middlewares.push({path, callback: (req, res, next) => {
	// 	middlewareModel.run(req, res, next);
	// }});
}

function MiddlewareRoute(MiddlewareModelClass: IMiddlewareModel, params?: any) {
	return function (Class: any, attribute: string) {
		if (routes[Class.constructor.name] == undefined)
			throw new NotControllerException(
				"This method is not a route and you can't add middleware"
			);

		const curr = routes[Class.constructor.name].filter(
			(e) => e.name === attribute
		);

		if (curr.length === 0)
			throw new NotControllerException(
				"This method is not a route and you can't add middleware"
			);

		curr[0].middleware = new MiddlewareModelClass(params);
	};
}

function MiddlewareController(
	MiddlewareModelClass: IMiddlewareModel,
	params?: any
) {
	return function (Constructor: any) {
		if (bases[Constructor.name] != null)
			use(new MiddlewareModelClass(params), bases[Constructor.name]);
		else
			throw new NotControllerException(
				"This class is not a controller and you can't add middleware"
			);
	};
}

export { MiddlewareController, MiddlewareRoute };
