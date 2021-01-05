import Route from '../interfaces/Route'
import express from 'express';

const routes: { [name: string]: Route[] } = {};
const bases: {[name: string]: string} = {};
const router = express.Router();
const middlewares: {
    path: string
    callback: (req, res, next) => void
}[] = []

export {routes, bases, router, middlewares}