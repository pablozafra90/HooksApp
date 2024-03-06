import { renderHook } from "@testing-library/react";
import { useCounter } from "../../src/Hooks/useCounter";
import { act } from '@testing-library/react';


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

     test('Increment() debe incrementar el contador', () => {

        const { result } = renderHook( () => useCounter() );

        const { counter, increment } =  result.current;

        act( () => {
            increment();
            increment(2);
        });

        expect( result.current.counter ).toBe(13);

     });

     test('Decrement() debe restar el contador', () => {

        const { result } = renderHook( () => useCounter() );

        const { counter, decrement } =  result.current;

        act( () => {
            decrement();
            decrement(2);
        });

        expect( result.current.counter ).toBe(7);

     });

     test('Reset() debe resetear el contador', () => {

        const { result } = renderHook( () => useCounter(666) );

        const { reset, decrement } =  result.current;

        act( () => {
            decrement();
            reset();
        });

        expect( result.current.counter ).toBe(666);

     });
     

 })