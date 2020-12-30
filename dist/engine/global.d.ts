import Route from '../interfaces/Route';
declare const routes: {
    [name: string]: Route[];
};
declare const bases: {
    [name: string]: string;
};
declare const router: import("express-serve-static-core").Router;
declare const app: import("express-serve-static-core").Express;
export { routes, bases, router, app };
