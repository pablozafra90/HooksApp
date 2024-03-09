const { renderHook, act } = require("@testing-library/react");
const { useForm } = require("../../src/Hooks");

describe('Pruebas en useForm', () => { 

    const initialForm = {
        name: 'Pablo',
        email: 'pablo@google.com'
    };

    test('Debe regresar los valores por defecto', () => {

        const { result } = renderHook( () => useForm(initialForm) );

        expect( result.current ).toEqual({
            name: initialForm.name,
            email: initialForm.email,
            formState: initialForm,
            onInputChange: expect.any(Function),
            resetForm: expect.any(Function)
        });
        
    });

        
    test('Debe de cambiar el nombre del formulario', () => {

        const newValue = 'Juan';

        const { result } = renderHook( () => useForm(initialForm) );

        const target = { name: 'name', value: newValue };
        const event = { target };

        act( () => {
            result.current.onInputChange( event );
        });

        expect( result.current.name ).toBe( newValue );
        expect( result.current.formState.name ).toBe( newValue );
        
    });

    test('Debe de resetear el formulario', () => {

        const newValue = 'Juan';

        const { result } = renderHook( () => useForm(initialForm) );

        const target = { name: 'name', value: newValue };
        const event = { target };

        act( () => {
            result.current.onInputChange( event );
            result.current.resetForm();
        });

        expect( result.current.name ).toBe( initialForm.name );
        expect( result.current.formState.name ).toBe( initialForm.name );
        
    });

});