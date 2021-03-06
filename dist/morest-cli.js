#!/usr/bin/env node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const arg_1 = __importDefault(require("arg"));
const process_1 = require("process");
const controller_1 = require("./generator/controller");
const middleware_1 = require("./generator/middleware");
const args = arg_1.default({
    // Types
    '--help': Boolean,
    '--middleware': String,
    '--controller': String,
    '--resources': Boolean,
    '--src': Boolean,
    '--folder': String,
    // Aliases
    '-w': '--middleware',
    '-c': '--controller',
    '-r': '--resources',
    '-h': '--help',
    '-s': '--src',
    '-f': '--folder'
});
if (args["--help"]) {
    console.log("Usage: morest-express [options]");
    console.log("");
    console.log("Options:");
    console.log("   --help               Print this message");
    console.log("   --middleware, -m     Generate middleware file");
    console.log("   --controller, -c     Generate controller file");
    console.log("   --resources, -r      Adding all resources (without controller will be empty)");
    process_1.exit(0);
}
const middleware = args["--middleware"];
const controller = args["--controller"];
const resources = args["--resources"];
const src = args["--src"];
let folder = args["--folder"];
if (controller !== undefined && middleware !== undefined) {
    console.error("You can't use flag middleware and controller at the same time");
    process_1.exit(-1);
}
if (controller === undefined && middleware === undefined) {
    console.log("No action specified. End...");
    process_1.exit(0);
}
if (folder !== undefined && !src) {
    console.error("You can't use flag folder please specify --src flag to change source directory");
    process_1.exit(-1);
}
if (folder === undefined && src)
    folder = 'src';
if (controller !== undefined) {
    controller_1.generateController(controller, resources, folder);
    process_1.exit(0);
}
else {
    middleware_1.generateMiddleware(middleware, folder);
    process_1.exit(0);
}
