import { useState } from "react";
import "./module/normalize.css";
import "./module/reset.css";
import "./module/showWord.css";
import Addworlds from "./components/Addworlds";
import { robatWord } from "../Api";
import ShowWord from "./components/ShowWord";
import { Radio } from "antd";
import ShowWordEasy from "./components/ShowWordEasy";
import ShowWordHard from "./components/ShowWordHard";
const plainOptions = ["Easy", "Middel", "Hard"];

function App() {
  const [value1, setValue1] = useState("Easy");

  const onChange1 = ({ target: { value } }) => {
    console.log("radio1 checked", value);
    setValue1(value);
  };

  const [words, setWords] = useState([]);
  console.log(robatWord);

  return (
    <div className="App">
      <Radio.Group options={plainOptions} onChange={onChange1} value={value1} />
      <Addworlds words={words} setWords={setWords} />
      {value1 === "Easy" && <ShowWordEasy words={words} setWords={setWords} />}
      {value1 === "Middel" && <ShowWord words={words} setWords={setWords} />}
      {value1 === "Hard" && <ShowWordHard words={words} setWords={setWords} />}
    </div>
  );
}

export default App;
