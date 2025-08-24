import { Injectable, NestMiddleware } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';

//Decoramos el middleware con injectable
@Injectable()
export class LoggerMiddleware implements NestMiddleware {
    //Metodo que se ejecuta antes de la solicitud este tiene el request el response y el next de express
    use(req: Request, res: Response, next: NextFunction) {
        console.log(`Estas ejecutando un metodo ${req.method} en la ruta ${req.url}`)
        //Llamamos al siguiente middleware

        next();
    }
    
}
//para usar el middleware debemos injectarlo en algun lado en este caso sera en algun modulo donde se vaya a usar


//para usar un middleware de manera global se debe declarar como en express como una funcion
export function loggerGlobal(req: Request, res: Response, next: NextFunction) {
    console.log(`Estas ejecutando un metodo global ${req.method} en la ruta ${req.url}`)
    //Llamamos al siguiente middleware
    next();
}