import React, { useReducer } from 'react'
import { todoReducer } from './todoReducer';
import { TodoItem } from './TodoItem';
import { TodoList } from './TodoList';

export const TodoApp = () => {

    const initialState = [{
        id: new Date().getTime(),
        description: 'Recolectar la piedra del alma',
        done: false
    },
    {
        id: new Date().getTime() * 3,
        description: 'Recolectar la piedra del alma',
        done: false

    }
]

     const [ todos, dispatch ] = useReducer( todoReducer, initialState );

    return (
        <>
        
        <h1>TodoApp</h1>
        <hr />

        <div className="row">
            <div className="col-7">
                <TodoList todos={ todos }/>
                {/* Todolist */}
                {/* <ul className="list-group">
                    {
                        todos.map( todo => (
                            //TodoItem
                            <TodoItem id={ todo.id } description={ todo.description } />
                            // <li key={ todo.id } className="list-group-item d-flex justify-content-between">
                            //     <span className='align-self-center'>{ todo.description }</span>
                            //     <button className="btn btn-danger"> Borrar</button>
                            // </li>
                        ))
                    }
                </ul>             */}
            </div>

            <div className="col-5">
                <h4>Agregar TODO</h4>
                <hr />
                {/* TodoAdd onNewTodo */}
                <input
                    type="text"
                    placeholder="¿Qué hay que hacer"
                    className="form-control"
                />

                <button
                    type="submit"
                    className="btn btn-outline-primary mt-3"
                >
                    Agregar
                </button>

            </div>
        
        </div>
        
        
        </>
    )
}
