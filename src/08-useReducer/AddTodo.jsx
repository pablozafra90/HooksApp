import { useState } from "react";
import { useForm } from "../Hooks/useForm";

export const AddTodo = ({ onNewTodo }) => {

    const { description, onInputChange, resetForm } = useForm({
        description: ''
    });

    const onFormSubmit = ( event ) => {
        event.preventDefault();
        if (description.length <= 0) return;
        //console.log(event);

        const newTodo = {
            id: new Date().getTime(),
            done: false,
            description: description,
        }

        onNewTodo( newTodo );

        resetForm();
    };

  return (
    <form>

        <input onSubmit={ onFormSubmit }
            type="text"
            placeholder="¿Qué hay que hacer"
            className="form-control"
            name="description"
            value={ description }
            onChange={ onInputChange }
        />

        <button
            type="submit"
            className="btn btn-outline-primary mt-3"
            onClick={ onFormSubmit }
        >
            Agregar
        </button>
    </form>
  )
}
