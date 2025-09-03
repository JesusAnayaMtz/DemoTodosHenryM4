import { UsersRepository } from "./Users.Repository";
import { User } from "./user.interface";
export declare class UsersService {
    private usersRepository;
    private apiUsers;
    constructor(usersRepository: UsersRepository, apiUsers: User[]);
    getUsers(): Promise<User[]>;
    createUser(user: Omit<User, 'id'>): Promise<User>;
    getUserById(id: number): Promise<User | undefined>;
    getUsersByName(name: string): Promise<User[]>;
}
