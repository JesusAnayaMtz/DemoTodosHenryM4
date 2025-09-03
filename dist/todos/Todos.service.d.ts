import { TodosRepository } from "./Todos.repository";
export declare class TodosService {
    private todosRepository;
    private accessToken;
    constructor(todosRepository: TodosRepository, accessToken: string);
    getTodos(): Promise<{
        id: number;
        title: string;
        description: string;
        completed: boolean;
    }[]> | "No Tiene Acceso A Esta Informacion";
    getTodoById(id: number): void;
}
