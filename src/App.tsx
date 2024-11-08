import { useState } from "react";
import "./App.css";

// ? COMPONENTS
import Greet from "./components/Greet";
import Person from "./components/Person";
import PersonList from "./components/PersonList";
import Status from "./components/Status";
import Heading from "./components/Heading";
import Oscar from "./components/Oscar";
import Button from "./components/Button";
import Button2 from "./components/Button2";
import Input from "./components/Input";
import Container from "./components/Container";

// ? CONTEXT
import { ThemeContextProvider } from "./components/context/ThemeContext";
import Box from "./components/context/Box";
import User from "./components/context/User";
import { UserContextProvider } from "./components/context/UserContext";

// ? REF
import MutableRef from "./components/ref/MutableRef";

// ? CLASS
import Counter from "./components/class/Counter";
import Private from "./components/auth/Private";
import Profile from "./components/auth/Profile";
import List from "./components/generics/List";
import RandomNumber from "./components/restriction/RandomNumber";
import Toast from "./components/templateLiterals/Toast";

// HTML
import CustomButton from "./components/html/Button";
import CustomInput from "./components/html/Input";
import Text from "./components/polymorphic/Text";

function App() {
  const personName = {
    firstName: "Bruce",
    lastName: "Wayne",
  };

  const nameList = [
    {
      id: 1,
      firstName: "God the Father",
      lastName: "Alpha and Omega",
    },
    {
      id: 2,
      firstName: "Lord and Savior",
      lastName: "Jesus Christ",
    },
    {
      id: 3,
      firstName: "Holy Spirit",
      lastName: "Spirit of God",
      word: "The Advocate",
    },
  ];
  return (
    <>
      <div style={{ marginTop: "40px", textAlign: "left" }}>3</div>
      <Greet name={"Lord and Savior Jesus Christ"} isLoggedIn={true} />

      <div style={{ marginTop: "40px", textAlign: "left" }}>4</div>
      <Person name={personName} />

      <div style={{ marginTop: "40px", textAlign: "left" }}>4</div>
      <PersonList names={nameList} />

      <div style={{ marginTop: "40px", textAlign: "left" }}>5</div>
      <Status status={"loading"} />

      <div style={{ marginTop: "40px", textAlign: "left" }}>5</div>
      <Oscar>
        <Heading>Oscar goes to Leonardo DiCaprio</Heading>
      </Oscar>

      <div style={{ marginTop: "40px", textAlign: "left" }}>5</div>
      <Button
        handleClick={(event, id) => {
          console.log("Button Click", event, id);
        }}
      />
      <div style={{ marginTop: "40px", textAlign: "left" }}>6</div>
      <Button2 handleClick={(event, id) => console.log("Hello", event, id)} />

      <div style={{ marginTop: "40px", textAlign: "left" }}>6</div>
      <Input value="" handleChange={(event) => console.log(event)} />

      <div style={{ marginTop: "40px", textAlign: "left" }}>7</div>
      <Container styles={{ border: "1px solid black", padding: "1rem" }} />

      <div style={{ marginTop: "40px", textAlign: "left" }}>7</div>
      <ThemeContextProvider>
        <Box />
      </ThemeContextProvider>

      <div style={{ marginTop: "40px", textAlign: "left" }}>7</div>
      <UserContextProvider>
        <User />
      </UserContextProvider>

      <div style={{ marginTop: "40px", textAlign: "left" }}>7</div>
      {/* <MutableRef /> */}

      <div style={{ marginTop: "40px", textAlign: "left" }}>7</div>
      <Counter message={"Hello TK"} />

      <div style={{ marginTop: "40px", textAlign: "left" }}>18</div>
      <Private isLoggedIn={true} component={Profile} />

      <div style={{ marginTop: "40px", textAlign: "left" }}>19</div>
      <List
        items={[
          { id: 1, name: "Batman" },
          { id: 2, name: "Superman" },
        ]}
        onClick={(item) => console.log(item)}
      />

      <div style={{ marginTop: "40px", textAlign: "left" }}>19</div>
      <RandomNumber value={10} isPositive />

      <div style={{ marginTop: "40px", textAlign: "left" }}>19</div>
      <Toast position="center" />

      <div style={{ marginTop: "40px", textAlign: "left" }}>22</div>
      <CustomButton variant="primary" onClick={() => console.log("Clicked")}>
        Primary Button
      </CustomButton>

      <div style={{ marginTop: "40px", textAlign: "left" }}>22</div>
      <CustomInput />

      <div style={{ marginTop: "40px", textAlign: "left" }}>24</div>
      <Text as="h1" size={"lg"}>
        Heading
      </Text>
      <Text as="p" size={"md"}>
        Paragraph
      </Text>
      <Text as="label" htmlFor="someId" size={"sm"} color={"secondary"}>
        Label
      </Text>
    </>
  );
}

export default App;
