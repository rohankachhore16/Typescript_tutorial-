import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Greet from "./component/Greet";
import Person from "./component/Person";
import PersonList from "./component/PersonList";
import Status from "./component/Status";
import { Heading } from "./component/Heading";
import Oscar from "./component/Oscar";
import Button from "./component/EvenProps/Button";
import Input from "./component/EvenProps/Input";
import { config } from "process";
import Container from "./component/EvenProps/Container";

function App() {
  const personName = {
    first: "Bruce",
    last: "Wayne",
  };
  const nameList = [
    {
      first: "Bruce",
      last: "Wayne",
    },
    {
      first: "clark",
      last: "kent",
    },
    {
      first: "Princess",
      last: "Diana",
    },
  ];
  return (
    <>
      <div className="App">
        {/* props type in typescript  */}
        {/* <Greet name="viswas" messageCount={5} isLoggedIn={true} />
        <Person name={personName} />
        <PersonList names={nameList} />
        <Status status='error' />
        <Heading > PlaceHolder </Heading>
        <Oscar><Heading >Oscar Goes to Leonardo Docparlol</Heading></Oscar> */}
        {/* < <----------------------------->> */}
        {/* Even<t Props  */}
        {/* <Button handleClick={(event, id) => console.log("Button Click", event, id)} />
        <Input value="" handleInputChange={(event) => console.log(event)} /> */}
        <Container styels={{ border: "1px solid black", color: "blue", padding: "1rem" }} />
      </div>
    </>
  );
}

export default App;
 