
import {Controller, GetMapping, PostMapping, PutMapping, DeleteMapping, Request, Response} from 'morest-express'

@Controller('api/profile')
export default class ProfileController {

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
}