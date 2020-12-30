import express from 'express';
import MiddlewareModel from './MiddlewareModel';

export default interface Route {
    name: string;
	path: string;
    method: string;
    middleware?: MiddlewareModel
	callback: (req: express.Request, res: express.Response) => void;
}
