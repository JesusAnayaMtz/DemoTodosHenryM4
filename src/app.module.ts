import { Module } from '@nestjs/common';
import { UsersModule } from './users/Users.module';
import { TodosModule } from './todos/Todos.module';


@Module({
  imports: [UsersModule, TodosModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
