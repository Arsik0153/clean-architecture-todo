import { inject, injectable } from 'inversify';
import TodoEntity from 'domain/entity/TodoEntity';
import TodoRepository from 'domain/repository/todo/TodoRepository';

@injectable()
export default class Controller {
    @inject(TodoRepository)
    private readonly todoRepository!: TodoRepository;

    public get todoList(): TodoEntity[] {
        return this.todoRepository.getAllTodos();
    }

    public addTodo = (title: string): void => {
        if (title.length === 0) {
            return;
        }
        this.todoRepository.addTodo(new TodoEntity(title, Date.now()));
        this.todoRepository.changeNewTodo('');
    };

    public get newTodo(): string {
        return this.todoRepository.getNewTodo();
    };

    public changeNewTodo = (newTodo: string): void => {
        this.todoRepository.changeNewTodo(newTodo);
    };

    public deleteTodo = (todo: TodoEntity): void => {
        this.todoRepository.deleteTodo(todo);
    };
}
