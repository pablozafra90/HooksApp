import { TodoList } from './TodoList';
import { AddTodo } from './AddTodo';
import { useTodo } from '../Hooks/useTodo';

export const TodoApp = () => {

    const { todos, todosCount, pendingTodosCount, handleNewTodo, handleDeleteTodo, handleTogleTodo } = useTodo();

     
    return (
        <>
            <h1>TodoApp { todosCount } <small>Pendientes: { pendingTodosCount }</small></h1>
            <hr />

            <div className="row">
                <div className="col-7">
                    <TodoList todos={ todos } onDeleteTodo={ handleDeleteTodo } onTogleTodo={ handleTogleTodo }/>
                </div>

                <div className="col-5">
                    <h4>Agregar TODO</h4>
                    <hr />

                    <AddTodo onNewTodo={ handleNewTodo } />
                </div>
            
            </div>
        
        </>
    )
}
