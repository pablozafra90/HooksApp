const { renderHook } = require("@testing-library/react");
const { useForm } = require("../../src/Hooks");

describe('Pruebas en useForm', () => { 

    test('Debe regresar los valores por defecto', () => {

        const { result } = renderHook( () => useForm() )
        // console.log( result.current );
        const { formState, onInputChange, resetForm } = result.current;

    });
    

 })