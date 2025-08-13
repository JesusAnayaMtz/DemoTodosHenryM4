import { CanActivate, ExecutionContext, Injectable } from "@nestjs/common";
import { Request } from "express";
import { Observable } from "rxjs";

//esta funcion validara la peticion y devolvera un booleano
//en este caso si el token es 1234 devolvera true
//si no es 1234 devolvera false
function validateRequest(request: Request) {
    //buscamos el token que va estar en el header del request
    const token = request.headers['token']
    return token === '1234'
}


//el guard debe ser decorado con @Injectable()
//lo que hara  es que validara y devolvera un tuee o false y correra el endoint en caso de que sea true
//ahora esto se debe implementa en el endpoint a proteger
@Injectable()
export class AuthGuard implements CanActivate { //el guard debe implementar la interfaz CanActivate
    //cuando se implementa el CanActivate se debe implementar el metodo canActivate
    canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> { 
        //el metodo canActivate debe devolver un booleano en 
    // este caso puede vedolver una promesa o un observable del tipo boleano
        
        const request = context.switchToHttp().getRequest(); //obtenemso nuestro request que viene del context 
        // y de esta manera accedemos al objeto requets
        //el validateRequest es una funcion que validara la peticion
        //en este caso si el token es 1234 devolvera true
        //si no es 1234 devolvera false
        return validateRequest(request);
    }
}