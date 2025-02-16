import React from "react";

const Card = ({ children, count, onClickHandler }) => {
  return (
    <>
      <div>{children}</div>;<h4>here is the count: {count}</h4>
      <button onClick={onClickHandler}>add</button>
    </>
  );
};

export default Card;
