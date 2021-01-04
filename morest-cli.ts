#!/usr/bin/env node
import arg from 'arg'
import {exit} from 'process'
import { generateController } from './generator/controller';
import { generateMiddleware } from './generator/middleware';

const args = arg({
    // Types
    '--help':           Boolean,
    '--middleware':     String,      
    '--controller':     String,      
    '--resources':      Boolean,      
    '--src':            Boolean,
    '--folder':         String,
 
    // Aliases
    '-w':        '--middleware',
    '-c':        '--controller',    
    '-r':        '--resources',    
    '-h':        '--help',     
    '-s':        '--src',
    '-f':        '--folder'     
});

if(args["--help"])
{
    console.log("Usage: morest-express [options]")
    console.log("")
    console.log("Options:")
    console.log("   --help               Print this message")
    console.log("   --middleware, -m     Generate middleware file")
    console.log("   --controller, -c     Generate controller file")
    console.log("   --resources, -r      Adding all resources (without controller will be empty)")
    exit(0);
}

const middleware = args["--middleware"]
const controller = args["--controller"]
const resources = args["--resources"]
const src = args["--src"]
let folder = args["--folder"]

if(controller !== undefined && middleware !== undefined) {
    console.error("You can't use flag middleware and controller at the same time")
    exit(-1)
}

if(controller === undefined && middleware === undefined) {
    console.log("No action specified. End...")
    exit(0)
}

if(folder !== undefined && !src) {
    console.error("You can't use flag folder please specify --src flag to change source directory")
    exit(-1)
}

if(folder === undefined && src) folder = 'src'

if(controller !== undefined) {
    generateController(controller, resources, folder)
    exit(0)
} else {
    generateMiddleware(middleware, folder)
    exit(0)
}

