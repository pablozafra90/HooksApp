import { useState } from "react";

export const useForm = ( initialForm = {}) => {

    const [formState, setFormState] = useState( initialForm );

    const onInputChange = ( { target } ) => {
        const { name, value } = target;
        setFormState({
            ...formState,
            [ name ]: value,
        })
        // console.log( name )
    }

    const resetForm = () => {
        setFormState( initialForm );
    }
    
    return {
        formState,
        onInputChange,
        resetForm,
    };
}
