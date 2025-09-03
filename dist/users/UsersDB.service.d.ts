import { User } from "./users.entity";
import { Repository } from "typeorm";
export declare class UsersDBService {
    private userRepository;
    constructor(userRepository: Repository<User>);
    getUsers(): Promise<User[]>;
    saveUser(user: Omit<User, 'id'>): void;
    getUsersByName(name: string): Promise<User[]>;
    getUserById(id: string): Promise<User | null>;
}
