import { memo } from "react";

export const Small = memo(({ value }) => {

console.log('Me he pintado!');

  return (
    <small>{ value }</small>
  )
})
