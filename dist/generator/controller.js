"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateController = void 0;
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
function modelEmpty(controllerName, path) {
    return `
import {Controller} from 'morest-express'

@Controller('${path}')
export default class ${controllerName} {
​   
}`;
}
function modelResource(controllerName, path) {
    return `
import {Controller, GetMapping, PostMapping, PutMapping, DeleteMapping, Request, Response} from 'morest-express'

@Controller('${path}')
export default class ${controllerName} {

​    @GetMapping('/')
    index(req: Request, res: Response) {
        
    }

    @GetMapping('/:id')
    show(req: Request, res: Response) {
        const id = req.params.id;

    }

    @GetMapping('/create')
    create(req: Request, res: Response) {
        
    }

    @PostMapping('/')
    store(req: Request, res: Response) {
        const body = req.body;

    }

    @GetMapping('/:id/edit')
    edit(req: Request, res: Response) {
        const id = req.params.id;

    }

    @PutMapping('/:id/')
    update(req: Request, res: Response) {
        const id = req.params.id;
        const body = req.body;

    }

    @DeleteMapping('/:id/')
    remove(req: Request, res: Response) {
        const id = req.params.id;

    }
}`;
}
function generateModel(controllerName, path, resource) {
    const content = resource ? modelResource(controllerName, path) : modelEmpty(controllerName, path);
    return content;
}
function generateController(name, resource, folder) {
    const splitted = name.split('.');
    const end = splitted.pop();
    const controllerName = ((str) => str.charAt(0).toUpperCase() + str.slice(1) + 'Controller')(end);
    const pathArray = splitted;
    const pathname = pathArray.join('/');
    const model = generateModel(controllerName, pathname + '/' + end, resource);
    const src = folder === undefined ? '/controllers/' : '/' + folder + '/controllers/';
    const directory = path_1.default.join(process.cwd(), src + pathname);
    const file = ((dir) => {
        if (dir.substr(dir.length - 1) != '/')
            return dir + '/';
        else
            return dir;
    })(directory) + controllerName + '.ts';
    fs_1.default.mkdirSync(directory, { recursive: true });
    fs_1.default.writeFileSync(file, model);
}
exports.generateController = generateController;
