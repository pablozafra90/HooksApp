import { TodoItem } from './TodoItem'

export const TodoList = ({ todos = [], onDeleteTodo, onTogleTodo }) => {
    return (
        <ul className="list-group">
            {
                todos.map( todo => (
                    //TodoItem
                    <TodoItem key={ todo.id } todo={ todo } onDeleteTodo={ onDeleteTodo } onTogleTodo={ onTogleTodo } />
                ))
            }
        </ul>  
    )
}
