import { useState } from "react";
import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import GlobalStyle from "./styles/GlobalStyle";

type UserProps = {
  user: string;
  password: string;
};

export function App() {
  const [userLogged, setUserLogged] = useState<UserProps>({
    user: "user",
    password: "123",
  });

  return (
    <>
      <Header />
      <Dashboard />
      <GlobalStyle />
    </>
  );
}
