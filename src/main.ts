import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { loggerGlobal, LoggerMiddleware } from './middlewares/Logger.middleware';
import { AuthGuard } from './guards/auth.guard';
import { BadRequestException, ValidationPipe } from '@nestjs/common';

//si quisieramos que el middleware se corra en todas las rutas tendriamos que implementarlo aqui
//de la misma manera que se implemento en users

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
 // app.useGlobalGuards(new AuthGuard()); //aqui usamos el guard AuthGuard para proteger todas las rutas pero se debe hacer de esta forma
 // app.useGlobalInterceptors(myInterceptor()) //este seria un ejemplo de implementar un interceptor global
  //aqui se coloca el middleware global
  app.useGlobalPipes(new ValidationPipe({
    whitelist:true,  //el whitelist asegura que solo se acepten los campos que estan en el dto aunque se manden mas datos que no estan permitidos
    exceptionFactory: (errors) => { //exceptionFactory sirve para personalizar la excepcion que se lanza
      const cleanErrors = errors.map(err => { //limpiamos los errores con cleanErrors
        return {  
          property: err.property, //nombre del campo que tiene el error
          constraints: err.constraints //mensajes de error
        }
      })
      return new BadRequestException({ //retornamos un BadRequestException
        alert: "Se han detectado los siguientes errores en la peticion, mensaje personalizado del error", //con alert se envia un mensaje personal
        errors: cleanErrors //aqui se envian los errores limpios
      })
    }
  })) //esto asegura que siempre se corra el validation pipe en todas las peticiones
  app.use(loggerGlobal)
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
