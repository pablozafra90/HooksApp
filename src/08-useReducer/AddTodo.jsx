import { useState } from "react";

export const AddTodo = ({ onNewTodo }) => {

    const [inputValue, setInputValue] = useState('');

    const onInputChange = ({ target }) => {
        //console.log(target.value);
        setInputValue(target.value);
    }

    const onSubmit = ( event ) => {
        if (inputValue.trim().length <= 0) return;
        onNewTodo(inputValue.trim());
        setInputValue('');
    }

  return (
    <>

        <input onSubmit={ onSubmit }
            type="text"
            placeholder="¿Qué hay que hacer"
            className="form-control"
            value={inputValue}
            onChange={onInputChange}
        />

        <button
            type="submit"
            className="btn btn-outline-primary mt-3"
            onClick={ () => { onSubmit() } }
        >
            Agregar
        </button>
    </>
  )
}
