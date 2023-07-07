import React from 'react'

type GreetProps = {
  name: string;
  messageCount: number;
  isLoggedIn: boolean;
}
const Greet = (props: GreetProps) => {
  return (
    <>{
      props.isLoggedIn ?
        <h1>{props.name} unread message {props.messageCount} </h1>
        : "wellcome Guest"
    }
    </>
  )
}

export default Greet
