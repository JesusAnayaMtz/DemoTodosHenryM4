"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodosService = void 0;
const common_1 = require("@nestjs/common");
const Todos_repository_1 = require("./Todos.repository");
let TodosService = class TodosService {
    todosRepository;
    accessToken;
    constructor(todosRepository, accessToken) {
        this.todosRepository = todosRepository;
        this.accessToken = accessToken;
    }
    getTodos() {
        return this.accessToken === 'ESTA ES MI CLAVE SECRETA' ?
            this.todosRepository.getTodos() : "No Tiene Acceso A Esta Informacion";
    }
    getTodoById(id) {
        throw new Error("Method not implemented.");
    }
};
exports.TodosService = TodosService;
exports.TodosService = TodosService = __decorate([
    (0, common_1.Injectable)(),
    __param(1, (0, common_1.Inject)('Access Token')),
    __metadata("design:paramtypes", [Todos_repository_1.TodosRepository, String])
], TodosService);
//# sourceMappingURL=Todos.service.js.map