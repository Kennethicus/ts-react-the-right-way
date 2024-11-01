import { useState } from "react";
import "./App.css";
import Greet from "./components/Greet";
import Person from "./components/Person";
import PersonList from "./components/PersonList";

function App() {
  const personName = {
    firstName: "Bruce",
    lastName: "Wayne",
  };

  const nameList = [
    {
      firstName: "God the Father",
      lastName: "Alpha and Omega",
    },
    {
      firstName: "Lord and Savior",
      lastName: "Jesus Christ",
    },
    {
      firstName: "Holy Spirit",
      lastName: "Spirit of God",
    },
  ];
  return (
    <>
      {/* <Greet
        name={"Lord and Savior Jesus Christ"}
        messageCount={1}
        isLoggedIn={true}
      /> */}
      <Person name={personName} />
      <PersonList names={nameList} />
    </>
  );
}

export default App;
