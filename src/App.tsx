import React from "react";
import { Header } from "./components/header/header";
import { MainContent } from "./components/mainContent/mainContent";
import "./styles/App.css";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <MainContent></MainContent>
    </div>
  );
}

export default App;
