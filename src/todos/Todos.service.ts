import { Inject, Injectable } from "@nestjs/common";
import { TodosRepository } from "./Todos.repository";

@Injectable()
export class TodosService {
    constructor(private todosRepository: TodosRepository,
        //aqui inyectamos el access token que se declaro en el module
        //usamos el decorador Inject para inyectar el valor y private y una variable para el tipo de valor
        @Inject('Access Token') private accessToken: string) {
    }

    getTodos() {
        //una vez hecho eso usamos el access token en el service
        //por ejemplo haremos una evaluacion que si el access token es igual al valor que tiene en el module
        //retorne los usuarios si no devuelva que no tiene acceso
        return this.accessToken === 'ESTA ES MI CLAVE SECRETA' ?
            this.todosRepository.getTodos() : "No Tiene Acceso A Esta Informacion"
    }
}