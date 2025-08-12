import { Injectable } from "@nestjs/common";
import { User } from "./user.interface";

@Injectable()
export class UsersRepository {
    
    
    private users: User[] = [
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

    //agregamos un metodos que obtenga todos los usuarios
    async getUsers() {
        return this.users;
    }

    //metodo del repository para crear un usuario
    //recibe un usuario de tipo Omit<User, 'id'> y retorna un usuario de tipo User
    //el omit nos ayuda a omitir el id ya que este se genera automaticamente
    //en este caso usamos el spread operator para unir el id con el resto de las propiedades del usuario
    //y luego lo agregamos al array de usuarios
    //y retornamos el usuario
    async createUser(user: Omit<User, 'id'>) {
        //agregamos un id al usuario
        const id = this.users.length + 1;
        this.users = [...this.users, {id, ...user}];
        return {id, ...user};
    }

    //metodo que retornara un usuario por id
    //en este caso usamos el find para buscar el usuario por id
    async getById(id: number) {
        return this.users.find((user) => user.id === id);

    }

    async getUsersByName(name: string) {
        return this.users.filter((user) => user.name.includes(name));

    }

}