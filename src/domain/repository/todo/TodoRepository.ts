import { injectable } from "inversify";
import SerializableRepository from "framework/SerializableRepository";
import TodoEntity from "domain/entity/TodoEntity";

@injectable()
export default abstract class TodoRepository extends SerializableRepository {
    public abstract addTodo(todo: TodoEntity): void;

    public abstract getAllTodos(): TodoEntity[];

    public abstract changeNewTodo(newTodo: string): void;

    public abstract getNewTodo(): string;

    public abstract deleteTodo(todo: TodoEntity): void;
}
