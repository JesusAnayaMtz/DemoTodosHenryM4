import { Controller, Get, Param, UsePipes, ValidationPipe } from "@nestjs/common";
import { TodosService } from "./Todos.service";

@Controller('todos')
export class TodosController {
  constructor(private readonly todoService: TodosService) {}

  @Get()
  getTodos() {
    return this.todoService.getTodos();
  }

  @Get(':id')
  @UsePipes(new ValidationPipe({
    transform: true, // habilita la transformación de tipos asi cuando se mande por la url el id automaticamnte la trasnforma a number
  }))
  getTodoById(@Param('id') id: number) {
    console.log(typeof id);
    return this.todoService.getTodoById(id);
  }
}
