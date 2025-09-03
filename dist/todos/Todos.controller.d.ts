import { TodosService } from "./Todos.service";
export declare class TodosController {
    private readonly todoService;
    constructor(todoService: TodosService);
    getTodos(): Promise<{
        id: number;
        title: string;
        description: string;
        completed: boolean;
    }[]> | "No Tiene Acceso A Esta Informacion";
    getTodoById(id: number): void;
}
