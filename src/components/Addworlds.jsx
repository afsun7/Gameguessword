import "../module/ShowWord.css";
import { useState } from "react";
import { data, robatWord } from "../../Api";

export default function ({ words, setWords }) {
  const [input, setInput] = useState("");

  function handelInput(e) {
    setInput(e.target.value.toUpperCase());
  }
  if (input !== "" && input.length === 5) {
    if (data.includes(input)) {
      setWords([...words, input]);
    } else alert("invalid word");
    setInput("");
  }

  return (
    <div>
      {!words.includes(robatWord) ? (
        <input
          onChange={handelInput}
          maxLength="5"
          value={input}
          className="text"
        />
      ) : (
        <h1> you win</h1>
      )}
    </div>
  );
}
