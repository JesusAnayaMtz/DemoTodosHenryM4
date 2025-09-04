import { Controller, Get, Param, Post, UploadedFile, UseInterceptors, UsePipes, ValidationPipe } from "@nestjs/common";
import { TodosService } from "./Todos.service";
import { FileInterceptor } from "@nestjs/platform-express";

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

  @Post('upload')
  @UseInterceptors(FileInterceptor('file')) //aqui se usa el interceptor FileInterceptor para manejar la subida de archivos
  uploadFile(@UploadedFile() file: Express.Multer.File){ //aqui se usa el decorador UploadedFile para obtener el archivo subido y Express.Multer.File es el tipo del archivo
    return file; //esto nos devolvera la informacion del archivo subido entre ella 
    // el buffer que es el contenido del archivo(area de memoria temporal utilizada para almacenar datos mientras se mueven de un lugar a otro)
  }
}
