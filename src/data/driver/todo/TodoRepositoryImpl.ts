import TodoEntity from "domain/entity/TodoEntity";
import TodoRepository from "domain/repository/todo/TodoRepository";
import Store from "./Store";

export default class TodoRepositoryImpl extends TodoRepository {
    private store = new Store();

    public addTodo(todo: TodoEntity) {
        this.store.addTodo(todo);
    }

    public getAllTodos(): TodoEntity[] {
        return this.store.todoList;
    }

    public changeNewTodo(newTodo: string): void {
        this.store.changeNewTodo(newTodo)
    };

    public getNewTodo(): string {
        return this.store.newTodo;
    }

    public deleteTodo(todo: TodoEntity): void {
        const filteredTodos = this.store.todoList.filter(currentTodo => currentTodo.id !== todo.id);
        this.store.setTodos(filteredTodos)
    }

    public serialize(): Record<string, unknown> {
        return {
            todoList: JSON.parse(JSON.stringify(this.getAllTodos())),
            newTodo: this.store.newTodo,
        }
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    public hydrate(data: any): void {
        try {
            this.addTodo(TodoEntity.Hydrate(data.entity))
            this.changeNewTodo('');
        }
        catch {}
    }
}