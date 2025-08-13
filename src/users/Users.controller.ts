import { Body, Controller, Delete, Get, Headers, HttpCode, Param, Post, Put, Query, Req, Res, UseGuards, UseInterceptors } from "@nestjs/common";
import { UsersService } from "./Users.service";
import type { Response } from "express";
import type { User } from "./user.interface";
import { AuthGuard } from "src/guards/auth.guard";
import { DateAdderInterceptor } from "src/interceptors/date-adder.interceptor";


//agregamos dentro del controller el "users" esto sirve 
// para que se vea el path en la url y a esta ruta llamaremos
@Controller('users')
//@UseGuards(AuthGuard) //aqui protegeriamos todos los metodos ya que se esta usando a nivel de clase
export class UsersControllers {
    //al colocar el contructor le pasamos el service esto crea automaticamente 
    // una instancia de este service
    constructor(private readonly usersService: UsersService) {
    }
    /*     //para crear una ruta de nuestro controller se usa el decorador @Get()
        // y le pasamos el path que queremos que tenga la ruta
        @Get()
        getUsers() {
            //dentro retornamos el metodo getUsers del service
            return this.usersService.getUsers();
        } */



    //ahora un ejemplo de queryparams crearemos un metodo que filter los usuarios por el nombre
    //lo marcamos nulleable (?) por ue puede venir o no el dato
    @Get()
    getUsers(@Query('name') name?: string) {
        //si viene el nombre lo filtra
        if (name) {
            return this.usersService.getUsersByName(name);
        }
        //de lo contrario retorna todos los usuarios
        return this.usersService.getUsers();
    }

    //ahora vamos a agregar un header a la peticion
    //para que no cualquiera pueda acceder a este endpoint
    //y lo hacemos con el decorador @Headers() y le pasamos el nombre del header que queremos validar
    //en este caso el token
    @Get('profile')
    getUserProfile(@Headers('token') token?: string) {
        if (token !== '1234') {
            return "No tienes permisos para acceder a este endpoint";
        }
        return "Este endpoint devuelve el perfil del usuario";
    }

    @Get('profile/images')
   @UseGuards(AuthGuard) //usamos el decorador UseGuards para indicar que se usara el guard AuthGuard
    getUserImages() {
        return "Este endpoint devuelve las imagenes del usuario";
    }

    //Usamos el decorador Body para indicar que el parametro user viene del body de la peticion
    //y le decimos que es de tipo Omit<User, 'id'> para que no nos de error de que el id no viene
    //en el body de la peticion
    @Post()
    @UseInterceptors(DateAdderInterceptor) //usamos el interceptor DateAdderInterceptor para indicar que usara nuestro interceptor
    ////ahora al usar el interceptor modificamos el objeto request del tipo 
    // Request pero le pedimos que concatene con el now del tipo string y lo formateamos

    createUser(@Body() user: User, @Req() request: Request & { now: string }) {  
        //improimimos el now que viene del interceptor ya formateado
        console.log('dentro del endpoint: ', request.now);
        return this.usersService.createUser(user);
    }

    //para colocar un status code se usa el decorador HttpCode
    @HttpCode(418)
    @Get('coffe')
    getCoffe() {
        return "No se hacer cafe, soy una tetera";
    }

    //tambien podemos acceder al response para poder modificarlo
    //en este caso usamos el status para cambiar el status code
    //y send para enviar un mensaje, esto se usa el decorador @Res()
    @Get('message')
    getMessage(@Res() response: Response) {
        response.status(201).send("Este es un mensaje");
    }

    //de esta misma manera podemos acceder al objeto request
    @Get('request')
    getRequest(@Req() request: Request) {
        console.log(request);
        return "Esta ruta loguea el request"
    }

    @Put()
    updateUser() {
        return "Este endpoint modifica un usuario"
    }

    @Delete()
    deleteUser() {
        return "Este endpoint elimina un usuario";
    }


    //usando request params
    //para hacer uso de params vamos a usar la anotacion @Param() y le pasamos dentro el nombre del parametro
    //en este caso el id y lo guardamos en un atributo id del tipo string y se lo pasamos a nuestra funcion del service 
    //pero lo convertimos a numerico
    @Get(':id')
    getUserById(@Param('id') id: string) {
        return this.usersService.getUserById(Number(id));

    }

}