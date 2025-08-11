import { MiddlewareConsumer, Module, NestModule } from "@nestjs/common";
import { UsersService } from "./Users.service";
import { UsersControllers } from "./Users.controller";
import { LoggerMiddleware } from "src/middlewares/Logger.middleware";
import { UsersRepository } from "./Users.Repository";

//pen alguna ocaciones podemos usar un objeto como provider, por ejemplo un 
// Mock para alguna prueba o directamente un valor en particular y definirlo en el array de providers
 const mockUserService = {
    getUsers: () => "Estos es un servicio Mock de usuarios"
 }

@Module({
    //aqui tambien agregamos el UsersRepository ya que como es un injectable se debe poner dentro de los providers
    providers: [UsersService, /* {
        //definimos aqui que cuando se use el usersService, usara el valor de mockService, esto se hara al llamar al endpoint users
        provide: UsersService,
        useValue: mockUserService
    },  */
    UsersRepository, 
    //generamos un nuevo provider que se llamara suponiendo que tenemos usuarios en otro servicio
    //y lo tenemos que llamar a traves de una peticion http.
    {
        provide: 'API_USERS', //definimos el nombre de provider para poder usarlo en el service
        //en use factory definimos la logica para hacer la peticion http es una funcion asincrona
        useFactory: async () => {
            //en este caso usamos la libreria fetch para hacer la peticion http
            //y usamos la url de la api de jsonplaceholder para obtener los usuarios
            const apiUsers = await fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            //retornamos la apiUser y la mapemaos para solo usar los datos que nos importan obtener
            return apiUsers.map(user => {
                return{
                id: user.id,
                name: user.name,
                email: user.email
                }
            });
        }
    }],
    controllers: [UsersControllers]
})
//implementamos el NestModule para poder usar el middleware que se le vaya a importar
export class UsersModule implements NestModule{
    //con configure hacemos la configuracion del middleware que se consumira
    configure(consumer: MiddlewareConsumer) {
        //con consumer.apply aplicamos el middleware y forRoutes le decimos a que ruta se va a aplicar
        //en este caso a la rutas que inicien con users
        consumer.apply(LoggerMiddleware).forRoutes('users')
    }

}