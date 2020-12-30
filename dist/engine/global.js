"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = exports.router = exports.bases = exports.routes = void 0;
const express_1 = __importDefault(require("express"));
const routes = {};
exports.routes = routes;
const bases = {};
exports.bases = bases;
const router = express_1.default.Router();
exports.router = router;
const app = express_1.default();
exports.app = app;
