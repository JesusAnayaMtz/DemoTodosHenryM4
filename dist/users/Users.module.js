"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersModule = void 0;
const common_1 = require("@nestjs/common");
const Users_service_1 = require("./Users.service");
const Users_controller_1 = require("./Users.controller");
const Logger_middleware_1 = require("../middlewares/Logger.middleware");
const Users_Repository_1 = require("./Users.Repository");
const typeorm_1 = require("@nestjs/typeorm");
const users_entity_1 = require("./users.entity");
const UsersDB_service_1 = require("./UsersDB.service");
const mockUserService = {
    getUsers: () => "Estos es un servicio Mock de usuarios"
};
let UsersModule = class UsersModule {
    configure(consumer) {
        consumer.apply(Logger_middleware_1.LoggerMiddleware).forRoutes('users');
    }
};
exports.UsersModule = UsersModule;
exports.UsersModule = UsersModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([users_entity_1.User])],
        providers: [Users_service_1.UsersService,
            Users_Repository_1.UsersRepository,
            UsersDB_service_1.UsersDBService,
            {
                provide: 'API_USERS',
                useFactory: async () => {
                    const apiUsers = await fetch('https://jsonplaceholder.typicode.com/users')
                        .then(response => response.json());
                    return apiUsers.map(user => {
                        return {
                            id: user.id,
                            name: user.name,
                            email: user.email
                        };
                    });
                }
            }],
        controllers: [Users_controller_1.UsersControllers]
    })
], UsersModule);
//# sourceMappingURL=Users.module.js.map