import { Injectable } from "@nestjs/common";

@Injectable()
export class UsersRepository {
    private users = [
        {
            id: 1,
            name: 'User 1',
            email: 'user1@example.com',
        },
        {
            id: 2,
            name: 'User 2',
            email: 'user2@example.com',
        }
    ];

    //agregamos un metodos que obtenga todos los usuarios
    async getUsers() {
        return this.users;
    }

}