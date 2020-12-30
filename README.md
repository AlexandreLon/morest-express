# ![morest](https://user-images.githubusercontent.com/43060105/103370527-50d7c080-4acd-11eb-9607-68e671115795.png)


Morest is an abstraction of express to use it with decorators. It was created to have a better readability of code.

WARNING

This is a first version of implementation and all features to corresponding with express are not implemented

## Features

* Create class controller
* Create all routes (get, put, post, patch, delete)
* Possibility to add middleware
* Support of ejs render

## Installation

This is a [Node.js](https://nodejs.org/en/) module.

Before installing, [download and install Node.js](https://nodejs.org/en/download/).
Node.js 0.10 or higher is required.

```bash
$ npm install morest-express
```

or

```bash
$ yarn add morest-express
```

## How to use

### Hello World example

```ts
import Morest, {GetMapping, Controller, Request, Response} from 'morest-express'

@Controller('')
class IndexController {
​
    @GetMapping('/')
    index(req: Request, res: Response) {
        res.send("Hello World!")
    }
}
​
const morest = new Morest()
​
morest.run(3000, () => {
    console.log("Listening at 3000")
})

```

### Add a middleware

Create a class middleware

```ts
import { MiddlewareModel, Request, Response, NextFunction } from 'morest-express';

class HelloMiddleware implements MiddlewareModel {

    run(req: Request, res: Response, next: NextFunction) {
        console.log("hello i'm a middleware")
        next()
    }

}
```

Add it on your controller 

```ts
import Morest, {MiddlewareController, GetMapping, Controller, Request, Response} from 'morest-express'

@MiddlewareController(HelloMiddleware)
@Controller('/api')
class IndexController {
​
    @GetMapping('/')
    index(req: Request, res: Response) {
        res.send("Hello World!")
    }
}
```

or a specific route

```ts
import Morest, {MiddlewareRoute, GetMapping, Controller, Request, Response} from 'morest-express'

@Controller('/api')
class IndexController {
​
    @MiddlewareRoute(HelloMiddleware)
    @GetMapping('/')
    index(req: Request, res: Response) {
        res.send("Hello World!")
    }
}
```

### List of decorators

| Decorators | Usage | Description |
| ------ | ----------- | ----------- | 
| Controller   | @Controller(path) | Set a class as a controller. Use path to have a base path for each route inside a controller
| RouteMapping | @RouteMapping(method, path) | Set a function as route. The first parameter is the method and the second, the path. The path is optionnal and default value is '/'
| GetMapping    | @GetMapping(path) | Set a function as route get. The path is optionnal and default value is '/'
| PostMapping    | @PostMapping(path) | Set a function as route post. The path is optionnal and default value is '/'
| PutMapping    | @PutMapping(path) | Set a function as route put. The path is optionnal and default value is '/'
| PatchMapping    | @PatchMapping(path) | Set a function as route patch. The path is optionnal and default value is '/'
| DeleteMapping    | @DeleteMapping(path) | Set a function as route delete. The path is optionnal and default value is '/'
| MiddlewareController | @MiddlewareController(Middleware) | Set a middle on the controller, each route will have a middleware. The middleware must be a class inheritance MiddlewareModel 
| MiddlewareRoute | @MiddlewareRoute(Middleware) | Set a middle on the route. The middleware must be a class inheritance MiddlewareModel 

### EJS 

To use EJS you can add this on your app.ts

```ts
const morest = new Morest()

morest.set("view engine", "ejs");
morest.set("views", path.join(root.path, 'views'));

morest.run(3000, () => {
    console.log("Listening at 3000")
})
```

And use it like express. 

## License

[MIT](LICENSE)