"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodosModule = void 0;
const common_1 = require("@nestjs/common");
const Todos_service_1 = require("./Todos.service");
const Todos_controller_1 = require("./Todos.controller");
const Todos_repository_1 = require("./Todos.repository");
const ACCESS = 'ESTA ES MI CLAVE SECRETA';
let TodosModule = class TodosModule {
};
exports.TodosModule = TodosModule;
exports.TodosModule = TodosModule = __decorate([
    (0, common_1.Module)({
        providers: [Todos_service_1.TodosService, Todos_repository_1.TodosRepository,
            {
                provide: 'Access Token',
                useValue: ACCESS,
            }],
        controllers: [Todos_controller_1.TodosController]
    })
], TodosModule);
//# sourceMappingURL=Todos.module.js.map