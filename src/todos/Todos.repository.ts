import { Injectable } from "@nestjs/common";

@Injectable()
export class TodosRepository {
    private todos = [
        {
            id: 1,
            title: 'Todo 1',
            description: 'Descripcion 1',
            completed: false
        },
        {
            id: 2,
            title: 'Todo 2',
            description: 'Descripcion 2',
            completed: false
        }
    ];

    //creamos un metodo para obtener todos los todos
    async getTodos() {
        return this.todos;
    }
}