import express from 'express';

import { routes, bases, router } from '../engine/global';

function Controller(base: string = '/') {
	return function (Constructor: any) {
		const routeList = routes[Constructor.name];
		const localRouter = express.Router();
		for (const route of routeList) {
			let callback: (req, res) => void = route.callback;
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

		bases[Constructor.name] = base;
		router.use(base, localRouter);
	};
}

export { Controller };
