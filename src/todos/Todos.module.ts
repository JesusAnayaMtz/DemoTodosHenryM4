import { Module } from "@nestjs/common";
import { TodosService } from "./Todos.service";
import { TodosController } from "./Todos.controller";

@Module({
    providers: [TodosService],
    controllers: [TodosController]
})
export class TodosModule {

}