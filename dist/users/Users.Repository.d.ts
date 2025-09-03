import { User } from "./user.interface";
export declare class UsersRepository {
    private users;
    getUsers(): Promise<User[]>;
    createUser(user: Omit<User, 'id'>): Promise<{
        name: string;
        email: string;
        id: number;
    }>;
    getById(id: number): Promise<User | undefined>;
    getUsersByName(name: string): Promise<User[]>;
}
