import React from "react";
import Login from "./Login";

type PrivateProps = {
  isLoggedIn: boolean;
  Component: React.ComponentType;
};

const Private = ({ isLoggedIn, Component }) => {
  if (isLoggedIn) {
    return <Component />;
  } else {
    return <Login />;
  }
};

export default Private;
