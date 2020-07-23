import React, { useState, useEffect } from "react";
import { Div, Button } from "./style/StyledComponents";
import "./App.css";

import QuoteGenerator from "./components/QuoteGenerator";

const colors = [
  "#FF5733",
  "#d08aaa",
  "#d007a5",
  "#9d293a",
  "#88d64a",
  "#3f8267",
  "#1b238b",
  "#6fa239",
];

function App() {
  const [randomQuote, setRandomQuote] = useState();
  const [randomColor, setRandomColor] = useState();
  const [reload, setReload] = useState(true);

  useEffect(() => {
    fetch("https://type.fit/api/quotes/")
      .then((response) => response.json())
      .then((data) => {
        setRandomQuote(data[Math.round(Math.random() * data.length - 1)]);
        setRandomColor(colors[Math.round(Math.random() * colors.length - 1)]);
      })
      .catch((e) => console.log(e));
  }, [reload]);

  const onClickHandler = () => {
    setReload((curr) => !curr);
  };

  let quoteComponent = randomQuote ? (
    <QuoteGenerator quotes={randomQuote} />
  ) : null;

  return (
    <div
      className="App"
      style={{
        background: randomColor,
        transition: "background-color 0.5s ease",
      }}
    >
      <Div
        style={{
          color: "black",
          padding: 20,
          background: "white",
          boxShadow: "0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)",
          margin: 5,
        }}
      >
        <h2>Quotes generator</h2>
        {quoteComponent}
        <Button bgcolor={randomColor} onClick={onClickHandler}>
          Random
        </Button>
      </Div>
    </div>
  );
}

export default App;
