"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersRepository = void 0;
const common_1 = require("@nestjs/common");
let UsersRepository = class UsersRepository {
    users = [
        {
            id: 1,
            name: 'User1',
            email: 'user1@example.com',
        },
        {
            id: 2,
            name: 'User2',
            email: 'user2@example.com',
        }
    ];
    async getUsers() {
        return this.users;
    }
    async createUser(user) {
        const id = this.users.length + 1;
        this.users = [...this.users, { id, ...user }];
        return { id, ...user };
    }
    async getById(id) {
        return this.users.find((user) => user.id === id);
    }
    async getUsersByName(name) {
        return this.users.filter((user) => user.name.includes(name));
    }
};
exports.UsersRepository = UsersRepository;
exports.UsersRepository = UsersRepository = __decorate([
    (0, common_1.Injectable)()
], UsersRepository);
//# sourceMappingURL=Users.Repository.js.map