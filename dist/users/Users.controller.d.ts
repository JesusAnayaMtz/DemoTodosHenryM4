import { UsersService } from "./Users.service";
import type { Response } from "express";
import { UsersDBService } from "./UsersDB.service";
import { CreateUserDto } from "./dtos/CreateUser.dto";
import { User } from "./users.entity";
export declare class UsersControllers {
    private readonly usersService;
    private readonly userDbService;
    constructor(usersService: UsersService, userDbService: UsersDBService);
    getUsers(name?: string): Promise<User[]>;
    getUserProfile(token?: string): "No tienes permisos para acceder a este endpoint" | "Este endpoint devuelve el perfil del usuario";
    getUserImages(): string;
    createUser(user: CreateUserDto, request: Request & {
        now: string;
    }): void;
    getCoffe(): void;
    getMessage(response: Response): void;
    getRequest(request: Request): string;
    updateUser(): string;
    deleteUser(): string;
    getUserById(id: string): Promise<User>;
}
