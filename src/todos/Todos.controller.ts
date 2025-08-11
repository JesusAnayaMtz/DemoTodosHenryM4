import { Controller, Get } from "@nestjs/common";
import { TodosService } from "./Todos.service";

@Controller('todos')
export class TodosController {
  constructor(private readonly todoService: TodosService) {}

  @Get()
  getTodos() {
    return this.todoService.getTodos();
  }
}
