import MiddlewareModel from '../interfaces/MiddlewareModel';
interface IMiddlewareModel {
    new (params?: any): MiddlewareModel;
}
declare function MiddlewareRoute(MiddlewareModelClass: IMiddlewareModel, params?: any): (Class: any, attribute: string) => void;
declare function MiddlewareController(MiddlewareModelClass: IMiddlewareModel, params?: any): (Constructor: any) => void;
export { MiddlewareController, MiddlewareRoute };
