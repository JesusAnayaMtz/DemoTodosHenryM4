import { Inject, Injectable } from "@nestjs/common";
import { UsersRepository } from "./Users.Repository";

@Injectable()
export class UsersService {
    //requerimos por medio del constructor el repositorio de usuarios para poder usar sus metodos 
    // y estos metodos normalmente hacen un llamado a la base de datos
    constructor(private usersRepository: UsersRepository,
        //usamos el decorador Inject para inyectar el nombre de nuestro provider 
        // y definos con private una variable para indicar que retornara
        @Inject('API_USERS') private apiUsers: any[]

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
 }