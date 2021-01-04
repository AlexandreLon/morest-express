import express from 'express'

export default abstract class MiddlewareModel {

	private _params: any

	constructor(params?: any) {
		this._params = params;
	}

	public get params() {
		return this._params
	}

	public abstract run(req: express.Request, res: express.Response, next: express.NextFunction);
}
