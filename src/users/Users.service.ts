import { Inject, Injectable } from "@nestjs/common";
import { UsersRepository } from "./Users.Repository";
import { User } from "./user.interface";

@Injectable()
export class UsersService {
    
    
    //requerimos por medio del constructor el repositorio de usuarios para poder usar sus metodos 
    // y estos metodos normalmente hacen un llamado a la base de datos
    constructor(private usersRepository: UsersRepository,
        //usamos el decorador Inject para inyectar el nombre de nuestro provider 
        // y definos con private una variable para indicar que retornara
        @Inject('API_USERS') private apiUsers: User[]

    ) { }

    //convertimos nuestra funcion en asincrona
    async getUsers() {
        //ahora vamos a unis nuestros user de la base de datos con los que vienen de la api
        const dbUsers =  await this.usersRepository.getUsers();
        //usamos el operador spread para unir los dos arrays
        const users = [...dbUsers, ...this.apiUsers]
        //y los retornamos
        return users;
    }
    //metodo del service para crear un usuario 
    //recibe un usuario de tipo Omit<User, 'id'> y retorna un usuario de tipo User
    //el omit nos ayuda a omitir el id ya que este se genera automaticamente
    async createUser(user: Omit<User, 'id'>): Promise<User>{
        return this.usersRepository.createUser(user);
    }

    //metodo del service que obtendra un usuario por id
    //este metodo viene del repository
    async getUserById(id: number) {
        return this.usersRepository.getById(id)
    }

    //creamos el metodo getUsersByName
    async getUsersByName(name: string) {
        return this.usersRepository.getUsersByName(name);
    }
 }