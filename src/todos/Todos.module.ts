import { Module } from "@nestjs/common";
import { TodosService } from "./Todos.service";
import { TodosController } from "./Todos.controller";
import { TodosRepository } from "./Todos.repository";

//otra manera de usar un provider es directamente con un valor y se maneja de la siguiente manera
const ACCESS = 'ESTA ES MI CLAVE SECRETA';

@Module({
    //aqui tambien agregamos el TodosRepository ya que como es un injectable se debe poner dentro de los providers
    providers: [TodosService, TodosRepository, 
        //aqui el provider se da el nombre de Access Token y el valor de la constante declarada
        //esto se usara en el service de la siguiente manera -> vamos al service
        {
        provide: 'Access Token',
        useValue: ACCESS,
    }],
    controllers: [TodosController]
})
export class TodosModule {

}