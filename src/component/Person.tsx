import React from 'react'
type personProps = {
  name: {
    first: string;
    last: string;
  }
}
const Person = (props: personProps) => {
  const { name } = props;
  return (
    <>
      <h1>
        {name.first}  {name.last}

      </h1>
    </>
  )
}

export default Person
