import { useEffect, useRef, useState } from "react";

export default function ({ words, robatWord, data }) {
  const [timer, setTimer] = useState(0);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    setIsActive(true);
    const timeout = setTimeout(() => {
      setTimer((timer) => timer + 1);
    }, 1000);

    if (timer === 100) {
      setIsActive(false);
      clearInterval(timeout);

      console.log(timer);
    }
  }, [timer]);
  return (
    <>
      <h3>remaining time</h3>
      <p>{timer}</p> {/* here we will show timer */}
      {timer < 100 ? (
        <>
          {words.length > 0 && (
            <div className="wordItems">
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
                        <div
                          style={{ position: "absolute", marginLeft: "11rem" }}
                        >
                          {"<"}
                        </div>
                      </div>
                      <div className="listSpan">
                        <div
                          style={{ position: "absolute", marginRight: "11rem" }}
                        >
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
      ) : (
        <h1>you lose</h1>
      )}
    </>
  );
}
