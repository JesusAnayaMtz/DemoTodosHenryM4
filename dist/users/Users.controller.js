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
exports.UsersControllers = void 0;
const common_1 = require("@nestjs/common");
const Users_service_1 = require("./Users.service");
const auth_guard_1 = require("../guards/auth.guard");
const date_adder_interceptor_1 = require("../interceptors/date-adder.interceptor");
const UsersDB_service_1 = require("./UsersDB.service");
const CreateUser_dto_1 = require("./dtos/CreateUser.dto");
let UsersControllers = class UsersControllers {
    usersService;
    userDbService;
    constructor(usersService, userDbService) {
        this.usersService = usersService;
        this.userDbService = userDbService;
    }
    getUsers(name) {
        if (name) {
            return this.userDbService.getUsersByName(name);
        }
        return this.userDbService.getUsers();
    }
    getUserProfile(token) {
        if (token !== '1234') {
            return "No tienes permisos para acceder a este endpoint";
        }
        return "Este endpoint devuelve el perfil del usuario";
    }
    getUserImages() {
        return "Este endpoint devuelve las imagenes del usuario";
    }
    createUser(user, request) {
        console.log('dentro del endpoint: ', request.now);
        return this.userDbService.saveUser({ ...user, createdAt: request.now });
    }
    getCoffe() {
        try {
            throw new Error();
        }
        catch (error) {
            throw new common_1.HttpException({ status: common_1.HttpStatus.I_AM_A_TEAPOT, error: "No hay cafe disponible" }, common_1.HttpStatus.I_AM_A_TEAPOT);
        }
    }
    getMessage(response) {
        response.status(201).send("Este es un mensaje");
    }
    getRequest(request) {
        console.log(request);
        return "Esta ruta loguea el request";
    }
    updateUser() {
        return "Este endpoint modifica un usuario";
    }
    deleteUser() {
        return "Este endpoint elimina un usuario";
    }
    async getUserById(id) {
        const user = await this.userDbService.getUserById(id);
        if (!user) {
            throw new common_1.NotFoundException("Usuario no encontrado");
        }
        return user;
    }
};
exports.UsersControllers = UsersControllers;
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)('name')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], UsersControllers.prototype, "getUsers", null);
__decorate([
    (0, common_1.Get)('profile'),
    __param(0, (0, common_1.Headers)('token')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], UsersControllers.prototype, "getUserProfile", null);
__decorate([
    (0, common_1.Get)('profile/images'),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], UsersControllers.prototype, "getUserImages", null);
__decorate([
    (0, common_1.Post)(),
    (0, common_1.UseInterceptors)(date_adder_interceptor_1.DateAdderInterceptor),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [CreateUser_dto_1.CreateUserDto, Object]),
    __metadata("design:returntype", void 0)
], UsersControllers.prototype, "createUser", null);
__decorate([
    (0, common_1.Get)('coffe'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], UsersControllers.prototype, "getCoffe", null);
__decorate([
    (0, common_1.Get)('message'),
    __param(0, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], UsersControllers.prototype, "getMessage", null);
__decorate([
    (0, common_1.Get)('request'),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Request]),
    __metadata("design:returntype", void 0)
], UsersControllers.prototype, "getRequest", null);
__decorate([
    (0, common_1.Put)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], UsersControllers.prototype, "updateUser", null);
__decorate([
    (0, common_1.Delete)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], UsersControllers.prototype, "deleteUser", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UsersControllers.prototype, "getUserById", null);
exports.UsersControllers = UsersControllers = __decorate([
    (0, common_1.Controller)('users'),
    __metadata("design:paramtypes", [Users_service_1.UsersService,
        UsersDB_service_1.UsersDBService])
], UsersControllers);
//# sourceMappingURL=Users.controller.js.map