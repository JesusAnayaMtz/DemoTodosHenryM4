import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from "@nestjs/common";
import { Observable } from "rxjs";

@Injectable()
export class DateAdderInterceptor implements NestInterceptor<any, any>{
     //implementa la interface NestInterceptor y le pasamos los generics any, 
// any para indicar que puede recibir cualquier tipo de dato y devolver cualquier tipo de dato
//este recibe el context y el next
    intercept(context: ExecutionContext, next: CallHandler<any>): Observable<any> | Promise<Observable<any>> {
        //vamos a implementar que guarde una propiedad adicional en el request que sera Now
        const now = new Date();
        console.log(now);
        //formateamos la fecha usando el metodo toLocaleDateString convierte la fecha a 
        //una cadena de texto con el formato especificado
        //le pasamos por parametro el local osea la region, y el segundo un objeto de opciones para formatear la fecha
        const format = now.toLocaleDateString('es-MX', {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
        });
        //ahora buscamos el requets
        const request = context.switchToHttp().getRequest();
        //y le agregamos la propiedad now con el valor de la fecha formateada
        request.now = format;
        //y retornamos el next.handle() para que continue con la ejecucion
        return next.handle();
    }
}

//ahora este interceptor debemos usarlo en algun lado, en este caso lo usaremos en el userController en el post
