const { todoReducer } = require("../../src/08-useReducer/todoReducer");


describe('Pruebas  en todoReducer', () => { 

    const initialState = {
        id: 1,
        description: 'Demo Todo',
        done: false,
    };
    
    test('should return initial state', () => { 
        
        const newState = todoReducer( initialState, {});

        expect( newState ).toBe( initialState );

     })

     test('should add todo', () => { 
        
        const action = {
            type: '[TODO] Add Todo',
            playload: {
                id: 2,
                description: 'Nuevo todo #2',
                done: false
            }
        }

        const newState = todoReducer( initialState, action );

        expect( newState.length ).toBe( 2 );
        expect( newState ).toContain( action.playload );

      })

      test('should remove todo', () => { 
        
        const action = {
            type: '[TODO] Remove Todo',
            playload: 1
        }

        const newState = todoReducer( initialState, action );

        expect( newState.length ).toBe( 0 );
        // expect( newState ).toContain( action.playload ).toBeFalsy;

       })

       test('should toggle todo', () => { 
         
         const action = {
             type: '[TODO] Toggle Todo',
             playload: 1
         }
 
         const newState = todoReducer( initialState, action );
 
        //  expect( newState.length ).toBe( 1 );
         expect( newState[0].done ).toBe( true );
 
        })

 })