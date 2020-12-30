import Route from '../interfaces/Route'
import {routes, bases} from '../engine/global'

export function showAllRoutes() {
	const routeList: Route[] = []
	for(const [controller, routeListController] of Object.entries(routes)) {
		for(const route of routeListController) {
			routeList.push({...route, path: bases[controller] + route.path})
		}
	}
	return routeList.map(route => route.method.toUpperCase() + ' : ' + route.path)
}