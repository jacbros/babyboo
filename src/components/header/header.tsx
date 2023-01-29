import React from "react";
import { NavBar } from "../navigation/navbar";
import "./header.css";

const Header = (props: any) => {
  return (
    <header className="App-header">
      <NavBar></NavBar>
    </header>
  );
};

export { Header };
