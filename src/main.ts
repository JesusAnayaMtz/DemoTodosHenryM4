import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { loggerGlobal, LoggerMiddleware } from './middlewares/Logger.middleware';

//si quisieramos que el middleware se corra en todas las rutas tendriamos que implementarlo aqui
//de la misma manera que se implemento en users

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  //aqui se coloca el middleware global
  app.use(loggerGlobal)
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
