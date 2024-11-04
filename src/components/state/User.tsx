import { useState } from "react";

type AuthUser = {
  name: string;
  email: string;
};

export const User = () => {
  const [user, setUser] = useState<AuthUser>({} as AuthUser);
  const handleLogin = () => {
    setUser({ name: "Lord", email: "Lord777@gmail.com" });
  };
  const handleLogout = () => {
    setUser({ name: "", email: "" });
  };

  return (
    <>
      <button onClick={handleLogin}></button>
      <button onClick={handleLogout}>Logout</button>
      <div>User name is {user.name}</div>
      <div>User email is: {user.email}</div>
    </>
  );
};

export default User;
