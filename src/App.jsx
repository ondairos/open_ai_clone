import { useState } from "react";
import "./App.css";
import OptionSelection from "./components/OptionSelection";
import { arrayItems } from "./AIOptions";

function App() {
  return (
    <div className="App">
      <OptionSelection arrayItems={arrayItems}></OptionSelection>
    </div>
  );
}

export default App;
