import { useEffect, useState } from 'react';
import { Message } from './Message';
import { useForm } from '../hooks/useForm';

export const FormWithCustomHook = () => {

    // const [formState, setFormState] = useState({
    //     username: '',
    //     email: '',
    //     password: '',
    // })

    // const { username, email, password } = formState;

    // const onInputChange = ( { target } ) => {
    //     const { name, value } = target;
    //     setFormState({
    //         ...formState,
    //         [ name ]: value,
    //     })
    //     // console.log( name )
    // }

    const { formState, onInputChange, resetForm } = useForm({
        username: '',
        email: '',
        password: '',
    });

    const { username, email, password } = formState;

    return (
        <>
            <h1>Formulario simple</h1>
            <hr />

            <input 
                type="text"
                className="form-control"
                placeholder="Username"
                name="username"
                value={ username }
                onChange={ onInputChange }
            />

            <input 
                type="email"
                className="form-control mt-2"
                placeholder="ejemplo@pablozafra.es"
                name="email"
                value={ email }
                onChange={ onInputChange }
            />

            <input 
                type="password"
                className="form-control mt-2"
                placeholder="contraseña"
                name="password"
                value={ password }
                onChange={ onInputChange }
            />
            
            <button onClick={ resetForm } className='btn btn-primary mt-2'>Borrar</button>
        </>
  )
}
