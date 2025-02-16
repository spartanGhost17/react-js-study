import React from "react";

const Weather = () => {
  let temp = 12;
  const style = { color: "red", backgroundColor: "teal" };
  if (temp < 15) {
    return (
      <div>
        <h1 style={style}>It's cold outside</h1>
      </div>
    );
  } else if (temp >= 15 && temp <= 25) {
    return <h1>It's nice outside</h1>;
  } else if (temp > 25) {
    return <h1>It's hot outside</h1>;
  }
};

export default Weather;
