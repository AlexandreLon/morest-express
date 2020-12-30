"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.showAllRoutes = void 0;
const global_1 = require("../engine/global");
function showAllRoutes() {
    const routeList = [];
    for (const [controller, routeListController] of Object.entries(global_1.routes)) {
        for (const route of routeListController) {
            routeList.push(Object.assign(Object.assign({}, route), { path: global_1.bases[controller] + route.path }));
        }
    }
    return routeList.map(route => route.method.toUpperCase() + ' : ' + route.path);
}
exports.showAllRoutes = showAllRoutes;
