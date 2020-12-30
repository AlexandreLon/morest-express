import Route from '../interfaces/Route'
import express from 'express';

const routes: { [name: string]: Route[] } = {};
const bases: {[name: string]: string} = {};
const router = express.Router();
const app = express()

export {routes, bases, router, app}