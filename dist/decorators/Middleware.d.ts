import MiddlewareModel from '../interfaces/MiddlewareModel';
interface IMiddlewareModel {
    new (): MiddlewareModel;
}
declare function MiddlewareRoute(MiddlewareModelClass: IMiddlewareModel): (Class: any, attribute: string) => void;
declare function MiddlewareController(MiddlewareModelClass: IMiddlewareModel): (Constructor: any) => void;
export { MiddlewareController, MiddlewareRoute };
