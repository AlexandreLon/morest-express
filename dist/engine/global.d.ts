import Route from '../interfaces/Route';
declare const routes: {
    [name: string]: Route[];
};
declare const bases: {
    [name: string]: string;
};
declare const router: import("express-serve-static-core").Router;
declare const middlewares: {
    path: string;
    callback: (req: any, res: any, next: any) => void;
}[];
export { routes, bases, router, middlewares };
