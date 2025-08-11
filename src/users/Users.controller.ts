import { Controller, Get } from "@nestjs/common";
import { UsersService } from "./Users.service";

//agregamos dentro del controller el "users" esto sirve 
// para que se vea el path en la url y a esta ruta llamaremos
@Controller('users') 
    export class UsersControllers {
        //al colocar el contructor le pasamos el service esto crea automaticamente 
        // una instancia de este service
        constructor(private readonly usersService: UsersService) {
        }
        //para crear una ruta de nuestro controller se usa el decorador @Get()
        // y le pasamos el path que queremos que tenga la ruta
        @Get()
        getUsers() {
            //dentro retornamos el metodo getUsers del service
            return this.usersService.getUsers();
        }
    
    }