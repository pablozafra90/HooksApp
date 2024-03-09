const { render, screen } = require("@testing-library/react");
const { MultipleCustomHooks } = require("../../../src/03-examples/MultipleCustomHooks");
const { useFetch } = require("../../../src/Hooks");

jest.mock("../../../src/Hooks");

describe('Pruebas en <MultipleCustomHooks />', () => { 

    test('Debe de mostrar el componente por defecto', () => { 
        
        render( <MultipleCustomHooks/> );

        useFetch.mockReturnValue({
            data: null,
            isLoading: true,
            hasError: null
        })

        expect( screen.getByText('Loading...') );
        expect( screen.getByText('Breaking Bad Quotes') );

        const nextButton = screen.getByRole( 'heading', { name: 'Breaking Bad Quotes'} );        

        // screen.debug();

     });

     test('Debe mostrar un quote', () => { 

        useFetch.mockReturnValue({
            data: [{author: 'Pepe', quote: 'Arme caso que e mejo'}],
            isLoading: false,
            hasError: null
        })
        
        render( <MultipleCustomHooks/> );
        screen.debug();

      })

 })