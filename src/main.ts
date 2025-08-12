import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { loggerGlobal, LoggerMiddleware } from './middlewares/Logger.middleware';
import { AuthGuard } from './guards/auth.guard';

//si quisieramos que el middleware se corra en todas las rutas tendriamos que implementarlo aqui
//de la misma manera que se implemento en users

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalGuards(new AuthGuard()); //aqui usamos el guard AuthGuard para proteger todas las rutas pero se debe hacer de esta forma
 // app.useGlobalInterceptors(myInterceptor()) //este seria un ejemplo de implementar un interceptor global
  //aqui se coloca el middleware global
  app.use(loggerGlobal)
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
