import { Module } from '@nestjs/common';
import { UsersModule } from './users/Users.module';
import { TodosModule } from './todos/Todos.module';
import { APP_GUARD, APP_INTERCEPTOR } from '@nestjs/core';
import { AuthGuard } from './guards/auth.guard';


@Module({
  imports: [UsersModule, TodosModule],
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
