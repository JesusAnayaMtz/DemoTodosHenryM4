export declare class TodosRepository {
    private todos;
    getTodos(): Promise<{
        id: number;
        title: string;
        description: string;
        completed: boolean;
    }[]>;
}
