import { useState } from "react";
import "./App.css";
import OptionSelection from "./components/OptionSelection";
import Translation from "./components/Translation";
import { arrayItems } from "./AIOptions";

function App() {
  const [option, setOption] = useState({});
  // console.log(import.meta.env.VITE_Open_AI_Key);
  const selectOption = (option) => {
    setOption(option);
  };

  return (
    <div className="App">
      {Object.values(option).length === 0 ? (
        <OptionSelection
          arrayItems={arrayItems}
          selectOptionProp={selectOption}
        />
      ) : (
        <Translation />
      )}
    </div>
  );
}

export default App;
