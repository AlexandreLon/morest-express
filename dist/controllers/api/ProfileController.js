"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const morest_express_1 = require("morest-express");
let ProfileController = class ProfileController {
    index(req, res) {
    }
    show(req, res) {
        const id = req.params.id;
    }
    create(req, res) {
    }
    store(req, res) {
        const body = req.body;
    }
    edit(req, res) {
        const id = req.params.id;
    }
    update(req, res) {
        const id = req.params.id;
        const body = req.body;
    }
    remove(req, res) {
        const id = req.params.id;
    }
};
__decorate([
    morest_express_1.GetMapping('/')
], ProfileController.prototype, "index", null);
__decorate([
    morest_express_1.GetMapping('/:id')
], ProfileController.prototype, "show", null);
__decorate([
    morest_express_1.GetMapping('/create')
], ProfileController.prototype, "create", null);
__decorate([
    morest_express_1.PostMapping('/')
], ProfileController.prototype, "store", null);
__decorate([
    morest_express_1.GetMapping('/:id/edit')
], ProfileController.prototype, "edit", null);
__decorate([
    morest_express_1.PutMapping('/:id/')
], ProfileController.prototype, "update", null);
__decorate([
    morest_express_1.DeleteMapping('/:id/')
], ProfileController.prototype, "remove", null);
ProfileController = __decorate([
    morest_express_1.Controller('api/profile')
], ProfileController);
exports.default = ProfileController;
