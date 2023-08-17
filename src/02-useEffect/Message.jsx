import { useEffect, useState } from "react"

export const Message = () => {

    const [coords, setCoords] = useState({x: 0, y: 0});

    const onMouseove = ( { x, y } ) => {
      setCoords( () => {
        // console.log({ x, y });     
        return { x, y };
      });
    }


    useEffect(() => {

      window.addEventListener('mousemove', onMouseove);
    
      return () => {

        window.removeEventListener('mousemove', onMouseove);

      }

    }, [])
    

  return (
    <>
        <h2 className="mt-2">El usuario ya existe.</h2>
        { JSON.stringify( coords ) }
        {
          console.log(coords)      
        }
    </>
  )
}
