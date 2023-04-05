import { useEffect, useState } from "react";
import "./module/normalize.css";
import "./module/reset.css";
import "./module/showWord.css";
import Addworlds from "./components/Addworlds";
import ShowWord from "./components/ShowWord";
import { Radio } from "antd";
import ShowWordEasy from "./components/ShowWordEasy";
import ShowWordHard from "./components/ShowWordHard";

const plainOptions = ["Easy", "Middel", "Hard"];
let data = [];
function App() {
  //get data
  const [robatWord, setRobatWord] = useState("");
  const fetchData = async () => {
    data = await import("../Api.json").then((res) => res.default);
    setRobatWord(data[Math.floor(Math.random() * data.length + 1)]);
  };
  useEffect(() => {
    fetchData();
  }, []);
//
  const [value1, setValue1] = useState("Easy");
  const onChange1 = ({ target: { value } }) => {
    console.log("radio1 checked", value);
    setValue1(value);
  };
  console.log(robatWord);

  const [words, setWords] = useState([]);

  return (
    <div className="App">
      <Radio.Group options={plainOptions} onChange={onChange1} value={value1} />
      <Addworlds
        words={words}
        setWords={setWords}
        robatWord={robatWord}
        data={data}
      />
      {value1 === "Easy" && (
        <ShowWordEasy
          words={words}
          setWords={setWords}
          robatWord={robatWord}
          data={data}
        />
      )}

      {value1 === "Middel" && (
        <ShowWord
          words={words}
          setWords={setWords}
          robatWord={robatWord}
          data={data}
        />
      )}
      {value1 === "Hard" && (
        <ShowWordHard
          words={words}
          setWords={setWords}
          robatWord={robatWord}
          data={data}
        />
      )}
    </div>
  );
}

export default App;
