import { useCallback, useState } from 'react';
import { ShowIncrement } from './ShowIncrement';

export const CallbackHook = () => {
  
    const [counter, setCounter] = useState( 10 );

    const incrementarFunc = () => {
        setCounter( counter + 1 );
    }

    const incrementar = useCallback(
      ( value ) => {
        // console.log( 'incrementar!' );
        setCounter( ( c ) =>  c + value  );
        // setCounter( counter + 1 );
        // incrementarFunc();
      },
      [],
    )
    
    
  
    // const incrementar = () => {
    //     setCounter( counter + 1 );
    // }

    return (
        <>
        
            <h1> useCallback Hook: { counter } </h1>
            <hr />

            <ShowIncrement increment={ incrementar } />
        </>
    )
}