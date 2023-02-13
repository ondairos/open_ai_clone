import { useState } from "react";
import "./App.css";
import OptionSelection from "./components/OptionSelection";
import Translation from "./components/Translation";
import { arrayItems } from "./AIOptions";
import { Configuration, OpenAIApi } from "openai";

function App() {
  //open ai configuration
  const configuration = new Configuration({
    // import env key with Vite
    apiKey: import.meta.env.VITE_Open_AI_Key,
  });
  const openai = new OpenAIApi(configuration);

  const [option, setOption] = useState({});
  const [input, setInput] = useState("");
  // console.log(import.meta.env.VITE_Open_AI_Key);
  const selectOption = (option) => {
    setOption(option);
  };

  // do stuff method set the prompt with input value with every click
  const doStuff = () => {
    setOption({ ...option, prompt: input });
  };

  return (
    <div className="App">
      {/* convert to array */}
      {Object.values(option).length === 0 ? (
        <OptionSelection
          arrayItems={arrayItems}
          selectOptionProp={selectOption}
        />
      ) : (
        <Translation doStuffProp={doStuff} setInputProp={setInput} />
      )}
    </div>
  );
}

export default App;
