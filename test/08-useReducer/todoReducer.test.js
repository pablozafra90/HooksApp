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

        const newState = todoReducer(initialState, action);

        expect( newState.length ).toBe( 2 );
        // expect( newState ).toContain( action.playload );

      })

 })