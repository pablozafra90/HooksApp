const { render, screen, fireEvent } = require("@testing-library/react");
const { TodoItem } = require("../../src/08-useReducer/TodoItem");

describe('Pruebas en <TodoItem />', () => {

    const todo = {
        id: 1,
        description: 'Piedra del Alma',
        done: false
    }

    const onDeleteTodoMock = jest.fn();
    const onToggleTodoMock = jest.fn();

    beforeEach ( () => jest.clearAllMocks() );

    test('Should show the Todo pending to complete', () => { 
        render(
            <TodoItem
                todo={ todo }
                onTogleTodo={ onToggleTodoMock}
                onDeleteTodo={ onDeleteTodoMock }
            />
        );

        const liElement = screen.getByRole('listitem');
        expect(liElement.className).toBe('list-group-item d-flex justify-content-between');

     });

     test('button should call the onToggleTodo funcion', () => { 
         
        render(
            <TodoItem
                todo={ todo }
                onTogleTodo={ onToggleTodoMock }
                onDeleteTodo={ onDeleteTodoMock }
            />
        );

        const spanElement = screen.getByLabelText('span');
        fireEvent.click(spanElement);
        expect(onToggleTodoMock).toHaveBeenCalledWith(todo.id);

      });

      test('button should call the onDeleteTodo funcion', () => { 
         
        render(
            <TodoItem
                todo={ todo }
                onTogleTodo={ onToggleTodoMock }
                onDeleteTodo={ onDeleteTodoMock }
            />
        );

        const deleteBtnElement = screen.getByRole('button');
        fireEvent.click(deleteBtnElement);
        expect(onDeleteTodoMock).toHaveBeenCalledWith(todo.id);

      });
 });