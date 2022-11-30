import React, { FC } from 'react';
import { observer } from 'mobx-react-lite';
import TodoEntity from 'domain/entity/TodoEntity';
import { useService } from 'presentation/context/Container';
import Controller from './Controller';
import { Wrapper, List, Box, Button } from './styles';

const TodoPage: FC = observer(() => {
    const { todoList, addTodo, newTodo, changeNewTodo, deleteTodo } = useService(Controller);

    const handleAddClick = (): void => {
        addTodo(newTodo);
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        changeNewTodo(e.target.value);
    };
    
    const handleDeleteClick = (todo: TodoEntity) => {
        deleteTodo(todo);
    }

    return (
        <Wrapper>
            <h1>Todo items</h1>
            <Box>
                <input type="text" onChange={handleInputChange} value={newTodo} />
                <Button onClick={handleAddClick}>
                    Add
                </Button>
            </Box>
            <List>
                {todoList.map((todo) => (
                    <li key={todo.id}>
                        {todo.title}
                        <Button onClick={() => handleDeleteClick(todo)}>X</Button>
                    </li>
                ))}
            </List>
        </Wrapper>
    );
});

export default TodoPage;
