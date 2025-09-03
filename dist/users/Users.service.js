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
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const Users_Repository_1 = require("./Users.Repository");
let UsersService = class UsersService {
    usersRepository;
    apiUsers;
    constructor(usersRepository, apiUsers) {
        this.usersRepository = usersRepository;
        this.apiUsers = apiUsers;
    }
    async getUsers() {
        const dbUsers = await this.usersRepository.getUsers();
        const users = [...dbUsers, ...this.apiUsers];
        return users;
    }
    async createUser(user) {
        return this.usersRepository.createUser(user);
    }
    async getUserById(id) {
        return this.usersRepository.getById(id);
    }
    async getUsersByName(name) {
        return this.usersRepository.getUsersByName(name);
    }
};
exports.UsersService = UsersService;
exports.UsersService = UsersService = __decorate([
    (0, common_1.Injectable)(),
    __param(1, (0, common_1.Inject)('API_USERS')),
    __metadata("design:paramtypes", [Users_Repository_1.UsersRepository, Array])
], UsersService);
//# sourceMappingURL=Users.service.js.map