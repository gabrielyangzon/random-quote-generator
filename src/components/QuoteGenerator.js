import React from "react";

const QuoteGenerator = (props) => {
  const { text, author } = props.quotes;
  return (
    <div>
      {text}
      <br /> - {author}
    </div>
  );
};

export default QuoteGenerator;
