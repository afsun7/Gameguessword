//import { robatWord } from "../../Api";

export default function ({ words, robatWord, data }) {
  let arrayRobatWord = robatWord.split("");
  console.log(robatWord);

  return (
    <>
      {words.length > 0 && (
        <div className="wordItems">
          <span>{arrayRobatWord[2]}</span>
          {words.map((wordItem) => (
            <div className="wordList">
              {wordItem === robatWord ? (
                <div className="listSpan">
                  {robatWord.split("").map((item) => (
                    <span
                      style={{
                        color: "green",
                        backgroundColor: "white",
                      }}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              ) : (
                <>
                  <div className="listSpan">
                    {wordItem.split("").map((item) => (
                      <span>{item}</span>
                    ))}
                    <div style={{ position: "absolute", marginLeft: "11rem" }}>
                      {"<"}
                    </div>
                  </div>
                  <div className="listSpan">
                    <div style={{ position: "absolute", marginRight: "11rem" }}>
                      {">"}
                    </div>
                    {wordItem.split("").map((item, index) => {
                      if (
                        robatWord.split("").includes(item) &&
                        robatWord.split("").indexOf(item) === index
                      ) {
                        return (
                          <span style={{ backgroundColor: "green" }}>
                            {item}
                          </span>
                        );
                      } else if (robatWord.split("").includes(item)) {
                        return (
                          <span style={{ backgroundColor: "yellow" }}>
                            {item}
                          </span>
                        );
                      } else
                        return (
                          <span style={{ backgroundColor: "#8b8686" }}>
                            {item}
                          </span>
                        );
                    })}
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      )}
    </>
  );
}
