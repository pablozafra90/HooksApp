import { useEffect, useReducer } from 'react'
import { todoReducer } from '../08-useReducer/todoReducer';


export const useTodo = () => {

    const initialState = []


    const init = () => {
        return JSON.parse(localStorage.getItem('todos')) || [];
    }

    const [ todos, dispatch ] = useReducer( todoReducer, initialState, init );
    
    useEffect(() => {
      localStorage.setItem('todos', JSON.stringify(todos) );    
    }, [todos])

    const todosCount = todos.length;   

    const pendingTodosCount = todos.filter( todo => !todo.done ).length;
    

    const handleNewTodo = ( todo ) => {
        const action = {
            type: '[TODO] Add Todo',
            playload: todo
        }
        dispatch( action );
    }

    const handleDeleteTodo = ( id ) => {
        const action = {
            type: '[TODO] Remove Todo',
            playload: id
        }
        dispatch( action );
    }

    const handleTogleTodo = ( id ) => {
        const action = {
            type: '[TODO] Togle Todo',
            playload: id
        }
        dispatch( action );
    }
    
    return { todos, todosCount, pendingTodosCount, handleNewTodo, handleDeleteTodo, handleTogleTodo };
}
