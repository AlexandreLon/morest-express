"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
const fs_1 = __importDefault(require("fs"));
const app_root_path_1 = __importDefault(require("app-root-path"));
const pathname = "api/users/";
console.log;
fs_1.default.mkdir(path_1.default.join(app_root_path_1.default.path, '/middleswares/' + pathname), { recursive: true }, err => { });
