import React, { useState } from "react";

const Loggedin = () => {
  const [isLoggedIn, setIsLoggedOut] = useState(false);

  const handleLogIn = () => {
    setIsLoggedOut(true);
  };
  const handleLogout = () => {
    setIsLoggedOut(false);
  };

  return (
    <div>
      <button onClick={handleLogIn}>Login</button>
      <button onClick={handleLogout}>Logout</button>
      <div>User is {isLoggedIn ? "logged in" : " logged out"}</div>
    </div>
  );
};

export default Loggedin;
