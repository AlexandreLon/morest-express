import fs from 'fs'
import path from 'path'

function generateModel(middlewareName: string) : string {
    return `
import {MiddlewareModel, Request, Response, NextFunction} from 'morest-express'

export default class ${middlewareName} extends MiddlewareModel {
​    run(req: Request, res: Response, next: NextFunction) {
        next()
    }
}`
}

function generateMiddleware(name: string) {
    const splitted = name.split('.');
    const end = splitted.pop();
    const middlewareName = ((str: string): string => str.charAt(0).toUpperCase() + str.slice(1) + 'Middleware')(end)
    const pathArray = splitted;
    const pathname = pathArray.join('/')

    const model = generateModel(middlewareName);

    const directory = path.join(process.cwd(), '/middleswares/' + pathname)
    const file = ((dir: string) => {
        if(dir.substr(dir.length - 1) != '/') return dir + '/'
        else return dir;
    })(directory) + middlewareName + '.ts'

    fs.mkdirSync(directory, {recursive: true})
    fs.writeFileSync(file, model)
}

export {generateMiddleware}