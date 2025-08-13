import { Module } from '@nestjs/common';
import { UsersModule } from './users/Users.module';
import { TodosModule } from './todos/Todos.module';
import { APP_GUARD } from '@nestjs/core';
import { AuthGuard } from './guards/auth.guard';
import { TypeOrmModule } from '@nestjs/typeorm';
import {ConfigModule, ConfigService} from '@nestjs/config'
import typeOrmConfig from './config/typeorm';



@Module({
  imports: [
    ConfigModule.forRoot({ //configuramos el modulo de variables de entorno
      isGlobal: true, //hacemos que este modulo sea global
      load: [typeOrmConfig],
      //envFilePath: './src/.env.development', //indicamos el archivo de variables de entorno
    }),
    TypeOrmModule.forRootAsync({ //se configura como asincrono para poder usar el inject de las variables de entorno
      inject: [ConfigService], //inyectamos el config service para poder usarlo
      //usamos el useFactory el cual recibe el configService para poder usuarlo y retorne la configuraciom del typeOrm
      useFactory: (configService: ConfigService) => configService.get('typeorm')!,

    }),
    UsersModule, TodosModule],
  controllers: [],
  //esta seria otra forma de proteger las rutas directamente en el app.module mas cercano a lo que s eva a proteger
  //y lo pasamos en los providers
  providers: [
    {
    provide: APP_GUARD,
    useClass: AuthGuard
  },
  //esta seria otra forma de coloca un interceptor global
  /* {
    provide: APP_INTERCEPTOR,
    useClass: myInterceptor
  } */
],
})
export class AppModule {}
