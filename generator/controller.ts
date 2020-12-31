import fs from 'fs'
import path from 'path'

function modelEmpty(controllerName: string, path: string) : string {
    return `
import {Controller} from 'morest-express'

@Controller('${path}')
export default class ${controllerName} {
​   
}`
}

function modelResource(controllerName: string, path: string) : string {
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
}`
}


function generateModel(controllerName: string, path: string, resource: boolean) : string {
    const content = resource ? modelResource(controllerName, path) : modelEmpty(controllerName, path)
    return content;
}

function generateController(name: string, resource: boolean) {
    const splitted = name.split('.');
    const end = splitted.pop();
    const controllerName = ((str: string): string => str.charAt(0).toUpperCase() + str.slice(1) + 'Controller')(end)
    const pathArray = splitted;
    const pathname = pathArray.join('/')

    const model = generateModel(controllerName, pathname + '/' + end, resource);

    const directory = path.join(process.cwd(), '/controllers/' + pathname)
    const file = ((dir: string) => {
        if(dir.substr(dir.length - 1) != '/') return dir + '/'
        else return dir;
    })(directory) + controllerName + '.ts'

    fs.mkdirSync(directory, {recursive: true})
    fs.writeFileSync(file, model)
}

export {generateController}