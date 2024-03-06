import { renderHook } from "@testing-library/react";
import { useCounter } from "../../src/Hooks/useCounter";

describe('Pruebas en el useCounter', () => { 
    
    test('Debe retornar los valores por defecto', () => { 

        const { result } = renderHook( () => useCounter() );
        // console.log( result );
        const { counter, increment, decrement, reset } =  result.current;

        expect( counter ).toBe(10);
        expect( increment ).toEqual(expect.any(Function));
        expect( decrement ).toEqual(expect.any(Function));
        expect( reset ).toEqual(expect.any(Function));
        
     })

     test('Debe retornar valor de 100', () => {

        const { result } = renderHook( () => useCounter(100) );
        const { counter } =  result.current;
        expect( counter ).toBe(100);

        
     });
     

 })