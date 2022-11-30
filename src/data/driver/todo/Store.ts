import {action, makeObservable, observable} from "mobx";
import TodoEntity from "domain/entity/TodoEntity";

export default class Store {
    public todoList: TodoEntity[] = [new TodoEntity('First todo hey!!', Date.now())];

    public newTodo = '';

    constructor() {
        makeObservable(this, {
            todoList: observable,
            addTodo: action.bound,
            newTodo: observable,
            changeNewTodo: action.bound,
            setTodos: action.bound,
        })
    }

    public addTodo(todo: TodoEntity): void {
        this.todoList.push(todo);
    }

    public changeNewTodo(newTodo: string): void {
        this.newTodo = newTodo;
    };

    public setTodos(todos: TodoEntity[]): void {
        this.todoList = todos;
    }
}
